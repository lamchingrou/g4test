import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import StaffSideBar from "../components/StaffSideBar"
import SearchInput from "../components/SearchInput"
import React from "react";
import { useParams } from "react-router-dom";
import '../index.css'
import { skillData, staffData } from '../global.js'
const LearningJourneySkills = () => {

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
            return <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                skillid={skillid} roleid={journey['Role_ID']} completed={true}
            >
                <h3 className="vertical-timeline-element-title">{skillData.data[skillid]['Skill_name']}</h3>
                <h4 className="vertical-timeline-element-subtitle">{skillData.data[skillid]['Skill_courses'].length} Courses</h4>
                <p>
                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
            </VerticalTimelineElement>
        }
        else {
            return <VerticalTimelineElement
                className="vertical-timeline-element--work m-4"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                skillid={skillid} roleid={journey['Role_ID']} completed={false}
            >
                <h3 className="vertical-timeline-element-title">{skillData.data[skillid]['Skill_name']}</h3>
                <h4 className="vertical-timeline-element-subtitle">{skillData.data[skillid]['Skill_courses'].length} Courses</h4>
                <p>
                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
            </VerticalTimelineElement>
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
                <div className='grid grid-cols-1 p-6 gap-6'>

                    <VerticalTimeline className='rounded-lg'>

                        {skillCards}
                    </VerticalTimeline>

                </div>
            </div>
        </div>

    )
}

export default LearningJourneySkills