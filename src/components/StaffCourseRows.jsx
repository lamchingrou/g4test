import React from 'react';
import '../index.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";



export default function StaffCourseRows() {
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

    //Staff Data
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
    const {roleid, skillid} = useParams()
    let journey = null
    for(let obj of staffData.data['Learning_Journeys']){
        if(roleid == obj['Role_ID']){
            journey = obj
        }
    }
    const rows = Object.values(courseData.data).map(function (item, index) {
        if(skillData.data[skillid]['Skill_courses'].includes(item['Course_ID'])){
            return <tr className="hover:bg-gray-200">
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">{item['Course_name']}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{staffData.data['Completed_Courses'].includes(item['Course_ID']) ? 'Completed' : 'Not Attempted'}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{item['Type']}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                <a className={staffData.data['Completed_Courses'].includes(item['Course_ID']) ? "hidden" : "inline-flex items-center rounded-2xl border border-indigo-600 bg-indigo-600 px-2 py-1 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"}
                    href="">
                    <span className="text-xs font-medium"> Start Course </span>
                    <svg
                        className="ml-1 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </a>
            </td>
        </tr>
        }
        else{
            return
        }
    })
    return (
        <tbody className="divide-y divide-gray-200">
            {rows}

        </tbody>

    )
}