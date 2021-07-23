import React from 'react'
import ReactDOM from 'react-dom';

class XSearch extends HTMLElement {
    connectedCallback() {
        ReactDOM.render(<p>salut</p>, this);
    }
}
customElements.define('x-search', XSearch);