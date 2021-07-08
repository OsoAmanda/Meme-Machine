import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { renderIntoDocument } from 'react-dom/test-utils';


function ApiCall(props) {
console.log(props)

useEffect (function() {
    async function fetchData() {
    let res = await axios.get(`https://api.imgflip.com/get_memes`);
    console.log(res)
    
    props.setAllMemes(res.data['data']['memes'][Math.floor(Math.random()*res.data['data']['memes'].length)]['url'])
    }
    fetchData();
},[]) 

console.log(props.allMemes)
const ShowMemes = () => {
    // if (props.allMemes['success']){
    //return allMemes['data']['memes'].map((meme)=> {return <img src={meme.url}/>})
    return <img src={props.allMemes}/>
    //return <p>{allMemes['data']['memes'][0]['url']}</p>
    // } else {
    //   return  props.allMemes['success']? 'success' : 'fail'
    // }
    
  }

    return (

        <div>
            <ShowMemes />
        </div>
    );
}

export default ApiCall;