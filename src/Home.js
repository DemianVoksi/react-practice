import BlogList from './BlogList';
import useFetch from './UseFetch';


const Home = () => {
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
  
  return (
    <div className='home'>
      { error && <div> { error }</div> } 
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} title="All blogs"/> }
    </div>  
  );
}

// const { something }
// the "&&" in curly brackets

export default Home;