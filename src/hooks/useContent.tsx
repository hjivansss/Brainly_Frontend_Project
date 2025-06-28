import { useState} from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useEffect } from "react";
//For fetching contents directly from the backend
export function useContent(){
    const [contents,setContents] = useState([]);

    function refresh(){
        axios.get(BACKEND_URL+"/api/v1/content",{
            headers:{
                "Authorization": localStorage.getItem("token")
            }
        })
        .then((response)=> {
            setContents(response.data.content)
        })
    }

     useEffect(()=>{
            refresh()
            let interval=setInterval(()=>{
                refresh()
            },10*1000)

            //Cleanup
            return()=> {
                clearInterval(interval);
            }
            },[])

    return {contents,refresh};
}