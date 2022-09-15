import React from "react";
import { useState, useEffect } from "react";
import { ReactDOM } from "react-dom";
/**
 * 
 * @param {opt} opt
 * @opt opt.id = input element ID
 * @opt opt.title = placeholder and label title
 * @opt opt.changed = callback function when input field value changes
 * @returns JSX Fragment
 */
const Input = ({data, iid, title, type, nodeid, placeholder, onchanged}) => {
    const [field, setField] = useState(data.value);
    useEffect((e)=>{
        setField(field);
    }, [field]);
    return (
        <>
            <div className="form-group">
                <label htmlFor={iid}>{title.charAt(0).toUpperCase() + title.slice(1)}</label>
                <input data-nodeid = { nodeid } type={ type } id={nodeid + iid} onChange={(e)=>{
                        setField(e.target.value);
                        onchanged(e);
                    }} placeholder={"e.g. " + placeholder} value={ field } />
                {/* <hr /> */}
            </div>
        </>
    );
}
export default Input;