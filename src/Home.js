import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'Lorem ipsum...', author: 'Pigo', id: 1},
        {title: 'Welcome party!', body: 'Lorem ipsum...', author: 'Mis', id: 2},
        {title: 'Web dev top tips', body: 'Lorem ipsum...', author: 'Buco', id: 3}
    ]);

    return (
        <BlogList blogs={blogs} title="All blogs"/>
    );
}
 
export default Home;