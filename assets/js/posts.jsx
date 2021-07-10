import * as React from "react";
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput } from 'react-admin';
import BookIcon from '@material-ui/icons/Book';
import ListGuesser from "@api-platform/admin/lib/ListGuesser";
import FieldGuesser from "@api-platform/admin/lib/FieldGuesser";
export const PostIcon = BookIcon;

export const CategoryList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="type" />
            <TextField source="name" />
            <TextField source="enfants" />
            <TextField source="articles" />
        </Datagrid>
    </List>
);
const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const CategoryEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="type" />
            <TextInput source="name" />
            <TextInput source="enfants" />
            <TextInput source="articles" />
        </SimpleForm>
    </Edit>
);

export const CategoryCreate = (props) => (
    <Create title="Create a Post" {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="type" />
            <TextInput source="name" />
            <TextInput source="enfants" />
            <TextInput source="articles" />
        </SimpleForm>
    </Create>
);


export const ArticlesList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source={"name"} />
            <TextField source={"author"} />
            <TextField source={"PublicationDate"} />
            <TextField source={"editDate"} />
            <TextField source={"catégorie"} />
            <TextField source={"commentaires"} />
        </Datagrid>
    </List>
);

export const ArticlesEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="type" />
            <TextInput source="name" />
            <TextInput source="enfants" />
            <TextInput source="articles" />
        </SimpleForm>
    </Edit>
);

export const ArticlesCreate = (props) => (
    <Create title="Create a Post" {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="type" />
            <TextInput source="name" />
            <TextInput source="enfants" />
            <TextInput source="articles" />
        </SimpleForm>
    </Create>
);
export const CommentairesList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source={"name"} />
            <TextField source={"author"} />
            <TextField source={"PublicationDate"} />
            <TextField source={"editDate"} />
            <TextField source={"catégorie"} />
            <TextField source={"commentaires"} />
        </Datagrid>
    </List>
);

export const CommentairesEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="type" />
            <TextInput source="name" />
            <TextInput source="enfants" />
            <TextInput source="articles" />
        </SimpleForm>
    </Edit>
);

export const CommentairesCreate = (props) => (
    <Create title="Create a Post" {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="type" />
            <TextInput source="name" />
            <TextInput source="enfants" />
            <TextInput source="articles" />
        </SimpleForm>
    </Create>
);
export const TestList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source={"name"} />
        </Datagrid>
    </List>
);

export const TestCreate = (props) => (
    <Create title="Create a Post" {...props}>
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);

export const TestEdit = (props) => (
    <Create title="Create a Post" {...props}>
        <SimpleForm>

            <TextInput disabled source="id" />
            <TextInput source="name" />

        </SimpleForm>
    </Create>
);