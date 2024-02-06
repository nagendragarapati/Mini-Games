import { useCallback, useEffect, useState } from "react";
import RulesModal from "../RulesModal"
import { useNavigate, } from 'react-router-dom';
import "./index.css"
import { useSelector,useDispatch } from "react-redux";
import {rpsActions} from "../../../store/rpsslice"


const RpsPlay = () => {
    const [modalShow, setModalShow] = useState(false);
    const navigate = useNavigate();
    const dispatch=useDispatch()

    const userChoice=useSelector(state => state.rps.userChoice)


    const getUserChoice = useCallback(userChoiceValue => {
        dispatch(rpsActions.setUserChoice(userChoiceValue))
        // generateOpponentChoice()
        navigate("/rps-result")
    }, [userChoice])



    return (
        <div className="play-main">

            <div className="back-rule-header">
                <div className="back-container" onClick={() => navigate(-1)}>
                    <img src="/Images/arrow-leftarrowback.png" alt="arrow-leftarrowback" className="back-arrow" />
                    <p className="back-text">Back</p>
                </div>

                <button type="button" className="rules-btn" onClick={() => setModalShow(true)}>Rules</button>

                <RulesModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>

            <div className="middle-container">
                <h1 className="heading">ROCK PAPER SCISSOR</h1>

                <h1 className="heading">Let’s pick</h1>

                <div className="icons-container">

                    <div className="two-icons">
                        <img src="/Images/Group 6941rock.png" className="img-icons" alt="rock-img" onClick={() => getUserChoice("ROCK")} />
                        <img src="/Images/Group 6940sicor.png" className="img-icons" alt="sicc-img" onClick={() => getUserChoice("SCISSOR")} />

                    </div>

                    <div className="third-icon">
                        <img src="/Images/Paperpaper.png" className="img-icons paper-img" alt="paper-img" onClick={() => getUserChoice("PAPER")} />
                    </div>
                </div>
            </div>

        </div>
    )

}

export default RpsPlay