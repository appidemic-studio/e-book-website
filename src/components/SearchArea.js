import React, { useState, useEffect } from 'react'
import search from '../images/Group 31.png';
import drop from '../images/Component 14 – 2.png';
import Premium from './Premium';

function SearchArea() {

    const [menu,setMenu] = useState(false)
    const [premium,setPremium] = useState(false)
    const [profile, setProfile] = useState(false)


    return (
        <>
        <div className = "header">
            <div className = "search-area">
                    <div className = "menu">
                        <div className = "menu-btn"></div>
                    </div>
                <div className = "categories" onMouseEnter = {() => setMenu(true)} onMouseLeave = {() => setMenu(false)} >
                    <button type = "button" >Browse Categories<img src = {drop} alt = "drop"></img></button>
                    <ul className = {menu ? "genre" : "no-genre"}>
                        <li>Arts & Photography</li>
                        <li>Biography</li>
                        <li>Food & Drink</li>
                        <li>Health & Fitness</li>
                        <li>Sports</li>
                        <li>Romance</li>
                        <li>Fiction</li>
                        <li>Fantasy</li>
                        <li>Travel</li>
                        <li>Children</li>
                    </ul>
                </div>
                <div className = "search-bar">
                    <input type="search" placeholder="Search for Book" />
                    <button type = "submit">Search</button>
                </div>
            </div>
            <div className = "profile-section">
                    <img src = {search} alt = "search" />
                    <button type = "button" onClick = {() => setPremium(!premium)}>Try Premium</button>
                    <div className = "profile" onClick = {() => setProfile(true)}>U</div>
            </div>
        </div>
        <Premium show = {premium} />
        </>
    )
}

export default SearchArea;
