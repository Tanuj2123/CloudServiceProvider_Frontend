import { useEffect, useState } from "react"
import Posts from "./Posts";


const Home = () => {

    const [file,setFile] = useState(null);
    const [uploadStatus,setUploadStatus] = useState("Add a file");

    const getData = async  ()=>{
        const data = await fetch("http://localhost:8000/");

        const json = await data.json();

        console.log(json);
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setUploadStatus("Uploading...")
        const formData = new FormData();
        formData.append("image",file);

        const response = await fetch("http://localhost:8000/create-post",{
            method:"POST",
            body:formData
        })

        const json = await response.json();

        setUploadStatus(JSON.stringify(json));
    }

    const handleFileChange = (e)=>{
        console.log(e.target?.files);
        setFile(e.target.files[0]);
    }

    useEffect(()=>{
        getData();
    },[])
  return (
    <div>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <input type="file" onChange={handleFileChange} ></input>
            <button type="submit">Upload</button>
            <h1>{uploadStatus}</h1>
        </form>
        <Posts/>
    </div>
  )
}

export default Home