import { useState, useEffect } from "react";
import useLocalStorage from "hooks/localStorage";
import AddForm from "./AddForm/AddForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

import { nanoid } from 'nanoid'
import styled from "styled-components";


export default function Phonebook() {

    const [contacts, setContacts] = useLocalStorage('contacts', []);
    const [filter, setFilter] = useState('');

    const addContact = ({ name, number }) => {
        const isContact = contacts.find(contact => contact.name === name);
            if (isContact) {
                alert(`${name} is already in contact`);
                setContacts(contacts);
            } else {
                setContacts([
                    {
                    id: nanoid(),
                    name,
                    number,
                    },
                    ...contacts,])
            }
    };

    const deleteContact = (contactId) => {
        setContacts(contacts => (
            contacts.filter(contact => contact.id !== contactId)
        ));
    }; 

    const onChangeFilter = (e) => {
        setFilter(e.currentTarget.value);
    };

    
    const getVisibleContact = () => {
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter));     
    };

    useEffect(() => {
    // в классах это componentDidMount
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
        setContacts(parsedContacts);
    }
    }, [setContacts]);

    useEffect(() => {
    // в классах это componentDidUpdate
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    // componentDidMount() {
    // // вызывается один раз при монтировании компонента
    //     const contacts = localStorage.getItem('contacts');
    //     const parsedContacts = JSON.parse(contacts);
    //     if (parsedContacts) {
    //         this.setState({contacts: parsedContacts})
    //     }
    // }

    // componentDidUpdate(prevState) {
    // // Вызывается после каждого обновления
    // if (this.state.contacts !== prevState.contacts) {
    //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    // }
    // }

    return (
            <Book>
                    <h1>Phonebook</h1>
                    <AddForm onSubmit={addContact} />
                    <h2>Contacts</h2>
                    {contacts.length === 0 ?
                    <p>No contacts found</p> : 
                    <div>
                        <Filter value={filter} onChange={onChangeFilter} />
                        <ContactList contacts={getVisibleContact()} onDeleteContact={deleteContact} />
                    </div>
                    }
            </Book>
        );
};



// class Phonebook extends React.Component{
//     state = {
//         contacts: [],  
//         filter: ''
//     };

    // addContact = ({ name, number }) => {
    //     this.setState(({ contacts }) => {
    //         const isContact = contacts.find(contact => contact.name === name);

    //         if (isContact) {
    //             alert(`${name} is already in contact`);
    //             return contacts;
    //         } else {
    //             const newContact = {
    //                 id: nanoid(),
    //                 name,
    //                 number,
    //             };
    //             return {
    //                 contacts: [newContact, ...contacts],
    //             };
    //         }
    //     });
    // };

//     deleteContact = (contactId) => {
//         this.setState(prevState => ({
//             contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//         }))
//     }; 

//     onChangeFilter = (e) => {
//         this.setState({ filter: e.currentTarget.value });
//     };

//     getVisibleContact = () => {
//         const { contacts, filter } = this.state;
//         const normalizedFilter = filter.toLowerCase();
//         return contacts.filter(contact =>
//             contact.name.toLowerCase().includes(normalizedFilter));
//     };

//     componentDidMount() {
//     // вызывается один раз при монтировании компонента
//         const contacts = localStorage.getItem('contacts');
//         const parsedContacts = JSON.parse(contacts);
//         if (parsedContacts) {
//             this.setState({contacts: parsedContacts})
//         }
//     }

//     componentDidUpdate(prevState) {
//     // Вызывается после каждого обновления
//     if (this.state.contacts !== prevState.contacts) {
//         localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//     }

//     render() {
//         const { filter } = this.state;
//         const visibleContacts = this.getVisibleContact();
//         return (
//             <Book>
//                     <h1>Phonebook</h1>
//                     <AddForm onSubmit={this.addContact} />
//                     <h2>Contacts</h2>
//                     {this.state.contacts.length === 0 ?
//                     <p>No contacts found</p> : 
//                     <div>
//                         <Filter value={filter} onChange={this.onChangeFilter} />
//                         <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact} />
//                     </div>
//                     }
//             </Book>
//         );
//     }
// }

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

// export default Phonebook