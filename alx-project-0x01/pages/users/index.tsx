import Header from "@/components/layout/Header"
import { UserData, UserProps } from "@/interfaces"
import UserCard  from "@/components/common/UserCard";
import React, { useState } from "react";
import UserModal from "@/components/common/UserModal";

export interface UsersProps {
    posts: UserProps[];
}
const Users: React.FC<UsersProps> = ({ posts}) => {
    
    const [isModalOpen, setModalOpen] = useState(false);
    const [user, setUser] = useState<UserData | null>(null);

    const handleAddUser = (newUser: UserData) => {
        setUser({...newUser, id: posts.length + 1});
    }

    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="p-4">
                <div className="flex justify-between">
                    <h1 className=" text-2xl font-semibold">Post Content</h1>
                    <button 
                        onClick={() => setModalOpen(true)} 
                        className="bg-blue-700 px-4 py-2 rounded-full cursor-pointer hover:bg-blue-600 text-white"
                    >
                            Add User
                    </button>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-2">
                    {
                        posts.map(({ id, name, username, email, address, phone, website, company }: UserProps, key: number) => (
                            <UserCard id={id} name={name} username={username} email={email} address={address} phone={phone} website={website} company={company} key={key} />
                        ))
                    }
                </div>
            </main>

                {isModalOpen && (
                    <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
                )}
        </div>
        
    )
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}

export default Users;