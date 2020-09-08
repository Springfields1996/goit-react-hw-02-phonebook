import React from 'react';
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  getContact = contact =>
    this.setState({ contacts: [...this.state.contacts, contact] });

  deleteContact = ({ target: { id } }) => {
    this.setState({
      contacts: [...this.state.contacts.filter(elem => elem.id !== id)],
    });
  };

  setFilter = ({ target }) => {
    this.setState({ filter: target.value });
  };

  render = () => {
    const { contacts, filter } = this.state;

    const filterContacts = contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase()),
    );

    return (
      <div>
        <h2>Phonebook</h2>
        <Form onSubmit={this.getContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.setFilter} />
        <ul style={{ marginTop: 40 }}>
          <Contacts
            contacts={filterContacts}
            onDeleteContact={this.deleteContact}
          />
        </ul>
      </div>
    );
  };
}

// export default App;

// const Button = ({ changeMessage, label }) => (
//   <button type="button" onClick={changeMessage}>
//     {label}
//   </button>
// );

// export class App extends React.Component {
//   state = {
//     message: new Date().toLocaleTimeString(),
//   };

//   // Метод который будем передавать в Button для вызова при клике
//   updateMessage = evt => {
//     console.log(evt); // Доступен объект события

//     this.setState({
//       message: new Date().toLocaleTimeString(),
//     });
//   };

//   render() {
//     return (
//       <>
//         <span>{this.state.message}</span>
//         <Button label="Change message" changeMessage={this.updateMessage} />
//       </>
//     );
//   }
// }
