import React, { useEffect, useState } from 'react'
import Card from './Card';

function Content(props){
  const [data,setData]=useState([]);
  const [newsType,setNewsType]=useState(['sports'])
  const [img,setImg]=useState([])
  const [title,setTitle]=useState('General')
  const [link,setLink]=useState([])
  const [total,setTotal]=useState(35)

  useEffect(()=>{
    let f=fetch(`https://saurav.tech/NewsAPI/top-headlines/category/general/in.json`)
    .then((res)=>{return res.json()})
    .then((value)=>{
      for(let i=0;i<value.totalResults;i++){
        setData(current=>[...current,value.articles[i]]);
      }
    })
    .catch(()=>{
      setData('please refersh the data')
    })
  })
const general=()=>{

  let f=fetch(`https://saurav.tech/NewsAPI/top-headlines/category/general/in.json`)
  .then((response)=>{
    return response.json();
  }).then((value)=>{
    setData([])
    setLink([]) 
    setTotal([value.totalResults])
      for(let i=0;i<value.totalResults;i++){
    setData(current=>[...current,value.articles[i]]);
   
    setTitle('General')
  }
})
  }
  const sports=()=>{
  
    let f=fetch(`https://saurav.tech/NewsAPI/top-headlines/category/sports/in.json`)
    .then((response)=>{
      return response.json();
    }).then((value)=>{
      setData([])
      setLink([]) 
      setTotal([value.totalResults])
        for(let i=0;i<value.totalResults;i++){
      setData(current=>[...current,value.articles[i]]);
      setTitle('Sports')
    }
  })
    }
    const technology=()=>{
  
      let f=fetch(`https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json`)
      .then((response)=>{
        return response.json();
      }).then((value)=>{
        setData([])
        setLink([]) 
        setTotal([value.totalResults])
          for(let i=0;i<value.totalResults;i++){
        setData(current=>[...current,value.articles[i]]);
        setTitle('Technology')
      }
    })
      }
  const health=()=>{
    let f=fetch(`https://saurav.tech/NewsAPI/top-headlines/category/health/in.json`)
  .then((response)=>{
    return response.json();
  }).then((value)=>{
    setData([])
    setLink([])
    setTotal([value.totalResults])
      for(let i=0;i<value.totalResults;i++){
    setData(current=>[...current,value.articles[i]]);
    setTitle('Health')
  }
})
  }
  const Entertainment=()=>{
    let f=fetch(`https://saurav.tech/NewsAPI/top-headlines/category/entertainment/in.json`)
    .then((response)=>{
      return response.json();
    }).then((value)=>{
      setData([]) 
      setImg([])
      setLink([])
      setTotal([value.totalResults])
        for(let i=0;i<value.totalResults;i++){
      setData(current=>[...current,value.articles[i]]);
     
      setLink(current=>[...current,value.articles[i].url]);
      setImg(current=>[...current,value.articles[i].urlToImage])
      setTitle('Entertainment')
    }
  })
  }
  const business=()=>{
    let f=fetch(`https://saurav.tech/NewsAPI/top-headlines/category/business/in.json`)
    .then((response)=>{
      return response.json();
    }).then((value)=>{
      setData([])
      setLink([])
      setTotal([value.totalResults])
        for(let i=0;i<value.totalResults;i++){
      setData(current=>[...current,value.articles[i]]);
      setLink(current=>[...current,value.articles[i].url]);
      setTitle('Business')
    }
  })
  }
  const science=()=>{
    let f=fetch(`https://saurav.tech/NewsAPI/top-headlines/category/science/in.json`)
    .then((response)=>{
      return response.json();
    }).then((value)=>{
      setData([])
      setLink([])
      setTotal([value.totalResults])
        for(let i=0;i<value.totalResults;i++){
      setData(current=>[...current,value.articles[i]]);
      setLink(current=>[...current,value.articles[i].url]);
      setTitle('Science')
    }
  })
  }
  return(

 <div className='bg-gradient-to-br'>
 <button onClick={general} className='w-44 h-10 bg-red-600 text-white mx-10 my-10 rounded-md outline outline-4 outline-offset-2 hover:outline-red-600 '>General</button>
 <button onClick={health} className='w-44 h-10 bg-red-600 text-white mx-10 my-10 rounded-md outline outline-4 outline-offset-2  hover:outline-red-600'>Health</button>
 <button onClick={Entertainment} className='w-44 h-10 bg-red-600 text-white mx-10 my-10 rounded-md outline outline-4 outline-offset-2 hover:outline-red-600'>Entertainment</button>
 <button onClick={business} className='w-44 h-10 bg-red-600 text-white mx-10 my-10 rounded-md outline outline-4 outline-offset-2 hover:outline-red-600'>Business</button>
 <button onClick={science} className='w-44 h-10 bg-red-600 text-white mx-10 my-10 rounded-md outline outline-4 outline-offset-2 hover:outline-red-600'>Science</button>
  <button onClick={technology} className='w-44 h-10 bg-red-600 text-white mx-10 my-10 rounded-md outline outline-4 outline-offset-2 hover:outline-red-600'>Technology</button>

  <Card data={data} img={img} title={title} link={link} total={total}/>
 </div>

  );
}


export default Content
