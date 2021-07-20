import React from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios'
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


function Article ({ name, content,catégorie}){
     return <div>
         <Card className="cardArticle">
             <CardActionArea href={"blogRando/"+catégorie.split("/")[3]+"/"+name}>
                 <CardMedia
                     component="img"
                     alt="Contemplative Reptile"
                     height="140"
                     image={"./img/fond/drone"+(Math.ceil(Math.random() * 6))+".jpg"}
                     title="Contemplative Reptile"

                 />
                 <CardContent>
                     <Typography gutterBottom variant="h5" component="h2">
                         {name}
                     </Typography>
                     <Typography variant="body2" color="textSecondary" component="p">
                         {content}
                     </Typography>
                 </CardContent>
             </CardActionArea>
             <CardActions>
                 <Button size="small" color="primary">
                     Share
                 </Button>
                 <Button size="small" color="primary">
                     Learn More
                 </Button>
             </CardActions>
         </Card>
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
            {this.state.articles.length===0 && <div className="container pb-3"><LinearProgress/> </div>}
            <Grid container justifyContent="center" spacing={10}>
                {this.state.articles.map(a =>
                        <Grid item>
                            <Article key={a.id} name={a.name} content={a.content} catégorie={a.catégorie}/>
                        </Grid>
                    )}

            </Grid>
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
            {this.state.articles.length===0 && <div className="container"><LinearProgress/> </div>}
            <Grid container justifyContent="center" spacing={10}>
                {this.state.articles.map(a =>
                    <Grid item>
                        <Article key={a.id} name={a.name} content={a.content} catégorie={a.catégorie}/>
                    </Grid>
                )}

            </Grid>
        </div>

    }

}

ReactDOM.render(<LastArticles/>, document.querySelector("LastArticles"))
ReactDOM.render(<PopArticles/>, document.querySelector("PopArticles"))