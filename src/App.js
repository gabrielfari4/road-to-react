import { useState } from 'react';
import './App.css';



const title = 'you'

const welcome = {
  greeting: 'Hey',
  title: 'React',
}

function getTitle(title) {
  return title;
}


const App = () => {
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
    {
      title: 'The Lord of The Rings',
      url: 'https://lotr.org/',
      author: 'J.R.R. Tolkien',
      num_comments: 10,
      points: 5,
      objectID: 2,
    },
    {
      title: 'Manifesto Comunista',
      url: 'https://marxists.org/',
      author: 'Karl Marx, Friedrich Engels',
      num_comments: 2,
      points: 5,
      objectID: 3,
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = event => {
    setSearchTerm(event.target.value)
  }

  return (
    <div className="App">
      <h1>
        My Hacker Stories
      </h1>

      <label htmlFor='search'>Search: </label>
      <input id='search' type='text' onChange={handleChange}/>

      <p>
        Searching for <strong>{searchTerm}</strong>.
      </p>

      <hr />

      <List list={stories}/>

    </div>
  );
}

const List = props => 
  props.list.map(item => (
      <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span> - {item.author}, </span>
            <span>{item.num_comments}, </span>
            <span>{item.points}</span>
      </div>
  ));


export default App;
