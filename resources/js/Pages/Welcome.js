import React from 'react';
import {Head } from '@inertiajs/inertia-react';

export default function Welcome(props) {
    return (
        <>
            <Head title="Coming Soon" />
            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex justify-center pt-8 sm:justify-start sm:pt-0">
                        <h1 className="text-3xl md:text-5xl">VISIAR<span className="text-red-500">C</span>H</h1>
                    </div>
                    <div className="mt-8 overflow-hidden sm:rounded-lg shadow">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <a href="https://www.arch.visiarch.com" className="bg-white hover:bg-gray-50">
                                <div className="p-6 border-b md:border-0">
                                    <div className="flex items-center">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            className="w-8 h-8 text-gray-500"
                                        >
                                            <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                        </svg>
                                        <div className="ml-4 text-lg leading-7 font-semibold">
                                            Architecture
                                        </div>
                                    </div>
                                    <div className="ml-12">
                                        <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                            Visiarch is a business group engaged in architecture and web developers. Due to the rapid development of the times, we decided to update our old system. However, if you want to get services in the field of architecture, please tap here
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="https://www.dev.visiarch.com" className="bg-white hover:bg-gray-50">
                                <div className="p-6 border-l">
                                    <div className="flex items-center">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            className="w-8 h-8 text-gray-500"
                                        >
                                            <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <div className="ml-4 text-lg leading-7 font-semibold text-gray-900 dark:text-white">
                                            Web Development
                                        </div>
                                    </div>
                                    <div className="ml-12">
                                        <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                            As you know, we are also developing with website developer services. With today's technological advancements, it is possible for us to provide this service to everyone. If you want to know more please tap here.
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center mt-4 sm:items-center sm:justify-between">
                        <div className="text-center text-sm text-gray-500 sm:text-left">
                            <div className="flex items-center">
                                <footer>&copy; Copyright 2021 visiarch.com</footer>
                            </div>
                        </div>
                        <div className="ml-4 text-center text-sm text-gray-500 sm:text-right sm:ml-0">
                            use Laravel v{props.laravelVersion} (PHP v{props.phpVersion}) & InertiaJs
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
