import React from "react"

function MyForm() {
    return (
        <div>
            <form>
                <section>
                    <h2>Personal information</h2>
                    <input
                        name="firstName"
                        placeholder="First Name"
                    /><br />

                    <input
                        name="lastName"
                        placeholder="Last Name"
                    /><br />

                    <input
                        name="age"
                        placeholder="Age"
                    /><br />

                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                        />
                    </label>Male
                    <br />
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                        />
                    </label>Female
                </section>
                <br />

                <section>
                    <h2>Select the option you have most experience with</h2>
                    <select
                        name="mainExperience"
                    >
                        <option value=""> -- Select -- </option>
                        <option value="front end">Front End</option>
                        <option value="back end">Back End</option>
                        <option value="database analysis">Database analysis</option>
                        <option value="machine learning">Machine learning</option>
                    </select>
                </section>
                <br />

                <section>
                    <h2>Select your skills as a developer</h2>
                    <label>
                        <input
                            type="checkbox"
                            name="html"
                        />HTML
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="css"
                        />CSS
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="javaScript"
                        />JavaScript
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="testingAndDebugging"
                        />Testing and debugging
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="git"
                        />GIT (Code Versioning)
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="backendDatabases"
                        />Back-End and Databases
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="hosting"
                        />Hosting (Public web site)
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="libraries"
                        />Libraries and frameworks
                    </label>
                </section>
                <button>Submit</button>
            </form>

            <hr />

            <section>
                <h2>Entered information: </h2>
                <p>Name: "first + second"</p>
                <p>Age: </p>
                <p>Gender: </p>
                <p>Main experience: </p>
                <p>Developer skills: </p>
            </section>
        </div>
    )

}
export default MyForm