import './App.css';

const App = () => {
  return (
    <section className='bookList'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className='book'>
      <img src="https://m.media-amazon.com/images/P/0142400874.01._SCLZZZZZZZ_SX500_.jpg" alt="" />
      <h1>The Umbrella Man and Other Stories</h1>
      <h4>Roald Dahl</h4>
    </article>
  )
}

export default App;
