

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
    }, {
        id: 11,
        url: "/Images/Group 7485pegion.png"
    }, {
        id: 12,
        url: "/Images/Layer 2daino.png"
    }, {
        id: 13,
        url: "/Images/Layer 2elephant.png"
    }, {
        id: 14,
        url: "/Images/Layer 2panda.png"
    }, {
        id: 15,
        url: "/Images/Layer 2tiger.png"
    }, {
        id: 16,
        url: "/Images/Layer 3zeebra.png"
    }
]
const FlipPlay = () => {

    let doubel_imgs_array = imgs_array.concat(imgs_array)
    let shuffled_array = []

    for (let i = 0; i < imgs_array.length * 2; i++) {
        let randomNum = Math.floor(Math.random() * doubel_imgs_array.length);
        shuffled_array.push(doubel_imgs_array[randomNum])
        doubel_imgs_array.splice(randomNum, 1);
    }
    console.log(shuffled_array)





    return (
        <div className="flip-play-main">

            <h1>Flip Game</h1>
            {
                    shuffled_array.map(each => <img src={each.url} alt="imgs" className="icon-image"/>)

            }

        </div>


    )
}


export default FlipPlay