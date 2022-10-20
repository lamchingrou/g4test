import React from 'react';
import '../index.css'
import AdminSideBar from '../components/AdminSideBar'
import SearchInput from '../components/SearchInput'
// import AdminAddSkills from "../components/AdminAddSkills"
// import AdminDeleteSkills from "../components/AdminDeleteSkills"
import AdminUpdateSkill from "../components/AdminUpdateSkill"

export default function AdminCreateRole() {
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
                    <input type="search" id="roleName" placeholder="Role Name" class="w-full rounded-md border border-gray-200 shadow-sm sm:text-sm p-3" />
                </div>
            </div>
           
            <div className='col-start-4 col-end-6 col-span-2 my-auto mx-12'>
                <SearchInput />
            </div>
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
        </div >

    )
}