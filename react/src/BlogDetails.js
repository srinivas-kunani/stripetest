import { useParams } from "react-router-dom";
import useFetch from "./useFetch.js";
import { useNavigate } from "react-router-dom";


const BlogDetails = () => {

    
    const navigate = useNavigate();
    const {id} = useParams();
    const {data:blog, isPending, error} = useFetch("http://localhost:8000/blogs/" + id);

    const handleDeleteBlog = (e) => {
        console.log('Request to delete blog');
        fetch('http://localhost:8000/blogs/'+id, 
            {method:'DELETE'}
        ).then (navigate('/'));

    }

    return ( <div className="blog-details">
        {isPending && (<div> Loading....</div>)}
        {error && (<div> {error} </div>)}
        {blog && (
            <article>
                <h2>{blog.title}</h2>
                <p> Written by {blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={handleDeleteBlog}>Delete</button>
            </article>
        )}
    </div> );
}
 
export default BlogDetails;