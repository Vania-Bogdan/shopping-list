import { ADD_CONTACT, REMOVE_CONTACT, SET_FILTER  } from './types'

//MY STORE
const initialStore = {
    items: [],
    filter: ''
}

//What must actions do...
const reducer = (store = initialStore, {type, payload}) => {
    switch (type) {
        case ADD_CONTACT:
            return { ...store, items: [...store.items, payload] }
        case REMOVE_CONTACT:
            const newContacts = store.items.filter(({id}) => id !== payload);
            return { ...store, items: newContacts }
        case SET_FILTER:
            return {...store, filter: payload}
        default:
            return store
    }
}

export default reducer