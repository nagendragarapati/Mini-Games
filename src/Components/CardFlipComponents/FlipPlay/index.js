import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { flipRulesSet1, flipRulesSet2 } from "../../GlobalRules"
import RulesModal from "../../GlobalRulesModal"


import "./index.css"

const imgs_array = [
    {
        id: 1,
        url: "/Images/Group 7477bull.png"
    },
    {
        id: 2,
        url: "/Images/Group 7475lazy.png"
    }, {
        id: 3,
        url: "/Images/Group 7476bear.png"
    }, {
        id: 4,
        url: "/Images/Group 7478mouse.png"
    }, {
        id: 5,
        url: "/Images/Group 7479crow.png"
    }, {
        id: 6,
        url: "/Images/Group 7480hen.png"
    }, {
        id: 7,
        url: "/Images/Group 7481crane.png"
    }, {
        id: 8,
        url: "/Images/Group 7482goat.png"
    }, {
        id: 9,
        url: "/Images/Group 7483duck.png"
    }, {
        id: 10,
        url: "/Images/Group 7484hippo.png"
    }, 
    // {
    //     id: 11,
    //     url: "/Images/Group 7485pegion.png"
    // }, {
    //     id: 12,
    //     url: "/Images/Layer 2daino.png"
    // }, {
    //     id: 13,
    //     url: "/Images/Layer 2elephant.png"
    // }, {
    //     id: 14,
    //     url: "/Images/Layer 2panda.png"
    // }, {
    //     id: 15,
    //     url: "/Images/Layer 2tiger.png"
    // }, {
    //     id: 16,
    //     url: "/Images/Layer 3zeebra.png"
    // }
]
const FlipPlay = () => {
    const navigate = useNavigate();
    const [modalShow, setModalShow] = useState(false);


    let doubel_imgs_array = imgs_array.concat(imgs_array)
    let shuffled_array = []

    for (let i = 0; i < imgs_array.length * 2; i++) {
        let randomNum = Math.floor(Math.random() * doubel_imgs_array.length);
        shuffled_array.push(doubel_imgs_array[randomNum])
        doubel_imgs_array.splice(randomNum, 1);
    }


    return (
        <div className="flip-play-main">
            <div className="flip-middle-container">

                <div className="back-rule-header back-rule-header-flip">
                    <div className="back-container" onClick={() => navigate(-1)}>
                        <img src="/Images/arrow-leftarrowback.png" alt="arrow-leftarrowback" className="back-arrow" />
                        <p className="back-text">Back</p>
                    </div>

                    <button type="button" className="rules-btn" onClick={() => setModalShow(true)}>Rules</button>

                    <RulesModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        rulesset1={flipRulesSet1} rulesset2={flipRulesSet2}
                    />

                </div>

                <div className='flip-title-container'>
                    <h1 className='flip-main-heading'>Card-Flip Memory Game</h1>

                    <div className='score-timer-container'>
                        <p className='flip-count game-result-values'>Card flip count - 00</p>
                        <p className='time-flip game-result-values'>02:00</p>
                        <p className='score-sec game-result-values'>Score - 00</p>
                    </div>
                </div>

                <ul className='flip-cards-container'>
                    {
                        shuffled_array?.map(card => {
                            return (
                                <li className='flip-image-container'>
                                    <img src={card.url} alt='flip-img' className='flip-image' />
                                </li>
                            )
                        })
                    }
                </ul>


            </div>
        </div>


    )
}


export default FlipPlay