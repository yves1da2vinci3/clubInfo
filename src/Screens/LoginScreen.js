import React, { useState } from 'react'
import {
    Link,useHistory
  } from 'react-router-dom';
  import "./loginScreen.css"
  import Navbar from "../components/Navbar"
  import {auth} from '../firebase';
function LoginScreen() {
  let location = useHistory();
  const [Error,setError] = useState(false);
    const [Email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const SubmitHandler = (e) =>{
      auth.signInWithEmailAndPassword(Email,password)
      .then(userCredential =>{
        // console.log(userCredential);
        localStorage.setItem("LoggedUserId",userCredential.user.uid);
        location.push('/user')
      })
      .catch(err => {
        setError(true);
        setTimeout(() => {
          setError(false)
        }, 5000);
        console.log(err.message)
      })
      e.preventDefault();
    }
    return (
      <>
           <Navbar />
        <div className="flex absolute flex-row   justify-center w-full h-full ">
            <div className="md:flex hidden  flex-col items-center justify-center  relative w-1/2 bg-blue-700">
            <h1 className="font-serif font-bold text-white capitalize sm:text-2xl lg:text-5xl"> <span className='border-b-4 border-white'>Bienvenue</span> sur notre plateforme</h1>
            <p className='mt-8 ml-1 text-3xl font-semibold text-white '> comme vous le savez certainement,cette plateforme abrite le concours. </p>
            <div className=' border-4 border-white rounded-full hover:border-gray-300'> <h1 className='m-4 text-3xl font-semibold text-white hover:text-gray-300'>En savoir plus</h1></div>            
            </div>
            <div className="flex flex-col items-center   justify-center  w-full md:w-1/2 bg-white">
              {Error && <h1 className=' bg-red-400 text-2xl text-red-700 p-2 border-solid border absolute top-0  '>verifier vos informations saisies s'il vous plait</h1>}
                    <h1 className="md:top-0 md:pt-3 mx-6 mb-5 text-5xl font-semibold uppercase ">dsc-platfeforme</h1>
                    <h1 className="my-7 ml-12 text-4xl font-semibold text-center ">Page <span className='border-b-4 border-blue-600'>de </span>connexion</h1>
                    <form className="flex flex-col " onSubmit={SubmitHandler}>
                        <input type="email" value={Email} onChange={(e) => setEmail(e.target.value) } className="h-16 my-4 ml-6 text-3xl font-semibold text-center border-b-4  focus:outline-none focus:border-blue-600 focus:ring-opacity-50 " placeholder="entrer votre email"  required />
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="h-16 my-4 ml-6 text-3xl font-semibold text-center border-b-4  focus:outline-none focus:border-blue-600 focus:ring-opacity-50 " placeholder="entrer votre mot de passe"  />
                        <input type='submit'  id="btnsubmit"
                        className="md:h-48 h-72 md:p-2  self-center text-4xl font-semibold text-center cursor-pointer text-white bg-blue-600 rounded-full shadow input x hover:bg-blue-800 mt-9"
                         value="se connecter"  />   
                    </form>
                    <a className=" text-3xl mt-4 border-opacity-0 hover:border-opacity-100 border-b-2 hover:border-blue-400 " href="#">Mot de passe oubllie !</a> 

            </div>
        </div> 
        </>
    )
}

export default LoginScreen
