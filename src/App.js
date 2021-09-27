import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';
import Translate from './components/Translate';
import Route from './components/Route';

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



export default ()=>{
    return (
    <div>
  
    <Route path='/'>
<Accordion items={items}/>
  </Route>
  <Route path='/list'>
<Search />
  </Route>
    </div>);        

};
    