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
                Topics:{...state, ...action.payload}
            };
            case Delete_Topic:
                return {
                    topics : Topics.slice(),
                    Topics : {...state, ...action.payload}
                }

        default: return state;
    }
}

export default TopicsReducer;