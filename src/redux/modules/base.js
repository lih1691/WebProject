import { Map } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

const initialState = Map({
    header: Map({
        visible: true
    })
});

