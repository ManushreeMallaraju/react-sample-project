import React, { Component } from 'react'
import axios from 'axios'
import './countries.css'


class Countries extends Component {

    constructor(props) {
        super(props)

        this.state = {
            countriesList: []
        }
    }


    async componentDidMount() {

        await axios.get("https://restcountries.eu/rest/v2/all").then(ele => {

            this.setState({ countriesList: ele.data });
        })

    }

    render() {

        const { countriesList } = this.state;

        const result = countriesList.map(ele => {
            return (<div className="wrapper">
                <img src={ele.flag} alt="" />
                <p>{ele.name}</p>
                <p>Capital: {ele.capital}</p>
                <p>Population: {ele.population}</p>
            </div>)
        })




        return (
            <div>
                {result}
            </div>
        )
    }


}


export default Countries;