import React,{useEffect, useState} from 'react'
import NavUser from '../components/NavUser';
import {auth,storage} from '../firebase';
import './updateProfileScreen.css';
import {useHistory  } from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth'
function UpdateProfileScreen() {
    let location = useHistory(); 
     const  [imageUploaded,setImageUploaded] = useState(false);
    const [userName,setUserName] = useState('');
    const [user] =  useAuthState(auth);
      const [img,setImg]= useState(null);
    useEffect(() =>{
              if(user){
                 setUserName(user.displayName)
              }
    },[])
     const UpdateProfileHandler = () => {
          auth.currentUser.updateProfile({
              displayName: userName
          })
          if(imageUploaded){  
            storage.ref('user/'+user.uid +'/profileImg' )?.delete();
              storage.ref('user/'+user.uid +'/profileImg' ).put(img);
          }
          console.log("mis jour effectue avec success");
          location.push('/user')
          
     }
    return (
        <div  >
            <NavUser />
            <div className="flex  absolute  w-full top-32  justify-center items-center  flex-col ">\
            <h1 className=' text-lg md:text-3xl self-center uppercase font-bold'> mise a jour des infos de l'utilisateur</h1>
            <form className="flex flex-col " onSubmit={UpdateProfileHandler} >
                        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value) } className="h-16 my-12  md:text-3xl font-semibold text-center border-b-4 focus:outline-none focus:border-blue-600 input" placeholder="entrer votre nom d'utilisateur"  required />
                        <input type="file" onChange={(e) => {
                            setImg(e.target.files[0]); 
                            setImageUploaded(true);
                            }} className="h-16  my-12 md:text-3xl font-semibold text-center input  "   />
                        <input type='submit' 
                        className="  md:h-48 p-0 self-center md:p-2  h-12 text-lg md:text-4xl 
                        font-semibold uppercase text-center cursor-pointer text-white bg-blue-600 rounded-full shadow 
                        input  hover:bg-blue-800 mt-9"
                         value="valider"  />   
                    </form>
                </div>
            
        </div>
    )
}

export default UpdateProfileScreen
