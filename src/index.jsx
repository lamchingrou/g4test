import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Navbar from "./components/navbar"

function Page() {
    return (
        <>
        <div className='container p-5'>
            <div className='container columns-1'>
                <Navbar />
            </div>
            <div className='container columns-4'>
                <Navbar />
            </div>
        </div>
            
        </>
    )

}

ReactDOM.render(<Page />, document.getElementById('root'));