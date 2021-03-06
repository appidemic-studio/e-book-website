import React, {useState, useEffect} from 'react';
import data from '../components/data';
import fullstar from '../images/iconfinder_star-4_47965.png';
import halfstar from '../images/iconfinder_star-2_47963.png';
import play from '../images/Polygon 6.png';
import add from '../images/+.png';
import share from '../images/Group 68.png';
import heart from '../images/heart.png';

export default function ReadBook({ match }) {

    const [book,setBook] = useState(data)

    useEffect(() => {
        var i = fetchData();
        setBook(i);
    }, [])

    const fetchData = () => {
        var d;
        for (d in data) {
            if (d === match.params.id){
                return data[d-1]
            } 
        }
    }

    return (
        <div className = "show-book">
            <div className = "show-container">
                <section className = "display">
                    <div className = "display-img">
                        <img src = {book.image} height = "300rem" width = "190rem" alt = "book"></img>
                    </div>

                    <div className = "display-text">
                        <h1>{book.title}</h1>
                        <h2>{book.author}</h2>
                        <div className = "rating">
                            <img src = {fullstar} alt = "4.2"></img>
                            <img src = {fullstar} alt = "4.2"></img>
                            <img src = {fullstar} alt = "4.2"></img>
                            <img src = {fullstar} alt = "4.2"></img>
                            <img src = {halfstar} alt = "4.2"></img>
                            <h3>4.5</h3>
                        </div>
                        <p>Lorem dkdfkdfk fkmdkfmdkmfkdmf
                            dskdskod dksmdksmd dksdmskm s
                            dsodo dmsmdsm dkmskm dksmdks
                            dksmdkms kdmskmd</p>
                        <div className = "play">
                            <button className = "play-btn" type = "button"><img src = {play} alt = "play" width = "16rem" height = "16rem"></img></button>
                            <button className = "wishlist-btn" type = "button"><img src = {add} alt = {add} width = "25rem" height = "40rem"></img>  Add to WishList</button>
                            <button className = "share-btn" type = "button"><img src = {share} alt = "share" width = "16rem" height = "20rem"></img></button>
                        </div>
                    </div>
                </section>

                <section className = "comment">
                    <div className = "user-prof">S</div>
                    <input type = "comment" placeholder = "Write a Comment"></input>
                </section>

                <section className = "user-comments">
                    <div className = "user">
                        <div className = "identity">
                            <div className = "user-prof">S</div>
                            <h2>Scott Parker</h2>
                            <img src= {heart} height = "30rem" width = "30rem" alt = "like"></img>
                        </div>

                        <div className = "comment-body">
                            <p>Lorem dkdfkdfk fkmdkfmdkmfkdmf
                            dskdskod dksmdksmd dksdmskm s
                            dsodo dmsmdsm dkmskm dksmdks
                            dksmdkms kdmskmd. Lorem dkdfkdfk fkmdkfmdkmfkdmf
                            dskdskod dksmdksmd dksdmskm s
                            dsodo dmsmdsm dkmskm dksmdks
                            dksmdkms kdmskmd</p>
                        </div>
                    </div>

                    <div className = "user">
                        <div className = "identity">
                            <div className = "user-prof">L</div>
                            <h2>Lisa Hayden</h2>
                            <img src= {heart} height = "30rem" width = "30rem" alt = "like"></img>
                        </div>

                        <div className = "comment-body">
                            <p>Lorem dkdfkdfk fkmdkfmdkmfkdmf
                            dskdskod dksmdksmd dksdmskm s
                            dsodo dmsmdsm dkmskm dksmdks
                            dksmdkms kdmskmd. Lorem dkdfkdfk fkmdkfmdkmfkdmf
                            dskdskod dksmdksmd dksdmskm s
                            dsodo dmsmdsm dkmskm dksmdks
                            dksmdkms kdmskmd</p>
                        </div>
                    </div>

                    <div className = "user">
                        <div className = "identity">
                            <div className = "user-prof">C</div>
                            <h2>Charlie Austin</h2>
                            <img src= {heart} height = "30rem" width = "30rem" alt = "like"></img>
                        </div>

                        <div className = "comment-body">
                            <p>Lorem dkdfkdfk fkmdkfmdkmfkdmf
                            dskdskod dksmdksmd dksdmskm s
                            dsodo dmsmdsm dkmskm dksmdks
                            dksmdkms kdmskmd. Lorem dkdfkdfk fkmdkfmdkmfkdmf
                            dskdskod dksmdksmd dksdmskm s
                            dsodo dmsmdsm dkmskm dksmdks
                            dksmdkms kdmskmd</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
