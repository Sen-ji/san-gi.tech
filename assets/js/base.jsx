import React from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios'

class Base extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return <div className="imgtop" style={{backgroundImage: "url(../../img/fond/drone"+(Math.ceil(Math.random() * 6))+".jpg)"}}>
                <div className="imgtoptxt">
                    <h1>I am Sangi</h1>
                    <h3>It's my try of travel blog ;)</h3>

                </div>
            </div>

    }

}

ReactDOM.render(<Base/>, document.querySelector("reactBase"))