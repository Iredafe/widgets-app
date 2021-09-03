import axios from 'axios';
import React, {useState, useEffect} from 'react';


const Search =()=>{
   const [term, setTerm]= useState('');

   useEffect(()=>{
       (async () =>{
       await axios('dfskgf');
       })();
    },
    [term]);
 return (
     <div>
         <div className="ui form">
             <div className="field">
                 <label>Enter Search Term</label>
                <input 
                value={term}
                onChange={(e)=>setTerm(e.target.value)}
                className="input"/>
            </div>
         </div>
     </div>
 )
}


export default Search; 