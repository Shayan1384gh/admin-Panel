import React from "react";
import {Link, NavLink} from "react-router-dom";

export default function Sidebar() {
    return (
        <aside className="w-60 bg-[#1d1f1f] text-white flex flex-col items-center py-6">
            <img
                src="https://i.ibb.co/dDHRFC0/avatar.png"
                className="w-20 h-20 rounded-full border-4 border-white mb-4"
                alt="avatar"
            />
            <ul className="space-y-4 text-lg">
                <li><NavLink to="/Users" className="hover:text-lime-400 block">کاربران</NavLink></li>
                <li><NavLink to="/Posts" className="hover:text-lime-400 block">پست ها</NavLink></li>
                <li><NavLink to="/Gallery" className="hover:text-lime-400 block">گالری</NavLink></li>
                <li><NavLink to="#" className="hover:text-lime-400 block">کارها</NavLink></li>
            </ul>
        </aside>
    );
}


