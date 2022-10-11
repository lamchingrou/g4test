import React, { useState, createContext } from 'react';
import '../index.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import CourseDescriptionModal from './CourseDescriptionModal';
export const CourseModalContext = createContext({opened:false, name:'', desc:''})
export default function StaffCourseRows() {
    const [modal, setModal] = useState({opened:false, name:'', desc:''})
    //Fetch All Skills
    var skillData = {
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
                "Course_Name": "Innovation and Change Management",
                "Course_Desc": "the organization that constantly reinvents itself to be relevant has a better chance of making progress",
                "Course_Status": "Active",
                "Course_Type": "External",
                "Course_Category": "Technical"
            }
        }
    }

    //Staff Data
    var staffData = {
        "data": {
            "Dept": "Sales",
            "Role": "2",
            "Email": "jack.sim@allinone.com.sg",
            "Completed_Courses": ['COR001'],
            "Completed_Skills": ['1', '2'],
            "Staff_FName": "John",
            "Staff_ID": '130001',
            "Staff_LName": "Sim",
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
                    "Skills": ['1', '2', '3', '4', '5'],
                    "Courses": ['COR001', 'tch019', 'HRD001', 'tch009', 'tch013', 'MGT004'],
                    "Progress": 'Completed'
                },
                {
                    "Role_ID": '3',
                    "Role_name": "Backend Engineer",
                    "Skills": ['1', '2', '3', '4', '5'],
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
        }
    }
    const { roleid, skillid } = useParams()
    let journey = null
    for (let obj of staffData.data['Learning_Journeys']) {
        if (roleid == obj['Role_ID']) {
            journey = obj
        }
    }
    function showDesc(courseName, courseDesc){
        setModal({opened:true, name:courseName, desc:courseDesc})
    }
    const rows = Object.keys(courseData.data).map(function (key, index) {
        if (skillData.data[skillid]['Skill_courses'].includes(key)) {
            return <tr className="hover:bg-gray-200 cursor-pointer h-16" onClick={() => showDesc(courseData.data[key]['Course_Name'],courseData.data[key]['Course_Desc'])}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center" onClick={() => showDesc(courseData.data[key]['Course_Name'],courseData.data[key]['Course_Desc'])}>{courseData.data[key]['Course_Name']}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{courseData.data[key]['Course_Type']}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{courseData.data[key]['Course_Category']}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{courseData.data[key]['Course_Status']}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                    <a className={courseData.data[key]['Course_Status'] == 'Retired' || courseData.data[key]['Course_Status'] == 'Pending' ? "hidden" : "inline-flex items-center rounded-2xl border border-indigo-600 bg-indigo-600 px-2 py-1 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"}
                        href={"/courseRegistration/" + key}>
                        <span className="text-xs font-medium"> Register </span>
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
        }
        else {
            return
        }
    })
    return (
        <tbody className="divide-y divide-gray-200">
            <CourseModalContext.Provider value={{modal, setModal}}>
                <CourseDescriptionModal opened={modal.opened} />
                    {rows}
                </CourseModalContext.Provider>
        </tbody>


    )
}