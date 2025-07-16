import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {

    const [user, setUser] = useState<UserData>({
        id: 0,
        name: "",
        username: "",
        email: "",
        phone: "",
        
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(user);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
           <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="id" className="block text-gray-700 font-medium mb-2">ID</label>
                        <input 
                            type="number" 
                            id="id"
                            name="id"
                            value={user.id}
                            onChange={handleChange}
                            placeholder="Enter your UserID"    
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            name="name"
                            id="name"
                            value={user.name}
                            onChange={handleChange}
                            placeholder="Enter your Name"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"    
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            name="username"
                            id="username"
                            value={user.username}
                            onChange={handleChange}
                            placeholder="Enter your Username"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"    
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            name="email"
                            id="email"
                            value={user.email}
                            onChange={handleChange}
                            placeholder="Enter your Email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"    
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone">Phone</label>
                        <input 
                            type="text" 
                            name="phone"
                            id="phone"
                            value={user.phone}
                            onChange={handleChange}
                            placeholder="Enter your Phone"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"    
                        />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <button 
                            type="button" 
                            onClick={onClose} 
                            className="px-4 py-2 text-gray-600 hover:text-gray-800 cursor-pointer focus:outline-none"
                        >
                            Cancel
                        </button>
                        <button 
                            type="submit" 
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Add User
                        </button>
                    </div>
                </form>
           </div>
        </div>
    )
}

export default UserModal;