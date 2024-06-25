import React from 'react'
import CardStyle from './CardStyle';
function Card(props) {
  const arr=props.data;
  const image=props.img;
  const newsLink=props.link;
  var news=[];
  var count=0;
  // for(let i=0;i<props.total;i++){
  //   news[i]=arr[i];
  // }
  arr.map((e)=>{
    if(count<props.total){
    news.push(e);
    count+=1;}
  })
  var count=0;
    return (
    <div>
      <div className='text-5xl text-red-600 font-bold mx-8 my-10'>{props.title} News</div>
        <div className='grid grid-cols-3 gap-0'>
        {news.map((item)=>{
          count+=1;
          
          return(
            <div className='mx-20 my-10 text-1xl  '>
              <CardStyle  link={item.url} item={item.description} img={item.urlToImage} author={item.author}/>
            </div>
          )
        })}
        </div>
    </div>
  )
}

export default Card
