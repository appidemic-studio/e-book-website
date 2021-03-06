import React, { useState } from 'react';
import data from './data';
import rightarrow from "../images/Group 118.png";
import leftarrow from "../images/Component 15 – 2.png";
import { Link } from 'react-router-dom';

export default function ShowCase() {

    const [books,setBooks] = useState(data);

    return (
        <div className = "showcase">
            <div className = "recom">
                <h3>Recommended For You</h3>
                <div id = "hl"></div>
            </div>
            <div className = "library">

                <div className = "previous">
                    <div className = "left-arrow">
                        <img src = {leftarrow} alt = "left-arrow"></img>
                    </div>
                </div>

                <div className = "book-details">
                    {books.map((book) => {
                        const {id,title,author,image} = book;

                        return(
                            <div className = "book-container" key = {id}>
                                <img src = {image} alt = "null" height = "220rem" width = "130rem"></img>

                                <div className = "book-about">
                                    <h2>{title}</h2>
                                    <h3>by {author}</h3>
                                    <p>Lorem dkdfkdfk fkmdkfmdkmfkdmf 
                                        dskdskod dksmdksmd dksdmskm s
                                        dsodo dmsmdsm dkmskm dksmdks
                                        dksmdkms kdmskmd</p>
                                    <div className = "readmore">
                                        <Link to = {`/read/${id}`}>
                                        <button type = "button">Read Book</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                    )})}
                </div>

                <div className = "next">
                    <div className = "right-arrow">
                    <img src = {rightarrow} alt = "right-arrow"></img>
                    </div>
                </div>

            </div>
            
        </div>
    )
}
