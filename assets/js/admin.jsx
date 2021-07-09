import React from 'react'
import ReactDOM from 'react-dom';

import  {Admin, Resource, ListGuesser} from  'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('./api')
class Base extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return <div className=" ">
                <Admin dataProvider={dataProvider}>
                    <Resource name="categories" list={ListGuesser} />
                </Admin>
            </div>

    }
}

ReactDOM.render(<Base/>, document.querySelector("reactBase"))