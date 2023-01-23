import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import styles from './Nav.module.css'
import { Link } from 'react-router-dom'
export default function (props){
    return(
        <div className={styles.nav}>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <SearchBar onSearch={props.onSearch}/>
        </div>
    )
}