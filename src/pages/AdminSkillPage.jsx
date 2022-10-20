import AdminSideBar from "../components/AdminSideBar"
import SearchInput from "../components/SearchInput"
import AdminRows from "../components/AdminRows"
import {roleData, skillData} from '../global.js'

const AdminSkillPage = () => {
    return(
        <div className="container-full grid grid-cols-4 grid-rows-6 max-h-screen">
            <div className="col-span-1">
                <AdminSideBar select='Skills' />
            </div>
            
            <div className='col-start-2 col-end-3 my-auto'>
                <h1 className="text-3xl font-bold text-start ml-12">
                    Skills
                </h1>
            </div>

                <div className='col-end-5 col-span-1 my-auto mx-12'>
                    <SearchInput />
                </div>
                <div className='col-start-2 col-end-5 row-start-2 row-end-6 border rounded-lg overflow-y-auto max-h-screen mx-12'>
                        <table class="min-w-full divide-y-2 divide-gray-200 text-sm relative">
                            <thead>
                                <tr className='h-16 bg-gray-100 sticky top-0'>
                                    <th class="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900">Skill Name</th>
                                    <th class="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900">Edit Skills</th>
                                </tr>
                            </thead>
                            <AdminRows data={skillData.data} name='Skill_name' id='Skill_ID' message='Edit Skill' href='/admineditskill/'/>
                        </table>
                </div>
            </div>
    )
}

export default AdminSkillPage