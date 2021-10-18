import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class UserInput extends Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        type: PropTypes.string,
        placeholder: PropTypes.string,
        inputClass: PropTypes.string,
        value: PropTypes.string,
    }
    static defaultProps = {
        type: "text",
        placeholder: "",
        inputClass: "inp",
        value: "",
    }

    render() {
        return (
            <>
                <label htmlFor="">{this.props.label}</label>
                <input value={this.props.value} type={this.props.type} placeholder={this.props.placeholder} className={this.props.inputClass} onChange={(evt) => this.props.onChange(evt.target.value)} />
            </>
        )
    }
}