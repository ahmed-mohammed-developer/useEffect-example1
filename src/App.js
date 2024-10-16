import { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [data, setData] = useState(null);
    const [catImage, setCatImage] = useState(null);

    useEffect(() => {
        fetch("https://cat-fact.herokuapp.com/facts/random")
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error("Error fetching data:", error));

        fetch("https://api.thecatapi.com/v1/images/search")
            .then(response => response.json())
            .then(data => setCatImage(data[0].url))
            .catch(error => console.error("Error fetching cat image:", error));
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                {data ? (
                    <div>
                        <h2>Cat Fact:</h2>
                        <p>{data.text}</p>
                        {catImage && <img src={catImage} alt="A random cat" style={{ width: '300px', height: '300px' }} />}
                    </div>
                ) : (
                    <div>Loading...</div>
                )}
            </header>
        </div>
    );
}

export default App;
