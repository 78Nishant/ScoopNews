import React from 'react'

function CardStyle(props) {
    const data=props.item;
    const link=props.link;
    const image=props.img;
    const author=props.author ;
    
  return (
    <div className='hover:scale-110 '>
      <a href={link} target='_blank'>
      <div className='h-5 w-3/4 ml-[40px] text-center text-red-600 font-bold'>{author}</div>
    <div className='h-96 w-100%   bg-gradient-to-tl from-red-800 via-red-600 to-red-500  text-white rounded-2xl '>       
      <div className='my-2 flex'><img src={image} className='h-3/5 w-80  mx-5 my-5 border-4 rounded-md border-white' alt=" Sorry unable to load this image"/></div>
      <div className='my-1 mx-2 text-1xl font-light'>{data}<a href={link} target='_blank' className='text-white font-bold '>  Read More...</a></div>
    </div></a>
    </div>
  )
}

export default CardStyle
