import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

function layout() {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Navbar />
                <main className="flex-1 p-4 overflow-auto bg-gray-100">
                    <Outlet />
                </main>
            </div>

        </div>

    )
}

export default layout