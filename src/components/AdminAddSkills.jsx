import {useContext} from 'react'
import {skillData, skillsAdded, roleData} from "../global"
import {AddedContext} from '../components/RolePlannerContext'

// console.log("skillsLeft", skillsLeft)

const AdminAddSkills = () => {
    function handleChange(skillid){
        for(let i=0; i<unaddedSkills.length; i++){
            var item = unaddedSkills[i]
            if(item['Skill_ID'] == skillid){
                unaddedSkills.splice(i,1)
                addedSkills.push(item)
            }
        }
        setAdded([addedSkills,unaddedSkills])
    }
    const {added, setAdded} = useContext(AddedContext)
    var addedSkills = added[0]
    var unaddedSkills = added[1]
    const rows = unaddedSkills.map(function (item, index) {
        return <tr className="hover:bg-white-200">
            <td className="whitespace-nowrap py-2 font-medium text-gray-900 text-center">{item['Skill_name']}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                <button onClick={()=>handleChange(item['Skill_ID'])} className="inline-flex items-center rounded-2xl border border-gray-600 bg-gray-600 px-4 py-2 text-white hover:bg-transparent hover:text-gray-600 focus:outline-none focus:ring active:text-gray-500">
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