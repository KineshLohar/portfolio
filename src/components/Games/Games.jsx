import React from "react";
import gamesList from "./games.js";
import './games.css';
import { Link } from "react-router-dom";


const Games = () => {
    return (
        <section id="games">
            <h1 className="headingGames">Games</h1>
            <div className="gamesList">

                {
                    gamesList.map((game, index) => {
                        return(
                                <div className="game" key={index}>
                                    <h3 className="gameTitle">{game.gameTitle}</h3>
                                    <Link to={game.gameUrl}><button className="gameBtn">Try Now!</button></Link>
                                </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Games;