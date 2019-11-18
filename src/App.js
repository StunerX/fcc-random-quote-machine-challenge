import React from 'react';
import './App.css';
import QuoteBox from './components/quote-box'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'


// const url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
// axios.get(url).then((result) => {
//   console.log('recebeu dados', result.data.quotes[0])
//   this.props.nextAuthor(result.data.quotes[0])
// })

const store = createStore(reducer)

console.log('reducer', store.getState())

store.subscribe(() => console.log(store.getState()))

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <QuoteBox />
      </div>
    </Provider>
  );
}

export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
