import * as React from "react";
import { List, Datagrid, Edit, Create, SimpleForm, DateField, EditButton, TextInput, DateInput } from 'react-admin';
import BookIcon from '@material-ui/icons/Book';
import ListGuesser from "@api-platform/admin/lib/ListGuesser";
import FieldGuesser from "@api-platform/admin/lib/FieldGuesser";
import EditGuesser from "@api-platform/admin/lib/EditGuesser";
import InputGuesser from "@api-platform/admin/lib/InputGuesser";
export const PostIcon = BookIcon;
import RichTextInput from 'ra-input-rich-text';
import { Field } from 'react-final-form';
import { useInput, required,Toolbar,
    SaveButton,
    DeleteButton,
 } from 'react-admin';
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import TextField from '@material-ui/core/TextField';

import EditorJs from "react-editor-js";
import {EDITOR_JS_TOOLS} from "./rando/tools";
class Editor extends  React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
        }
        this.timer = null
    }
    componentDidMount() {
        let editor = this.editorInstance // access editor-js
        console.log("acess")
        let saveData = null
        function test(){
            editor.save().then((value) => {
                document.getElementById("inputinput").value = JSON.stringify(value)
                saveData = value;
            })
        }
        this.timer = window.setInterval(function(){
            test()
        }, 3000);
    }
    componentWillUnmount() {
        window.clearInterval(this.timer)
    }

    render() {
        return <div>
            <EditorJs
                instanceRef={instance => this.editorInstance = instance}
                data={JSON.parse(this.props.data)} tools={EDITOR_JS_TOOLS} /></div>
    }
}

export const BoundedTextField = props => {
    const {
        input: { name, onChange, ...rest },
        meta: { touched, error },
        isRequired
    } = useInput(props);
    const handleChange = (event) => {
        console.log(event.target.value);
    };
    return (
        <TextField
            name={name}
            label={props.label}
            onChange={onChange}
            error={!!(touched && error)}
            helperText={touched && error}
            required={isRequired}
            {...rest}
        />
    );
};
export const LatLngInput = props => {
    const {source, ...rest} = props;

    const handleChange = (event) => {
        props.record.content= event.target.value+""
        document.getElementById("test58989").value = event.target.value
    };
    const test = () =>{
        console.log("test")
    }
    return (
        <span>
            <SexInput
                source="content"
            />
             <input id="inputinput" source="Content" onChange={handleChange}/>
             <Editor data={props.record.content}/>
        </span>
    );
};
export const SexInput = props => {
    const {
        input,
        meta: { touched, error }
    } = useInput(props);


    return (
        <div>
        <TextInput
            id="test58989"
            label="content"
            {...input}
        />

        </div>
    );
};

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
        <FieldGuesser source={"editDate"} />
        <FieldGuesser source={"catégorie"} />
        <FieldGuesser source={"commentaires"} />
        <FieldGuesser source={"publicationDate"} />
    </ListGuesser>
);

export const ArticlesEdit2 = props => (
    <EditGuesser {...props}>
        <InputGuesser source={"name"} />
        <InputGuesser source={"author"} />
        <InputGuesser source={"editDate"} />
        <InputGuesser source={"catégorie"} />
        <InputGuesser source={"commentaires"} />
        <InputGuesser source={"publicationDate"} />
        <LatLngInput />
    </EditGuesser>
);
export class ArticlesEdit extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <EditGuesser {...(this.props)}>
            <InputGuesser source={"name"} />
            <InputGuesser source={"author"} />
            <InputGuesser source={"editDate"} />
            <InputGuesser source={"catégorie"} />
            <InputGuesser source={"commentaires"} />
            <InputGuesser source={"publicationDate"} />
            <LatLngInput  />
        </EditGuesser>
    }
}
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

export const ImageList = props => (
    <ListGuesser {...props}>
            <FieldGuesser source={"success"} />
            <FieldGuesser source={"file"} />
    </ListGuesser>
);
