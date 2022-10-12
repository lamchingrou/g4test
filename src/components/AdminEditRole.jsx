import AdminSideBar from "../components/AdminSideBar"
import SearchInput from "../components/SearchInput"
import AdminAddSkills from "../components/AdminAddSkills"
import AdminDeleteSkills from "../components/AdminDeleteSkills"
import { useParams } from "react-router-dom"

const AdminEditRole = () => {
    // get params
    const params = useParams()

    var roleData = {
        "data": {
            '1': {
                "Role_ID": 1,
                "Role_name": "IT Support",
                "Role_skills": ['2'],
                "Role_courses": ['COR001', 'tch019', 'HRD001', 'tch009', 'tch013', 'MGT004'],
            },
            '2': {
                "Role_ID": 2,
                "Role_name": "Marketing Gal",
                "Role_skills": ['1', '2', '3', '4'],
                "Role_courses": ['COR001', 'tch019', 'HRD001', 'tch009', 'tch013', 'MGT004'],
            },
            '3': {
                "Role_ID": 3,
                "Role_name": "Boss",
                "Role_skills": ['1'],
                "Role_courses": ['COR001', 'tch019', 'HRD001', 'tch009', 'tch013', 'MGT004'],
            },
            '4': {
                "Role_ID": 4,
                "Role_name": "Caleb Insulter",
                "Role_skills": ['1', '2', '3', '4'],
                "Role_courses": ['COR001', 'tch019', 'HRD001', 'tch009', 'tch013', 'MGT004'],
            },
        }
    }

    var roleid = params.roleid
    var rolename = roleData["data"][roleid]["Role_name"]

    return(
        <div className="container-full grid grid-cols-5 grid-rows-6 max-h-screen">
            <div className="col-span-1">
                <AdminSideBar select='Job Roles' />
            </div>
            
            <div className='col-start-2 col-end-4 my-auto'>
                <h1 className="text-3xl font-bold text-start ml-12">
                    Job Role {rolename}
                </h1>
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
                            <AdminAddSkills/>
                        </table>
                </div>
                <div className='col-start-4 col-end-6 row-start-2 row-end-6 border rounded-lg overflow-y-auto max-h-screen mx-12'>
                        <table class="min-w-full divide-y-2 divide-gray-200 text-sm relative">
                            <thead>
                                <tr className='h-16 bg-gray-100 sticky top-0'>
                                    <th class="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900">All Skills</th>
                                    <th class="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900">Add Skill</th>
                                </tr>
                            </thead>
                            <AdminDeleteSkills/>
                        </table>
                </div>
            </div>
    )
}

export default AdminEditRole