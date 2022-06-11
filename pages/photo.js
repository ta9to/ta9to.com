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
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
    CogIcon,
    CollectionIcon,
    HeartIcon,
    HomeIcon,
    MenuAlt2Icon,
    PhotographIcon,
    PlusSmIcon as PlusSmIconOutline,
    UserGroupIcon,
    ViewGridIcon as ViewGridIconOutline,
    XIcon,
} from '@heroicons/react/outline'
import {
    PencilIcon,
    PlusSmIcon as PlusSmIconSolid,
    SearchIcon,
    ViewGridIcon as ViewGridIconSolid,
    ViewListIcon,
} from '@heroicons/react/solid'

const navigation = [
    { name: 'Home', href: '#', icon: HomeIcon, current: false },
    { name: 'All Files', href: '#', icon: ViewGridIconOutline, current: false },
    { name: 'Photos', href: '#', icon: PhotographIcon, current: true },
    { name: 'Shared', href: '#', icon: UserGroupIcon, current: false },
    { name: 'Albums', href: '#', icon: CollectionIcon, current: false },
    { name: 'Settings', href: '#', icon: CogIcon, current: false },
]
const userNavigation = [
    { name: 'Your profile', href: '#' },
    { name: 'Sign out', href: '#' },
]
const tabs = [
    { name: 'Recently Viewed', href: '#', current: true },
    { name: 'Recently Added', href: '#', current: false },
    { name: 'Favorited', href: '#', current: false },
]
const files = [
    { source: '/IMG_0272.JPG' },
    { source: '/IMG_0292.JPG' },
    { source: '/17267636_776620152508063_444586289740644352_n.jpeg' },
    { source: '/13649169_928563890600217_666222215_n.jpeg' },
    { source: '/Lenovo_A1000_IMG_20160607_141454.jpeg' },
    { source: '/IMG_1328.JPG' },
    { source: '/12345960_1002418549820380_374440618_n.jpeg' },
    { source: '/11273042_383579311826222_1745013201_n.jpeg' },
    { source: '/10848224_1570997179783073_1228325083_n.jpeg' },
    { source: '/10369309_293605247479740_781327818_n.jpeg' },
    { source: '/10354432_705034449554802_31904814_n.jpeg' },
    { source: '/1171966_385040151625863_1389932515_n.jpeg' },
    // More files...
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full overflow-hidden">
        ```
      */}
            <div className="h-full flex">
                {/* Content area */}
                <div className="flex-1 flex flex-col overflow-hidden">

                    {/* Main content */}
                    <div className="flex-1 flex items-stretch overflow-hidden">
                        <main className="flex-1 overflow-y-auto">
                            <div className="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                                {/* Gallery */}
                                <section className="mt-8 pb-16" aria-labelledby="gallery-heading">
                                    <h2 id="gallery-heading" className="sr-only">
                                        Recently viewed
                                    </h2>
                                    <ul
                                        role="list"
                                        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
                                    >
                                        {files.map((file) => (
                                            <li key={file.source} className="relative">
                                                <div
                                                    className={classNames(
                                                        file.current
                                                            ? 'ring-2 ring-offset-2 ring-indigo-500'
                                                            : 'focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500',
                                                        'group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden'
                                                    )}
                                                >
                                                    <img
                                                        src={file.source}
                                                        alt=""
                                                        className={classNames(
                                                            file.current ? '' : 'group-hover:opacity-75',
                                                            'object-cover pointer-events-none'
                                                        )}
                                                    />
                                                    <button type="button" className="absolute inset-0 focus:outline-none">
                                                        <span className="sr-only">View details for {file.name}</span>
                                                    </button>
                                                </div>
                                                <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                                                    {file.name}
                                                </p>
                                                <p className="block text-sm font-medium text-gray-500 pointer-events-none">{file.size}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    )
}
