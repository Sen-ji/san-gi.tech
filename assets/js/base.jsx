import React from 'react'
import ReactDOM from 'react-dom';
class Base extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return <div>
            <p>salut</p>
        </div>
    }
}

ReactDOM.render(<Base/>, document.querySelector("reactBase"))