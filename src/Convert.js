import axios from "axios";
import React, {useState, useEffect} from "react";

const Convert=({language, text})=>{
const [newText, setNewText]=useState('')
    useEffect(()=>{
        axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
            params:{
                q:text,
                target:language.value,
                key:'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
            }
        })
    },[language, text]);

return <div/>
}

export default Convert;