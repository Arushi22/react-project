import React, { useState } from 'react'
import ItemList from './ItemList'

function ResturantCategory({data, showItems}) {

    // const [showItems, setShowItems] = useState(false);    

    const handleClicked = () => {
       console.log("damm")
    }
    
  return (
    <div>
        <div className='w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 display: block;'>
            <div className='flex justify-between cursor-pointer' onClick={handleClicked}>
                <span className='font-bold text-lg'>
                    {data.title} ({data.itemCards.length})</span>
                <span>⬇️</span>
            </div>
             {showItems && <ItemList items={data.itemCards} />}
        </div>        
    </div>
    // Accordian body
  )
}

export default ResturantCategory