//get info from store

export const getFilteredContacts = ({ items, filter }) => {
    const normalizedFilter = filter.toLowerCase();
    const result = items.filter(({ name }) => {
        const normalizedName = name.toLowerCase();
        return (normalizedName.includes(normalizedFilter))
    })
    return result
}

export const getFilter = ({filter}) => filter;