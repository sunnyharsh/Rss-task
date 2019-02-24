import { APICALL_SUCCESS } from "../actions.type";

const initState = null;

const reducers = (state = initState, { type, values, error }) => {
    switch (type) {
        case APICALL_SUCCESS:
            return values;
        default:
            return state;
    }
};
export default reducers;
