import React from 'react';
import {useRouter} from "next/router";
import MainContainer from "../../components/MainContainer";

export default function ({user}) {
    // const {query} = useRouter()
    // console.log(query)

    return (
        <MainContainer>
            <h1>User Page</h1>
            <h3>USER ID - {user.id}</h3>
            <h2>name:{user.name}</h2>
            <p><span>email:</span>{user.email}</p>
            <p><span>address :</span> {user.address.street}{user.address.suite}</p>
            <p><span>city:</span>{user.address.city}</p>
        </MainContainer>
    );
};

export async function getServerSideProps({params}) {

    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()
    console.log(user)
    return {
        props: {user}, // will be passed to the page component as props
    }
}

