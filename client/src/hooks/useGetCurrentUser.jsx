
import axios from "axios";
import React, { useEffect } from 'react'

function useGetCurrentUser() {
  useEffect(()=> {
    const getCurrentUser=async()=>{
        try{
            const result = await axios.get(`${serverUrl}/api/auth/me`,{withCredentials:true})
            console.log(result)
        }catch(error){
            console.error("Error fetching current user:", error)
        }
    }
        getCurrentUser()
    },[])

}

export default useGetCurrentUser
