import React, {useState} from 'react';
import styles from './Search.module.css';

const Search = (props) =>{

    const onSubmit = (e) =>{
        e.preventDefault();
        props.onSearch(Input);
    }

    const [Input, setInput] = useState('');
    return(
        <form className = {styles.search} onSubmit = {(e) => onSubmit(e)} >
            <input className = {styles.input} type = 'text'
            placeholder = 'Enter City/Country Name' 
            value = {Input}
            onChange = {(e) => setInput(e.target.value)}/>
            <button className = {styles.button} type = 'submit'><i className="fa fa-search"></i></button>
        </form>
    )
}

export default Search;