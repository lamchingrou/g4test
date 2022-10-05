import React from 'react';
import '../index.css'




export default function StaffRoleRows() {
    var sampleResponse = {
        "data": [
            {
                "Role_ID": 1,
                "Role_name": "Web Developer",
                "Role_skills": [],
                "Role_courses": []
            },
            {
                "Role_ID": 2,
                "Role_name": "Backend Engineer",
                "Role_skills": [],
                "Role_courses": []
            },
            {
                "Role_ID": 3,
                "Role_name": "Admin",
                "Role_skills": [],
                "Role_courses": []
            },
            {
                "Role_ID": 4,
                "Role_name": "Marketing",
                "Role_skills": [],
                "Role_courses": []
            },
            {
                "Role_ID": 5,
                "Role_name": "Data Analyst",
                "Role_skills": [],
                "Role_courses": []
            },
            {
                "Role_ID": 6,
                "Role_name": "Data Scientist",
                "Role_skills": [],
                "Role_courses": []
            },
            {
                "Role_ID": 4,
                "Role_name": "Marketing",
                "Role_skills": [],
                "Role_courses": []
            },
            {
                "Role_ID": 5,
                "Role_name": "Data Analyst",
                "Role_skills": [],
                "Role_courses": []
            },
            {
                "Role_ID": 3,
                "Role_name": "Admin",
                "Role_skills": [],
                "Role_courses": []
            },
            {
                "Role_ID": 4,
                "Role_name": "Marketing",
                "Role_skills": [],
                "Role_courses": []
            },
            {
                "Role_ID": 5,
                "Role_name": "Data Analyst",
                "Role_skills": [],
                "Role_courses": []
            },
            {
                "Role_ID": 6,
                "Role_name": "Data Scientist",
                "Role_skills": [],
                "Role_courses": []
            },
            {
                "Role_ID": 4,
                "Role_name": "Marketing",
                "Role_skills": [],
                "Role_courses": []
            },
            {
                "Role_ID": 5,
                "Role_name": "Data Analyst",
                "Role_skills": [],
                "Role_courses": []
            },
            {
                "Role_ID": 3,
                "Role_name": "Admin",
                "Role_skills": [],
                "Role_courses": []
            },
            {
                "Role_ID": 4,
                "Role_name": "Marketing",
                "Role_skills": [],
                "Role_courses": []
            },
            {
                "Role_ID": 5,
                "Role_name": "Data Analyst",
                "Role_skills": [],
                "Role_courses": []
            },
            {
                "Role_ID": 6,
                "Role_name": "Data Scientist",
                "Role_skills": [],
                "Role_courses": []
            },
            {
                "Role_ID": 4,
                "Role_name": "Marketing",
                "Role_skills": [],
                "Role_courses": []
            },
            {
                "Role_ID": 5,
                "Role_name": "Data Analyst",
                "Role_skills": [],
                "Role_courses": []
            },
           
            
       
           
            
            
            
            
           
            
        ]
    }
    console.log(sampleResponse.data)

    const rows = sampleResponse.data.map(function (item) {
        return <tr className="hover:bg-gray-200">
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">{item['Role_name']}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{item['Role_skills'].length}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{item['Role_courses'].length}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                <a className="inline-flex items-center rounded-2xl border border-indigo-600 bg-indigo-600 px-2 py-1 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                    href="/roleplanner">
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