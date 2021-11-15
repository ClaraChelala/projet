import { Posts} from '../../data/db';

const initialState = {
    posts: Posts,
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {


        default: return state;

    }
}

export default postsReducer;