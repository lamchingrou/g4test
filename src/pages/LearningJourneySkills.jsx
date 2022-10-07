import StaffSideBar from "../components/StaffSideBar"
import SearchInput from "../components/SearchInput"
import React, { useContext } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import '../index.css'
const LearningJourneySkills = () => {

    //Fetch user's learning journeys by journeyid
    var userLearningJourneys = {
        'data': [
            {
                "Journey_ID": '1',
                "Role_ID": '1',
                "Role_name": "Web Developer",
                "Skills": ['1', '2', '3', '4'],
                "Courses": ['1', '6', '7'],
                "Progress": 'Completed'
            },
            {
                "Journey_ID": '2',
                "Role_ID": '1',
                "Role_name": "Frontend Engineer",
                "Skills": ['1', '2', '3', '4'],
                "Courses": ['1', '6', '7'],
                "Progress": 'Completed'
            },
            {
                "Journey_ID": '3',
                "Role_ID": '1',
                "Role_name": "Backend Engineer",
                "Skills": ['1', '2', '3', '4'],
                "Courses": ['1', '6', '7'],
                "Progress": 'Completed'
            },
            {
                "Journey_ID": '4',
                "Role_ID": '1',
                "Role_name": "Caleb Insulter",
                "Skills": ['1', '2', '3', '4'],
                "Courses": ['1', '6', '7'],
                "Progress": 'Ongoing'
            },
        ]
    }

    //Fetch Skills By ID
    var skillData = {
        "data": {
            '1': {
                "Skill_ID": '1',
                "Skill_name": "Javascript",
                "Progress": "Completed",
                "Skill_courses": ['1', '2', '3']
            },
            '2': {
                "Skill_ID": '2',
                "Skill_name": "CSS",
                "Progress": "Completed",
                "Skill_courses": ['6', '5', '4']
            },
            '3': {
                "Skill_ID": '3',
                "Skill_name": "HTML",
                "Progress": "Uncompleted",
                "Skill_courses": ['7', '4']
            },
            '4': {
                "Skill_ID": '4',
                "Progress": "Uncompleted",
                "Skill_name": "Frameworks",
                "Skill_courses": ['1', '8']
            }
        }
    }

    let journeyid = useParams()
    let journey = null
    for (let obj of userLearningJourneys.data) {
        if (obj['Journey_ID'] == journeyid.learningjourney) {
            journey = obj
        }
    }
    console.log(journey)
    return (
        <div className="container-full grid grid-cols-4 grid-rows-6 max-h-screen">
            <div className="col-span-1">
                <StaffSideBar select='Learning Journey' />
            </div>

            <div className='col-start-2 col-end-4 my-auto'>
                <h1 className="text-3xl font-medium text-start ml-12">
                    Learning Journey #{journey['Journey_ID']} - <span className='font-bold'>{journey['Role_name']}</span>
                </h1>
            </div>

            <div className='col-end-5 col-span-1 my-auto mx-12'>
                <SearchInput />
            </div>
            <div className='col-start-2 col-end-5 row-start-2 row-end-6 border rounded-lg overflow-y-auto max-h-screen mx-12'>
                <h1 className='font-bold text-3xl'>{journey['Skills'].length} Skills</h1>
                <div className='grid grid-cols-4 p-6'>

                    <a class="block rounded-xl border border-gray-800 bg-gray-900 p-8 shadow-xl text-center" href="">
                        <h3 class=" text-xl font-bold text-white">Javascript</h3>
                        <p class="mt-4 text-sm text-gray-300">
                            4 Courses   
                        </p>
                    </a>

                </div>
            </div>
        </div>
    )
}

export default LearningJourneySkills