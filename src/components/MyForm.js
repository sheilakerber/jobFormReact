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


                        <input
                        <input

                </section>

                    </label>
                    </label>
                    </label>
                    </label>
                    </label>
                    </label>
                    </label>
                    </label>

    }
}
export default MyForm