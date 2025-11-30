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
        <div>
            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                <h1>Full Name Display</h1>

                <label>
                    First Name:{" "}
                    <input
                        className="border"
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
                        className="border"
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={data.lastName}
                        onChange={handleChange}
                    />
                </label>
                <br />

                <div className="mb-2">
                    <button className="border px-1 py-2" type="submit">
                        Submit
                    </button>
                </div>
            </form>

            {fullName && <p>Full Name: {fullName}</p>}
        </div>
    );
};

export default App;
