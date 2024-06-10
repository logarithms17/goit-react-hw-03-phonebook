import React, { Component } from 'react'
import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList'
import Filter from './Filter/Filter'

export class App extends Component {
  state = {
    contacts: [
      { id: "1", name: "Neil Bryan Apostol", number: "09218017781" },
      { id: "2", name: "Benjamina Apostol", number: "09218234241" },
      { id: "3", name: "Bryce Apostol", number: "0921822331"}
    ],
    filter: ""
  }

  

  render() {
    const { contacts, filter } = this.state
    
    const addInfo = (newInfo) => {
      this.setState(prevValue => ({
        contacts: [...prevValue.contacts, newInfo]
      }))
    }

    const deleteInfo = (id) => {
      // implement delete functionality
      this.setState(prevValue => ({
        contacts: prevValue.contacts.filter(contact => contact.id !== id)
      }))
    }

    const setFilter = (prevValue) => {
      // implement filter functionality
      
      this.setState({ filter: prevValue })

      
    }

    //get the array of the filtered data from filter
    const filterContact = () => {
      const { contacts, filter } = this.state
      return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())) //using includes returns the data every changes

      // return contacts.filter(contact => contact.name.toLowerCase() === filter.toLowerCase()) {using this method only returns the data if the info is complete}
    }

    return ( 
      <div>
        <ContactForm addInfo={addInfo} contacts={contacts} />
        <Filter filter={filter} setFilter={setFilter} />
        <ContactList deleteInfo={deleteInfo} filterContact={filterContact} />
      </div>
    )
  }
}

