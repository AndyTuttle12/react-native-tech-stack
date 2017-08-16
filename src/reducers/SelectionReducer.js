import { SELECT_LIBRARY } from '../actions/types';

export default (state = null, action) => {
    switch (action.type) {
        case SELECT_LIBRARY:
            console.log('selected',action.payload);
            return action.payload;
        default:
            return state;
    }
};
