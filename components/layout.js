/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { useRouter } from 'next/router'

const tabs = [
    { name: 'Profile', href: '/'},
    { name: 'Photo', href: '/photo'},
]

const profile = {
    name: 'Takuto Kudo@Nyle Inc.',
    imageUrl:
        '/profile.jpg',
    coverImageUrl:
        '/taro.jpeg',
    about: `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  `,
    fields: {
        Team: 'Media Technology Division',
        Phone: '03-6409-6805',
        Title: 'Division VPoE | Engineering Manager',
        Email: 'takuto_kd@nyle.co.jp',
        Sits: 'JRE Higashigotanda 1-chome Building, 8th floor',
        Birthday: 'September 1, 1990',
    },
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Layout({ children }) {
    const router = useRouter()
    console.log(router.route)
    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full overflow-hidden">
        ```
      */}
            <div className="h-full flex">
                <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
                    <div className="flex-1 relative z-0 flex overflow-hidden">
                        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
                            <article>
                                {/* Profile header */}
                                <div>
                                    <div>
                                        <img className="h-full w-full object-cover" src={profile.coverImageUrl} alt="" />
                                    </div>
                                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                                        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                                            <div className="flex">
                                                <img
                                                    className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                                                    src={profile.imageUrl}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                                                <div className="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
                                                    <h1 className="text-2xl font-bold text-gray-900 truncate">{profile.name}</h1>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
                                            <h1 className="text-2xl font-bold text-gray-900 truncate">{profile.name}</h1>
                                        </div>
                                    </div>
                                </div>

                                {/* Tabs */}
                                <div className="mt-6 sm:mt-2 2xl:mt-5">
                                    <div className="border-b border-gray-200">
                                        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                                            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                                                {tabs.map((tab) => (
                                                    <a
                                                        key={tab.name}
                                                        href={`${tab.href}#main`}
                                                        className={classNames(
                                                            tab.href === router.route
                                                                ? 'border-pink-500 text-gray-900'
                                                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                                                            'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
                                                        )}
                                                        aria-current={tab.current ? 'page' : undefined}
                                                    >
                                                        {tab.name}
                                                    </a>
                                                ))}
                                            </nav>
                                        </div>
                                    </div>
                                </div>

                                <main id={'main'}>{children}</main>

                            </article>
                        </main>
                    </div>
                </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
                <div className="bg-gray-50 px-4 py-4 sm:px-6">
                    {/* Content goes here */}
                    {/* We use less vertical padding on card footers at all sizes than on headers or body sections */}
                </div>
            </div>
        </>
    )
}
