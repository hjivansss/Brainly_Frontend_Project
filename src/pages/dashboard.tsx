

import { Button }from '../components/Button'
import { Card } from '../components/Card';
import { CreateContentModal } from '../components/CreateContentModal';
import { Sidebar } from '../components/Sidebar';
import { PlusIcon } from '../Icons/PlusIcon'
import { ShareIcon } from '../Icons/ShareIcon'
import { useState,useEffect } from 'react';
import { Signup } from '../pages/Signup';
import { Signin } from '../pages/Signin';
import { useContent } from '../hooks/useContent';
import axios from 'axios';
import { BACKEND_URL } from '../config';


export function Dashboard() {
  const [modalOpen,setmodalOpen] = useState(false);
  const {contents,refresh} = useContent();
  {/*Add another on outsideClick hook ,to close the createContantModal */}

  useEffect(()=>{
    refresh()
  },[modalOpen])
  
  return (<div>
            <Sidebar/>
          <div className=" p-4 ml-72">
            <CreateContentModal open={modalOpen} onClose={()=> {setmodalOpen(false);}}/>
            <div className="flex justify-end gap-2 m-4">
                  <Button 
                    variant="secondary"
                    text="Add content"
                    size="md"
                    startIcon={<PlusIcon size="md" />}
                    onClick={()=>{setmodalOpen(true)}}
                  />
                  <Button 
                    onClick={async()=>{
                        const response = await axios.post(BACKEND_URL+"/api/v1/brain/share" , {
                            share : true
                        },{
                            headers:{
                                "Authorization": localStorage.getItem("token")
                            }
                        });
                        const shareUrl=`http://localhost:5173/share/${response.data.hash}`;
                        alert(shareUrl);
                    }}
                    variant="primary"
                    text="Brain Share"
                    size="md"
                    startIcon={<ShareIcon size="md"/>} 
                  />
            </div>
            <div className="flex gap-4 flex-wrap ">
                {/*Iterate through the contents*/}
                {contents.map(({type,title,link})=> <Card 
                            title={title} 
                            type={type}
                            link={link}/>)}
             
            </div>
          </div>
    </div>
  );
}




