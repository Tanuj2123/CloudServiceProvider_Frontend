import { useState } from "react";
import Post from "./Post";

const Posts = () => {

    const [posts,setPosts] = useState([]);

    const handleSubmit = async (e)=>{
        e.preventDefault();

        const data = await fetch("http://localhost:8000/posts");

        const json = await data.json();
        console.log(json.posts);
        setPosts(json.posts);

    }
  return (
    <div>
        <form onSubmit={handleSubmit} >
            <button type="submit">Get All posts</button>
        </form>
        <div className="flex flex-wrap">
            {
                posts.map(post=><Post imgUrl={post?.image} caption={post?.caption}/>)
            }
        </div>
    </div>
  )
}

export default Posts