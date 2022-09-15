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
const Input = ({ data, iid, title, type, nodeid, placeholder, onchanged }) => {
    const [field, setField] = useState(data.value);
    useEffect((e) => {
        setField(field);
    }, [field]);
    return (
        <>
            <div className="form-group">
                <label htmlFor={iid}>{title.charAt(0).toUpperCase() + title.slice(1)}</label>
                <input data-nodeid={nodeid} type={type} id={nodeid + iid} onChange={(e) => {
                    setField(e.target.value);
                    onchanged(e);
                }} placeholder={"e.g. " + placeholder} value={field} />
                {/* <hr /> */}
            </div>
        </>
    );
}

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        // this.state = { value: props.data.value };
        this.data = props.data;
        this.iid = props.iid;
        this.title = props.title;
        this.type = props.type;
        this.nodeid = props.nodeid;
        this.placeholder = props.placeholder;
        this.onchanged = props.onchanged;
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event, thiis) {
        thiis.setState({ value: event.target.value });
        thiis.onchanged(event);
    }
    handleSubmit(event) {
        //   alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    componentDidMount() {
        let props = this.props;
        // this.state = { value: props.data.value };
        this.data = props.data;
        this.iid = props.iid;
        this.title = props.title;
        this.type = props.type;
        this.nodeid = props.nodeid;
        this.placeholder = props.placeholder;
        this.onchanged = props.onchanged;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    {this.title.charAt(0).toUpperCase() + this.title.slice(1)}:
                    <input
                        type={this.type}
                        data-nodeid={this.nodeid}
                        placeholder={"e.g. " + this.placeholder}
                        id={this.nodeid + this.iid}
                        value={this.state?.value}
                        onChange={(event) => {
                            this.handleChange(event, this);
                        }}
                    />
                </label>
            </form>
        );
    }
}
export default Input;