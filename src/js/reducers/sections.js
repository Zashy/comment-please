import Immutable from 'immutable';
import ActionTypes from '../constants/action-types';

const createReducer = (property, requestType) => {
    const initialState = Immutable.fromJS({
        data: {},
        isFetching: true
    });

    return (state = initialState, action) => {
        switch(action.type) {
            case requestType:
                return state
                    .update('data', data => action.payload)
                    .update('isFetching', isFetching => false);
            default:
                return state;
        }
    };
};

export const totals = createReducer('totals', ActionTypes.REQUEST_TOTALS);
export const life = createReducer('life', ActionTypes.REQUEST_LIFE_SECTION);
export const businessDisability = createReducer('businessDisability', ActionTypes.REQUEST_BDI_SECTION);
export const longTermCare = createReducer('longTermCare', ActionTypes.REQUEST_LTC_SECTION);
export const variableLife = createReducer('variableLife', ActionTypes.REQUEST_VARIABLE_LIFE_SECTION);
export const disabilityIncome = createReducer('disabilityIncome', ActionTypes.REQUEST_DISABILITY_INCOME_SECTION);
