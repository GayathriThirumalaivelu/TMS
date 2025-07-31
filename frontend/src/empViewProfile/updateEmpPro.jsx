import React, {useEffect} from "react";
import { useUserData } from '../userContext';

function UpdateEmpProfile(){

    const { userData } = useUserData();

//   useEffect(()=>{
//     console.log(userData)
//   })

    return(
        <>
            <div>
                <h1>Update Emp Profile</h1>
            </div>
        </>
    )
}

export default UpdateEmpProfile;