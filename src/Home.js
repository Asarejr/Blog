import {useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
const [blogs, setBlogs] = useState([
    {title: 'My new website', body: 'Lorem is omg...', author: 'poncho', id: 1 },
    {title: 'Ghanaians deserve better', body: 'Lorem have got...', author: 'spyfie', id: 2 },
    {title: 'Cheating is never an option', body: 'Lorem has...', author: 'poncho', id: 3 }
]);

const [name, setName] = useState('poncho');

const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
}

useEffect(() => {
    console.log('use  effect run');
    console.log(name);
}, [name]); 

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
            <button type="button" onClick={() => setName('spyfie')}
            class="btn btn-outline-primary">Change name</button>
            <p>{name}</p>

        </div>


     );
}


export default Home;