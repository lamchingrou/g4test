import React from 'react';
import '../index.css'
import AdminSideBar from '../components/AdminSideBar'
import SearchInput from '../components/SearchInput'
import AdminUpdateSkill from "../components/AdminUpdateSkill"
import { AddedContext } from '../components/RolePlannerContext'
import { useState } from 'react'
import { skillData, roleData } from '../global.js'
export default function AdminCreateRole() {
    function handleNameChange(event){
        setRoleNaame(event.target.value)
        console.log(roleName)
    }
    function processCreateRole(){
        if(added[0].length == 0 || roleName.length == 0){
            console.log('fail') //fail cos no skills at all
        }
        else{
            const jobName = roleName
            const editedSkills = added[0] //update the role
            //fetch all jobs
            //Job_ID = jobs.length
             
        }
    }
    var addedSkills = []
    var unaddedSkills = []
    for (let key of Object.keys(skillData.data)) {
        unaddedSkills.push(skillData.data[key])
    }
    const [roleName, setRoleNaame] = useState('')
    const [added, setAdded] = useState([addedSkills, unaddedSkills]) //Default is [Job's Added Skills, Job's UnAdded Skills]
    return (
        <div className="container-full grid grid-cols-5 grid-rows-6 max-h-screen">
            <div className="col-span-1">
                <AdminSideBar select='Job Roles' />
            </div>

            <div className='col-start-2 col-end-4 my-auto flex'>
                <h1 className="text-3xl font-bold text-start ml-12">
                    Create a Role - 
                </h1>
                <div class="ml-4">
                    <label class="sr-only"> Role Name </label>
                    <input onChange={handleNameChange} type="search" id="roleName" placeholder="Role Name" class="w-full rounded-md border border-gray-200 shadow-sm sm:text-sm p-3" />
                </div>
            </div>
           
            <div className='col-start-4 col-end-6 col-span-2 my-auto mx-12'>
                <SearchInput />
            </div>
            <AddedContext.Provider value={{ added, setAdded }}>
            <div className='col-start-2 col-end-4 row-start-2 row-end-6 border rounded-lg overflow-y-auto max-h-screen mx-12'>
                <table class="min-w-full divide-y-2 divide-gray-200 text-sm relative">
                    <thead>
                        <tr className='h-16 bg-gray-100 sticky top-0'>
                            <th class="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900">Skills Added</th>
                            <th class="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900">Delete Skill</th>
                        </tr>
                    </thead>
                    <AdminUpdateSkill action='delete' />
                </table>
            </div>
            <div className='col-start-4 col-end-6 row-start-2 row-end-6 border rounded-lg overflow-y-auto max-h-screen mx-12'>
                <table class="min-w-full divide-y-2 divide-gray-200 text-sm relative">
                    <thead>
                        <tr className='h-16 bg-gray-100 sticky top-0'>
                            <th class="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900">Skills Left</th>
                            <th class="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900">Add Skill</th>
                        </tr>
                    </thead>
                    <AdminUpdateSkill action='add' />
                </table>
            </div>
            </AddedContext.Provider>
            <div className='col-start-4 text-end col-end-6 row-start-6 row-end-6 my-auto overflow-y-auto max-h-screen mx-12'>
                <a  onClick={()=>processCreateRole()}
                    class="inline-block rounded-lg border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                    href="#">
                    Create Role
                </a>
            </div>
        </div >

    )
}