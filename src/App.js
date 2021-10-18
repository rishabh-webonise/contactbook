import { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './App.css';
import { AddContact } from './components/AddContact';
import { ContactList } from './components/ContactList';
import { Header } from './components/Header';
import { Login } from './components/Login';
import { addContact } from "./store/actions/addContact";
import { deleteContact } from "./store/actions/deleteContact";
import { getContacts } from "./store/actions/getContacts";

function App() {
  const contacts = useSelector(state => state.contacts.contacts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getContacts())
    console.log(contacts);
  }, [])

  const onAdd = async (contact) => {
    dispatch(addContact(contact))
  }

  const onDelete = async (contact) => {
    dispatch(deleteContact(contact.id))
  }

  const onEdit = async (contact) => {
    console.log(contact);
  }

  return (
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

    // <div className="App"><header className="App-header">
    // </header></div>
  );
}

export default App;
