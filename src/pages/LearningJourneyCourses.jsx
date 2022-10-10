import StaffSideBar from "../components/StaffSideBar"
import SearchInput from "../components/SearchInput"
import React, { useContext } from "react";
import StaffCourseRows from "../components/StaffCourseRows"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import '../index.css'
const LearningJourneyCourses = () => {   

    //Fetch All Skills
    var skillData = {
        "data": {
            '1': {
                "Skill_ID": '1',
                "Skill_name": "Javascript",
                "Skill_courses": ['1', '2', '3']
            },
            '2': {
                "Skill_ID": '2',
                "Skill_name": "CSS",
                "Skill_courses": ['6', '5', '4']
            },
            '3': {
                "Skill_ID": '3',
                "Skill_name": "HTML",
                "Skill_courses": ['7', '4']
            },
            '4': {
                "Skill_ID": '4',
                "Skill_name": "Frameworks",
                "Skill_courses": ['1', '8']
            }
        }
    }

    //Fetch Staff data By ID
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
    const userLearningJourneys = staffData.data['Learning_Journeys']
    
    let {roleid, skillid} = useParams()
    console.log(skillid)
    let journey = null
    for (let obj of userLearningJourneys) {
        if (obj['Role_ID'] == roleid) {
            journey = obj
        }
    }

    return (
        <div className="container-full grid grid-cols-4 grid-rows-6 max-h-screen">
            <div className="col-span-1">
                <StaffSideBar select='Learning Journey' />
            </div>

            <div className='col-start-2 col-end-4 my-auto'>
                <h1 className="text-2xl font-medium text-start ml-12">
                    Learning Journey - {journey['Role_name']} - <span className='font-bold'>{skillData.data[skillid]['Skill_name']}</span>
                </h1>
            </div>

            <div className='col-end-5 col-span-1 my-auto mx-12'>
                <SearchInput />
            </div>
            <div className='col-start-2 col-end-5 row-start-2 row-end-6 border rounded-lg overflow-y-auto max-h-screen mx-12'>
                        <table class="min-w-full divide-y-2 divide-gray-200 text-sm relative">
                            <thead>
                                <tr className='h-16 bg-gray-100 sticky top-0'>
                                    <th class="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900">Course Name</th>
                                    <th class="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900">Course Status</th>
                                    <th class="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900">Type</th>
                                    <th class="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900"></th>
                                </tr>
                            </thead>
                               <StaffCourseRows/>
                        </table>
                </div>
        </div>
    )
}

export default LearningJourneyCourses