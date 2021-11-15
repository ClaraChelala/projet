import { Topics} from '../../data/db';

const initialState = {
    topics: Topics,
}

const TopicsReducer = (state = initialState, action) => {
    switch (action.type) {

        default: return state;
    }
}

export default TopicsReducer;