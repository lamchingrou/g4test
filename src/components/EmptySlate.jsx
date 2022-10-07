import React from 'react';
import '../index.css'

export default function EmptySlate() {
    return (
        <div class="mx-auto max-w-xl text-center">
            <h2 class="text-2xl font-bold sm:text-3xl">No Learning Journey Found...</h2>

            <p class="mx-auto mt-4 text-gray-500">
                Click on the button below, select a role to plan for, and select your courses for the skills required
            </p>

            <a
                href="/staffrolepage"
                class="group mt-8 flex items-center justify-between rounded-lg border border-gray-800 px-5 py-3 text-gray-800 hover:bg-gray-600"
            >
                <span class="text-lg font-medium group-hover:text-white">
                    Select a Role
                </span>

                <span
                    class="ml-4 flex-shrink-0 rounded-full border border-gray-800 bg-white p-2"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </span>
            </a>
        </div>

    )
}