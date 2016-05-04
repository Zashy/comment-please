import React, { Component } from 'react';

export default (OldComponent, apiUrl, actionType) => {
    return class extends Component {
        componentDidMount() {
            this.props.fetchData(apiUrl, actionType);
        }

        shouldComponentUpdate(nextProps, nextState) {
            return this.props.map.get('isFetching') !== nextProps.map.get('isFetching') ||
                this.props.map !== nextProps.map;
        }

        render() {
            const data = this.props.map.get('data');

            this.state = {
                data: data
            };

            if (this.props.map.get('isFetching') || (typeof data === 'array' && data.length === 0)) {
                return (<div></div>);
            }

            return (
                <OldComponent {...this.props} {...this.state} />
            );
        }
    }
};
