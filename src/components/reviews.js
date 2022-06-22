import React from 'react'
import data from '../data'
import { useState } from 'react'

const Reviews = (review) => {
    const [index,setIndex]=useState(0)
    const [readMore, setReadMore]=useState(true)

    // console.log(data[index])
    const {id,name,location,designation,avatar,message,lorem,rating}=data[index]
    const RightNav=()=>{
        console.log("click")
        console.log(index)
        console.log(data.length)
        if(index === data.length-1){
            console.log("Ins")
            
            setIndex(0)
            console.log(index)
        }
        else if(index < data.length){
            setIndex(index+1)
        }
        
    }
    const LeftNav=()=>{
        console.log("click")
        console.log(data.length)
        console.log(index)
        if(index === 0){
            console.log("Ins")
            
            setIndex(data.length -1)
            console.log(index)
        }
        else if(index < data.length){
            setIndex(index-1)
        }
        
    }
    const carosol = () =>{setIndex((index)=>{
        let nexIndex =0
        console.log(index)
        if(index===data.length -1){
            nexIndex =0
            return nexIndex
        }
        else{
            nexIndex = index+1
            return nexIndex
        }
        
    })}

    // setInterval(()=>{carosol()},10000)
   
    
  return (
      
    <div>
       
        <h1>My Review</h1>
        <img src={avatar} alt="" />
        <h2>{name}</h2>
        <h3>{designation}</h3>
        <h4>{location}</h4>
        
        
       <p>{readMore? `${message}`:`${message}`+`${lorem}`}</p>
       {console.log(readMore)}
       <button className="read-more"onClick={()=>{!readMore?setReadMore(true):setReadMore(false)}}>Read More</button>
        <h1>{rating}</h1>
        <button onClick={LeftNav}>Left</button>
        <button onClick={RightNav}>Right</button>
        
    </div>
  )
}

export default Reviews