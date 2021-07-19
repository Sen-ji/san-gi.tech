import React from 'react'
import ReactDOM from 'react-dom';
class Nav extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            nom : "name",
            totop:true,
            transform :0,
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
            if(document.getElementById("buttonNav").classList.contains("collapsed"))
            this.setState({
                transform: window.scrollY,
                totop:false
            });
        }
    }
    render(){
        return <nav className={(this.state.totop?"test1 ":"test2 ")+ " navbar navbar-expand-lg navbar-light bg-light shadow"} dangerouslySetInnerHTML={{__html: document.querySelector("nav").innerHTML}}>

        </nav>

    }
}
ReactDOM.hydrate(<Nav/>, document.querySelector("NavBlog"))
