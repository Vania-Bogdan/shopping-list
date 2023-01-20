import AddForm from "./AddForm/AddForm";
import ContactList from "./ContactList/ContactList";

import { useSelector, useDispatch } from "react-redux";

import { addContact, removeContact } from "redux/contacts/con-slice";

import { getProducts } from "redux/contacts/con-selectors";

import "../../css/styles.css"

export default function Phonebook() {

    const dispatch = useDispatch()

    const onAddContact = (payload) => {
        const isContact = contacts.find(item => item.name.toLowerCase() === payload.name.toLowerCase());
            if (isContact) {
                alert(`${payload.name} is already in contact`);
            } else {
                dispatch(addContact(payload))
            }
    }

    const onRemoveContact = (payload) => {
        dispatch(removeContact(payload))
    }

    const contacts = useSelector(getProducts)

    return (
            <div className="shopping-book">
                    <h1>Phonebook</h1>
                    <AddForm onSubmit={onAddContact} />
                    <h2>Contacts</h2>
                    {contacts.length === 0 ?
                    <p>No contacts found</p> : 
                    <div>
                        <ContactList contacts={contacts} onRemoveContact={onRemoveContact} />
                    </div>
                    }
            </div>
        );
};