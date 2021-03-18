import React from "react"

class MyForm extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            mainExperience: "",
            html: false,
            css: false,
            javaScript: false,
            testingAndDebugging: false,
            git: false,
            backendDatabases: false,
            hosting: false,
            libraries: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { name, value, type, checked } = event.target
        type === "checkbox" ?
            this.setState({
                [name]: checked
            })
            :
            this.setState({
                [name]: value
            })
    }

    render() {
        return (
            <div>
                <form>
                    <section>
                        <h2>Personal information</h2>
                        <input
                            name="firstName"
                            placeholder="First Name"
                            value={this.state.firstName}
                            onChange={this.handleChange}
                        /><br />

                        <input
                            name="lastName"
                            placeholder="Last Name"
                            value={this.state.lastName}
                            onChange={this.handleChange}
                        /><br />

                        <input
                            name="age"
                            placeholder="Age"
                            value={this.state.age}
                            onChange={this.handleChange}
                        /><br />

                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="Male"
                                checked={this.state.gender === "Male"}
                                onChange={this.handleChange}
                            />
                        </label>Male
                    <br />
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="Female"
                                checked={this.state.gender === "Female"}
                                onChange={this.handleChange}
                            />
                        </label>Female
                </section>
                    <br />

                    <section>
                        <h2>Select the option you have most experience with</h2>
                        <select
                            name="mainExperience"
                            value={this.state.mainExperience}
                            onChange={this.handleChange}
                        >
                            <option value=""> -- Select -- </option>
                            <option value="Front-End">Front-End</option>
                            <option value="Back-End">Back-End</option>
                            <option value="Database analysis">Database analysis</option>
                            <option value="Machine learning">Machine learning</option>
                        </select>
                    </section>
                    <br />

                    <section>
                        <h2>Select your skills as a developer</h2>
                        <label>
                            <input
                                type="checkbox"
                                name="html"
                                onChange={this.handleChange}
                                checked={this.state.html}
                            /> HTML
                    </label>
                        <label>
                            <input
                                type="checkbox"
                                name="css"
                                onChange={this.handleChange}
                                checked={this.state.css}
                            />CSS
                    </label>
                        <label>
                            <input
                                type="checkbox"
                                name="javaScript"
                                onChange={this.handleChange}
                                checked={this.state.javaScript}
                            />JavaScript
                    </label>
                        <label>
                            <input
                                type="checkbox"
                                name="testingAndDebugging"
                                onChange={this.handleChange}
                                checked={this.state.testingAndDebugging}
                            />Testing and debugging
                    </label>
                        <label>
                            <input
                                type="checkbox"
                                name="git"
                                onChange={this.handleChange}
                                checked={this.state.git}
                            />GIT (Code Versioning)
                    </label>
                        <label>
                            <input
                                type="checkbox"
                                name="backendDatabases"
                                onChange={this.handleChange}
                                checked={this.state.backendDatabases}
                            />Back-End and Databases
                    </label>
                        <label>
                            <input
                                type="checkbox"
                                name="hosting"
                                onChange={this.handleChange}
                                checked={this.state.hosting}
                            />Hosting (Public web site)
                    </label>
                        <label>
                            <input
                                type="checkbox"
                                name="libraries"
                                onChange={this.handleChange}
                                checked={this.state.libraries}
                            />Libraries and frameworks
                    </label>
                    </section>
                    <button>Submit</button>
                </form>

                <hr />

    }
}
export default MyForm