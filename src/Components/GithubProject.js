import React, { useEffect, useState } from 'react'
import GithubUsers from './GithubUsers';
import Loading from './Loading';

const GithubProject = () => {

    const [users, setusers] = useState([]);
    const [loading, setloading] = useState(true);


    const getUsers = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            setusers(data);
            setloading(false);
        } catch (error) {
            console.log("The Error is :" + error);
            setloading(false);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <GithubUsers users={users} />
        </>
    )
}

export default GithubProject
