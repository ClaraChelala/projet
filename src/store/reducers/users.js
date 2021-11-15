import { Users} from '../../data/db';

const initialState = {
    users: Users,
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        default: return state;
    }
}

export default usersReducer;