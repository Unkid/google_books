import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import BookItem from './components/bookItem/bookItem';
import Error from './components/error/error';
import Main from './components/main/Main';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/card/:bookId' component={BookItem}/>
          <Route path='/error' component={Error}/>
          <Redirect to='/' />
        </Switch>
        
      </div>
    </BrowserRouter>
    
  );
}

export default App;
