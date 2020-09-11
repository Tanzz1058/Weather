import React from 'react';
import styles from './Description.module.css';
import {Link} from 'react-router-dom';

const decsription = (props) =>{
    return(
        <div className = {styles.description}>
           <h1>Explore Weather Conditions across the Globe.</h1>
           <Link to = '/search'><button>Search</button></Link><br/>
           <a href = 'https://github.com/Tanzz1058'><img alt = 'github' className = {styles.image} src = 'https://image.flaticon.com/icons/svg/25/25231.svg'/></a>
        </div>
            
    )
} 

export default decsription;