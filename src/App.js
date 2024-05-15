import { useState, useEffect } from 'react';
import './App.css';
import List from './components/List';
import InputWithLabel from './components/InputWithLabel';


const initialStories = [
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

// função que simula uma API recebendo dados de fonte externa.
/* const getAsyncStories = () => Promise.resolve({ data: { stories: initialStories } }); */
const getAsyncStories = () => new Promise(resolve => 
  setTimeout(
    () => resolve({ data: { stories: initialStories } }),
    5000
  ) 
); 

// const useSemiPersistentState = (key, initialState) => {}

const App = () => {

  // Ao renderizar o componente pela primeira vez o useState busca o estado inicial como o value da key search armazenada no localStorage anteriormente ou em caso de não haver nada armazenado mostra o estado inicial de searchTerm com o valor 'React'
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem('search') || 'React'
  );

  /* // Recebe como valor inicial a lista
  const [stories, setStories] = useState(initialStories) */

  // Recebe como valor inicial um array vazio para simular a captura dos dados de forma assíncrona.
  const [stories, setStories] = useState([]);

  // Once you start the application again, you should see a delayed rendering of the list. The initial state for the stories is an empty array. After the App component rendered, the side-effect hook runs once to fetch the asynchronous data. After resolving the promise and setting the data in the component’s state, the component renders again and displays the list of asynchronously loaded stories.
  useEffect(() => {
    getAsyncStories().then(result => {
      setStories(result.data.stories);
    })
  }, []);

  // Filtra a lista conforme o valor e atribui a lista resultante à variável stories
  const handleRemoveStory = item => {
    const newStories = stories.filter(
      story => item.objectID !== story.objectID
    );

    setStories(newStories);
  }

  // useEffect administra o side-effect do componente que envolve a manipulação do localStorage. O primeiro argumento é a função = manipulação em si - do side=effect e o segundo argumento é o chamado array de dependência, que a cada vez que um elemento do array é modificado, a função de side=effect será chamada.
  useEffect(() => {
    localStorage.setItem('search', searchTerm);
  }, [searchTerm])

  // callback function que recebe um evento
  const handleSearch = event => {
    setSearchTerm(event.target.value);
  }

  // constante que filtra o array e retorna um novo array caso o title do elemento inclua o que foi pesquisado no Search
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
      {/* <Search search={searchTerm} onSearch={handleSearch} /> */}

      <InputWithLabel
        id="search"
        value={searchTerm}
        isFocused
        onInputChange={handleSearch}
      >
        <Text /> 
      </InputWithLabel>

      <hr />

      {/* instância de componente enviando o prop do array stories */}
      {/* enviando a variável que corresponde ao elemento da lista filtrado no search */}
      <List list={searchedStories} onRemoveItem={handleRemoveStory}/>

    </div>
  );
}

const Text = () =>  (
  'Search: '
)

/* const Search = ({ search, onSearch }) => {
  // useState que define e altera o value do input search
  const [searchTerm, setSearchTerm] = useState(''); 
  // event handler - expressão de função que recebe o evento e utiliza o value deste para alterar o value do input
  const handleChange = event => {
    setSearchTerm(event.target.value)

    // props que envia o evento para o atributo onSearch
    props.onSearch(event)
  }

  return (
    <div>
      //antes: a cada alteração no input, é chamada a função handleChange
      //depois: a cada alteração, a prop é chamada. Neste caso sendo o callback handler do App
      <label htmlFor='search'>Search: </label>
      <input id='search' 
        type='text' 
        value={search}
        onChange={onSearch}/>

      //elemento que utiliza o valor do value do input
      <p>
        Searching for <strong>{search}</strong>.
      </p>
    </div>
  )
} */

export default App;
