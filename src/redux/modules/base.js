import { Map } from 'immutable';
import { handleActions } from 'redux-actions';

const initialState = Map({
    header: Map({
        visible: true
    })
});

export default handleActions({

}, initialState);