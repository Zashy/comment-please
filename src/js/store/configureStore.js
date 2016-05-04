import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import IS_BROWSER from '../utils/isBrowser';

export default function configureStore(initialState = {}) {

    const store = createStore(rootReducer, initialState, compose(
        applyMiddleware(thunk),
        IS_BROWSER && window.devToolsExtension ? window.devToolsExtension() : (f) => f
    ));

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
