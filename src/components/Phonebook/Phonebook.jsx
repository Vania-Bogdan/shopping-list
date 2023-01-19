import AddForm from "./AddForm/AddForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

import { useSelector, useDispatch } from "react-redux";

import { addContact, removeContact } from "redux/contacts/con-slice";
import { setFilter } from "redux/filter/filter-slice";

import { getFilteredContacts } from "redux/contacts/con-selectors";
import { getFilter } from "redux/filter/filter-selectors";

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

    const onSetFilter = ({ target } ) => {
        dispatch(setFilter(target.value))
    }

    const contacts = useSelector(getFilteredContacts)
    const filter = useSelector(getFilter)

    return (
            <div className="shopping-book">
                    <h1>Phonebook</h1>
                    <AddForm onSubmit={onAddContact} />
                    <h2>Contacts</h2>
                    <Filter filter={filter} onSetFilter={onSetFilter} />
                    {contacts.length === 0 ?
                    <p>No contacts found</p> : 
                    <div>
                        <ContactList contacts={contacts} onRemoveContact={onRemoveContact} />
                    </div>
                    }
            </div>
        );
};