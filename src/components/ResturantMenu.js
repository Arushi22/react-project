import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// import { MENU_API } from "../utils/constants";
import userResturantMenu from "../utils/useResturantMenu";
import ResturantCategory from "./ResturantCategory";

const ResturantMenu = () => {
    // const [resInfo, setResInfo] = useState(null);    
    const {resId} = useParams();
    
    const resInfo = userResturantMenu(resId);

    const [showIndex, setShowIndex] = useState(0);

    if(resInfo === null) return <Shimmer />

    const {name, cuisines} = resInfo?.cards[2]?.card?.card?.info;
    const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    
    // console.log("itemcards",resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c) => 
        c?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    return(
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name} </h1>
            <h2 className="font-bold text-lg">{cuisines.join(",")}</h2>
            {/* categories accordians */
                categories.map((category, index) => 
                    // Controlled component
                    <ResturantCategory 
                        key={category?.card?.card?.title} 
                        data={category?.card?.card} 
                        showItems = {index === showIndex ? true : false}
                        setShowIndex={()=> setShowIndex(index)}
                        /> 
                    )      
            }
        </div>
    )
}

export default ResturantMenu;