import React from 'react'
import ShowCase from '../components/ShowCase'

function Subscriptions() {
    return (
        <div>
            <section className = "sub">
                <h2>There are currently no active Subscriptions</h2>
                <button type = "button">Try Premium</button>
            </section>

            <ShowCase />
        </div>
    )
}

export default Subscriptions
