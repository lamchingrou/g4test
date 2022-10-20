import AdminSideBar from "../components/AdminSideBar"
import SearchInput from "../components/SearchInput"
// import AdminAddSkills from "../components/AdminAddSkills"
// import AdminDeleteSkills from "../components/AdminDeleteSkills"
import AdminUpdateSkill from "../components/AdminUpdateSkill"
import { useParams } from "react-router-dom"
import { useState } from 'react'
import { skillData, roleData } from '../global.js'
import { AddedContext } from './RolePlannerContext'
const AdminEditRole = () => {
    const params = useParams()

    function processEditRole(roleid){
        if(added[0].length == 0){
            console.log('fail') // fail cos no skills at all
        }
        else{
            const editedSkills = added[0] // update the role
        }
    }
    var roleid = params.roleid
    var rolename = roleData["data"][roleid]["Job_name"]
    var jobSkills = roleData["data"][roleid]['Job_skills']
    var addedSkills = []
    var unaddedSkills = []
    for (let key of Object.keys(skillData.data)) {
        if (jobSkills.includes(parseInt(key))) {
            addedSkills.push(skillData.data[key])
        }
        else {
            unaddedSkills.push(skillData.data[key])
        }
    }
    const [added, setAdded] = useState([addedSkills, unaddedSkills]) //Default is [Job's Added Skills, Job's UnAdded Skills]
    return (
        <div className="container-full grid grid-cols-5 grid-rows-6 max-h-screen">
            <div className="col-span-1">
                <AdminSideBar select='Job Roles' />
            </div>

            <div className='col-start-2 col-end-4 my-auto'>
                <h1 className="text-3xl font-bold text-start ml-12">
                    Job Role - {rolename}
                </h1>
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
                                <th class="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900">Remove Skill</th>
                            </tr>
                        </thead>
                        {added[0].length == 0 ? 
                        <tbody>
                            <tr>
                                <td colspan='2' className='text-center'>
                                    <h2 class="text-xl font-medium mt-36">
                                        No Skills Added Yet...
                                    </h2>

                                    <p class="mt-4 text-sm text-gray-500">
                                        Added skills will appear here
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                            :
                            <AdminUpdateSkill action='delete' />}
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
                <a onClick={() => processEditRole(roleid)}
                    class="inline-block rounded-lg border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                    href="#">
                    Save
                </a>
            </div>
        </div>
    )
}

export default AdminEditRole