import React, {useCallback, useEffect, useState} from 'react'
import ReactDOM from 'react-dom';
import axios from "axios";

function useFetch(url){
    const [loading,setloading] = useState(false)
    const [items,setItems] = useState([])
    const [count,setCount] = useState(0)
    const load = useCallback(async () =>{
        setloading(true)
        await axios.get(url).then(response => {
            setItems(response.data["hydra:member"])
            setCount(response.data["hydra:totalItems"])
        })
        setloading(false)
    },[url])
    return {items, load,loading}
}


function Comments(){
    const {items:comments,load,loading,count} = useFetch('/api/commentaires')
    useEffect(()=>load(),[])
    return <div>
        {loading && "chargement..." }
        {JSON.stringify(comments)}
        <button onClick={load}>charger les commentaires </button>
    </div>

}
class commentElement extends HTMLElement {
    connectedCallback() {
        ReactDOM.render(<Comments/>, this);
    }
}
customElements.define('post-comment', commentElement);