import { TwitterIcon } from "../Icons/Twitter";
import { YoutubeIcon } from "../Icons/Youtube";
import { SidebarItem } from "./SidebarItem";
import { Logo } from "../Icons/Logo";
import { useNavigate } from "react-router-dom";
import { LinkIcon } from "../Icons/LinkIcon";
import { AllIcon } from "../Icons/AllIcon";
import { LogoutIcon } from "../Icons/LogoutIcon";


export function Sidebar({onSelect,  onClose}:{onSelect:(contentType:string )=>void; onClose?: () => void}){
      const navigate = useNavigate();
      const handleLogout=()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        navigate("/");
    }
     
    return <div className="w-64 md:min-w-72 ">
                <div className="bg-white h-screen  w-64 md:min-w-72 md:min-h-screen top-0 left-0 absolute fixed border-r border-gray-100 pl-6 ">
                    {/* Close button - only visible on mobile */}
                    <button
                        className="md:hidden text-gray-500 hover:text-gray-700 ml-50 mt-2"
                        onClick={()=>{onClose?.()}}
                    >
                        ✕
                    </button>
                    <div className="flex text-2xl pt-4 pl-2">
                        <div className="pr-2 text-brand-600 pl-2">
                            <Logo/>
                        </div>
                        <span className="text-2xl font-bold font-poppins italic text-gray-900 tracking-tight">
                         Second<span className="text-indigo-500">Brain</span>
                        </span>
                    </div>
                    <div className="pt-4 pl-4">
                        <SidebarItem icon={<AllIcon/>} text="All Content" onClick={()=>onSelect('All')}/>
                        <SidebarItem icon={<TwitterIcon/>} text="Twitter" onClick={()=>onSelect('twitter')}/>
                        <SidebarItem icon={<YoutubeIcon/>} text="Youtube" onClick={()=>onSelect('youtube')}/>
                        <SidebarItem icon={<LinkIcon/>}    text="Links"   onClick={()=>onSelect('link')}/>
                   </div>

                   {/*Settings*/}
                   <div className="absolute bottom-0 left-0 w-full " 
                            >
                        <div className="p-2 m-1 pl-7 flex text-gray-800 bg-gray-200 rounded cursor-pointer hover:bg-gray-300" onClick={handleLogout}>
                              <div className="flex   rounded-lg" >
                                     <LogoutIcon/>
                                    <span className="pl-2">Logout</span>
                        </div>
                                </div>
                            </div>
                        </div>
                   </div>
            
}