
import { useEffect } from "react"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./index.css"
import { useState } from "react";

const gameValues = ["ROCK", "PAPER", "SCISSOR"]


const ResultScreen = () => {
    const userChoice = useSelector(state => state.rps.userChoice)
    const [status, setStatus] = useState('hi')
    const [scoreValue, setScore] = useState(0)
    const [oppoChoice, setOppoChoice] = useState('')
    const navigate = useNavigate()


    useEffect(() => {
        generateOpponentChoice()
    }, [userChoice])

    useEffect(() => {
        getStatusAndScore()

    }, [oppoChoice])

    const generateOpponentChoice = () => {
        const randomValue = Math.floor((Math.random() * 3))
        setOppoChoice(gameValues[randomValue])
    }


    const getStatusAndScore = () => {

        let gameStatus = ""

        if (userChoice === oppoChoice) {
            gameStatus = "IT IS DRAW"
        }
        else if (
            (userChoice === gameValues[1] && oppoChoice === gameValues[0]) ||
            (userChoice === gameValues[2] && oppoChoice === gameValues[1]) ||
            (userChoice === gameValues[0] && oppoChoice === gameValues[2])) {

            gameStatus = "YOU WON"
            setScore(pre => pre + 1)
        }
        else {
            gameStatus = "YOU LOSE"
            setScore(pre => pre - 1)
        }

        setStatus(gameStatus)
    }

    console.log(userChoice, oppoChoice, status, scoreValue)


    return (

        <div className="result-main">
            <h1 className="heading">ROCK PAPER SCISSOR</h1>

            <div className="box-main">
                <div className="box-container">
                    <ul className="title-container">
                        <li>Rock</li>
                        <li>Paper</li>
                        <li>Scissor</li>
                    </ul>

                    <div className="score-container">
                        <img src="/Images/Group 7618.png" alt="result-img" className="result-img" />
                        <div className="score">
                            <p className="score-text">Score</p>
                            <p className="score-num">{scoreValue}</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="third-sec-main">
                <div className="result-container">
                    <div className="result">
                        <p className="text">You</p>
                        <img src="/Images/Group 6941rock.png" className="img-result" alt="rock-img" />
                    </div>

                    <div className="emoji-container">
                        <img src="/Images/Emojiwon-emoji.png" className="img-emoji" alt="emoji-img" />
                        <p className="result-text">{status}</p>
                        <button type="button" className="play-again-btn" onClick={() => navigate("/rps-play-game")}>Play Again</button>
                    </div>

                    <div className="result">
                        <p className="text">Opponent</p>
                        <img src="/Images/Group 6940sicor.png" className="img-result" alt="sicc-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultScreen