import React from 'react'
import Body from '../body/Body'
import Footer from '../footer/Footer'
import Sidebar from '../sidebar/Sidebar'
import './Player.css'

function Player({spotify}) {
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar />
                <Body spotify={spotify} />
                <Footer />
            </div>
        </div>
    )
}

export default Player
