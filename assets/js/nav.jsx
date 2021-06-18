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
            console.log("oui")
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
        return <nav className={(this.state.totop?"test1 ":"test2 ")+ " navbar navbar-expand-lg navbar-light bg-light"}>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
                    aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a className="navbar-brand" href="./">Home</a>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="./blogCode">blogCode</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./blogRando">blogRando</a>
                    </li>
                </ul>
            </div>
        </nav>
    }
}

ReactDOM.render(<Nav/>, document.querySelector("reactNav"))