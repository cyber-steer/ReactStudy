import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [contentTIle, contentFunction] = useState(['title','title2','title3']);
  let [count, countFuncion] = useState(0);

  let posts = '제목'
  return (
    <div className="App">
      <div className='black-nav'>
        <div style={{color:'blue', fontSize:'30px'}}>개발 blog</div>
      </div>
      <div className='list'>
        <h3>{ contentTIle[0] } <span onClick={ ()=> {countFuncion(count++)}  }>♡</span> { count }</h3>
        <p>1월 1일 발행</p>
        <hr />
        
        <h3>{ contentTIle[1] }</h3>
        <p>1월 1일 발행</p>
        <hr />
        
        <h3>{ contentTIle[2] }</h3>
        <p>1월 1일 발행</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
