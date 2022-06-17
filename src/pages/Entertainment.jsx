import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import LeftSideCom from '../components/LeftSideCom';
import RightSideCom from '../components/RightSideCom';
import "./Home.css"

function Entertainment() {
  
  const [data,setData]=useState([]);
  
  useEffect(()=>{
    axios({
      url:"https://newsapi.org/v2/everything?q=Entertainment&apiKey=5bac53e30f2c401a869eee92662216e8",
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
    <div style={{display:"flex",justifyContent:"space-evenly",flexGap:"10px"}}>
      <div className="scroll" >
        <LeftSideCom/>
      </div>
      <div style={{height:"2000px",overflow:"scroll"}}>
      <div >
            {data?.map((news) => (
              <div style={{ height: "auto", width: "100%", margin: "auto", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", marginTop: "2rem" }} key={news.id}>
                <h3 style={{ color: "teal", marginLeft: "0" }}>{news.source.name}</h3>
                <p style={{ color: 'black', fontWeight: "bold" }}>{news.title}</p>
                <img style={{ height: "300px", width: "100%" }} src={news.urlToImage} />
                <p style={{ fontSize: "20px", color: "gray", marginLeft: "0" }}>Updated on: {news.publishedAt}</p>
              </div>
            ))}
          </div>
      </div>
      <div className='scroll'><RightSideCom/></div>
    </div>
  

    </>
  )
}

export default Entertainment;