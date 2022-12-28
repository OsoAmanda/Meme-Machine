import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SavedFiles(props) {
    let [savedImages, setSavedImages] = useState([])

    useEffect (function() {
        // async function fetchData() {
        function fetchData() {
        // let res = await axios.get(`https://ironrest.herokuapp.com/MemeMachine`);
        // console.log(res)
        
        // setSavedImages(res.data)
        let res = JSON.parse(window.localStorage.getItem('memes'));
        setSavedImages(res)
        }
        fetchData();
    },[]) 
    const ShowSaved = () =>{
        console.log(savedImages)
        if (savedImages == undefined || savedImages.count == 0){
            return <div><p>No Saved Images</p></div>;
        }
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
            <button><FontAwesomeIcon icon={["far", "home"]} /></button>
            </Link>
            <ShowSaved />
        </div>
    );
}

export default SavedFiles;