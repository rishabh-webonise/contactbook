import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { uuid } from 'uuidv4'

import './App.css';
import { AddContact } from './components/AddContact';
import { ContactList } from './components/ContactList';
import { Header } from './components/Header';
import { Login } from './components/Login';
import api from './api/contacts';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const [contacts, setContacts] = useState([])

  const fetchContacts = async () => {
    const response = await api.get('/contacts')
    return response.data
  }

  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await fetchContacts()
      if (allContacts) setContacts(allContacts)
    }
    getAllContacts()
  }, [])

  useEffect(() => { }, [contacts])

  const onAdd = async (contact) => {
    contact.id = uuid()
    console.log(contact);
    const response = await api.post('/contacts', contact)
    setContacts([...contacts, response.data])
  }

  const onDelete = async (contact) => {
    await api.delete('/contacts/' + contact.id)
    setContacts(contacts.filter((e) => e.id !== contact.id))
  }

  const onEdit = async (contact) => {
    console.log(contact);
  }

  return (
    <ErrorBoundary>
      <Router>
        <div className="ui container">
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/list">
              <Header />
              <ContactList contacts={contacts} onDelete={onDelete} onEdit={onEdit} />
            </Route>
            <Route exact path="/add">
              <Header />
              <AddContact onAdd={onAdd} />
            </Route>
          </Switch>
        </div>
      </Router>
    </ErrorBoundary>
    // <div className="App"><header className="App-header">
    // </header></div>
  );
}

export default App;
