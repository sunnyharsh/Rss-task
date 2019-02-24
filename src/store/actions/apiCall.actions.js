import { APICALL, APICALL_SUCCESS } from "../actions.type";

export const apiCall = () => ({
    type: APICALL
});

export const apiCallSuccess = values => ({
    type: APICALL_SUCCESS,
    values
});
