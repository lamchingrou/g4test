var skillsAdded = {
    "data": {
        '1': {
            "Skill_ID": '1',
            "Skill_name": "Management",
            "Skill_courses": ['COR001', 'tch018', 'tch012', 'MGT002', 'MGT003']
        },
        '2': {
            "Skill_ID": '2',
            "Skill_name": "IT",
            "Skill_courses": ['COR001', 'tch019', 'HRD001', 'tch009', 'tch013', 'MGT004']
        },
        '3': {
            "Skill_ID": '3',
            "Skill_name": "Operations",
            "Skill_courses": ['COR001', 'tch006', 'tch001', 'tch018']
        }
    }
}

export default function AdminDeleteSkills() {
    const rows = Object.values(skillsAdded.data).map(function (item, index) {
        return <tr className="hover:bg-white-200">
            <td className="whitespace-nowrap py-2 font-medium text-gray-900 text-center">{item['Skill_name']}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                <button className="inline-flex items-center rounded-2xl border border-gray-600 bg-gray-600 px-4 py-2 text-white hover:bg-transparent hover:text-gray-600 focus:outline-none focus:ring active:text-gray-500">
                    {/* // href={"/admindeleteskill/"+item['Skill_ID']}> */}
                    <span className="text-xs font-medium"> Delete Skill </span>
                </button>
            </td>
        </tr>

    })
    return (
        <tbody className="divide-y divide-gray-200">
            {rows}

        </tbody>

    )
}