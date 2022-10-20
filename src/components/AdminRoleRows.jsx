export default function AdminRoleRows() {
    var roleData = {
        "data": {
            "1": {
                "Job_ID": "1",
                "Job_courses": [
                    "COR001"
                ],
                "Job_name": "Sales Person",
                "Job_skills": [
                    1,
                    6
                ]
            },
            "2": {
                "Job_ID": "2",
                "Job_courses": [
                    "COR001",
                    "COR002"
                ],
                "Job_name": "Project Owner",
                "Job_skills": [
                    2,
                    1
                ]
            },
            "3": {
                "Job_ID": "3",
                "Job_courses": [
                    "COR001",
                    "COR002"
                ],
                "Job_name": "Team Manager",
                "Job_skills": [
                    3
                ]
            },
            "4": {
                "Job_ID": "4",
                "Job_courses": [
                    "COR003"
                ],
                "Job_name": "Data Analytis",
                "Job_skills": [
                    4
                ]
            },
            "5": {
                "Job_ID": "5",
                "Job_courses": [
                    "COR003"
                ],
                "Job_name": "Software Engineer",
                "Job_skills": [
                    5
                ]
            }
        }
    }

    //Staff Data
    var staffData = {
        "data": {
            "Completed_Courses": [
                "COR001",
                "COR002"
            ],
            "Completed_Skills": [
                "1",
                "2",
                "3"
            ],
            "Dept": "Sales",
            "Email": "caleb@allinone.com",
            "Inprogress_Courses": [],
            "Learning_Journeys": [
                {
                    "Courses": [
                        "COR001",
                        "COR002"
                    ],
                    "Job_ID": 1,
                    "Job_name": "Sales Person",
                    "Progress": "Completed",
                    "Skills": [
                        1,
                        6
                    ]
                },
                {
                    "Courses": [
                        "COR001"
                    ],
                    "Job_ID": 2,
                    "Job_name": "Project Owner",
                    "Progress": "Completed",
                    "Skills": [
                        2,
                        1
                    ]
                }
            ],
            "Role": "1",
            "Staff_FName": "Caleb",
            "Staff_ID": "130001",
            "Staff_LName": "Cheong"
        }
    }
    const rows = Object.values(roleData.data).map(function (item, index) {
        return <tr className="hover:bg-white-200">
            <td className="whitespace-nowrap py-2 font-medium text-gray-900 text-center">{item['Job_name']}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                <a className="inline-flex items-center rounded-2xl border border-gray-600 bg-gray-600 px-4 py-2 text-white hover:bg-transparent hover:text-gray-600 focus:outline-none focus:ring active:text-gray-500"
                    href={"/admineditrole/"+item['Job_ID']}>
                    <span className="text-xs font-medium"> Edit Roles </span>
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