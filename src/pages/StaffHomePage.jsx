import StaffSideBar from "../components/StaffSideBar"
import SearchInput from "../components/SearchInput"
import LearningJourneyCards from "../components/LearningJourneyCards"
import React, { createContext, useContext } from "react";
import EmptySlate from "../components/EmptySlate";
const StaffHomePage = () => {
    var staffData = {
        "data": {
            "Dept": "Staff",
            "Email": "jack.sim@allinone.com.sg",
            "Learning_Journeys": [
                {
                    "Role_ID": '1',
                    "Role_name": "Web Developer",
                    "Skills": ['1', '2', '3', '4'],
                    "Courses": ['1', '6', '7'],
                    "Progress": 'Completed'
                },
                {
                    "Role_ID": '2',
                    "Role_name": "Frontend Engineer",
                    "Skills": ['1', '2', '3', '4'],
                    "Courses": ['1', '6', '7'],
                    "Progress": 'Completed'
                },
                {
                    "Role_ID": '3',
                    "Role_name": "Backend Engineer",
                    "Skills": ['1', '2', '3', '4'],
                    "Courses": ['1', '6', '7'],
                    "Progress": 'Completed'
                },
                {
                    "Role_ID": '4',
                    "Role_name": "Caleb Insulter",
                    "Skills": ['1', '2', '3', '4'],
                    "Courses": ['1', '6', '7'],
                    "Progress": 'Ongoing'
                },
            ],
            "Completed_Courses":['1'],
            "Completed_Skills":['1','2'],
            "Staff_FName": "John",
            "Staff_ID": 1,
            "Staff_LName": "Sim"
        }
    }
    //user's learning journeys
    var userLearningJourneys = staffData.data['Learning_Journeys']

            const learningJourneyCards = userLearningJourneys.map(function(journey){
            const roleName = journey['Role_name']
            const progress = journey['Progress']
            const skills = journey['Skills']
            const courses = journey['Courses']
            return <LearningJourneyCards title={roleName} subtitle={progress} skills = {skills} courses={courses} journey={journey} progress={progress}/>
            })
    return (
        <div className="container-full grid grid-cols-4 grid-rows-6 max-h-screen">
            <div className="col-span-1">
                <StaffSideBar select='Learning Journey' />
            </div>

            <div className='col-start-2 col-end-3 my-auto'>
                <h1 className="text-3xl font-bold text-start ml-12">
                    My Learning Journeys
                </h1>
            </div>

            <div className='col-end-5 col-span-1 my-auto mx-12'>
                <SearchInput />
            </div>
            <div className='col-start-2 col-end-5 row-start-2 row-end-4 rounded-lg overflow-y-auto max-h-screen mx-12 scrollbar-thin scrollbar-thumb-gray-800'>
                <div className={learningJourneyCards.length>0?'grid grid-cols-4 gap-6 mx-6':'mx-6 px-32 mt-16'}>
                        {learningJourneyCards.length>0 ? learningJourneyCards:<EmptySlate/>}
                </div>
            </div>
            <div className={learningJourneyCards.length>0?'col-start-2 col-end-5 row-start-4 row-end-6 rounded-lg overflow-y-auto max-h-screen mx-12 pt-6':'hidden'}>
                <div className="ml-6 mb-3 text-2xl font-medium">
                    Most Recent Journey - <span className='font-bold'>Frontend Engineer</span>
                </div>
                <div className='grid grid-cols-3 gap-4 mt-8'>
                    <a class="relative block rounded-xl border border-gray-100 p-8 shadow-lg hover:bg-gray-100" href="">
                        <div class="mt-4 text-gray-500 sm:pr-8">
                            <p class="mt-2 hidden text-md sm:block">
                                Completed Courses
                            </p>
                            <h5 class="mt-4 text-xl font-bold text-gray-900">15</h5>
                        </div>
                    </a>

                    <a class="relative block rounded-xl border border-gray-100 p-8 shadow-lg hover:bg-gray-100" href="">
                        <div class="mt-4 text-gray-500 sm:pr-8">
                            <p class="mt-2 hidden text-md sm:block">
                                Ongoing Courses
                            </p>
                            <h5 class="mt-4 text-xl font-bold text-gray-900">15</h5>
                        </div>
                    </a>

                    <a class="relative block rounded-xl border border-gray-100 p-8 shadow-lg hover:bg-gray-100" href="">
                        <div class="mt-4 text-gray-500 sm:pr-8">
                            <p class="mt-2 hidden text-md sm:block">
                                Uncompleted Courses
                            </p>
                            <h5 class="mt-4 text-xl font-bold text-gray-900">15</h5>
                        </div>
                    </a>
                </div>
            </div>
            <div className={learningJourneyCards.length>0?"col-start-4 row-start-6 mr-12 my-auto":'hidden'}>
                <a class="group flex items-center justify-between rounded-lg border border-gray-600 bg-gray-600 px-5 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring" href="/staffrolepage">
                    <span class="font-medium text-white transition-colors group-hover:text-gray-600 group-active:text-gray-500">
                        Create Learning Journey
                    </span>
                    <span class="ml-2 flex-shrink-0 rounded-full border border-current bg-white p-2 text-gray-600 group-active:text-gray-500">
                        <svg width="14" height="14" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 2.33333L17 31.6667" stroke="currentColor" stroke-width="6" stroke-linecap="square" stroke-linejoin="round" />
                            <path d="M31.6666 17L2.33329 17" stroke="currentColor" stroke-width="6" stroke-linecap="square" stroke-linejoin="round" />
                        </svg>

                    </span>
                </a>
            </div>
        </div>
    )
}

export default StaffHomePage