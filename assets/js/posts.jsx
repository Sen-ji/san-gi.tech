import * as React from "react";
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput } from 'react-admin';
import BookIcon from '@material-ui/icons/Book';
import ListGuesser from "@api-platform/admin/lib/ListGuesser";
import FieldGuesser from "@api-platform/admin/lib/FieldGuesser";
export const PostIcon = BookIcon;

export const CategorieList = props => (
    <ListGuesser {...props}>
        <FieldGuesser source={"type"} />
        <FieldGuesser source={"name"} />
        <FieldGuesser source={"Parent"} />
        <FieldGuesser source={"enfants"} />
        <FieldGuesser source={"articles"} />
        <FieldGuesser source={"parent"} />
    </ListGuesser>
);
const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

// export const CategoryEdit = (props) => (
//     <Edit title={<PostTitle />} {...props}>
//         <SimpleForm>
//             <TextInput source="id" />
//             <TextInput source="type" />
//             <TextInput source="name" />
//             <TextInput source="enfants" />
//             <TextInput source="articles" />
//         </SimpleForm>
//     </Edit>
// );
//
// export const CategoryCreate = (props) => (
//     <Create title="Create a Post" {...props}>
//         <SimpleForm>
//             <TextInput source="id" />
//             <TextInput source="type" />
//             <TextInput source="name" />
//             <TextInput source="enfants" />
//             <TextInput source="articles" />
//         </SimpleForm>
//     </Create>
// );


export const ArticlesList = props => (
    <ListGuesser {...props}>
        <FieldGuesser source={"name"} />
        <FieldGuesser source={"author"} />
        <FieldGuesser source={"PublicationDate"} />
        <FieldGuesser source={"content"} />
        <FieldGuesser source={"editDate"} />
        <FieldGuesser source={"catégorie"} />
        <FieldGuesser source={"commentaires"} />
        <FieldGuesser source={"publicationDate"} />
    </ListGuesser>
);


// export const ArticlesEdit = (props) => (
//     <Edit title={<PostTitle />} {...props}>
//         <SimpleForm>
//             <TextInput source="id" />
//             <TextInput source="type" />
//             <TextInput source="name" />
//             <TextInput source="enfants" />
//             <TextInput source="articles" />
//         </SimpleForm>
//     </Edit>
// );
//
// export const ArticlesCreate = (props) => (
//     <Create title="Create a Post" {...props}>
//         <SimpleForm>
//             <TextInput source="id" />
//             <TextInput source="type" />
//             <TextInput source="name" />
//             <TextInput source="enfants" />
//             <TextInput source="articles" />
//         </SimpleForm>
//     </Create>
// );
export const CommentairesList = props => (
    <ListGuesser {...props}>
        <FieldGuesser source={"author"} />
        <FieldGuesser source={"publicationDate"} />
        <FieldGuesser source={"editDate"} />
        <FieldGuesser source={"article"} />
    </ListGuesser>
);

// export const CommentairesEdit = (props) => (
//     <Edit title={<PostTitle />} {...props}>
//         <SimpleForm>
//             <TextInput source="id" />
//             <TextInput source="type" />
//             <TextInput source="name" />
//             <TextInput source="enfants" />
//             <TextInput source="articles" />
//         </SimpleForm>
//     </Edit>
// );
//
// export const CommentairesCreate = (props) => (
//     <Create title="Create a Post" {...props}>
//         <SimpleForm>
//             <TextInput source="id" />
//             <TextInput source="type" />
//             <TextInput source="name" />
//             <TextInput source="enfants" />
//             <TextInput source="articles" />
//         </SimpleForm>
//     </Create>
// );
export const TestList = props => (
    <ListGuesser {...props}>
        <FieldGuesser source={"name"} />
    </ListGuesser>
);

// export const TestCreate = (props) => (
//     <Create title="Create a Post" {...props}>
//         <SimpleForm>
//             <TextInput source="name" />
//         </SimpleForm>
//     </Create>
// );
//
// export const TestEdit = (props) => (
//     <Create title="Create a Post" {...props}>
//         <SimpleForm>
//
//             <TextInput disabled source="id" />
//             <TextInput source="name" />
//
//         </SimpleForm>
//     </Create>
// );

export const UserList = props => (
    <ListGuesser {...props}>
        <FieldGuesser source={"email"} />
        <FieldGuesser source={"roles"} />
        <FieldGuesser source={"password"} />
        <FieldGuesser source={"pseudo"} />
        <FieldGuesser source={"articles"} />
        <FieldGuesser source={"commentaires"} />
        <FieldGuesser source={"username"} />
        <FieldGuesser source={"salt"} />
    </ListGuesser>
);
