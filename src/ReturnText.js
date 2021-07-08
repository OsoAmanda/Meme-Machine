//import React from 'react';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { renderIntoDocument } from 'react-dom/test-utils';


function ReturnText(props) {


    useEffect (function() {
        async function fetchData() {
        let res = await axios.get(`https://api.kanye.rest/`);
        console.log(res)
        props.setAllText(res.data)
        }
        fetchData();
    },[]) 
    
    console.log(props.allText)
    const ShowText = () => {
        if (props.allText['quote']){
        return <p>{props.allText['quote']}</p>
        } else {
          return  'failed'
        }
        
      }
       
    
    
    
    
    return (
        <div>
            <ShowText />
        </div>
    );
}

export default ReturnText;