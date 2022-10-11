import React, { useState,useCallback } from "react";
import StaffSideBar from "../components/StaffSideBar"
import CheckBoxGroup from "../components/CheckboxGroup";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import { SelectedContext } from "../components/RolePlannerContext";
import { render } from "@testing-library/react";
const RolePlanner = () => {
    //Get params
    let { staffid, roleid } = useParams()

    //Fetch role by ID
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

    //Fetch All Skills
    var skillData = {
        "data": {
            '1': {
                "Skill_ID": '1',
                "Skill_name": "Management",
                "Skill_courses": ['COR001', 'tch018', 'tch012','MGT002', 'MGT003']
            },
            '2': {
                "Skill_ID": '2',
                "Skill_name": "IT",
                "Skill_courses": ['COR001', 'tch019', 'HRD001', 'tch009', 'tch013', 'MGT004']
            },
            '3': {
                "Skill_ID": '3',
                "Skill_name": "Operations",
                "Skill_courses": ['COR001', 'tch006', 'tch001','tch018']
            },
            '4': {
                "Skill_ID": '4',
                "Skill_name": "Data Analytics",
                "Skill_courses": ['COR001', 'FIN001', 'MGT001']
            },
            '5': {
                "Skill_ID": '5',
                "Skill_name": "Digital Leadership",
                "Skill_courses": ['COR001', 'FIN001', 'MGT001', 'tch005', 'tch009']
            }
        }
    }

    //Fetch All Courses
    var courseData = {
        "data": {
            "COR001": {
                "Course_Name": "Systems Thinking and Design",
                "Course_Desc": "This foundation module aims to introduce students to the fundamental concepts and underlying principles of systems thinking,",
                "Course_Status": "Active",
                "Course_Type": "Internal",
                "Course_Category": "Core"
            },
            "COR002": {
                "Course_Name": "Lean Six Sigma Green Belt Certification",
                "Course_Desc": "Apply Lean Six Sigma methodology and statistical tools such as Minitab to be used in process analytics",
                "Course_Status": "Active",
                "Course_Type": "Internal",
                "Course_Category": "Core"
            },
            "COR004": {
                "Course_Name": "Service Excellence",
                "Course_Desc": "The programme provides the learner with the key foundations of what builds customer confidence in the service industr",
                "Course_Status": "Pending",
                "Course_Type": "Internal",
                "Course_Category": "Core"
            },
            "COR006": {
                "Course_Name": "Manage Change",
                "Course_Desc": "Identify risks associated with change and develop risk mitigation plans.",
                "Course_Status": "Retired",
                "Course_Type": "External",
                "Course_Category": "Core"
            },
            "FIN001": {
                "Course_Name": "Data Collection and Analysis",
                "Course_Desc": "Data is meaningless unless insights and analysis can be drawn to provide useful information for business decision-making. It is imperative that data quality, integrity and security ",
                "Course_Status": "Active",
                "Course_Type": "External",
                "Course_Category": "Finance"
            },
            "FIN002": {
                "Course_Name": "Risk and Compliance Reporting",
                "Course_Desc": "Regulatory reporting is a requirement for businesses from highly regulated sectors to demonstrate compliance with the necessary regulatory provisions.",
                "Course_Status": "Active",
                "Course_Type": "External",
                "Course_Category": "Finance"
            },
            "FIN003": {
                "Course_Name": "Business Continuity Planning",
                "Course_Desc": "Business continuity planning is essential in any business to minimise loss when faced with potential threats and disruptions.",
                "Course_Status": "Retired",
                "Course_Type": "External",
                "Course_Category": "Finance"
            },
            "HRD001": {
                "Course_Name": "Leading and Shaping a Culture in Learning",
                "Course_Desc": "This training programme, delivered by the National Centre of Excellence (Workplace Learning), aims to equip participants with the skills and knowledge of the National workplace learning certification framework,",
                "Course_Status": "Active",
                "Course_Type": "External",
                "Course_Category": "HR"
            },
            "MGT001": {
                "Course_Name": "People Management",
                "Course_Desc": "enable learners to manage team performance and development through effective communication, conflict resolution and negotiation skills.",
                "Course_Status": "Active",
                "Course_Type": "Internal",
                "Course_Category": "Management"
            },
            "MGT002": {
                "Course_Name": "Workplace Conflict Management for Professionals",
                "Course_Desc": "This course will address the gaps to build consensus and utilise knowledge of conflict management techniques to diffuse tensions and achieve resolutions effectively in the best interests of the organisation.",
                "Course_Status": "Active",
                "Course_Type": "External",
                "Course_Category": "Management"
            },
            "MGT003": {
                "Course_Name": "Enhance Team Performance Through Coaching",
                "Course_Desc": "The course aims to upskill real estate team leaders in the area of service coaching for performance.",
                "Course_Status": "Pending",
                "Course_Type": "Internal",
                "Course_Category": "Management"
            },
            "MGT004": {
                "Course_Name": "Personal Effectiveness for Leaders",
                "Course_Desc": "Learners will be able to acquire the skills and knowledge to undertake self-assessment in relation to one’s performance and leadership style",
                "Course_Status": "Active",
                "Course_Type": "External",
                "Course_Category": "Management"
            },
            "MGT007": {
                "Course_Name": "Supervisory Management Skills",
                "Course_Desc": "Supervisors lead teams, manage tasks, solve problems, report up and down the hierarchy, and much more. ",
                "Course_Status": "Retired",
                "Course_Type": "External",
                "Course_Category": "Management"
            },
            "SAL001": {
                "Course_Name": "Risk Management for Smart Business",
                "Course_Desc": "Apply risk management concepts to digital business",
                "Course_Status": "Retired",
                "Course_Type": "Internal",
                "Course_Category": "Sales"
            },
            "SAL002": {
                "Course_Name": "CoC in Smart Living Solutions",
                "Course_Desc": "Participants will acquire the knowledge and skills in setting up a smart living solution",
                "Course_Status": "Pending",
                "Course_Type": "External",
                "Course_Category": "Sales"
            },
            "SAL003": {
                "Course_Name": "Optimising Your Brand For The Digital Spaces",
                "Course_Desc": "Digital has fundamentally shifted communication between brands and their consumers from a one-way broadcast to a two-way dialogue. In a hastened bid to transform their businesses to be digital market-ready,",
                "Course_Status": "Active",
                "Course_Type": "External",
                "Course_Category": "Sales"
            },
            "SAL004": {
                "Course_Name": "Stakeholder Management",
                "Course_Desc": "Develop a stakeholder engagement plan and negotiate with stakeholders to arrive at mutually-beneficial arrangements.",
                "Course_Status": "Active",
                "Course_Type": "Internal",
                "Course_Category": "Sales"
            },
            "tch001": {
                "Course_Name": "Print Server Setup",
                "Course_Desc": "Setting up print server in enterprise environment",
                "Course_Status": "Retired",
                "Course_Type": "Internal",
                "Course_Category": "Technical"
            },
            "tch002": {
                "Course_Name": "Canon MFC Setup",
                "Course_Desc": "Setting up Canon ImageRUNNER series of products",
                "Course_Status": "Retired",
                "Course_Type": "Internal",
                "Course_Category": "Technical"
            },
            "tch003": {
                "Course_Name": "Canon MFC Mainteance and Troubleshooting",
                "Course_Desc": "Troubleshoot and fixing L2,3 issues of Canon ImageRUNNER series of products",
                "Course_Status": "Active",
                "Course_Type": "Internal",
                "Course_Category": "Technical"
            },
            "tch004": {
                "Course_Name": "Introduction to Open Platform Communications",
                "Course_Desc": "This course provides the participants with a good in-depth understanding of the SS IEC 62541 standard",
                "Course_Status": "Pending",
                "Course_Type": "Internal",
                "Course_Category": "Technical"
            },
            "tch005": {
                "Course_Name": "An Introduction to Sustainability",
                "Course_Desc": "The course provides learners with the multi-faceted basic knowledge of sustainability.",
                "Course_Status": "Active",
                "Course_Type": "External",
                "Course_Category": "Technical"
            },
            "tch006": {
                "Course_Name": "Machine Learning DevOps Engineer ",
                "Course_Desc": "The Machine Learning DevOps Engineer Nanodegree program focuses on the software engineering fundamentals needed to successfully streamline the deployment of data and machine-learning models",
                "Course_Status": "Pending",
                "Course_Type": "Internal",
                "Course_Category": "Technical"
            },
            "tch008": {
                "Course_Name": "Technology Intelligence and Strategy",
                "Course_Desc": "Participants will be able to gain knowledge and skills on: - establishing technology strategy with technology intelligence framework and tools",
                "Course_Status": "Active",
                "Course_Type": "External",
                "Course_Category": "Technical"
            },
            "tch009": {
                "Course_Name": "Smart Sensing Technology",
                "Course_Desc": "This course introduces sensors and sensing systems. The 5G infrastructure enables the many fast-growing IoT applications equipped with sensors ",
                "Course_Status": "Pending",
                "Course_Type": "External",
                "Course_Category": "Technical"
            },
            "tch012": {
                "Course_Name": "Internet of Things",
                "Course_Desc": "The Internet of Things (IoT) is integrating our digital and physical world, opening up new and exciting opportunities to deploy, automate, optimize and secure diverse use cases and applications. ",
                "Course_Status": "Active",
                "Course_Type": "Internal",
                "Course_Category": "Technical"
            },
            "tch013": {
                "Course_Name": "Managing Cybersecurity and Risks",
                "Course_Desc": "Digital security is the core of our daily lives considering that our dependence on the digital world",
                "Course_Status": "Active",
                "Course_Type": "Internal",
                "Course_Category": "Technical"
            },
            "tch014": {
                "Course_Name": "Certified Information Privacy Professional",
                "Course_Desc": "The Certified Information Privacy Professional/ Asia (CIPP/A) is the first publicly available privacy certification",
                "Course_Status": "Active",
                "Course_Type": "External",
                "Course_Category": "Technical"
            },
            "tch015": {
                "Course_Name": "Network Security",
                "Course_Desc": "Understanding of the fundamental knowledge of network security including cryptography, authentication and key distribution. The security techniques at various layers of computer networks are examined.",
                "Course_Status": "Active",
                "Course_Type": "External",
                "Course_Category": "Technical"
            },
            "tch018": {
                "Course_Name": "Professional Project Management",
                "Course_Desc": "solid foundation in the project management processes from initiating a project, through planning, execution, control,",
                "Course_Status": "Active",
                "Course_Type": "Internal",
                "Course_Category": "Technical"
            },
            "tch019": {
                "Course_Name": "Innovation and Change Management ",
                "Course_Desc": "the organization that constantly reinvents itself to be relevant has a better chance of making progress",
                "Course_Status": "Active",
                "Course_Type": "External",
                "Course_Category": "Technical"
            }
        }
    }

    //Fetch Staff data by staff ID
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


    function createJourney() {
        //Add new learning journey to userID
    }
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);
    function handleOnchange(e){
        forceUpdate()
    }
    const [selected, setSelected] = useState([]);

    //map course id and course names to checkbox group
    const dropdowns = roleData.data[roleid].Role_skills.map(function (skillid) {

        if (skillData.data[skillid]) {
            const courseArray = skillData.data[skillid]['Skill_courses'].map(function (courseid) {
                if (courseData.data[courseid] && !staffData.data['Completed_Courses'].includes(courseid) ) {
                    return {value: courseid, label: courseData.data[courseid]['Course_Name'], hidden:false, type:courseData.data[courseid]['Course_Type']}
                }
                else {
                    return {value: courseid, label: courseData.data[courseid]['Course_Name'], hidden:true}
                }
            })
            return <div className='rounded-lg bg-gray-100 text-center'>
                <h1 className='text-lg font-bold bg-white border p-5 rounded-t-lg'>
                    {skillData.data[skillid]['Skill_name']}
                </h1>
                <SelectedContext.Provider value={{selected, setSelected}}>
                    <CheckBoxGroup options= {courseArray} selected={selected} disabled = {false}/>
                </SelectedContext.Provider>
            </div>
        }
        else {
            return
        }

    })
    return (
        <div className="container-full grid grid-cols-4 grid-rows-6 max-h-screen">
            <div className="col-span-1">
                <StaffSideBar select='Job Roles' />
            </div>

            <div className='col-start-2 col-end-4 my-auto'>
                <h1 className="text-3xl font-medium text-start ml-12">
                    Role Selected - <span className="text-3xl font-bold">{roleData.data[roleid]['Role_name']}</span>
                </h1>
                <h1 className="text-xl font-medium text-start ml-12 mt-4">
                    <span className='font-semibold'>Select the <span className='font-bold'>Courses</span> for the required skills</span>
                </h1>
            </div>
            <div className='col-start-2 col-end-5 row-start-2 row-end-6 rounded-lg  max-h-screen mx-12 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800'>
                <h1 className='p-4 text-xl font-bold text-center sticky top-0 bg-white'>{roleData.data[roleid]['Role_skills'].length} {roleData.data[roleid]['Role_skills'].length == 1?'Skill':'Skills'} Required</h1>
                <div className='grid grid-cols-2 gap-6 mx-6' onChange={handleOnchange}>
                    {dropdowns}
                </div>
            </div>

            <div className="col-start-4 row-start-6 mr-12 my-auto">
                <a class="group flex items-center justify-between rounded-lg border border-gray-600 bg-gray-600 px-5 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring" href="/successpage" onClick={createJourney()}>
                    <span class="font-medium text-white transition-colors group-hover:text-gray-600 group-active:text-gray-500">
                        Create Learning Journey
                    </span>
                    <span class="ml-2 flex-shrink-0 rounded-full border border-current bg-white p-2 text-gray-600 group-active:text-gray-500">
                        <svg width="14" height="14" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 2.33333L17 31.6667" stroke="currentColor" stroke-width="6" stroke-linecap="square" stroke-linejoin="round" />
                            <path d="M31.6666 17L2.33329 17" stroke="currentColor" stroke-width="6" stroke-linecap="square" stroke-linejoin="round" />
                        </svg>

                    </span>
                </a>
            </div>
        </div>

    )
}

export default RolePlanner