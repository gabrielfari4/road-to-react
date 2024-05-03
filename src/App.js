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

  // callback function que recebe um evento
  const handleSearch = event => {
    setSearchTerm(event.target.value)
  }

  const searchedStories = stories.filter(story => {
    return story.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  })
  

  return (
    <div className="App">
      <h1>
        My Hacker Stories
      </h1>

      {/* recebe o evento */}
      <Search onSearch={handleSearch} />

      <hr />

      {/* instância de componente enviando o prop do array stories */}
      <List list={searchedStories}/>

    </div>
  );
}


const Search = props => {
  /* // useState que define e altera o value do input search
  const [searchTerm, setSearchTerm] = useState(''); 
  // event handler - expressão de função que recebe o evento e utiliza o value deste para alterar o value do input
  const handleChange = event => {
    setSearchTerm(event.target.value)

    // props que envia o evento para o atributo onSearch
    props.onSearch(event)
  } */

  return (
    <div>
      {/* antes: a cada alteração no input, é chamada a função handleChange */}
      {/* depois: a cada alteração, a prop é chamada. Neste caso sendo o callback handler do App */}
      <label htmlFor='search'>Search: </label>
      <input id='search' type='text' onChange={props.onSearch}/>

      {/* elemento que utiliza o valor do value do input */}
      <p>
        Searching for <strong>{props.onSearch}</strong>.
      </p>
    </div>
  )
}

// componente funcional que recebe a props (um array), faz o map para gerar elementos
const List = props => 
  props.list.map(item => (
      // key é um atributo importante a ser usado sempre com algum tipo de id único para garantir a fidelidade de organização de listas
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
