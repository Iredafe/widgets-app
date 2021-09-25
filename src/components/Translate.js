import React, {useState} from "react";
import Dropdown from "./Dropdown";

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label:'Arabic',
        value: 'ar'
    },
    {
        label:'hindi',
        value:'hi'
    }
]

const Translate=()=>{
    const [language, setLanguage]= useState(options[0]);
    const [text, setText] = useState('');
return (
<div>
    <input value={text} onChange={(e)=>setText(e.target.value)}/>
<Dropdown
label="Select a Language"
options={options} 
selected={language} 
onSelectedChange={setLanguage}/>
</div>)

}

export default Translate;