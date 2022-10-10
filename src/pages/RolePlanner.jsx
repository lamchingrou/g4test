import React, { useState,useCallback } from "react";
import StaffSideBar from "../components/StaffSideBar"
import CheckBoxGroup from "../components/CheckboxGroup";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import { SelectedContext } from "../components/RolePlannerContext";
import { render } from "@testing-library/react";
const RolePlanner = () => {
    //Get params
    let { staffid, roleid } = useParams()

    //Fetch role by ID
    var roleData = {
        "data":
        {
            "Role_ID": 1,
            "Role_name": "Web Developer",
            "Role_skills": ['1', '2', '3', '4'],
            "Role_courses": []
        },
    }

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

    //Fetch All Courses
    var courseData = {
        "data": {
            '1': {
                "Course_ID": '1',
                "Course_name": 'Intro to Javascript',
                "Type": "Online"
            },
            '2': {
                "Course_ID": '2',
                "Course_name": 'Advanced Javascript',
                "Type": "Online"
            },
            "3": {
                "Course_ID": '3',
                "Course_name": 'Vue.js',
                "Type": "Online"
            },
            '4': {
                "Course_ID": '4',
                "Course_name": 'Intro to CSS',
                "Type": "Physical"
            },
            '5': {
                "Course_ID": '5',
                "Course_name": 'Bootstrap',
                "Type": "Online"
            },
            '6': {
                "Course_ID": '6',
                "Course_name": 'Tailwind CSS',
                "Type": "Online"
            },
            '7': {
                "Course_ID": '7',
                "Course_name": 'Intro to HTML',
                "Type": "Physical"
            },
            '8': {
                "Course_ID": '8',
                "Course_name": 'React.js',
                "Type": "Online"
            },
        }
    }

    //Fetch Staff data by staff ID
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


    function createJourney() {
        //Add new learning journey to userID
    }
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);
    function handleOnchange(e){
        forceUpdate()
    }
    const [selected, setSelected] = useState([]);

    //map course id and course names to checkbox group
    const dropdowns = roleData.data.Role_skills.map(function (skillid) {

        if (skillData.data[skillid]) {
            const courseArray = skillData.data[skillid]['Skill_courses'].map(function (courseid) {
                if (courseData.data[courseid] && !staffData.data['Completed_Courses'].includes(courseid) ) {
                    return {value: courseid, label: courseData.data[courseid]['Course_name'], hidden:false, type:courseData.data[courseid]['Type']}
                }
                else {
                    return {value: courseid, label: courseData.data[courseid]['Course_name'], hidden:true}
                }
            })
            return <div>
                <h1 className='text-lg font-bold'>
                    {skillData.data[skillid]['Skill_name']}
                </h1>
                <SelectedContext.Provider value={{selected, setSelected}}>
                    <CheckBoxGroup options= {courseArray} selected={selected} disabled = {false}/>
                </SelectedContext.Provider>
            </div>
        }
        else {
            return
        }

    })
    return (
        <div className="container-full grid grid-cols-4 grid-rows-6 max-h-screen">
            <div className="col-span-1">
                <StaffSideBar select='Job Roles' />
            </div>

            <div className='col-start-2 col-end-4 mt-4'>
                <h1 className="text-3xl font-medium text-start ml-12">
                    Role Planner - <span className="text-3xl font-bold">{roleData.data.Role_name}</span>
                </h1>
                <h1 className="text-xl font-medium text-start ml-12 mt-4">
                    Skills - <span className='font-bold'>Select Courses</span>
                </h1>
            </div>
            <div className='col-start-2 col-end-5 row-start-2 row-end-6 border rounded-lg  max-h-screen mx-12 overflow-y-auto'>
                <div className='grid grid-cols-4 gap-6 m-6' onChange={handleOnchange}>
                    {dropdowns}
                </div>
            </div>

            <div className="col-start-4 row-start-6 mr-12 my-auto">
                <a class="group flex items-center justify-between rounded-lg border border-gray-600 bg-gray-600 px-5 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring" href="/successpage" onClick={createJourney()}>
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

export default RolePlanner