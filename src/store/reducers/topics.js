import { Topics} from '../../data/db';
import { Add_Topic,Delete_Topic } from './topicsActions';

const initialState = {
    topics: Topics,
}

const TopicsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Add_Topic:
            return {
                topics : Topics.slice(),
            };

        default: return state;
    }
}

export default TopicsReducer;