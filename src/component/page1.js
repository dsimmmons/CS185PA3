import React from "react"
import ReactDOM from "react-dom"
import './style.css';

function Textdata()
{
    return (
        <div>
            <body>
                <form>
                    <label for="fname">First name:</label><br></br>
                    <input type="text" id="fname" value="Denver"></input><br></br>
                    <label for="lname">Last name:</label><br></br>
                    <input type="text" id="lname" value="Simmons"></input><br></br>

                    <label for="fmovie">Favorite Movie:</label><br></br>

                    <input type="radio" id="Avengers" name="fmovie" value="Avengers"></input><br></br>
                    <label for="male">Avengers</label><br></br>
                    <input type="radio" id="Dark Knight" name="fmovie" value="Dark Knight"></input><br></br>
                    <label for="female">Dark Knight</label><br></br>
                    <input type="radio" id="Tenet" name="fmovie" value="Tenet"></input><br></br>
                    <label for="Tenet">Tenet</label><br></br>

                    <input type="submit" value="Done"></input><br></br>
                </form>
            </body>
        </div>
    )    
}

export default Textdata