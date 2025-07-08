import React, {useEffect, useState} from "react";
import {Outlet, useNavigate, useParams} from "react-router-dom";
import axios from "axios";


export default function AddUserForm() {
    const {id} = useParams()
    const navigate = useNavigate();
    const [data , setData] = useState({
        name: "",
        username: "",
        email: "",
        address: {
            street: "",
            city: "",
            suite: "",
            zipcode: ""
        }
    })

    function handleSubmit(e) {
        e.preventDefault()
        axios.post("https://jsonplaceholder.typicode.com/users" , data).then(res=>{
            console.log(res.data)
            navigate("/")
        })
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(res=>{
            setData({
                name: res.data.name,
                username: res.data.username,
                email: res.data.email,
                address: {
                    street: res.data.address.street,
                    city: res.data.address.city,
                    suite: res.data.address.suite,
                    zipcode: res.data.address.zipcode,
                }

            })
        })
    },[])

    return (
        <div className="flex flex-col items-center p-6 w-full">
            <h2 className="text-2xl font-bold text-blue-600 mb-6">
                {id ? "ویرایش کاربر" : "افزودن کاربر"}
            </h2>

            <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-gray-100 p-6 rounded-xl shadow">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="نام و نام خانوادگی"
                        className="px-4 py-2 rounded border border-gray-300 focus:outline-blue-500"
                        value={data.name}
                        onChange={(e) =>setData({...data, name: e.target.value})}
                    />
                    <input
                        type="text"
                        placeholder="نام کاربری"
                        className="px-4 py-2 rounded border border-gray-300 focus:outline-blue-500"
                        value={data.username}
                        onChange={(e) =>setData({...data, username: e.target.value})}
                    />
                    <input
                        type="email"
                        placeholder="ایمیل"
                        className="px-4 py-2 rounded border border-gray-300 focus:outline-blue-500 col-span-1 md:col-span-2"
                        value={data.email}
                        onChange={(e) =>setData({...data, email: e.target.value})}
                    />
                    <input
                        type="text"
                        placeholder="شهر"
                        className="px-4 py-2 rounded border border-gray-300"
                        value={data.address.city}
                        onChange={(e) =>setData({...data, address: {...data.address , city: e.target.value}})}
                    />
                    <input
                        type="text"
                        placeholder="خیابان"
                        className="px-4 py-2 rounded border border-gray-300"
                        value={data.street}
                        onChange={(e) =>setData({...data, address: {...data.address , street: e.target.value}})}
                    />
                    <input
                        type="text"
                        placeholder="ادامه آدرس"
                        className="px-4 py-2 rounded border border-gray-300"
                        value={data.suite}
                        onChange={(e) =>setData({...data, address: {...data.address , suite: e.target.value}})}
                    />
                    <input
                        type="text"
                        placeholder="کد پستی"
                        className="px-4 py-2 rounded border border-gray-300"
                        value={data.zipcode}
                        onChange={(e) =>setData({...data, address: {...data.address , zipcode: e.target.value}})}
                    />
                </div>

                <div className="flex justify-end gap-4 mt-6">
                    <button
                        type="button"
                        className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600"
                    >
                        بازگشت
                    </button>
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
                    >
                        {id ? "ویرایش" : "ذخیره"}
                    </button>
                </div>
            </form>
            <Outlet/>
        </div>
    );
}
