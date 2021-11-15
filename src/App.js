import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore, combineReducers } from 'redux';
import {Provider } from 'react-redux';

import './App.css';

import AuthRoute from './components/auth/AuthRoute';
import Home from './pages/Home';
import AdminPosts from './pages/AdminPosts';
import Posts from './pages/Posts';
import Signin from './pages/Signin'
import Users from './pages/Users'
import NewTopic from './pages/NewTopic'

import Navbar from './components/layout/Navbar';

import postsReducer from './store/reducers/posts';
import usersReducer from './store/reducers/users';


const rootReducer = combineReducers({
  posts : postsReducer,
  users: usersReducer,
});

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Route exact path="/signin" component={Signin} />
        <AuthRoute exact path="/Home" component={Home} />
        <AuthRoute exact path="/Users" component={Users} />
        <AuthRoute exact path="/AdminTopics" component={AdminPosts} />
        <AuthRoute exact path="/Posts" component={Posts} />
        <AuthRoute exact path="/NewTopic" component={NewTopic} />
      </Router>
    </Provider>
  );
}

export default App;