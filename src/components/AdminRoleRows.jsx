export default function AdminRoleRows() {
    var roleData = {
        "data": {
            '1': {
                "Role_ID": 1,
                "Role_name": "Fullstack Developer",
                "Role_skills": ['2'],
                "Role_courses": ['COR001', 'tch019', 'HRD001', 'tch009', 'tch013', 'MGT004'],
            },
            '2': {
                "Role_ID": 2,
                "Role_name": "Frontend Engineer",
                "Role_skills": ['1', '2', '3', '4'],
                "Role_courses": ['COR001', 'tch019', 'HRD001', 'tch009', 'tch013', 'MGT004'],
            },
            '3': {
                "Role_ID": 3,
                "Role_name": "Backend Engineer",
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
        return <tr className="hover:bg-white-200">
            <td className="whitespace-nowrap py-2 font-medium text-gray-900 text-center">{item['Role_name']}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                <a className="inline-flex items-center rounded-2xl border border-gray-600 bg-gray-600 px-4 py-2 text-white hover:bg-transparent hover:text-gray-600 focus:outline-none focus:ring active:text-gray-500"
                    href={"/admineditrole/"+item['Role_ID']}>
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