const skillData = {
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

const skillsAdded = {
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
const roleData = {
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

const staffData = {
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
export {skillData, skillsAdded, roleData, staffData}