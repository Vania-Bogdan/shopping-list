// import useLocalStorage from "hooks/localStorage";
import AddForm from "./AddForm/AddForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { addContact, removeContact, setFilter } from "redux/actions";

import { getFilteredContacts, getFilter } from "redux/selectors";

export default function Phonebook() {

    // const [contacts, setContacts] = useLocalStorage('contacts', []);
    // const [filter, setFilter] = useState('');

    // const addContact = ({ name, number }) => {
    //     const isContact = contacts.find(contact => contact.name === name);
    //         if (isContact) {
    //             alert(`${name} is already in contact`);
    //             setContacts(contacts);
    //         } else {
    //             setContacts([
    //                 {
    //                 id: nanoid(),
    //                 name,
    //                 number,
    //                 },
    //                 ...contacts,])
    //         }
    // };

    // const deleteContact = (contactId) => {
    //     setContacts(contacts => (
    //         contacts.filter(contact => contact.id !== contactId)
    //     ));
    // };

    // const onChangeFilter = (e) => {
    //     setFilter(e.currentTarget.value);
    // };

    
    // const getVisibleContact = () => {
    //     const normalizedFilter = filter.toLowerCase();
    //     return contacts.filter(contact =>
    //     contact.name.toLowerCase().includes(normalizedFilter));
    // };

    // useEffect(() => {
    // // в классах это componentDidMount
    // const contacts = localStorage.getItem('contacts');
    // const parsedContacts = JSON.parse(contacts);
    // if (parsedContacts) {
    //     setContacts(parsedContacts);
    // }
    // }, [setContacts]);

    // useEffect(() => {
    // // в классах это componentDidUpdate
    // window.localStorage.setItem('contacts', JSON.stringify(contacts));
    // }, [contacts]);

    // console.log(contacts);

    const dispatch = useDispatch()

    const onAddContact = (payload) => {
        dispatch(addContact(payload))
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
            <Book>
                    <h1>Phonebook</h1>
                    <AddForm onSubmit={onAddContact} />
                    <h2>Contacts</h2>
                    {/* {contacts.length === 0 ?
                    <p>No contacts found</p> :  */}
                    <div>
                        <Filter filter={filter} onSetFilter={onSetFilter} />
                        <ContactList contacts={contacts} onRemoveContact={onRemoveContact} />
                    </div>
                    {/* } */}
            </Book>
        );
};

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