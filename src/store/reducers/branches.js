import { Branches } from "../../data/db";

const initialState ={
    branches: Branches,
}

const branchesReducer = (state = initialState, action) => {
    switch (action.type) {


        default: return state;

    }
}
export default branchesReducer;
