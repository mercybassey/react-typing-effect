import shareActionTypes from './share.types';

const INITIAL_STATE = {
    hidden: true
};

const shareReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case shareActionTypes.TOGGLE:
            return {
                ...state,
                hidden: !state.hidden
            };
        default:
            return state;
    }
}

export default shareReducer;