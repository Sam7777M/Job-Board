"use client"
import {createCompany} from "@/app/actions/workosActions";
import {getUser} from "@workos-inc/authkit-nextjs";
import { useEffect, useState } from "react";

const NewCompanyyyPage = () => {
  // const {user} = await getUser();
  const [user, setUser] = useState<any>("")

  const fetchUser = async() => {
    const {user} = await getUser()
    setUser(user)
  }
  useEffect(() => {
    fetchUser()
  },[])
  // async function handleNewCompanyFormSubmit(data:FormData) {
  //   if (user) {
  //     await createCompany(data.get('newCompanyName') as string, user.id);
  //   }
  // }
  const handleSubmit = () => {
    console.log("!!")
  }

  if (!user) {
    'Login to use this page';
  }

  return (
    <div className="container">
      <h2 className="text-lg mt-6">Create a new company</h2>
      <p className="text-gray-500 text-sm mb-2">To create a job listing your first need to register a company</p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          name="newCompanyName"
          className="p-2 border border-gray-400 rounded-md"
          type="text"
          placeholder="company name" />
        <button type="submit" className="flex gap-2 items-center bg-gray-200 px-4 py-2 rounded-md">
          Create company
        </button>
      </form>
    </div>
  );
}

export default NewCompanyyyPage