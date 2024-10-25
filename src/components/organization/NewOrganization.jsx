import React, { useEffect } from "react";
import Layout from "../layout/Layout";

export default function NewOrganization() {
    const [name, setName] = React.useState('');
    const [street, setStreet] = React.useState('');
    const handleInputChange = (event) => {
        setName(event.target.value);
    }

    function newOrganization() {

        alert(name);
        const data = {
            name: name
        };

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        fetch('http://localhost:8000/api/organizations', options)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    };

    useEffect(() => {
        newOrganization()
    }, []);


    return (
        <Layout>
            <h2>New Organization</h2>
            <form action={newOrganization} method="post">
                <label htmlFor="name" className="form-label mt-3">Name</label>
                <input type="text" id="name" value={name} onChange={handleInputChange} className="form-control" />
                <label htmlFor="street" className="form-label mt-3">Street</label>
                <input type="text" value={street} id="street" onChange={handleInputChange} className="form-control" />
                <label htmlFor="state" className="form-label mt-3">State</label>
                <input type="text" name="state" id="state" className="form-control" />
                <button className="btn btn-primary mt-3">Submit</button>

            </form>
        </Layout>
    );
}