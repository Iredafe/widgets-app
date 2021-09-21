import React from "react";

const Dropdown = ({options, selected, onSelectionChange}) =>{

    const renderedOptions = options.map((option)=>{
        console.log(selected.value);
        console.log(option.value)
        if(options.value===selected.value){
            return null;
        }
        return (
            <div key={option.value}  
            className="item"
            onClick={()=>onSelectionChange(option)}>{option.label}</div>
        );
    });
    return (<div className="ui form">
        <div className="field">
        <label className="label">Select a Color</label>
        <div className="ui selection dropdown visible active">
            <i className="dropdown icon"></i>
            <div className="text">{selected.label}</div>
            <div className="menu visible transition">
            {renderedOptions}
            </div>
        </div>
        </div>
        </div>)   
};

export default Dropdown;