import React, { useState } from "react";

const App = () => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
    });
    const [fullName, setFullName] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (data.firstName.trim() && data.lastName.trim()) {
            setFullName(`${data.firstName} ${data.lastName}`);
        } else {
            setFullName("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Full Name Display</h1>

            <label>
                First Name:{" "}
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={data.firstName}
                    onChange={handleChange}
                />
            </label>
            <br />

            <label>
                Last Name:{" "}
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={data.lastName}
                    onChange={handleChange}
                />
            </label>
            <br />

            <button type="submit">Submit</button>

            <p>
                {fullName
                    ? `Full Name: ${fullName}`
                    : "Full Name will appear here after submission"}
            </p>
        </form>
    );
};

export default App;
