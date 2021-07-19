import React from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios'
import LinearProgress from '@material-ui/core/LinearProgress';

function Article ({ name, content,}){
     return <div>
         <h1>{name}</h1>
         <p>{content}</p>
     </div>
}

class LastArticles extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            articles:[]
        }
    }
    componentDidMount() {
        axios.get("./api/articles").then(response => {
            this.setState({articles : response.data["hydra:member"]})
            console.log(this.state.articles)

        })
    }

    render(){
        return <div>
            {this.state.articles.length>0?this.state.articles.map(a => <Article key={a.id} name={a.name} content={a.content}/> ):<div className="container"><LinearProgress /></div>}
        </div>

    }

}
class PopArticles extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            articles:[]
        }
    }
    componentDidMount() {
        axios.get("./api/articles").then(response => {
            this.setState({articles : response.data["hydra:member"]})
            console.log(this.state.articles)

        })
    }

    render(){
        return <div>
            {this.state.articles.length>0?this.state.articles.map(a => <Article  key={a.id} name={a.name} content={a.content}/> ):<div className="container"><LinearProgress /></div>}
        </div>

    }

}

ReactDOM.render(<LastArticles/>, document.querySelector("LastArticles"))
ReactDOM.render(<PopArticles/>, document.querySelector("PopArticles"))