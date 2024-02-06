import GlobalRulesComp from "../../GlobalRulesDisplayComp"
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import {rpsRulesSet1,rpsRulesSet2} from "../../GlobalRules"

import "./index.css"



const RpsRulesAndPlay = () => {
    const navigate = useNavigate();

    return (
        <div className="rps-main">
            <div className="rps-middle">

                <div className="back-btn-container" onClick={() => navigate(-1)}>
                    <img src="/Images/arrow-leftarrowback.png" alt="arrow-leftarrowback" className="back-arrow" />
                    <p className="back-text">Back</p>               
                    </div>

                <div className="logo-container">
                    <h1 className="logo-heading">ROCK PAPER SCISSOR</h1>
                    <img src="/Images/Group 7469RPSlogo.png" alt="rps-logo" className="rps-logo" />
                </div>
                <p className="rules-text">Rules</p>


                <GlobalRulesComp rulesset1={rpsRulesSet1} rulesset2={rpsRulesSet2}/>

                <div className="start-playing-container">
                    <Link to="/rps-play-game">
                    <button type="button" className="start">Start playing</button>
                    </Link>
                </div>

            </div>
        </div>
    )

}


export default RpsRulesAndPlay