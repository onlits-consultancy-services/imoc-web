import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";

function Organization() {
    const [organizations, setOrganizations] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/api/organizations")
            .then((response) => response.json())
            .then((data) => {
                setOrganizations(data);
                console.log(data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <Layout>
            <div class="row">
                <div class="col">
                    <h2>Organizations</h2>
                </div>
                <div class="col-1">
                    <a href="/Organization/New" className="btn btn-primary">New</a>
                </div>
            </div>
            <table className="table">
                <thead className="table-light">
                    <tr>
                        <th>Name</th>
                        <th>Street</th>
                    </tr>
                </thead>
                <tbody>
                    {organizations.map((organization) => (
                        <tr>
                            <td>{organization.name}</td>
                            <td>{organization.street}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Layout>
    );
}

export default Organization;