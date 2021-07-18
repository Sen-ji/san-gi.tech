import React from 'react'
import ReactDOM from 'react-dom';

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

    // render(){
    //     return <div className="blogRando" style={{backgroundImage: "url(../../img/fond/drone"+(Math.ceil(Math.random() * 6))+".jpg)"}}>
    //         <div className=" ">
    //
    //             <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
    //                 et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //                 aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    //                 cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    //                 culpa qui officia deserunt mollit anim id est laborum</p></div>
    //             <div style={{height:"500px"}} ><p>Lorem ipsum dolor sit amet, consectetur
    //                 adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    //                 veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
    //                 irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    //                 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
    //                 est laborum</p></div>
    //             <div className="blogRando" style={{height:"500px",backgroundImage: "url(../../img/fond/drone"+(Math.ceil(Math.random() * 6))+".jpg)"}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
    //                 <p>et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //                 aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    //                 cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    //                     culpa qui officia deserunt mollit anim id est laborum</p></div>
    //             <div style={{height:"500px"}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
    //                 <p>et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //                 aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    //                 cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    //                     culpa qui officia deserunt mollit anim id est laborum</p></div>
    //             <div className="blogRando" style={{height:"500px",backgroundImage: "url(../../img/fond/drone"+(Math.ceil(Math.random() * 6))+".jpg)"}} ></div>
    //             <div style={{height:"500px"}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
    //                 <p>et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //                 aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    //                 cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    //                     culpa qui officia deserunt mollit anim id est laborum</p></div>
    //             <div className="blogRando" style={{height:"500px",backgroundImage: "url(../../img/fond/drone"+(Math.ceil(Math.random() * 6))+".jpg)"}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
    //                 <p>et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //                 aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    //                 cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    //                     culpa qui officia deserunt mollit anim id est laborum</p></div>
    //             <div style={{height:"500px"}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
    //                 <p>et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //                 aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    //                 cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    //                     culpa qui officia deserunt mollit anim id est laborum</p></div>
    //             <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
    //                 et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //                 aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    //                 cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    //                 culpa qui officia deserunt mollit anim id est laborum</p></div>
    //             <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
    //                 et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //                 aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    //                 cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    //                 culpa qui officia deserunt mollit anim id est laborum</p></div>
    //         </div>
    //     </div>
    // }

}

ReactDOM.render(<Base/>, document.querySelector("reactBase"))