import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { uuid } from 'uuidv4'
import './App.css';
import { AddContact } from './components/AddContact';
import { ContactList } from './components/ContactList';
import { Header } from './components/Header';

function App() {
  let intialContacts = []
  if (localStorage.getItem('contacts') !== null) intialContacts = JSON.parse(localStorage.getItem('contacts'))

  const [contacts, setContacts] = useState(intialContacts)
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  const onAdd = (contact) => {
    contact.id = uuid()
    console.log(contact);
    setContacts([...contacts, contact])
  }

  const onDelete = (contact) => {
    setContacts(contacts.filter((e) => e !== contact))
  }

  return (
    <Router>
      <div className="ui container">
        <Header />
        <Switch>
          <Route exact path="/">
            <AddContact onAdd={onAdd} />
          </Route>
          <Route exact path="/list">
            <ContactList contacts={contacts} onDelete={onDelete} />
          </Route>
        </Switch>
      </div>
    </Router>
    // <div className="App"><header className="App-header">
    // </header></div>
  );
}

export default App;
