import StaffSideBar from "../components/StaffSideBar"

const StaffHomePage = () => {
    return (
        <div className="container grid grid-cols-4">
            <div className="col-span-1">
                <StaffSideBar select='Learning Journey'/>
            </div>
            <div className="col-span-3">
                
            </div>
            
        </div>
    )
}

export default StaffHomePage