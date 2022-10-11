import StaffSideBar from "../components/StaffSideBar"
import SearchInput from "../components/SearchInput"
import React, { useContext } from "react";
import SkillCard from '../components/SkillCard'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import '../index.css'
const LearningJourneySkills = () => {

    //Fetch All Skills
    var skillData = {
        "data": {
            '1': {
                "Skill_ID": '1',
                "Skill_name": "Management",
                "Skill_courses": ['COR001', 'tch018', 'tch012', 'MGT002', 'MGT003']
            },
            '2': {
                "Skill_ID": '2',
                "Skill_name": "IT",
                "Skill_courses": ['COR001', 'tch019', 'HRD001', 'tch009', 'tch013', 'MGT004']
            },
            '3': {
                "Skill_ID": '3',
                "Skill_name": "Operations",
                "Skill_courses": ['COR001', 'tch006', 'tch001', 'tch018']
            },
            '4': {
                "Skill_ID": '4',
                "Skill_name": "Data Analytics",
                "Skill_courses": ['COR001', 'FIN001', 'MGT001']
            },
            '5': {
                "Skill_ID": '5',
                "Skill_name": "Digital Leadership",
                "Skill_courses": ['COR001', 'FIN001', 'MGT001', 'tch005', 'tch009']
            }
        }
    }

    //Fetch Staff data By ID
    var staffData = {
        "data": {
            "Dept": "Sales",
            "Role": "2",
            "Email": "jack.sim@allinone.com.sg",
            "Learning_Journeys": [
                {
                    "Role_ID": '1',
                    "Role_name": "Web Developer",
                    "Skills": ['1', '2', '3', '4'],
                    "Courses": ['COR001', 'tch019', 'HRD001', 'tch009', 'tch013', 'MGT004'],
                    "Progress": 'Completed'
                },
                {
                    "Role_ID": '2',
                    "Role_name": "Frontend Engineer",
                    "Skills": ['1', '2', '3', '4', '5'],
                    "Courses": ['COR001', 'tch019', 'HRD001', 'tch009', 'tch013', 'MGT004'],
                    "Progress": 'Completed'
                },
                {
                    "Role_ID": '3',
                    "Role_name": "Backend Engineer",
                    "Skills": ['1', '2', '3', '4', '5'],
                    "Courses": ['COR001', 'tch019', 'HRD001', 'tch009', 'tch013', 'MGT004'],
                    "Progress": 'Completed'
                },
                {
                    "Role_ID": '4',
                    "Role_name": "Caleb Insulter",
                    "Skills": ['1', '2', '3', '4'],
                    "Courses": ['COR001', 'tch019', 'HRD001', 'tch009', 'tch013', 'MGT004'],
                    "Progress": 'Ongoing'
                },
            ],
            "Completed_Courses": ['COR001'],
            "Completed_Skills": ['1', '2'],
            "Staff_FName": "John",
            "Staff_ID": '130001',
            "Staff_LName": "Sim"
        }
    }

    //user's learning journeys
    const userLearningJourneys = staffData.data['Learning_Journeys']

    let { roleid } = useParams()
    console.log(roleid)
    let journey = null
    for (let obj of userLearningJourneys) {
        if (obj['Role_ID'] == roleid) {
            journey = obj
        }
    }

    const skillCards = journey['Skills'].map(function (skillid) {
        if (staffData.data['Completed_Skills'].includes(skillid)) {
            return <SkillCard name={skillData.data[skillid]['Skill_name']} numCourses={skillData.data[skillid]['Skill_courses'].length} skillid={skillid} roleid={journey['Role_ID']} completed={true} />
        }
        else {
            return <SkillCard name={skillData.data[skillid]['Skill_name']} numCourses={skillData.data[skillid]['Skill_courses'].length} skillid={skillid} roleid={journey['Role_ID']} completed={false} />
        }

    })



    return (
        <div className="container-full grid grid-cols-4 grid-rows-6 max-h-screen">
            <div className="col-span-1">
                <StaffSideBar select='Learning Journey' />
            </div>

            <div className='col-start-2 col-end-4 my-auto'>
                <h1 className="text-3xl font-medium text-start ml-12">
                    Learning Journey - <span className='font-bold'>{journey['Role_name']}</span>
                </h1>
            </div>

            <div className='col-end-5 col-span-1 my-auto mx-12'>
                <SearchInput />
            </div>
            <div className='col-start-2 col-end-5 row-start-2 row-end-6 rounded-lg overflow-y-auto max-h-screen mx-12'>
                <h1 className='font-bold text-2xl sticky top-0 w-full text-center bg-white'>{journey['Skills'].length} Skills Required</h1>
                <div className='grid grid-cols-4 p-6 gap-6'>

                    {skillCards}

                </div>
            </div>
        </div>
    )
}

export default LearningJourneySkills