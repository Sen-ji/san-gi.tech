import React from 'react'
import ReactDOM from 'react-dom';

class Nav extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return <h1>
            test 123
        </h1>
    }
}

ReactDOM.render(<Nav/>, document.querySelector("reactNav"))