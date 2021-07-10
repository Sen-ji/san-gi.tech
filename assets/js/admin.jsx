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
import { HydraAdmin } from "@api-platform/admin";
import { CategoryList,CategoryCreate,CategoryEdit,ArticlesList,ArticlesCreate,ArticlesEdit,CommentairesList,CommentairesCreate,CommentairesEdit,
    TestList,TestCreate,TestEdit} from './posts';

class Base extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return <div className=" ">
                <HydraAdmin entrypoint='https://127.0.0.1:8000/api' />
            </div>

    }
}

ReactDOM.render(<Base/>, document.querySelector("reactBase"))