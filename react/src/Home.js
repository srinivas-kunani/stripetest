

import BlogList from './BlogList';
import useFetch from './useFetch';


const Home = () => {
    // Command for starting JSON Server watching the local data file.
    // npx json-server --watch data/db.json --port 8000
  
    const {data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    return (       
        <div className="home">
            {isPending && <div> <h2>Loading blogs...</h2></div>}      
            {error && <div> {error}</div>}      
            {blogs && <BlogList blogs={blogs} title='All Blogs'></BlogList>}
        </div>
      );
}
 
export default Home;
