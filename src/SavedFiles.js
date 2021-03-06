import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function SavedFiles(props) {
    let [savedImages, setSavedImages] = useState([])

    useEffect (function() {
        async function fetchData() {
        let res = await axios.get(`https://ironrest.herokuapp.com/MemeMachine`);
        console.log(res)
        
        setSavedImages(res.data)
        }
        fetchData();
    },[]) 
    const ShowSaved = () =>{
        console.log(savedImages)
        return savedImages.map(eachImage => {
            return <div className='savedItems' id={eachImage._id}><img src={eachImage.meme}/><p>{eachImage.quote}</p></div>
        })
        // let returnVal = '';
        // props.savedImages[item]
        // Object.keys(props.savedImages).map(function(key, index) {
        //     returnVal += <div><img src={props.savedImages[key].meme}/><p>{props.savedImages[key].quote}</p></div>
        //   });          
        //return Object.keys(props.savedImages).map((item,index) => { <div><img src={props.savedImages[index].meme}/><p>{props.savedImages[index].quote}</p></div> })
        //return <p>{props.savedImages.quote}</p>
        return 'hi'
    }
 

    return (
        <div className='savedParent'>
        <Link to='/'>
            <button>⌂</button>
            </Link>
            <ShowSaved />
        </div>
    );
}

export default SavedFiles;