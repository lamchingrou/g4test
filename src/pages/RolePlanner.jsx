import React, { useRef, useState } from "react";
import StaffSideBar from "../components/StaffSideBar"
import CheckBox from "../components/Checkbox";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
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

    //Fetch Skills By ID
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

    //Fetch Course Data
    var courseData = {
        "data": {
            '1': {
                "Course_ID": '1',
                "Course_name": 'Intro to Javascript',
                "Course_status": "Unattempted",
            },
            '2': {
                "Course_ID": '2',
                "Course_name": 'Advanced Javascript',
                "Course_status": "Unattempted",
            },
            "3": {
                "Course_ID": '3',
                "Course_name": 'Vue.js',
                "Course_status": "Unattempted",
            },
            '4': {
                "Course_ID": '4',
                "Course_name": 'Intro to CSS',
                "Course_status": "Unattempted",
            },
            '5': {
                "Course_ID": '5',
                "Course_name": 'Bootstrap',
                "Course_status": "Unattempted",
            },
            '6': {
                "Course_ID": '6',
                "Course_name": 'Tailwind CSS',
                "Course_status": "Unattempted",
            },
            '7': {
                "Course_ID": '7',
                "Course_name": 'Intro to HTML',
                "Course_status": "Unattempted",
            },
            '8': {
                "Course_ID": '8',
                "Course_name": 'React.js',
                "Course_status": "Unattempted",
            },
        }
    }

    //Fetch Staff ID
    var staffData = {
        "data": {
            "Dept": "Staff",
            "Email": "jack.sim@allinone.com.sg",
            "Roles": [],
            "Staff_FName": "John",
            "Staff_ID": 1,
            "Staff_LName": "Sim"
        }
    }



    function createJourney() {

    }
    const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };
    //map course id and course names to checkbox group
    const dropdowns = roleData.data.Role_skills.map(function (skillid) {

        if (skillData.data[skillid]) {
            const courseArray = skillData.data[skillid]['Skill_courses'].map(function (courseid) {
                if (courseData.data[courseid]) {
                    console.log(courseData.data[courseid]['Course_name'])
                    return <CheckBox value={courseid} labelText={courseData.data[courseid]['Course_name']}  id={courseData.data[courseid]['Course_name']}
                    name={courseData.data[courseid]['Course_name']} checked={isChecked} onChange={handleOnChange}/>
                }
                else {
                    return
                }
            })
            return <div>
                <h1 className='text-lg font-bold'>
                    {skillData.data[skillid]['Skill_name']}
                </h1>
                {courseArray}
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
                <div className='grid grid-cols-4 gap-6 m-6'>
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