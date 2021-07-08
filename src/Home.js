import axios from 'axios';
import React,{ useEffect, useState, Component} from 'react';
import { Link, Switch, Route } from 'react-router-dom'
import './App.css';
import ApiCall from './ApiCall';
import ReturnText from './ReturnText';
import SavedFiles from './SavedFiles';
import { render } from '@testing-library/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home(props) {
 let [memeImg, setMemeImg] = useState('')
 let [allMemes, setAllMemes] = useState('')
 let [allText, setAllText] = useState('')
 let [savedImages, setSavedImages] = useState([])

 const notify = () => toast.dark("(=◉ᆽ◉=)   Saved to favorites!");
//  let showSaved = false;

  // useEffect(async function () {
  //   let res = await axios.get(`https://api.imgflip.com/get_memes`)
  //     setMemeImg(res.data.message)
  // }, [])
  
  // const saveMeme = async () => {
  //   let res = await axios.post(`https://api.imgflip.com/caption_image`, { imgUrl: memeImg })
  // }
  
  function refreshPage() {
    window.location.reload(false);
  }
  // function showSavedClicked() {
  //   console.log(showSaved)
  //   if (!showSaved){showSaved = true;}
  //   else {
  //     showSaved = false;
  //   }
  //}
    async function saveMeme() {
    console.log(allMemes, allText)
    let res = await axios.post('https://ironrest.herokuapp.com/MemeMachine',{quote:allText.quote, meme:allMemes})
  }

  return (
    <div className='HomeMain'>
    <h1>Meme Machine</h1>
    <div className="MemeAndQuote">
    <div className="Meme">
    <ApiCall allMemes={allMemes} setAllMemes={setAllMemes}/>
    <ReturnText allText={allText} setAllText={setAllText}/>
    </div>
    {/* <div className="Quote">
    <ReturnText allText={allText} setAllText={setAllText}/>
    </div> */}
    </div>
    <div className="Buttons">
    <div className="saveButton"><button 
      onClick={() => {
          saveMeme();
          notify();
        }}>Save</button> 
    <ToastContainer autoClose={2000} />
    </div>
    <div className="Refresh">
      <button onClick={refreshPage} >↺</button>
    </div>
    <div className="Saved">
    <Link to="/saved">
      <button>🗀</button>
      </Link> 
    </div>
    </div>
    {/* <div className="KanyeHead">
    <img src="https://64.media.tumblr.com/tumblr_m33zy6VrLb1rue873o1_r1_400.png" />
    </div> */}
    {/* <div className='SavedImages'>
      <SavedFiles savedImages={savedImages} setSavedImages={setSavedImages} />
    </div> */}
    </div>
  );
}


export default Home;
