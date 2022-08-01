import React from "react";
import AddForm from "components/AddForm/AddForm";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";

import shortid from "shortid";
import styled from "styled-components";

class Phonebook extends React.Component{
    state = {
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],  
        filter: ''
    };
    generateIdContact = shortid.generate();

    addContact = ({ name, number }) => {
        this.setState(({ contacts }) => {
            const isContact = contacts.find(contact => contact.name === name);

            if (isContact) {
                alert(`${name} is already in contact`);
                return contacts;
            } else {
                const newContact = {
                    id: this.generateIdContact,
                    name,
                    number,
                };
                return {
                    contacts: [newContact, ...contacts],
                };
            }
        });
    };

    deleteContact = (contactId) => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(contact => contact.id !== contactId),
        }))
    }; 

    onChangeFilter = (e) => {
        this.setState({ filter: e.currentTarget.value });
    };

    getVisibleContact = () => {
        const { contacts, filter } = this.state;
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter));
    };

    render() {
        const { filter } = this.state;
        const visibleContacts = this.getVisibleContact();
        if (this.state.contacts.length === 0) {
            return (
                <Book>
                    <h1>Phonebook</h1>
                    <AddForm onSubmit={this.addContact} />
                    <h2>Contacts</h2>
                    <p>No contacts found</p>
                </Book>
            )
        } else {
            return (
                <Book>
                    <h1>Phonebook</h1>
                    <AddForm onSubmit={this.addContact} />
                    <h2>Contacts</h2>
                    <Filter value={filter} onChange={this.onChangeFilter} />
                    <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact} />
                </Book>
            )
        }
    }
}

const Book = styled.div`
    border: 5px solid #000000;
    border-radius: 20px;
    box-shadow: 10px 10px 8px 2px rgb(0 0 0 / 30%);
    color: #000000;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    margin: 100px auto;
    padding: 20px;
    width: 500px;
    background-color: #00cab9;
`

export default Phonebook