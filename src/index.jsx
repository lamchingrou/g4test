import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Login from './pages/Login.jsx'
import StaffHomePage from './pages/StaffHomePage.jsx'
import StaffRolePage from './pages/StaffRolePage.jsx'
import StaffSkillPage from './pages/StaffSkillPage.jsx'
import RolePlanner from './pages/RolePlanner.jsx'
import LearingJourneySkills from './pages/LearningJourneySkills'
import LearningJourneyCourses from "./pages/LearningJourneyCourses"
import SuccessPage from "./pages/SuccessPage"
// import SkillVerticalTimeline from "./pages/SkillVerticalTimeline"
import AdminRolePage from "./pages/AdminRolePage"
import AdminCoursePage from "./pages/AdminCoursePage"
import AdminSkillPage from "./pages/AdminSkillPage"
import AdminEditRole from './components/AdminEditRole'
import AdminCreateRole from './pages/AdminCreateRole'
import AdminEditSkill from './components/AdminEditSkill'
import AdminViewCourse from './components/AdminViewCourse'

import AdminCreateSkill from './pages/AdminCreateSkill'
import "./global.js"

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<Login />}></Route>
                    <Route use exact path="/staffhomepage"element={<StaffHomePage />}></Route>
                    <Route path="/staffhomepage/:roleid"element={<LearingJourneySkills />}></Route>
                    {/* <Route path="/staffhomepage/:roleid"element={<SkillVerticalTimeline />}></Route> */}
                    <Route path="/staffhomepage/:roleid/:skillid"element={<LearningJourneyCourses />}></Route>
                    <Route path="/staffrolepage/" element={<StaffRolePage />}></Route>
                    <Route path="/staffskillpage/" element={<StaffSkillPage />}></Route>
                    <Route path="/roleplanner/:staffid/:roleid" element={<RolePlanner />}></Route>
                    <Route path="/successPage/:rolename" element={<SuccessPage />}></Route>

                    <Route path="/adminrolepage/" element={<AdminRolePage />}></Route>
                    <Route path="/admincoursepage/" element={<AdminCoursePage />}></Route>
                    <Route path="/adminskillpage/" element={<AdminSkillPage />}></Route>
                    <Route path="/admineditrole/:roleid" element={<AdminEditRole/>}></Route>
                    <Route path="/admineditskill/:skillid" element={<AdminEditSkill/>}></Route>
                    <Route path="/admincreaterole" element={<AdminCreateRole/>}></Route>
                    <Route path="/adminviewcourse/:courseid" element={<AdminViewCourse/>}></Route>
                    <Route path="/admincreateskill" element={<AdminCreateSkill/>}></Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
    , document.getElementById('root'));