import React from 'react';
import ReactDOM from 'react-dom';
import Feed from "./feed"
import './index.css'

function Page() {
    return (
        <>
        <div className='container p-5 columns-2'>
            <Navbar />
            <Navbar />
        </div>
            
        </>
    )

}
function Navbar() {
    return (
        <div class="flow-root">
            <nav class="flex flex-col space-y-2">
                <div>
                    <strong class="block text-xs font-medium uppercase text-gray-400">
                        General
                    </strong>

                    <ul class="mt-2 space-y-1">
                        <li>
                            <a
                                href=""
                                class="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                            >
                                Profile
                            </a>
                        </li>

                        <li>
                            <a
                                href=""
                                class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                                Team
                            </a>
                        </li>

                        <li>
                            <a
                                href=""
                                class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                                Projects
                            </a>
                        </li>

                        <li>
                            <a
                                href=""
                                class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                                Meetings
                            </a>
                        </li>

                        <li>
                            <a
                                href=""
                                class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                                Calendar
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <strong class="block text-xs font-medium uppercase text-gray-400">
                        Support
                    </strong>

                    <ul class="mt-2 space-y-1">
                        <li>
                            <a
                                href=""
                                class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                                Update
                            </a>
                        </li>

                        <li>
                            <a
                                href=""
                                class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                                Help
                            </a>
                        </li>

                        <li>
                            <a
                                href=""
                                class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                                Settings
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <strong class="block text-xs font-medium uppercase text-gray-400">
                        Profile
                    </strong>

                    <ul class="mt-2 space-y-1">
                        <li>
                            <a
                                href=""
                                class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                                Details
                            </a>
                        </li>

                        <li>
                            <a
                                href=""
                                class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                                Subscription
                            </a>
                        </li>

                        <li>
                            <form action="/logout">
                                <button
                                    type="submit"
                                    class="block w-full rounded-lg px-4 py-2 text-left text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                >
                                    Logout
                                </button>
                            </form>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById('root'));