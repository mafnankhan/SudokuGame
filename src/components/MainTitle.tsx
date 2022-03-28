import React from "react";

const MainTitle:React.FC = () => {
    return (
        <div className="main-title">
            <h1>suGOku</h1>
            <a href="https://golang.org/">
                <img className="right-float" src="https://upload.wikimedia.org/wikipedia/commons/2/23/Golang.png" alt="go go go"/>
            </a>
        </div>
    )
}

export default MainTitle;