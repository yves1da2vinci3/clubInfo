import React ,{useEffect,  useState} from "react";
import {auth,db} from "../firebase";
import { v4 as uuidv4 } from 'uuid';
import {useHistory} from 'react-router-dom'
const GroupForm = () => {
    // defintion de la useHistory
    let location = useHistory();
      // reducer poour pouvoir gerer l'addition 
        
      
// defintion de tous les auteres imporatation;
const [number,setNumber]= useState(0);
    const [MemberName, setMemberName] = useState("");
    //defintion  du reducer
 
    const [Members,setMember]= useState([]);
    const [logoUrl,setLogoUrl]= useState("");
    const [AdminName,setAdminName]= useState('');
    const [GroupName,setGroupName]= useState('');
    useEffect(() => {
        auth.onAuthStateChanged((authObj) => {
            setAdminName(authObj.displayName)
        })
    },[logoUrl])

 const DeleteMemberHandler = (Name)  => {
    setMember(Members.filter((memberName) => memberName !== Name));
    if( number < 0){
        setNumber(0);
    }else{
        setNumber(number => number -1);
    }

 }
    const AddMemberHandler = (e) => {
        e.preventDefault();
         setMember(PreviouState => [...PreviouState,MemberName]);
         if( number > 2){
            setNumber(2);
        }else{
            setNumber(number => number +1);
        }
         setMemberName('');
    }
    const showImage = () =>{
       let LogoInput = document.getElementById("logoUrl");
        setLogoUrl(LogoInput.value);
    }
    const CreateGroupHandler = () => {
        // attibuer l'id du groupe a l'admin
        let idGroup = uuidv4();
        db.collection('User').doc(auth.currentUser.uid).update({idGroup:idGroup
        });
        //attribuer l'id gu groupe a tout les membres du groupe
        Members.forEach(membreName  =>  {
                 async  function  getUserData () {
                  return await   db.collection('User').where("Name","==",membreName).get();
               }

                  let UserData = getUserData();
                  UserData.update({idGroup:idGroup});
     
        })  
        // creation du groupe 
        db.collection('group').doc(idGroup).set({
            groupName :GroupName,
            logoUrl :logoUrl,
            adminId: auth.currentUser.uid,
            idGroup : idGroup
        })
             location.push('/user');
    }
    
    return (
            <form id="login" >
                <div className=" h-auto w-full">
                    <img className="object-container h-72 w-full" src= { logoUrl ? logoUrl : "https://cdn.1min30.com/wp-content/uploads/2019/05/Tottenham-.jpg" }  />
                </div>
                <div className=" flex justify-center items-center flex-col ">
                <label for='groupName' className="text-2xl font-semibold">Nom du groupe</label>
                <input value={GroupName} onChange={(e) => setGroupName(e.target.value)} className="border font-bold text-3xl  md:text-2xl h-12 border-transparent rounded border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent md:w-1/3 "   id="groupName" />
                <label for='AdminName' className="text-2xl font-semibold">Admin du groupe</label>
                <input value={AdminName} className="border font-bold text-3xl  md:text-2xl h-12 border-transparent rounded border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent md:w-1/3 "   id="groupName" />
                <label for='groupName' className="text-2xl font-semibold">Logo Url</label>
                <div className="flex  flex-row">
                <input    className=" border font-bold text-3xl  w-2/3 md:text-2xl h-12 border-transparent rounded border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent md:w-full "   id="logoUrl" />
                <button onClick={ () => showImage()} className="bg-indigo-700 font-bold focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm" type="button">
                                appercu
                            </button>
                    
                 
                </div>
                 {/* iboutton nom*/}   
                 <label for='groupName' className="text-2xl font-semibold">Membres du groupe</label> 
                 <div className="flex flex-row">
                <input  value={MemberName} onChange={(e) => setMemberName(e.target.value) }  className=" border md:w-full w-2/3 font-bold text-3xl  md:text-2xl h-12 border-transparent rounded border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent  "   id="member" />
                <button  disabled={number ===2} onClick={AddMemberHandler} 
                className="bg-indigo-700 font-bold focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm" type="button">
                               ajouter
                            </button>
                    
                 
                </div>
               
                </div>
                  <ol id="MemberList">
                         {Members?.map(membre => {
                             return (
                                <div className="flex justify-center flex-row">
                                <li key={uuidv4()} className="w-1/3 text-white bg-blue-600 text-3xl font-bold ">{membre}</li>
                        <button  onClick={ () => DeleteMemberHandler(membre)} className="bg-indigo-700 font-bold focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm" type="button">
                         supprimer
                      </button>
                         </div> 
                             )
                         })}
                            
                              
                      
                  </ol>
                    <div className="container mx-auto w-11/12 xl:w-full">
                        <div className="w-full py-4 sm:px-0 bg-white dark:bg-gray-800 flex justify-end">
                            <button onClick={CreateGroupHandler} className="bg-indigo-700 focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm" type="button">
                                Sauvergarder
                            </button>
                        </div>
                    </div>
                
            </form>
        );
};
export default GroupForm;
