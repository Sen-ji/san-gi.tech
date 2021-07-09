import React from 'react'
import ReactDOM from 'react-dom';

import  {Admin, Resource, ListGuesser} from  'react-admin';
import restProvider from 'ra-data-simple-rest';
import { PostList, PostEdit, PostCreate, PostIcon } from './posts';

class Base extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return <div className=" ">
            <Admin dataProvider={restProvider('./api')}>
                    <Resource name="categories" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
                </Admin>
            </div>

    }
}

ReactDOM.render(<Base/>, document.querySelector("reactBase"))