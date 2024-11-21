import RestaurantCard,{withPromotedLabel} from "./ResturantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestutant, setFilteredResturant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const ResturantCardPromoted = withPromotedLabel(RestaurantCard);

  // console.log(listOfRestaurants);

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTIN"
    );
    const json = await data.json();

    // console.log(json);
    setListOfRestraunt(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredResturant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

const onlineStatus = useOnlineStatus();
if(onlineStatus === false) return (
  <h1>Looks like you are offline, please check your internet connetcion</h1>
)

  return listOfRestaurants.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
            <input type="text" className="search-box border-solid ring ring-black-500 ring-offset-0" value={searchText} onChange={(e)=>{
              setSearchText(e.target.value);
            }}/>
            <button className="px-4 py-2 bg-green-100 m-4" onClick={()=>{
                const filteredRestutant = listOfRestaurants.filter(
                  (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()) 
                );
                setFilteredResturant(filteredRestutant);

            }}>Search</button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="filter-btn px-4 py-2 bg-pink-100 m-4"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.data.avgRating > 4
              );
              setListOfRestraunt(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap justify-center">        
        {filteredRestutant.map((restaurant) =>{
            return(
                (            
                    <Link 
                    key={restaurant.info.id} to={"/resturants/" + restaurant.info.id}
                    >
                      {/* if the resturant is promoted then add a promoted label to it */
                        restaurant.info.promoted ? <ResturantCardPromoted  resData={restaurant}  /> :
                         <RestaurantCard  resData={restaurant} />
                      }
                     
                    </Link>
                  ))
                  }
            )
        }
      </div>
    </div>
  );
};
export default Body;