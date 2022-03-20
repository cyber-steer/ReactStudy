import logo from './logo.svg';
import './App.css';

let posts = '내용'
function 함수(){
  return 100
} 

function App() {
  return (
    <div className="App">
      <div className='black-nav'>
        <div style={{color:'blue', fontSize:'30px'}}>개발 blog</div>
      </div>
      <img src={ logo } />
      <h4> { posts } 함수 : {함수()}</h4>
      test
    </div>
  );
}

export default App;
