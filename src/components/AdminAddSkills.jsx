import {skillData, skillsAdded} from "../global"

var skillsLeft = {}

for(let key of Object.keys(skillData.data)){
    if (key in skillsAdded.data){
        continue
    } else {
        skillsLeft[key] = skillData.data[key]
    }
}

// console.log("skillsLeft", skillsLeft)

const AdminAddSkills = () => {
    const rows = Object.values(skillsLeft).map(function (item, index) {
        return <tr className="hover:bg-white-200">
            <td className="whitespace-nowrap py-2 font-medium text-gray-900 text-center">{item['Skill_name']}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                <button className="inline-flex items-center rounded-2xl border border-gray-600 bg-gray-600 px-4 py-2 text-white hover:bg-transparent hover:text-gray-600 focus:outline-none focus:ring active:text-gray-500">
                    {/* // href={"/adminaddskill/"+item['Skill_ID']}> */}
                    <span className="text-xs font-medium"> Add Skill </span>
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

export default AdminAddSkills