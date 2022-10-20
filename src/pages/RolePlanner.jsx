import React, { useState, useCallback } from "react";
import StaffSideBar from "../components/StaffSideBar"
import CheckBoxGroup from "../components/CheckboxGroup";
import { useParams } from "react-router-dom";
import { SelectedContext } from "../components/RolePlannerContext";
import { staffData, skillData, roleData, courseData } from '../global.js'

const RolePlanner = () => {
    //Get params
    let { roleid } = useParams()

    function createJourney() {
        //Add new learning journey to userID
    }
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);
    function handleOnchange() {
        forceUpdate()
    }
    function changeSKillColor(courses){
        for(let id of selected){
            if(courses.includes(id)){
                return true
            }
        }
        
    }
    const [selected, setSelected] = useState([]);

    //map course id and course names to checkbox group
    const dropdowns = roleData.data[roleid].Role_skills.map(function (skillid) {

        if (skillData.data[skillid]) {
            const courseArray = skillData.data[skillid]['Skill_courses'].map(function (courseid) {
                if (courseData.data[courseid] && !staffData.data['Completed_Courses'].includes(courseid)) {
                    return { value: courseid, label: courseData.data[courseid]['Course_Name'], hidden: false, type: courseData.data[courseid]['Course_Type'] }
                }
                else {
                    return { value: courseid, label: courseData.data[courseid]['Course_Name'], hidden: true }
                }
            })
            return <div className='rounded-lg bg-gray-100 text-center border-4 border-gray-600' onChange={()=>handleOnchange()}>
                <h1 className={changeSKillColor(skillData.data[skillid]['Skill_courses']) ? 'text-lg font-bold bg-green-200 p-3 rounded-t-lg border-b-4 border-gray-600': 'text-lg font-bold bg-white p-3 rounded-t-lg border-b-4 border-gray-600'}>
                    {skillData.data[skillid]['Skill_name']}
                </h1>
                <SelectedContext.Provider value={{ selected, setSelected }}>
                    <CheckBoxGroup options={courseArray} selected={selected} disabled={false} />
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

            <div className='col-start-2 col-end-4 my-auto'>
                <h1 className="text-3xl font-medium text-start ml-12">
                    Role Selected - <span className="text-3xl font-bold">{roleData.data[roleid]['Role_name']}</span>
                </h1>
                <h1 className="text-xl font-medium text-start ml-12 mt-4">
                    <span className='font-semibold'>Select the <span className='font-bold'>Courses</span> for the required skills</span>
                </h1>
            </div>
            <div className='col-start-2 col-end-5 row-start-2 row-end-6 rounded-lg  max-h-screen mx-12 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800'>
                <h1 className='p-4 text-xl font-bold text-center sticky top-0 bg-white'>{roleData.data[roleid]['Role_skills'].length} {roleData.data[roleid]['Role_skills'].length == 1 ? 'Skill' : 'Skills'} Required</h1>
                <div className='grid grid-cols-2 gap-6 mx-6'>
                        {dropdowns}
                </div>
            </div>

            <div className="col-start-4 row-start-6 mr-12 my-auto">
                <a class="group flex items-center justify-between rounded-lg border border-gray-600 bg-gray-600 px-5 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring" href={"/successpage/" + roleData.data[roleid]['Role_name']} onClick={createJourney()}>
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