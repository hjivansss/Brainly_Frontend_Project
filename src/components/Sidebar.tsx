import { TwitterIcon } from "../Icons/Twitter";
import { YoutubeIcon } from "../Icons/Youtube";
import { SidebarItem } from "./SidebarItem";
import { Logo } from "../Icons/Logo";

export function Sidebar(){
    return <div>
                <div className="bg-white min-w-72 min-h-screen top-0 left-0 absolute fixed border-r border-gray-100 pl-6 ">
                    <div className="flex text-2xl pt-8 pl-2">
                        <div className="pr-2 text-brand-600 ">
                            <Logo/>
                        </div>
                        Brainly
                    </div>
                   <div className="pt-4 pl-4">
                        <SidebarItem icon={<TwitterIcon/>} text="Twitter"/>
                        <SidebarItem icon={<YoutubeIcon/>} text="Youtube"/>
                    </div>
                </div>
           </div>
}