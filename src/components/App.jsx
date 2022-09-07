import Phonebook from "./Phonebook/Phonebook";

import store from "redux/store";

import { Provider } from "react-redux";

export const App = () => {
  return (
    <Provider store={store}>
      <Phonebook />
    </Provider>
  );
};
