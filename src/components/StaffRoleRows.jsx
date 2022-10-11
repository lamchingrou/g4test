import React from 'react';
import '../index.css'




export default function StaffRoleRows() {
    //Fetch All Roles
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

    //Staff Data
    var staffData = {
        "data": {
            "Dept": "Sales",
            "Role":"2",
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
                    "Skills": ['1', '2', '3', '4','5'],
                    "Courses": ['COR001', 'tch019', 'HRD001', 'tch009', 'tch013', 'MGT004'],
                    "Progress": 'Completed'
                },
                {
                    "Role_ID": '3',
                    "Role_name": "Backend Engineer",
                    "Skills": ['1', '2', '3', '4','5'],
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
            "Completed_Courses":['COR001'],
            "Completed_Skills":['1','2'],
            "Staff_FName": "John",
            "Staff_ID": '130001',
            "Staff_LName": "Sim"
        }
    }
    const rows = Object.values(roleData.data).map(function (item, index) {
        return <tr className="hover:bg-gray-200">
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">{item['Role_name']}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{item['Role_skills'].length}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{item['Role_courses'].length}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                <a className="inline-flex items-center rounded-2xl border border-indigo-600 bg-indigo-600 px-2 py-1 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                    href={"/roleplanner/"+staffData.data['Staff_ID'] +"/"+ item['Role_ID']}>
                    <span className="text-xs font-medium"> Plan For Role </span>
                    <svg
                        className="ml-1 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </a>
            </td>
        </tr>

    })
    return (
        <tbody className="divide-y divide-gray-200">
            {rows}

        </tbody>

    )
}