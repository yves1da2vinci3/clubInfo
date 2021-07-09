import React,{useEffect,useLayoutEffect,useState} from 'react'
 import { auth,db } from '../firebase';
 import {useAuthState} from 'react-firebase-hooks/auth';
import  GroupForm from '../components/GroupForm';
function GroupScreen() {
 // defintion des states 
  const [groupName,setGroupName]= useState('');
  const [groupLogo,setGroupLogo]= useState('');
        const [idGroup,setIdGroup]= useState('');
        const [LoggedOff,setLoggedOff] = useState(false);
       const [isAdmin,setIsAdmin]= useState(false);
    const [haveGroup,setHaveGroup] =  useState(false);
    const [DonthaveGroup,setDontHaveGroup] =  useState(false);
  
  useEffect(() =>{
   

      //retourne l'user 
      db.collection('User').doc(auth.currentUser.uid)
      .get().then((doc) => { 
        console.log(doc.data());
        localStorage.setItem("IdGroup",doc.data().idGroup) // pour recuperer l'id groupe d'un nouvel utilisateur
 
      })
      let IdGroup = localStorage.getItem("IdGroup");

     
      if(IdGroup === ""){ 
        setHaveGroup(false);
            setDontHaveGroup(true);
        }else{
          setHaveGroup(true);
          setDontHaveGroup(false);
         db.collection("group").doc(IdGroup?.toString()).get().then((doc) => {
           // Mettre mes infos dans un store
          localStorage.setItem('GroupName',doc.data().groupName);
        localStorage.setItem('GroupLogoUrl',doc.data().logoUrl);
        localStorage.setItem('AdminId',doc.data().adminId);
        localStorage.setItem("idGroup",doc.data().idGroup);
         });
          let AdminId =  localStorage.getItem("AdminId");
         if(auth.currentUser.uid === AdminId){
          setIsAdmin(true);
        }
         }
         } ,[])
    return (

      <div>
         {haveGroup && <h1 className="text-5xl font-bold text-black"> j'ai un groupe,formulaire sa mere</h1>}
         {DonthaveGroup && <GroupForm /> }
         {isAdmin  && <h1 className="text-5xl font-bold text-blue-500"> Administrateur,wesh ma guele</h1> }
           
         
          </div>
    )
}

export default GroupScreen
