import { useState,useEffect } from "react"
export function  AccountUsername(){
    const [username,setUsername]=useState("");
    useEffect(()=>{
        const storedUsername=localStorage.getItem("username");
        if(storedUsername){
            setUsername(storedUsername);
        }
    },[])

    return <div className="text-sm">{username}</div>
}