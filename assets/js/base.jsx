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
        return  <Paper elevation={10} >
            <div className="text-center ">
                <div className="why">
                    <h2 className="p-5">Pourquoi ce blog</h2>
                    <p>Pourquoi pas ? </p>
                    <p>En vrai, le secret pour progresser dans le domaine du dev, bha, c'est de créer des truc</p>
                    <p>Et en plus c'est cool de partager ce que tu fais </p>
                    <p>Lorem ipsup </p>
                    <p>Lorem ipsup </p>
                    <p>Lorem ipsup </p>
                    <p>Lorem ipsup </p>
                    <p>Lorem ipsup </p>
                </div>
            </div>
        </Paper>
    }

}
ReactDOM.render(<Base/>, document.querySelector("reactBase"))
ReactDOM.render(<Pourquoi/>, document.querySelector("Pourquoi"))