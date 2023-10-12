import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isFormProcessing, setIsFormProcessing] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };        
        setIsFormProcessing(true);
        setTimeout(() => {
            fetch('http://localhost:8000/blogs/', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(blog)
              }).then(() => {
                  setIsFormProcessing(false);
                  console.log('new blog added');
                  navigate('/');
              })
        }, 500);
      }
  
    return (
      <div className="create">
        <h2>Add a New Blog</h2>
        <form onSubmit = {handleSubmit}>
          <label>Blog title:</label>
          <input 
            type="text" 
            required 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Blog body:</label>
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <label>Blog author:</label>
          <select
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="mario">mario</option>
            <option value="yoshi">yoshi</option>
          </select>
          { !isFormProcessing && <button>Add Blog</button>}
          { isFormProcessing && <button disabled>Saving...</button>}
        </form>
      </div>
    );
}
 
export default Create;