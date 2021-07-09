import React, { useEffect } from 'react'
import '../homepage.css'
import '../style.css';
import {
  Link, useHistory
} from 'react-router-dom';
import './homeScreen.css';
import  {auth} from '../firebase';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
function HomeScreen() {
  let location = useHistory()
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((Authuser) => {
        console.log(Authuser);
        if(Authuser){
          location.push('/user');
        }
    })
    return unsubscribe;
  },[]) 
  // let slideParent =document.getElementsByClassName('slidingVertical');
  // let children = slideParent.childNodes;
  // let i = 2;
  //  setInterval(function(){
  //    if(i === 0){
  //      i=2;
  //    }
  //     children[0].style.display ='none';
  //     slideParent.setAttribute('className','animate__backInDown animate__animated animate__bounce animate__delay-2s');
  //     i -= 1;
  // }, 500);
    return (
     <div className='flex flex-col ParentContainer '> 
     <Navbar />
        <div className="container flex flex-row md:items-center md:justify-center flex-1 boxContainer ">
          <div className='flex flex-col items-center justify-center  md:w-1/2 h-full pt-32 pl-24 '>
          <h1 className=' md:pt-2 mb-12 text-5xl md:text-6xl mr-auto font-bold capitalize '>la <span className='text-blue-600'>plateforme</span> qui abrite les challenges <span className='text-blue-600'>informatiques</span>   en cote d'ivoire</h1>
               <h1 className='mb-12 md:ml-4 text-3xl font-semibold '>Sur challengeInfo.ci , les écoles,les startups et entreprises  proposent des défis.</h1>
               <div className='flex flex-col justify-center items-center mr-auto md:flex-row md:mt-2  mb-4 md:justify-evenly'>
               <div className='mt-8  mr-4 bg-blue-500 rounded-lg hover:bg-blue-700 '><h1 className='m-5 text-3xl font-bold text-center text-white '>Touver votre challenge</h1></div>
               <div className='mt-8 bg-white rounded-lg ring-2 ring-blue-300'><h1 className='m-5 text-3xl font-bold text-center text-blue-500 '>rejoindre votre challenge</h1></div>
               </div>
          </div>
          <div className='md:flex hidden flex-col mr-72 w-1/2 '>
            <div className='relative  flex imgdiv ' >
            <img alt="" className="absolute object-scale-down InnerImg block1 challenge" src="https://cdn.fs.agorize.com/resize=fit:crop,width:725/output=format:jpg,strip:true,compress:true/yAb7mvAYRsSl9RCUIb8A"/>
          <img alt="" className="absolute object-scale-down w-1/4 imgpurple block1 shape3 animate__animated animate__delay-1s animate__zoomIn" src="https://cdn.filestackcontent.com/uX9vGTZRT0WyCZ9IpuRP"/>
          <img alt="" className="absolute object-scale-down w-2/4 imgyellow block1 shape2 animate__animated animate__delay-1s animate__zoomIn" src="https://cdn.filestackcontent.com/bJ0igPiTjppWsMHDOSAg"/>
          <img alt="" className="absolute object-scale-down w-2/4 imggreen block1 shape4 animate__animated animate__delay-1s animate__zoomIn" src="https://cdn.filestackcontent.com/kKxPVCRTMm8YFiRusRhT"/>
          <img alt="" className="absolute object-scale-down w-2/4 imgred block1 shape1 animate__animated animate__delay-1s animate__zoomIn" src="https://cdn.filestackcontent.com/DxZoy3wFTfe1xwjetY6F"/>
         <img  className='absolute computerImg ' src='https://cdn.filestackcontent.com/1gOvbJcVRBidsSNPvlaz' alt="image d'un oridnateur" />
         </div>
          </div>
            
        </div>
        <div className='bg-gray-200 h-auto flex flex-col pb-24 '>
        <h1 className="caption flex  text-3xl md:text-6xl  text-center mt-8 self-center ">Nos challenges pour <span className="text ml-4" style={{color: 'rgb(5, 192, 151)'}}>développeurs</span>
                    </h1>
                    <div  className='flex flex-row flex-wrap justify-around  mt-24 flex-1'>
                       <div className=' flex flex-col rounded-2xl bg-white shadow-2xl card w-4/12'>
                          <div className=' flex '>
                        <img src='https://www.reachcambridge.com/wp-content/uploads/2019/09/rc-comp-sci@2x.png ' className='object-cover h-96 w-full rounded-r-2xl rounded-l-2xl'/>
                          </div>
                          <div className='flex-col flex ml-5'>
                              <h1 className='text-4xl mt-12 text-gray-500'>Esatic</h1>
                              <h1 className='text-4xl mt-4   text-black font-semibold'>Hackathon </h1>
                              <div className='bg-blue-400 rounded-md mt-5 w-3/12'>
                                <h1 className='text-center text-xl p-2  font-bold text-white'>Etudiant</h1>
                              </div>
                              <h1 className='text-2xl mt-4 mb-8  text-black '>Cette competition va opposer des equipes <br/>de maximun trois personnes. </h1>
                          </div>
                          
                       </div>
                       <div className=' flex flex-col rounded-2xl bg-white shadow-2xl card w-3/12'>
                          <div className=' flex '>
                        <img src='https://www.adobe.com/content/dam/cc/us/en/products/xd/xd-social-share-1200x800.jpg ' className='object-cover h-96 w-full rounded-r-2xl rounded-l-2xl'/>
                          </div>
                          <div className='flex-col flex ml-5'>
                              <h1 className='text-4xl mt-12 text-gray-500'>Esatic</h1>
                              <h1 className='text-4xl mt-4   text-black font-semibold'>Adobe Training </h1>
                              <div className='bg-blue-400 rounded-md mt-5 w-3/12'>
                                <h1 className='text-center text-xl p-2  font-bold text-white'>Etudiant</h1>
                              </div>
                              <h1 className='text-2xl mt-4 mb-8  text-black '>Cette competition va opposer des equipes <br/>de maximun trois personnes. </h1>
                          </div>
                          
                       </div>
                       <div className=' flex flex-col rounded-2xl bg-white shadow-2xl card w-3/12'>
                          <div className=' flex '>
                        <img src='https://actualiteinformatique.fr/wp-content/uploads/2020/03/Definition-Data-Science.png ' className='object-cover h-96 w-full rounded-r-2xl rounded-l-2xl'/>
                          </div>
                          <div className='flex-col flex ml-5'>
                              <h1 className='text-4xl mt-12 text-gray-500'>Esatic</h1>
                              <h1 className='text-4xl mt-4   text-black font-semibold'>Data Science Tour </h1>
                              <div className='bg-blue-400 rounded-md mt-5 w-3/12'>
                                <h1 className='text-center text-xl p-2  font-bold text-white'>Etudiant</h1>
                              </div>
                              <h1 className='text-2xl mt-4 mb-8  text-black '>Cette competition va opposer des equipes <br/>de maximun trois personnes. </h1>
                          </div>
                          
                       </div>
                    </div>
                    <div className='flex flex-row justify-center'>
                    <div className='   w-auto md:w-2/12 cursor-pointer mt-8  md:mr-4 bg-blue-600 rounded-lg hover:bg-blue-700 '><h1 className='m-5 text-lg md:text-xl font-semibold shadow-sm text-center text-white '>Voir tous les challenges</h1></div>
                    </div>
                    
        </div>
        
        <Footer />
     </div>    
    )
}

export default HomeScreen
