import { ShareIcon } from "../Icons/ShareIcon";

interface CardProps{
    title: string;
    type:"twitter"| "youtube" |"links";
    link:string;

}

export function Card(props: CardProps) {
    return <>
        <div className="p-4 bg-white-900 rounded-md border border-gray-200 shadow-sm max-w-72 min-h-48 h-max  min-w-72">
                <div className="flex  justify-between "> 
                    <div className="flex items-center text-md "> 
                        <div className=" pr-2  text-gray-500">
                            <ShareIcon/>
                        </div>
                            {props.title}
                    </div> 
                    <div className="flex items-center ">
                        <div className=" pr-2 text-gray-500" >
                            <a href={props.link} target="_blank">
                                <ShareIcon/>
                            </a>
                        </div>
                        <div className=" pr-2  text-gray-500">
                            <ShareIcon/>
                        </div>
                    </div> 
                </div>

                <div className="pt-4">
                        {/*Embedding and Conditionally rendering a Youtube video  */}
                        {props.type ==="youtube" && <iframe className="w-full "  src={props.link.replace("watch?v=","embed/")}
                         title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write;encrypted-media;
                          gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
                          allowFullScreen></iframe>}
                         

                        {/*Embedding twitter post*/}
                        { props.type === "twitter" && <blockquote className="twitter-tweet">
                        <a href={props.link}></a> 
                        </blockquote>}

               </div>   
        </div>
    </>
}

