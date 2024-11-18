import React from 'react';
import { CDN_URL } from '../utils/constants';

function ItemList({items}) {
  return (
    <div>
            {items.map(item => (
                <div key={item.card.info.id} className='p-2 m-2 border-gray-400 border-b-2 text-left flex space-between'>                    
                    <div> 
                        <div className='py-2'>
                            <span className='text-bold'>{item.card.info.name}</span>
                            <span>₹{item.card.info.price}</span>
                        </div>
                        <p className='text-xs'>{item.card.info.description}</p>
                    </div>
                    <div className='w-5/12'>                        
                        <div className='absolute'>
                            <button className='bg-black text-white shadow-lg rounded-lg p-2 mx-5 '>Add +</button>
                        </div>
                        <img src={CDN_URL + item.card.info.imageId}  className='w-40 h-45 object-cover'/>
                    </div>
                </div>
            ))}
    </div>
  )
}

export default ItemList