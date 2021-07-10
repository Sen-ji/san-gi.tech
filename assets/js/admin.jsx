import React from 'react'
import ReactDOM from 'react-dom';

import  {Admin, Resource, ListGuesser} from  'react-admin';
import restProvider from 'ra-data-simple-rest';
import jsonServerProvider from "ra-data-json-server";
import {
    AdminGuesser,
    hydraDataProvider,
    hydraSchemaAnalyzer,
} from '@api-platform/admin';
import FieldGuesser from "@api-platform/admin/lib/FieldGuesser";
import ResourceGuesser from "@api-platform/admin/lib/ResourceGuesser";
import HydraAdmin from "@api-platform/admin/lib/hydra/HydraAdmin";
import { CategoryList,CategoryCreate,CategoryEdit,ArticlesList,ArticlesCreate,ArticlesEdit,CommentairesList,CommentairesCreate,CommentairesEdit,
    TestList,TestCreate,TestEdit} from './posts';

class Base extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return <div className=" ">
            <HydraAdmin entrypoint={"./api"}>
                <ResourceGuesser
                    name="categories"
                    list={CategoryList}
                    create={CategoryCreate}
                    edit={CategoryEdit}
                />
                <ResourceGuesser name={"articles"} list={ArticlesList} create={ArticlesCreate} edit={ArticlesEdit} />
                <ResourceGuesser name={"commentaires"} list={CommentairesList} create={CommentairesCreate} edit={CommentairesEdit}/>
                <ResourceGuesser name={"tests"} list={TestList} create={TestCreate} edit={TestEdit}/>
            </HydraAdmin>
            </div>

    }
}

ReactDOM.render(<Base/>, document.querySelector("reactBase"))