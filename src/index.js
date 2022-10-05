import React from 'react';
import ReactDOM from 'react-dom';
import Feed from "./feed"
import './index.css'

function Page() {
    return (
        <>
        <div className='container p-5 columns-2'>
            <Navbar />
            <Navbar />
        </div>
            
        </>
    )

}

ReactDOM.render(<Page />, document.getElementById('root'));