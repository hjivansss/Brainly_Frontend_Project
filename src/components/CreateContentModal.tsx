import { CloseIcon } from "../Icons/CloseIcon";
import { Button } from "./Button";
import { Input } from "../components/Input";
import { useRef } from "react";
import {useState} from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

//Defining enum so that no error is there while typing the strings
enum ContentType{
    Youtube = "youtube",
    Twitter = "twitter"
}
//controlled component(here,both usetate variable are outside the function)
export function CreateContentModal({open,onClose}){
    const titleRef=useRef<HTMLInputElement>();
    const linkRef = useRef<HTMLInputElement>();
    const [type,setType] = useState(ContentType.Youtube);
    

    function addContent(){
     const title = titleRef.current?.value;
     const link =  linkRef.current?.value;

     axios.post(BACKEND_URL+"/api/v1/content",{
        title,
        link,
        type
        
     },{
        headers:{
            "Authorization":localStorage.getItem("token")
        }
     })
      
      onClose();

    }
        return <div>
            {open && 
            <div className="w-screen h-screen bg-slate-400 fixed top-0 left-0 bg-opacity-60 flex justify-center">
                    <div className="flex flex-col justify-center">
                        <span className="bg-white opacity-100 p-4">
                            <div className="flex justify-end cursor-pointer " onClick={onClose}>
                                <CloseIcon/>
                            </div>
                            <div>
                                 <Input reference={titleRef}placeholder={"Title"}/>
                                 <Input  reference={linkRef}placeholder={"Link"}/>
                            </div>
                            <h1>Type : </h1>
                                <div className="gap-1 p-2">
                                    <Button text="Youtube"  size="md" variant={type===ContentType.Youtube ? "primary" : "secondary"} onClick={()=> {setType(ContentType.Youtube)}}/>
                                    <Button text="Twitter"  size="md" variant={type===ContentType.Twitter ? "primary" : "secondary"} onClick={()=>{setType(ContentType.Twitter)}}/>
                                </div>
                            <div className="flex justify-center ">
                                <Button onClick={addContent} size="md" variant="primary" text="Submit" />
                            </div>
                        </span>
                    </div>
            </div>}
        </div>
}

