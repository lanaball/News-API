import './App.scss';
import './components/News.scss'
import News from "./components/News";
import Menu from './components/Menu';
// import NewsGrid from './components/NewsGrid';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <h1 className='title'>See the Latest News</h1>
      <div className='news-grid wrapper'>
      <News></News>
      </div>
    </div>
  );
}

export default App;
