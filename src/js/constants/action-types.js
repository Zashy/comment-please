import keyMirror from 'keymirror';

const ActionTypes = keyMirror({
    // Take no action and return state
    REQUEST_DATA: null,
    RECEIVE_DATA: null,
    REQUEST_TOTALS: null,
    REQUEST_LIFE_SECTION: null,
    REQUEST_DISABILITY_INCOME_SECTION: null,
    REQUEST_BDI_SECTION: null,
    REQUEST_LTC_SECTION: null,
    REQUEST_VARIABLE_LIFE_SECTION: null,
    NONE: null
});

export default ActionTypes;
