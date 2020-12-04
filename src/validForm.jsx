import React, { Component } from 'react'
import './formStyle.css'


class FormValidation extends Component {

    constructor(props) {
        super(props)

        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            city: ""
        }
    }

    handleForm = event => {

        const { name, value } = event.target;

        this.setState({ [name]: value })

    }

    formSubmit = event => {
        event.preventDefault();
        console.log(this.state)
    }


    render() {

        return (
            <>
                <form action="" onSubmit={this.formSubmit}>
                    <div>
                        <label htmlFor="">First name:</label>
                        <input type="text" name="firstname" className="inputField" value={this.state.firstname} onChange={this.handleForm} />
                    </div>
                    <div>
                        <label htmlFor="">Last name:</label>
                        <input type="text" name="lastname" className="inputField" value={this.state.lastname} onChange={this.handleForm} />
                    </div>
                    <div>
                        <label htmlFor="">Email :</label>
                        <input type="email" name="email" className="inputField" value={this.state.email} onChange={this.handleForm} />
                    </div>
                    <div>
                        <label htmlFor="">phone: </label>
                        <input type="text" name="phone" className="inputField" value={this.state.phone} onChange={this.handleForm} />
                    </div>
                    <div>
                        <label htmlFor="">First name:</label>
                        <select name="city" id="" className="inputField" value={this.state.city} onChange={this.handleForm}>
                            <option value="">Choose the city</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Bangalore">Bangalore</option>
                        </select>
                    </div>
                    <div>
                        <button>submit</button>
                    </div>
                </form>
            </>
        )

    }
}

export default FormValidation;