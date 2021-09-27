import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';
import Translate from './components/Translate';

const items =[
    {
        title: 'What is React?',
        content: 'React is  a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library'
    },
    {
        title: 'How do you use React?',
        content: 'By creating reusable components'
    }
]

const options = [
    {
      label: 'The Color Red',
      value: 'red',
    },
    {
      label: 'The Color Green',
      value: 'green',
    },
    {
      label: 'A Shade of Blue',
      value: 'blue',
    },
  ];

const showAccordion = () => {
  if(window.location.pathname === '/'){
    return <Accordion items={items}/>
  }
}

const showDropdown = () =>{
  if(window.location.pathname==='/dropdown'){
    return <Dropdown/>;
  }
}

export default ()=>{
    return (<div>
  {showAccordion()}
  {showDropdown()}
    </div>);        

};
    