import { put } from "redux-saga/effects";
import { apiCallSuccess } from "../actions/index.actions";
import axios from "../api.interface";
export function* onApiCall(data) {
    try {
        const {
            data: { ...data }
        } = yield axios.get(
            "https://api.rss2json.com/v1/api.json?rss_url=http://sukhmanisakhi.com/feed/"
        );
        yield put(apiCallSuccess(data));
    } catch (error) {
        throw error;
    }
}

// https://api.rss2json.com/v1/api.json?rss_url=http://sukhmanisakhi.com/feed/
