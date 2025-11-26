import React from "react";

export default function TimeLine() {
    return (
        <div>
            {/* 画面サイズが小さいとき用 */}
            <div className="lg:hidden card bg-slate-200 text-slate-900 w-1/2 mx-auto">
                <div className="bg-opacity-30 flex justify-between pl-3 mx-auto">
                    <ol className="relative border-s-8 border-blue-500">
                        <li className="mb-10 ms-4">
                            <div className="absolute w-4 h-4 bg-orange-500 rounded-full mt-1.5 -start-3 border border-white"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400">2022.6</time>
                            <h3 className="text-lg font-semibold text-gray-900">アイデアソン</h3>
                        </li>
                        <li className="mb-10 ms-4">
                            <div className="absolute w-4 h-4 bg-orange-500 rounded-full mt-1.5 -start-3 border border-white"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400">2022.9</time>
                            <h3 className="text-lg font-semibold text-gray-900">班結成企画</h3>
                        </li>
                        <div className="absolute w-4 h-4 bg-orange-500 rounded-full mt-1.5 -start-3 border border-white"></div>
                        <li className="mb-10 ms-4">
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400">2023.1</time>
                            <h3 className="text-lg font-semibold text-gray-900">中間発表（企画説明）</h3>
                        </li>
                        <div className="absolute w-4 h-4 bg-orange-500 rounded-full mt-1.5 -start-3 border border-white"></div>
                        <li className="mb-10 ms-4">
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400">2023.4</time>
                            <h3 className="text-lg font-semibold text-gray-900">新メンバー加入</h3>
                        </li>
                        <div className="absolute w-4 h-4 bg-orange-500 rounded-full mt-1.5 -start-3 border border-white"></div>
                        <li className="mb-10 ms-4">
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400">2023.11</time>
                            <h3 className="text-lg font-semibold text-gray-900">工大前店オープン<br/>角煮唐麺発売</h3>
                        </li>
                        <div className="absolute w-4 h-4 bg-orange-500 rounded-full mt-1.5 -start-3 border border-white"></div>
                        <li className="mb-10 ms-4">
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400">2024.4</time>
                            <h3 className="text-lg font-semibold text-gray-900">新メンバー加入</h3>
                        </li>
                        <div className="absolute w-4 h-4 bg-orange-500 rounded-full mt-1.5 -start-3 border border-white"></div>
                        <li className="mb-10 ms-4">
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400">2024.7</time>
                            <h3 className="text-lg font-semibold text-gray-900">web班でハッカソン開催</h3>
                        </li>
                        <div className="absolute w-4 h-4 bg-orange-500 rounded-full mt-1.5 -start-3 border border-white"></div>
                        <li className="mb-10 ms-4">
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400">2025.4</time>
                            <h3 className="text-lg font-semibold text-gray-900">新メンバー加入</h3>
                        </li>
                        <div className="absolute w-4 h-4 bg-orange-500 rounded-full mt-1.5 -start-3 border border-white"></div>
                        <li className="mb-10 ms-4">
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400">2025.10</time>
                            <h3 className="text-lg font-semibold text-gray-900">濃厚旨激らーめん発売</h3>
                        </li>
                        <div className="absolute w-4 h-4 bg-orange-500 rounded-full mt-1.5 -start-3 border border-white"></div>
                        <li className="mb-10 ms-4">
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400">2025.12</time>
                            <h3 className="text-lg font-semibold text-gray-900">はちぽリリース</h3>
                        </li>

                    </ol>
                </div>
            </div>

            {/* 画面サイズが大きいとき用 */}
            <div className="hidden lg:block lg:w-11/12 lg:mx-auto">
                <div className="card bg-slate-200 text-slate-900 rounded-box p-6">
                    <div className="overflow-x-auto">
                        <div className="absolute top-[49%] left-0 w-full h-[3px] bg-blue-500 z-0"></div>
                        <ul className="timeline flex gap-6 px-4 relative w-max">
                            
                            <li>
                                <div className="timeline-start mb-2">2022.6</div>
                                <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-orange-600"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                </div>
                                <div className="timeline-end timeline-box mt-3 font-semibold bg-white border-white">アイデアソン</div>
                            </li>
                            <li>
                                <div className="timeline-start mb-2">2022.9</div>
                                <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-orange-600"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                </div>
                                <div className="timeline-end timeline-box mt-3 font-semibold bg-white border-white">班結成<br />&nbsp;&nbsp;企画</div>
                            </li>
                            <li>
                                <div className="timeline-start mb-2">2023.1</div>
                                <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-orange-600"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                </div>
                                <div className="timeline-end timeline-box mt-3 font-semibold bg-white border-white">&nbsp;中間発表<br />(企画説明)</div>
                            </li>
                            <li>
                                <div className="timeline-start mb-2">2023.4</div>
                                <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-orange-600"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                </div>
                                <div className="timeline-end timeline-box mt-3 font-semibold bg-white border-white">新メンバー加入</div>
                            </li>
                            <li>
                                <div className="timeline-start mb-2">2023.11</div>
                                <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-orange-600"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                </div>
                                <div className="timeline-end timeline-box mt-3 font-semibold bg-white border-white">工大前店オープン<br />&nbsp;角煮唐麺発売</div>
                            </li>
                            <li>
                                <div className="timeline-start mb-2">2024.4</div>
                                <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-orange-600"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                </div>
                                <div className="timeline-end timeline-box mt-3 font-semibold bg-white border-white">新メンバー加入</div>
                            </li>
                            <li>
                                <div className="timeline-start mb-2">2024.7</div>
                                <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-orange-600"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                </div>
                                <div className="timeline-end timeline-box mt-3 font-semibold bg-white border-white">web班でハッカソン開催</div>
                            </li>
                            <li>
                                <div className="timeline-start mb-2">2025.4</div>
                                <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-orange-600"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                </div>
                                <div className="timeline-end timeline-box mt-3 font-semibold bg-white border-white">新メンバー加入</div>
                            </li>
                            <li>
                                <div className="timeline-start mb-2">2025.10</div>
                                <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-orange-600"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                </div>
                                <div className="timeline-end timeline-box mt-3 font-semibold bg-white border-white">濃厚旨激らーめん発売</div>
                            </li>
                            <li>
                                <div className="timeline-start mb-2">2025.12</div>
                                <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-orange-600"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                </div>
                                <div className="timeline-end timeline-box mt-3 font-semibold bg-white border-white">はちぽリリース</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}