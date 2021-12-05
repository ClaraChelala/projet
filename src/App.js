import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import './App.css';

import AuthRoute from './components/auth/AuthRoute';
import UserTopics from './pages/UserTopics';
import Posts from './pages/Posts';
import Signin from './pages/Signin';
import Users from './pages/Users';
import NewTopic from './pages/NewTopic';
import UserPosts from './pages/UserPosts';
import NewUserPost from './pages/NewUserPost';

import Navbar from './components/layout/Navbar';

import postsReducer from './store/reducers/posts';
import usersReducer from './store/reducers/users';
import TopicsReducer from './store/reducers/topics';
import AdminTopics from './pages/AdminTopics';
import branchesReducer from './store/reducers/branches';

const rootReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer,
  topics : TopicsReducer,
  branches : branchesReducer,
});

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}> 
      <Router>
        <Navbar />
        <Route exact path="/signin" component={Signin} />
        <AuthRoute exact path="/Users" component={Users} />
        <AuthRoute exact path="/AdminTopics" component={AdminTopics} />
        <AuthRoute exact path="/UserTopics" component={UserTopics} />
        <AuthRoute exact path="/Posts" component={Posts} />
        <AuthRoute exact path="/NewTopic" component={NewTopic} />
        <AuthRoute exact path="/UserPosts" component={UserPosts} />
        <AuthRoute exact path="/NewUserPost" component={NewUserPost} />
      </Router>
    </Provider>
  );
}

export default App;