import React from 'react';
import '../index.css'
import AdminSideBar from '../components/AdminSideBar'
import SearchInput from '../components/SearchInput'
import AdminUpdateCourse from "../components/AdminUpdateCourse"
import { AddContext } from '../components/RolePlannerContext'
import { useState } from 'react'
import { courseData } from '../global.js'
export default function AdminCreateSkill() {
    function handleNameChange(event){
        setSkillName(event.target.value)
        console.log(skillName)
    }
    function processCreateSkill(){
        if(add[0].length == 0 || skillName.length == 0){
            console.log('fail') //fail cos no skills at all
        }
        else{
            const skill = skillName
            const editedCourses = add[0] //update the role
            //fetch all jobs
            //Job_ID = jobs.length
             
        }
    }
    var addedCourses = []
    var unaddedCourses = []
    for (let key of Object.keys(courseData.data)) {
        unaddedCourses.push(courseData.data[key])
    }
    const [skillName, setSkillName] = useState('')
    const [add, setAdd] = useState([addedCourses, unaddedCourses]) //Default is [Empty Array, All Skills]
    return (
        <div className="container-full grid grid-cols-5 grid-rows-6 max-h-screen">
            <div className="col-span-1">
                <AdminSideBar select='Skills' />
            </div>

            <div className='col-start-2 col-end-4 my-auto flex'>
                <h1 className="text-3xl font-bold text-start ml-12">
                    Create a Skill - 
                </h1>
                <div class="ml-4">
                    <label class="sr-only"> Skill Name </label>
                    <input onChange={handleNameChange} type="search" id="skillName" placeholder="Skill Name" class="w-full rounded-md border border-gray-200 shadow-sm sm:text-sm p-3" />
                </div>
            </div>
           
            <div className='col-start-4 col-end-6 col-span-2 my-auto mx-12'>
                <SearchInput />
            </div>
            <AddContext.Provider value={{ add, setAdd }}>
            <div className='col-start-2 col-end-4 row-start-2 row-end-6 border rounded-lg overflow-y-auto max-h-screen mx-12'>
                <table class="min-w-full divide-y-2 divide-gray-200 text-sm relative">
                    <thead>
                        <tr className='h-16 bg-gray-100 sticky top-0'>
                            <th class="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900">Courses Added</th>
                            <th class="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900">Remove Course</th>
                        </tr>
                    </thead>
                    {add[0].length == 0 ? 
                        <tbody>
                            <tr>
                                <td colspan='2' className='text-center'>
                                    <h2 class="text-xl font-medium mt-36">
                                        No Courses Added Yet...
                                    </h2>

                                    <p class="mt-4 text-sm text-gray-500">
                                        Added Courses will appear here
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                            :
                            <AdminUpdateCourse action='delete' />}
                </table>
            </div>
            <div className='col-start-4 col-end-6 row-start-2 row-end-6 border rounded-lg overflow-y-auto max-h-screen mx-12'>
                <table class="min-w-full divide-y-2 divide-gray-200 text-sm relative">
                    <thead>
                        <tr className='h-16 bg-gray-100 sticky top-0'>
                            <th class="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900">All Courses</th>
                            <th class="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900">Add Course</th>
                        </tr>
                    </thead>
                    <AdminUpdateCourse action='add' />
                </table>
            </div>
            </AddContext.Provider>
            <div className='col-start-4 text-end col-end-6 row-start-6 row-end-6 my-auto overflow-y-auto max-h-screen mx-12'>
                <a  onClick={()=>processCreateSkill()}
                    class="inline-block rounded-lg border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                    href="#">
                    Create Skill
                </a>
            </div>
        </div >

    )
}