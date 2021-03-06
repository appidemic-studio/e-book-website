import React from 'react'
import ShowCase from '../components/ShowCase'

function WishList() {
    return (
        <div>
            <section className = "wish-list">
                <h2>Add to your Wish List</h2>
                <button type = "button">+</button>
            </section>

            <ShowCase/>
        </div>
    )
}

export default WishList
