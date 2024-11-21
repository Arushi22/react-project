import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const userResturantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null); 
    // fetchData
    useEffect(()=>{
            fetchMenu();
            // console.log(resId)
        },[])
        

    const fetchMenu = async () => {
        const data = await fetch(`${MENU_API}${resId}`); //api
        const json = await data.json();
        // console.log("json data",data);
        setResInfo(json.data);
        // console.log("Full API Response:", resInfo);
    }

    return resInfo
}

export default userResturantMenu;