import React from "react"
import ReactDom from "react-dom"
import './style.css';


function Imagedata()
{
    var img1 = require('./images/fm8.jpg')
    var img2 = require('./images/harmor.jpg')
    var img3 = require('./images/massive.jpg')
    var img4 = require('./images/serum.jpg')
    var img5 = require('./images/sytrus.jpg')
    var img6 = require('./images/vital.jpg')
    return (
        <div>
            <body>
                <div class="row">
                    <div class="column">
                        <img src={img1.default}/>
                        <img src={img3.default}/>
                        <img src={img2.default}/>
                        <img src={img4.default}/>
                        <img src={img6.default}/>
                        <img src={img5.default}/>
                        <script src = "script.js"></script>
                    </div>
                    <div class="column">
                        <img src={img6.default}/>
                        <img src={img5.default}/>
                        <img src={img1.default}/>
                        <img src={img3.default}/>
                        <img src={img2.default}/>
                        <img src={img4.default}/>
                        <script src = "script.js"></script>
                    </div>
                    <div class="column">
                        <img src={img2.default}/>
                        <img src={img4.default}/>
                        <img src={img6.default}/>
                        <img src={img5.default}/>
                        <img src={img1.default}/>
                        <img src={img3.default}/>
                        <script src = "script.js"></script>
                    </div>
                    <div class="column">
                        <img src={img1.default}/>
                        <img src={img3.default}/>
                        <img src={img2.default}/>
                        <img src={img4.default}/>
                        <img src={img6.default}/>
                        <img src={img5.default}/>
                        <script src = "script.js"></script>
                    </div>
                </div>
            </body>
        </div>
    )    
}

export default Imagedata
