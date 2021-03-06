import React from 'react';
import wows from "../images/WOWS.jpg";
import ilyg from "../images/ILYG.jpg";

function Premium(premium) {

    return (
        <div className = {premium.show? "try-premium" : "no-premium"}>
            <div className = "premium-container">
                <div className = "premium-img">
                    <img id = "one" src = {wows} height = "220rem" width = "130rem" alt = "wows"></img>
                    <img id = "two" src = {ilyg} height = "220rem" width = "130rem" alt = "wows"></img>
                </div>

                <div className = "premium-text">
                    <h2>Try your free 30 day trial</h2>
                    <ul>
                        <li>Premium content</li>
                        <li>Add free audio</li>
                        <li>High Quality Audio</li>
                        <li>Listen Offline</li>
                    </ul>
                    <h3>at $39 per month only!</h3>
                    <button type = "button">Try Premium</button>
                </div>
            </div>
        </div>
    )
}
export default Premium
