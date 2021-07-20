import React from 'react'
import ReactDOM from 'react-dom';
import Paper from '@material-ui/core/Paper';

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

class Pourquoi extends React.Component{
    constructor(props) {
        super(props);

    }
    render() {
        return  <Paper className="why text-center m-auto" elevation={10} >

            <h2 className="pt-5">Pourquoi ce blog</h2>
            <div className="p-3 text-justify">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
        </Paper>
    }

}
ReactDOM.render(<Base/>, document.querySelector("reactBase"))
ReactDOM.render(<Pourquoi/>, document.querySelector("Pourquoi"))