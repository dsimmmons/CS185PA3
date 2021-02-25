import React from "react"
import ReactDom from "react-dom"
import './style.css';

function Tabledata()
{
    return (
        <div>
            <body>
                <h1>Projects</h1>
                <table>
                    <tr>
                    <th>Name</th>
                    <th>Details</th>
                    <th>Year</th>
                    </tr>
                    <tr>
                        <td><a href = "https://github.com/dsimmmons/DigitRecognition">ML Character Identification</a></td>
                        <td>Programmed a neural network in vanilla c++ without libraries that trains on and identifies the MNIST character set with 98% accuracy.</td>
                        <td>2019</td>
                    </tr>
                    <tr>
                        <td><a href = "https://zapzorn.com/">DragOn Sampler</a></td>
                        <td>Programmed a sampler instument in c++ using the JUCE frameork. The sampler will be released with ZapZorn Composer Tools.</td>
                        <td>2020</td>
                    </tr>
                </table>
            </body>
        </div>
    )    
}

export default Tabledata