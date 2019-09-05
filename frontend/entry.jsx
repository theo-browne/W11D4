import ReactDOM from 'react-dom'
import React from 'react'

import configureStore from './store/store'
import Root from './components/root'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id, username: window.currentUser.username }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.store = store;
  ReactDOM.render(<Root store={store}/>, root);
})