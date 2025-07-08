import React, {useEffect, useState} from "react";
import {Link, Route, Routes} from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';


export default function UserTable() {
    const [users , setUsers] = useState([])
    const [search, setSearch] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(res=>{
            setUsers(res.data)
            setSearch(res.data)
        }).catch(err=>{
            console.log(err)
        })
    }, [])
    const DeleteItem = (itemid) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                let newUser = users.filter(t => t.id !== itemid)
                setUsers(newUser)
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }

    const handleSearch = (e) => {
        setUsers(search.filter(t=>t.name.includes(e.target.value)));
    }



    return (
        <>
            <div className="flex items-center gap-2">
                <input
                    type="text"
                    placeholder="جستجو..."
                    className="px-3 py-2 border border-gray-300 rounded-md"
                    onChange={handleSearch}
                />
                <button className="bg-white border border-gray-300 px-4 py-2 rounded-md shadow">
                    جستجو
                </button>
            </div>
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow">
                <thead className="bg-gray-100 text-right">
                <tr>
                    <th className="px-4 py-2">#</th>
                    <th className="px-4 py-2">نام</th>
                    <th className="px-4 py-2">نام کاربری</th>
                    <th className="px-4 py-2">ایمیل</th>
                    <th className="px-4 py-2">عملیات</th>
                </tr>
                </thead>
                <tbody>
                {users.map(t=>(
                    <tr key={t.id} className="border-t">
                        <td className="px-4 py-2">{t.id}</td>
                        <td className="px-4 py-2">{t.name}</td>
                        <td className="px-4 py-2">{t.username}</td>
                        <td className="px-4 py-2">{t.email}</td>
                        <td className="px-4 py-2 flex gap-3">
                            <button onClick={()=>DeleteItem(t.id)} className="text-red-500 text-xl">🗑️</button>
                            <Link to={`/UserAdd/${t.id}`}>
                                <button className="text-yellow-500 text-xl">✏️</button>
                            </Link>
                        </td>
                    </tr>

                ))}
                </tbody>
            </table>
        </div>
        </>
    );
}
