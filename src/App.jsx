import React, { useState } from "react";

const App = () => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.firstName.trim() && data.lastName.trim()) {
            setIsSubmitted(true);
        } else {
            setIsSubmitted(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mx-8">
            <h1 className="text-4xl my-8 ">Full Name Display</h1>
            <span>First Name: </span>
            <input
                className="border"
                onChange={handleChange}
                name="firstName"
                value={data.firstName}
                required
            />
            <br />
            <br />
            <span>Last Name: </span>
            <input
                className="border"
                onChange={handleChange}
                name="lastName"
                value={data.lastName}
                required
            />
            <br />
            <br />
            <button className="border px-2" type="submit">
                Submit
            </button>
            <p>
                {isSubmitted
                    ? `Full Name: ${data.firstName} ${data.lastName}`
                    : ""}
            </p>
        </form>
    );
};

export default App;
