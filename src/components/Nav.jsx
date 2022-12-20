import React from 'react'
import SearchBar from './SearchBar'
import styles from './Nav.module.css'
export default function (props){
    return(
        <div className={styles.nav}>
            <SearchBar onSearch={props.onSearch}/>
        </div>
    )
}