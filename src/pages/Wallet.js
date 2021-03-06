import React from 'react'
import ShowCase from '../components/ShowCase'

function Wallet() {
    return (
        <div>
            <section className = "wallet">
                <h2>Your Balance</h2>
                <h1>$20.60</h1>
                <button type = "button">Add to Wallet</button>
            </section>

            <ShowCase />
        </div>
    )
}

export default Wallet
