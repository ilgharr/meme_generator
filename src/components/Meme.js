import React from 'react';

export default function Meme() {
    return(
        <main>
            <form className="form">
                <div>
                    <label> Top Text
                        <input type="text" className="form--inputs" placeholder="Top text"/>
                    </label>
                </div>
                <div>
                    <label> Bottom Text
                        <input type="text" className="form--inputs" placeholder="Bottom text"/>
                    </label>
                </div>
                <button className="form--button">Get a new meme image 🖼</button>
            </form>

        </main>
    )
}