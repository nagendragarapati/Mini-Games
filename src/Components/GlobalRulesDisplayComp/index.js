import "./index.css"




const GlobalRulesComp = (props) => {

    const {rulesset1,rulesset2}=props

    return (

        <div className="rules-main">


            <div className="rules-main-container">

                <ul className="rules-set-1">
                    {
                        rulesset1.map(ruleObj => <li className="rule-text">{ruleObj.rule}</li>)
                    }
                </ul>

                <ul className="rules-set-2">
                    {
                        rulesset2?.map(ruleObj => <li className="rule-text">{ruleObj.rule}</li>)
                    }
                </ul>
            </div>
        </div>
    )
}


export default GlobalRulesComp