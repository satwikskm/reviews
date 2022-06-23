import React from 'react'
import data from '../data'
import { useState } from 'react'
import './reviews.css'
import { 
    BsArrowRight,
    BsArrowLeft,
    BsBuilding,
    BsFillChatLeftQuoteFill

 } from 'react-icons/bs';



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

    setInterval(()=>{carosol()},20000)
   
    
  return (
      
    <div className='card'>
        
       
        <span className="top-icon"><h1><BsFillChatLeftQuoteFill /></h1></span>
        
        <img src={avatar} alt="" />
        <div className="info">
        <h2>{name}</h2>
        <h3>{designation}</h3>
        <h4><BsBuilding />{location}</h4>
       
        </div>
        
        
        
       <p>{readMore? `${message}`:`${message}`+`${lorem}`}</p>
       {console.log(readMore)}
       {/* <button className="read-more"onClick={()=>{!readMore?setReadMore(true):setReadMore(false)}}>Read More</button> */}
        <h3 className='rating'>{rating}</h3>
        <div className="navigation">
        <button className="button-nav" onClick={LeftNav}><BsArrowLeft /></button>
        <button className="button-nav" onClick={RightNav}><BsArrowRight /></button>

        </div>
        
        
    </div>
  )
}

export default Reviews