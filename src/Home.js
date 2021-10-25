import { useState } from 'react';

const Home = () => {
    // let name = 'Mis';
    const [name, setName] = useState('Mis');
    const [age, setAge] = useState(3);

    const handleClick = () => {
        setName('Pigic');
        setAge(3.5)
    }
    
    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}
 
export default Home;