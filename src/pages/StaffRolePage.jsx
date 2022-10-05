import StaffSideBar from "../components/StaffSideBar"
import SearchInput from "../components/SearchInput"

const StaffRolePage = () => {
    return (
        <div className="container grid grid-cols-4 mx-auto">
            <div className="col-span-1">
                <StaffSideBar select='Job Roles' />
            </div>
            <div className="col-span-3 grid grid-cols-6 pt-6">
                <div className='col-start-1 col-end-3'>
                    <h1 className="text-3xl font-bold text-center">
                        Job Roles
                    </h1>
                </div>
                <div className='col-end-7 col-span-2'>
                    <SearchInput/>
                </div>
            </div>

        </div>
    )
}

export default StaffRolePage