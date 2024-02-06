import "./index.css"


const rulesset1 = [
    {
        id: 1,
        rule: "The game result should be based on user and user opponent choices"
    },
    {
        id: 2,
        rule: "When the user choice is rock and his opponent choice is rock then the result will be IT IS DRAW"
    },
    {
        id: 3,
        rule: "When the user choice is paper and his opponent choice is rock then the result will be YOU WON"
    },
    {
        id: 4,
        rule: "When the user choice is a scissor and his opponent choice is rock then the result will be YOU LOSE"
    },
    {
        id: 5,
        rule: "When the user choice is paper and his opponent choice is paper then the result will be IT IS DRAW"
    },
    {
        id: 6,
        rule: "When the user choice is scissors and his opponent choice is paper then the result will be YOU WON"
    },

]

const rulesset2 = [
    {
        id: 7,
        rule: "When the user choice is rock and his opponent choice is scissors then the result will be YOU WON"
    },
    {
        id: 8,
        rule: "When the user choice is rock and his opponent choice is scissors then the result will be YOU WON"
    },
    {
        id: 9,
        rule: "When the user choice is scissors and his opponent choice is scissors then the result will be IT IS DRAW"
    },
    {
        id: 10,
        rule: "When the result is YOU WON, then the count of the score should be incremented by 1"
    },
    {
        id: 11,
        rule: "When the result is IT IS DRAW, then the count of the score should be the same"
    },
    {
        id: 12,
        rule: "When the result is YOU LOSE, then the count of the score should be decremented by 1."
    },

]

const RpsRulesComp = () => {
    return (

        <div className="rules-main">


            <div className="rules-main-container">

                <ul className="rules-set-1">
                    {
                        rulesset1.map(rule => <li className="rule-text">{rule.rule}</li>)
                    }
                </ul>

                <ul className="rules-set-2">
                    {
                        rulesset2.map(rule => <li className="rule-text">{rule.rule}</li>)
                    }
                </ul>
            </div>
        </div>
    )
}


export default RpsRulesComp