import { useState } from 'react';
const { Configuration, OpenAIApi } = require("openai");
class CustomFormData extends FormData {
    getHeaders() {
        return {}
    }
}

export default function Audio() {
    const [apiKey, setApiKey] = useState('');
    const [prompt, setPrompt] = useState('');
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const handleApiKeyChange = (e) => {
        setApiKey(e.target.value);
    };
    const handlePromptChange = (e) => {
        setPrompt(e.target.value);
    };
    const exec = async (event) => {
        event.preventDefault();
        if (!prompt) {
            alert('プロンプトを入力してください。');
            return;
        }
        const configuration = new Configuration({
            apiKey: apiKey,
            formDataCtor: CustomFormData
        });
        const openai = new OpenAIApi(configuration);
        const createImageRequest = {
            'prompt': prompt,
            'n': 3,
        };
        setIsLoading(true);
        try {
            const response = await openai.createImage(createImageRequest);
            const imageUrls = response.data.data.map((imageData) => imageData.url);
            setImages(imageUrls);
        } catch (error) {
            console.error('エラーが発生しました: ', error);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
                <form>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Images - Create image</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">テキストから画像生成するやつ</p>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-4">
                                    <label htmlFor="apikey" className="block text-sm font-medium leading-6 text-gray-900">
                                        API key
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                            <input
                                                type="text"
                                                name="apikey"
                                                id="apikey"
                                                value={apiKey}
                                                onChange={handleApiKeyChange}
                                                className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:col-span-4">
                                    <label htmlFor="prompt" className="block text-sm font-medium leading-6 text-gray-900">
                                        Prompt
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                            <input
                                                type="text"
                                                name="prompt"
                                                id="prompt"
                                                value={prompt}
                                                onChange={handlePromptChange}
                                                className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button
                            type="button"
                            onClick={exec}
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            実行
                        </button>
                    </div>

                </form>
                {isLoading && (
                    <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-blue-500 mx-auto mt-4"></div>
                )}
                <div className="col-span-full">
                    <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                        {images.map((url, index) => (
                            <li key={index} className="relative">
                                <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                                    <img src={url} alt="" className="pointer-events-none object-cover group-hover:opacity-75" />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
