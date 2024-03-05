import { Link } from "react-router-dom"
import "./index.css"

const GamesHeader = () => {

    return (
        <div className="main-container-header">
            <div className="games-text">
                <h1 >Games</h1>
            </div>
            <div className="cards-container">
            <Link to="/emoji-game-rules" className="nav-link">

                <div className="game-container">
                    <img src="/Images/Group 7471emoji.png" className="emoji-logo" alt="emoji-logo" />
                </div>
                </Link>

                <Link to="/memory-game-rules" className="nav-link">

                <div className="game-container">
                    <p className="text">Memory Matrix</p>
                    <img src="/Images/memory.png" className="matrix-logo" alt="matrix-logo" />
                </div>
                </Link>


                <Link to="/rps-game-rules" className="nav-link">
                    <div className="game-container">
                        <p className="text">Rock Paper Scissor</p>
                        <img src="/Images/Group 7469RPSlogo.png" className="rps-logo" alt="rps-logo" />
                    </div>
                </Link>


                <Link to="/flip-game-rules" className="nav-link">

                <div className="game-container">
                    <img src="/Images/animalscard-flop-logo.png" className="animalscard-logo" alt="animalscard-logo" />
                </div>
                </Link>
            </div>

        </div>
    )

}

export default GamesHeader