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
    const [language, setLanguage]= useState[0]
return <div>
<Dropdown options={options} selected={language} onSelectedChange={setLanguage}/>
    </div>

}

export default Translate;