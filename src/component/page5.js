import React from "react"
import ReactDom from "react-dom"
import './style.css';


// This function comes from https://ui.dev/validate-email-address-javascript/
function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function emailClicked(emailValue){
    
    /*
    if(emailIsValid(emailValue))
    {
        alert("Email successfully recorded.");
    }
    else
    {
        alert("”Invalid email address.");
    }
    */
}

function Emaildata()
{
    return (
        <div>
            <body>
                <form>
                    <label for="email">Email:</label><br/>
                    <input type="text" id="emailForm" value=""/><br/>
                    
                    <br/>
                    <input type="submit" value="Done" onclick={emailClicked("test")}/>
                </form>
            </body>
        </div>
    )    
}

export default Emaildata