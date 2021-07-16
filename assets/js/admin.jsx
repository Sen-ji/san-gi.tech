import React from 'react'
import ReactDOM from 'react-dom';

import  {Admin, Resource, ListGuesser} from  'react-admin';
import restProvider from 'ra-data-simple-rest';
import jsonServerProvider from "ra-data-json-server";

import FieldGuesser from "@api-platform/admin/lib/FieldGuesser";
import ResourceGuesser from "@api-platform/admin/lib/ResourceGuesser";

import { CategorieList,CategoryCreate,CategoryEdit,ArticlesList,ArticlesCreate,ArticlesEdit,CommentairesList,CommentairesCreate,CommentairesEdit,
    TestList,TestCreate,TestEdit,UserList} from './posts';
import { HydraAdmin, fetchHydra, hydraDataProvider } from "@api-platform/admin";
import { parseHydraDocumentation } from "@api-platform/api-doc-parser";

const entrypoint = 'https://127.0.0.1:8000/api';


const dataProvider = hydraDataProvider(
    entrypoint,
    fetchHydra,
    parseHydraDocumentation,
    true // useEmbedded parameter
);
class Base extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return <div className=" ">
                <HydraAdmin
                    entrypoint={ entrypoint }>
                    <ResourceGuesser name={"tests"} list={TestList} />
                    <ResourceGuesser name={"articles"} list={ArticlesList} />
                    <ResourceGuesser name={"categories"} list={CategorieList} />
                    <ResourceGuesser name={"commentaires"} list={CommentairesList} />
                    <ResourceGuesser name={"users"} list={UserList} />
                </HydraAdmin>

            </div>

    }
}

ReactDOM.render(<Base/>, document.querySelector("reactBase"))