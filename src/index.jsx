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

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/staffhomepage" element={<StaffHomePage />}></Route>
                <Route path="/staffrolepage" element={<StaffRolePage />}></Route>
                <Route path="/staffskillpage" element={<StaffSkillPage />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/roleplanner/:staffid/:roleid" element={<RolePlanner />}></Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
    , document.getElementById('root'));