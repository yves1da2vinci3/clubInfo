import React,{useState,useLayoutEffect} from 'react'
import Navbar from "../components/Navbar";
import {
    Link,useHistory
  } from 'react-router-dom';
import {auth,storage,db} from '../firebase';
import  firebase from 'firebase';
import './SignupScreen.css';
function SignupScreen() {
    let location = useHistory()
    let file ;
  useLayoutEffect(() => {
    auth.onAuthStateChanged(authObject => {
      if(authObject){
        location.push('/user')
      }
    })
  },[]) 
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [repassword,setRePassword] = useState('');
    const [photoUrl,setphotoUrl] = useState();
    const register = () =>{
               auth.createUserWithEmailAndPassword(email,password)
               .then(AuthUser => {
                storage.ref('/user/'+AuthUser.user.uid+'/profileImg').put(photoUrl);
                   AuthUser.user.updateProfile({
                       displayName: name
                   })
                   db.collection("User").doc(AuthUser.user.uid).set({
                     UserId: AuthUser.user.uid ,
                     Name: name,
                     idGroup: ""
                   })
                  
               })
               .catch(err => alert(err.message))
               location.push('/login')
    }
    const Ghandler = (e) =>{
      e.preventDefault();
        let provider = new firebase.auth.GoogleAuthProvider();  // creer un fournisseur google
        auth.signInWithRedirect(provider)
        firebase.auth().getRedirectResult().then(result => console.log(result.user)).catch(err => console.log(err))
    
    }
    return (
        <div>
            <div className='md:flex md:flex-col  formContainer   md:w-full  justify-center m-auto items-center   bg-white border-t-4 shadow-lg border-3'>
               <h1 className=' relative top-12 mb-12 md:justify-items-center text-2xl md:text-4xl font-semibold text-center capitalize '>Page d'enregistrement</h1>
               <div className='flex flex-col items-center justify-between flex-1 w-full topForm'>
               <input type="text"  value={name} onChange={ (e) => setName(e.target.value)} className="h-16 my-5 ml-6 md:text-3xl font-semibold text-center border-b-4 input focus:outline-none focus:border-blue-600 focus:ring-opacity-50 " placeholder="entrer un nom utilisateur"  />
                        <input type="email" value={email} onChange={ (e) => setEmail(e.target.value)} className="h-16 my-5 ml-6 md:text-3xl font-semibold text-center border-b-4 input focus:outline-none focus:border-blue-600 focus:ring-opacity-50 " placeholder="entrer une email"  />
                        <input type="password" value={password} onChange={ (e) => setPassword(e.target.value)}  className="h-16 my-5 ml-6 md:text-3xl font-semibold text-center border-b-4 input focus:outline-none focus:border-blue-600 focus:ring-opacity-50 " placeholder="entrer votre mot de passe"  />  
                        <input type="password" value={repassword} onChange={ (e) => setRePassword(e.target.value)} className="h-16 my-5 ml-6 md:text-3xl font-semibold text-center border-b-4 input focus:outline-none focus:border-blue-600 focus:ring-opacity-50 " placeholder="entrer de nouveau votre mot de passe"  />    
                      <div className='flex flex-row mb-4'><h1 className='md:text-2xl font-semibold text-black mr-2'>choisissez une photo</h1> <input type='file'     onChange={(e) => {
                      file = e.target.files[0];
                         setphotoUrl(e.target.files[0])
                        e.preventDefault()
                      }
                         } /></div>  
                         
            <div className='flex flex-col justify-center items-center md:flex-row  '>
           <div className=" shadow p-2 bg-blue-400 rounded-full mb-7 hover:bg-blue-700 w-60" >
               <h1 className='items-center m-5   text-2xl font-semibold text-center text-white uppercase cursor-pointer' onClick={() => {register() }}>s'enregistrer</h1>
           </div>
           <div className=' self-center  relative bottom-6 md:ml-48'> 
           <h1 className='inline-block m-6 lg:text-2xl font-semibold text-center capitalize sm:text-sm ' >Etes vous deja inscrit ? </h1> 
           <a  className='lg:text-3xl font-bold text-blue-400 border-b-4 border-transparent border-opacity-0 sm:text-sm hover:border-opacity-100 hover:border-blue-400 '> <Link to='/login' > Login</Link></a>  </div>
            </div>
               </div>
             <div className='flex flex-col flex-1 w-full  bottomForm bg-blue-500 ' >
                 <h1 className='self-center block w-16 md:w-24 md:h-24 h-16 pl-5 text-xl md:text-4xl font-bold text-blue-400 uppercase bg-white rounded-full pt-7 or '> ou</h1>
                 <h1 className=' text-xl md:text-3xl font-bold text-center text-white capitalize '>S'enregistrer avec les reseaux sociaux ?</h1>
                 <div className='flex flex-col md:flex-row justify-center  items-center flex-1 h-full'>
                <span onClick={Ghandler}><i className="md:mt-12 mb-24 mt-5 md:mb-14 md:mr-12 text-center text-white hover:text-gray-200 text-6xl fab fa-google"  ></i></span>
                 </div>
             </div>
        </div>
        </div>
    )
}

export default SignupScreen
