import React from 'react'
import ReactDOM from 'react-dom';
class Nav extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            nom : "name",
            totop:true,
            transform :0
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll(event) {
        if(this.state.transform >window.scrollY){
            this.setState({
                transform: window.scrollY,
                totop:true
            });
        }else{
            this.setState({
                transform: window.scrollY,
                totop:false
            });
        }
    }
    render(){
        return <nav className={(this.state.totop?"test1 ":"test2 ")+ " navbar navbar-light bg-light"}>
            <div className="container-fluid">
                <a className="navbar-brand" href="./blogRando">BlogRando</a>
                <a className="navbar-brand" href="./">Home</a>
                <a className="navbar-brand" href="./blogCode">BlogCode</a></div>
        </nav>

    }
}

ReactDOM.render(<Nav/>, document.querySelector("reactNav"))