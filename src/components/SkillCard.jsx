import React from 'react';
import '../index.css'

export default function SkillCard(props) {
    const name = props.name
    const numCourses = props.numCourses
    const skillid = props.skillid
    const roleid = props.roleid
    return (
        <a class="block rounded-xl border border-gray-800 bg-gray-900 p-8 shadow-xl text-center" href={roleid+"/"+skillid}>
            <h3 class=" text-xl font-bold text-white">{name}</h3>
            <p class="mt-4 text-sm text-gray-300">
                {numCourses} Courses
            </p>
        </a>
    )
}