import React from 'react';
import memesData from '../memesData.js'

export default function Meme() {

    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }

    // const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
    //
    // function addItem() {
    //     setThingsArray(prevThingsArray => {
    //         return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
    //     })
    // }
//###########################################################
    // const [contact, setContact] = React.useState({
    //     firstName: "John",
    //     lastName: "Doe",
    //     phone: "+1 (719) 555-1212",
    //     email: "itsmyrealname@example.com",
    //     isFavorite: false
    // })
    //
    // let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"
    //
    // function toggleFavorite() {
    //     setContact(prevContact => ({
    //         ...prevContact,
    //         isFavorite: !prevContact.isFavorite
    //     }))
    // }
//###########################################################

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={memeImage} className="meme--image"/>
        </main>
    )
}