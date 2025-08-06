import { BACKEND_URL } from "../config";
import { DeleteIcon } from "../Icons/DeleteIcon";
import { LinkIcon } from "../Icons/LinkIcon";
import { ShareIcon } from "../Icons/ShareIcon";
import { TwitterIcon } from "../Icons/Twitter";
import { YoutubeIcon } from "../Icons/Youtube";
import axios from "axios";
import { useEffect } from "react";
interface CardProps{
    title: string;
    type:"twitter"| "youtube" |"link";
    link:string;
    id:string

}

export function Card(props: CardProps) {

    async function handleDelete(){
        try{
                const res = await axios.delete(`${BACKEND_URL}/api/v1/content/${props.id}`,{
                    headers:{
                        "Authorization": localStorage.getItem("token") || ""
                    }
                });

                alert(res.status=== 200 ? 
                    "Deleted Successfully" :
                    "Deletion failed"
                )
        }catch(error){
            alert("Error");
        }    
    }

    {/* This ensures that whenever a card of type twitter is rendered, the embed script loads and applies the styles and layout properly.*/}
     useEffect(() => {
        if (props.type === "twitter") {
            const script = document.createElement("script");
            script.setAttribute("src", "https://platform.twitter.com/widgets.js");
            script.setAttribute("async", "true");
            document.body.appendChild(script);

            return () => {
                // Clean up to avoid multiple script tags
                document.body.removeChild(script);
            };
        }
    }, [props.type, props.link]);
    return <>
        <div className="p-4 bg-white rounded-md border border-gray-200 shadow-sm  max-w-58 min-w-58 md:max-w-72 md:min-h-48  md:min-w-72">
                <div className="flex  justify-between "> 
                    <div className="flex items-center text-md "> 
                        <div className=" pr-2  text-gray-900">
                            {props.type==="youtube" && <YoutubeIcon/>}
                            {props.type==="twitter" && <TwitterIcon/>}
                            {props.type==="link" && <LinkIcon/>}
                        </div>
                            {props.title}
                    </div> 
                    <div className="flex items-center ">
                        <div className=" pr-2 text-gray-900" >
                            <a href={props.link} target="_blank">
                                <ShareIcon/>
                            </a>
                        </div>
                        <div className=" pr-2  text-gray-500" onClick={handleDelete}>
                            <DeleteIcon/>
                        </div>
                    </div> 
                </div>

                <div className="pt-4">
                        {/*Embedding and Conditionally rendering a Youtube video  */}
                        {props.type ==="youtube" && <iframe className="w-full "  src={props.link.replace("watch?v=","embed/")}
                         title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write;encrypted-media;
                          gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
                          allowFullScreen></iframe>}
                         

                        {/*Embedding twitter post
                        The tweet embed stays within the card width.
                        Any accidental overflow is hidden.*/}
                        { props.type === "twitter" && <div className="max-w-full overflow-hidden">
                         <blockquote className="twitter-tweet w-full">
                         <a href={props.link.replace("x.com", "twitter.com")}></a>
                         </blockquote>
                         </div>}
 
                        
                        { props.type === "link" &&  
                               (<a
                                   href={props.link}
                                   target="_blank" 
                                   rel="noopener noreferrer"
                                   className="text-blue-600 hover:underline break-words">{props.link}
                                </a>)}

               </div>   
        </div>
    </>
}

