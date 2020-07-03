import React from 'react';
import {useState} from 'react';

const SearchBar = ({getQuery}) => {
    const [text,setText] = useState('');

    const onChange = (q) => {
        setText(q);
        getQuery(q);
    }
    
    return (
        <section className='search'>
            <form onSubmit={(e)=>{e.preventDefault();return false;}}>
                <input
                type='text'
                className='form-control'
                placeholder='Search Countries'
                value = {text}
                onChange = {(e) => onChange(e.target.value)}
                autoFocus>
                </input>
            </form>
        </section>
    )
}

export default SearchBar
