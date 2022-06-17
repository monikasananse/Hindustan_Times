import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';


function RightSideCom() {
  
  const [data,setData]=useState([]);
  
  useEffect(()=>{
    axios({
      url:"https://newsapi.org/v2/everything?q=technology&apiKey=81cd23c204f349be81345237249f7737",
      method:"GET"
    })
    .then((res)=>{
      setData(res.data.articles)
    })
    .catch((err)=>{
      console.log("err",err);
    })
  },[])
  console.log(data);
  return (
    <>
    {/* <h3 style={{color:"teal"}}>Hindustan times</h3> */}
    {data?.map((news)=>(
      <div style={{height:"30%",width:"100%",marginLeft:"2%",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",marginTop:"2rem"}} key={news.id}>
        <h3 style={{color:"teal",marginLeft:"0"}}>{news.source.name}</h3>
        <p style={{color:'black',fontWeight:"bold"}}>{news.title}</p>
        
        <p style={{fontSize:"20px",color:"gray",marginLeft:"0"}}>Updated on: {news.publishedAt}</p>
        </div>
      
    ))}

    </>
  )
}

export default RightSideCom;