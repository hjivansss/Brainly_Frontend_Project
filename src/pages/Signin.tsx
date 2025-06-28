import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { BACKEND_URL } from "../config";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signin(){

        //Ref and generics fetching input from the input box
    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef= useRef<HTMLInputElement>();
    const navigate = useNavigate(); 
    async function signin(){
            const username = usernameRef.current?.value;
            const password= passwordRef.current?.value;
           
            const response = await axios.post(BACKEND_URL + "/api/v1/signin",{
              
                    username,
                    password
                
            })

            const jwt = response.data.token;
            localStorage.setItem("token",jwt);
            //redirect  to dashboard
            navigate("/dashboard")
    }
    return <div className="h-screen w-screen bg-gray-300 flex justify-center items-center">
                <div className="bg-white rounded  border-gray-100 h-max min-w-48 p-4">
                        <Input reference={usernameRef} placeholder="username"/>
                        <Input reference={passwordRef} placeholder="password"/>
                    <div onClick={signin} className="flex justify-center">
                        <Button loading={false} variant="primary" text="Signin" size="md" fullWidth={true}/>
                    </div>
                </div>
    </div>
}