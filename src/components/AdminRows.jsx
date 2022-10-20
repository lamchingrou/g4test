import {roleData, skillData} from '../global.js'

export default function AdminRows(props) {
    const rows = Object.values(props.data).map(function (item, index) {
        return <tr className="hover:bg-white-200">
            <td className="whitespace-nowrap py-2 font-medium text-gray-900 text-center">{item[props.name]}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                <a className="inline-flex items-center rounded-2xl border border-gray-600 bg-gray-600 px-4 py-2 text-white hover:bg-transparent hover:text-gray-600 focus:outline-none focus:ring active:text-gray-500"
                    href={"/admineditrole/"+item[props.id]}>
                    <span className="text-xs font-medium"> Edit {props.message} </span>
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