import MainContainer from "../components/MainContainer";
import {useState} from "react";

const Posts = ({posts}) => {

    const [data,setData]  =useState(posts)

    const getTodos = async ()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const todos = await response .json()
        return setData(todos)
    }

    return (
        <MainContainer>
            <h2>posts</h2>
            <button onClick={getTodos}>SHOW TODOS</button>
            {data.map(el=>
                <p key={el.id}>{el.title}</p>
            )}
        </MainContainer>
    );
};

export default Posts;

export async function getStaticProps(context) {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()

    return {
        props: {posts}, // will be passed to the page component as props
    }
}