import React from 'react';
import youtubeIcon from '../images/icon-youtube.png';

function Head() {
  return (
    <div className='grid grid-flow-col'>
      <div className="flex">
        <img 
        className='h-8'
        src='https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png' />
        <a target="_blank" href="https://icons8.com/icon/19318/youtube">YouTube</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
      </div>
      <div>
        <input type='text' />
        <button>Search</button>
      </div>
      <div>
        <img
        className='h-8'
        src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' />
      </div>
    </div>
  )
}

export default Head