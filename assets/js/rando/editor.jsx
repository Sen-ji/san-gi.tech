import EditorJs from 'react-editor-js';
import { EDITOR_JS_TOOLS } from './tools'

import ReactDOM from "react-dom";
import React from "react";

class Editor extends  React.Component{
    constructor(props) {
        super(props);
    }
    async handleSave() {

        const savedData = await this.editorInstance.save();
        console.log(JSON.stringify(savedData))
    }
    componentDidMount() {
        this.editorInstance // access editor-js
    }
    test(){
        console.log("test")
    }
    render() {
        return <div><button onClick={this.handleSave.bind(this)}>Save!</button><EditorJs instanceRef={instance => this.editorInstance = instance}

                                                                                         data={{
            time: 1556098174501,
            blocks: [
                {
                    type: "header",
                    data: {
                        text: "Editor.js",
                        level: 2
                    }
                },
            ],
            version: "2.12.4"
            }} tools={EDITOR_JS_TOOLS} /></div>
    }

}

class EditorElement extends HTMLElement {
    connectedCallback() {
        ReactDOM.render(<Editor></Editor>, this);
    }
}
customElements.define('x-editor', EditorElement);