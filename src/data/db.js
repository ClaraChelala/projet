import Post from './post';
import User from './user';
import Topic from './topic';
import Branche from './branches';

export const Branches = [
    new Branche('Beirut'),
    new Branche('Zahle'),
    new Branche('North'),
    new Branche("South"),
    new Branche("Ain Saade")
]
export const Topics = [
    new Topic(
        '1',
        'Topic 1',
        'Description 1'
    ),
    new Topic (
        '2',
        'Topic 2',
        'Description 2'
    ),
    new Topic (
        '3',
        'Topic 3',
        'Description 3'
    ),
    new Topic (
        '4',
        'Topic 4',
        'Description 4'
    ),
    new Topic (
        '5',
        'Topic 5',
        'Description 5'
    ),
    new Topic (
        '6',
        'Topic 6',
        'Description 6'
    ),
    new Topic (
        '7',
        'Topic 7',
        'Description 7'
    ),
    new Topic (
        '8',
        'Topic 8',
        'Description 8'
    )
]
export const Posts = [
    new Post (
        '1',
        'Post 1',
        'Content 1',
        '05/07/21',
        '1'
    ),
    new Post (
        '2',
        'Post 2',
        'Content 2',
        '07/09/21',
        '1'
    ),
    new Post (
        '3',
        'Post 3',
        'Content 3',
        '19/09/21',
        '1'
    ),
    new Post (
        '4',
        'Post 4',
        'Content 4',
        '02/10/21',
        '1'
    ),
    new Post (
        '5',
        'Post 5',
        'Content 5',
        '11/10/21',
        '2'
    ),
    new Post (
        '6',
        'Post 6',
        'Content 6',
        '16/10/21',
        '2'
    ),
    new Post (
        '7',
        'Post 7',
        'Content 7',
        '30/10/21',
        '2'
    ),
    new Post (
        '8',
        'Post 8',
        'Content 8',
        '13/11/21',
        '2'
    ),
]

export const Users = [
    new User (
        '1',
        'Name 1',
        'email1@email.com',
        'Admin',
        'Manager'
    ),
    new User (
        '2',
        'Name 2',
        'mail2@email.com',
        'User',
        'Manager'
    ),
    new User (
        '3',
        'Name 3',
        'mail3@email.com',
        'User',
        'Manager'
    ),
    new User (
        '4',
        'Name 4',
        'mail4@email.com',
        'User',
        'Manager'
    )
]
