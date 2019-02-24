import { takeLatest, all } from "redux-saga/effects";
import { APICALL } from "../actions.type";
import { onApiCall } from "./apiCall.saga";

function* sagas() {
    yield all([takeLatest(APICALL, onApiCall)]);
}
export default sagas;
