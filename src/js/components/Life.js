/**
 * Created by gay9511 on 4/27/16.
 */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AllInsuranceActions from '../actions/actions';
import ActionTypes from '../constants/action-types';
import Experiment from './Experiment';

import ProductSection from './ProductSection/ProductSection';



// class Life extends Component {
//     /*
//      fetch the api when the component mounts
//      */
//     componentDidMount() {
//         this.props.fetchData('/api/allinsurancedata/LifeSection', ActionTypes.REQUEST_LIFE_SECTION);
//     }
//
//     shouldComponentUpdate(nextProps, nextState) {
//         return this.props.isFetching !== nextProps.isFetching ||
//             this.props.data !== nextProps.data;
//     }
//
//     render() {
//         const { data, isFetching } = this.props;
//         const headers = ['Insured', 'Policy', 'Net Death Benefit', '']; // the empty is for the expand Icon
//         const title = 'Life Insurance';
//         const worthField = 'netDeathBenefit';
//
//         if (isFetching) {
//             return (<div></div>);
//         }
//
//         return (
//             <ProductSection data={ data }
//                             headers={ headers }
//                             title={ title }
//                             worthField={ worthField }
//                              />
//         );
//     }
// }
//
// /*
//  subscribes component to redux store updates, merges allInsuranceReducer into components props
//  allows this.props.state to contain the store
//  */
// function mapStateToProps(state) {
//     return state.life.toJS();
// }
//
// /*
//  maps the actions to props with a passed through dispatch, so this.props.fetchData works
//  */
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators(AllInsuranceActions, dispatch);
// }
//
// export { Life };
//
// export default connect(mapStateToProps, mapDispatchToProps)(Life);

const apiUrl = '/api/allinsurancedata/LifeSection';
const actionType = ActionTypes.REQUEST_LIFE_SECTION;

class Life extends Component {
    render() {
        const { data } = this.props;
        const headers = ['Insured', 'Policy', 'Net Death Benefit', '']; // the empty is for the expand Icon
        const title = 'Life Insurance';
        const worthField = 'netDeathBenefit';

        return (
            <ProductSection data={ data }
                            headers={ headers }
                            title={ title }
                            worthField={ worthField }
                             />
        );
    }
};

/*
    maps the actions to props with a passed through dispatch, so this.props.fetchData works
 */
function mapStateToProps(state) {
    return { map: state.life };
}

/*
    maps the actions to props with a passed through dispatch, so this.props.fetchData works
 */
function mapDispatchToProps(dispatch) {
    return bindActionCreators(AllInsuranceActions, dispatch);
}

export { Life };

export default connect(mapStateToProps, mapDispatchToProps)(Experiment(Life, apiUrl, actionType));
