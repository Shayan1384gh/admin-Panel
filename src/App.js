import React, {useState} from "react";
import Sidebar from "./Sidebar";
import UserTable from "./usertable";
import Post from "./Post";
import Gallery from "./Gallery";
import {BrowserRouter, Link, Navigate, Outlet, Route, Routes} from "react-router-dom";
import AddUserForm from "./Adduser";
import OutletText from "./outlet";


export default function App() {
    const [user , setUser] = useState(true)
    return (
        <div className="bg-white min-h-screen flex font-sans">
            <Sidebar />
            <main className="flex-1 p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-xl font-bold">مدیریت کاربران</h1>
                    {/*<div className="flex items-center gap-2">*/}
                    {/*    <input*/}
                    {/*        type="text"*/}
                    {/*        placeholder="جستجو..."*/}
                    {/*        className="px-3 py-2 border border-gray-300 rounded-md"*/}
                    {/*    />*/}
                    {/*    <button className="bg-white border border-gray-300 px-4 py-2 rounded-md shadow">*/}
                    {/*        جستجو*/}
                    {/*    </button>*/}
                    {/*</div>*/}
                </div>
                <Link to={"/UserAdd"}>
                <button className="bg-green-500 text-white text-2xl w-10 h-10 rounded-full flex items-center justify-center shadow mb-4">
                    +
                </button>
            </Link>
                    <Routes>
                        <Route path={"/Users"} element={user ? <UserTable/> : <Navigate replace to= "/Posts"/>} />
                        <Route path={"/Posts"} element={<Post/>} />
                        <Route path={"/Gallery"} element={<Gallery />}/>
                        <Route path={"/UserAdd"} element={<AddUserForm/>}>
                            <Route path={":id"} element={<OutletText/>}/>
                        </Route>
                        <Route path={"/*"} element={<UserTable/>}/>
                    </Routes>
            </main>
        </div>
    );
}