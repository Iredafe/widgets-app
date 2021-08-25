import React from 'react';
import Accordion from './components/Accordion';

const items =[
    {
        title: 'What is React',
        content: 'React is  a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library'
    },
    {
        title: 'How do you i=use React',
        content: 'By creating reusable components'
    }
]

export default ()=>{
    return (<div>
        <Accordion items={items}/>
    </div>);        

};
    