import React, {useState, useEffect} from "react";

const Convert=({language, text})=>{
const [newText, setNewText]=useState('')
    useEffect(()=>{
        console.log('New language or text')
    },[language, text]);

return <div/>
}

export default Convert;