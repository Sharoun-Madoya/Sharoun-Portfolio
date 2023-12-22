import { useState } from "react"

function Footer(){

    const [submitResponse,submittedResponse ] = useState(0)
    
    return(
        <div className="footerPage">
            <p>Created by: {Footer.author}</p>
            <a href={"mailto:" + Footer.email}>{Footer.email}</a><br/>
            <a target="_blank" rel="noopener noreferrer" href={Footer.github} >Github</a> |
            <input type="submit"></input>
            <button>submit</button>
        </div>
    )
}