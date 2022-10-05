import React from 'react';
import '../index.css'


export default function LearningJourneyCards() {
    return (
        <a class="relative rounded-xl border-4 border-gray-800 hover:bg-gray-100 p-8 min-w-fit mb-6" href={"rolename"+"/skills"}>
            <div class="mt-4 text-gray-500 text-center"> 
                <svg className='mx-auto'width="64" height="56" viewBox="0 0 64 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.41667 38.1667L20.9831 49.8415C21.4118 50.163 22.0177 50.0895 22.3571 49.6747L58.5 5.5" stroke="#33363F" stroke-width="10" stroke-linecap="round" />
                </svg>

                <h5 class="mt-4 text-xl font-bold text-gray-900">Frontend Engineer</h5>
                <p class="mt-2 hidden text-sm sm:block">
                    Completed
                </p>
            </div>
        </a>
    )
}