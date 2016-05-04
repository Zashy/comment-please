import React from 'react';
import ReactDOM from 'react-dom';
import { default as ReactCSSTransitionReplaceOld } from 'react-css-transition-replace';

const TICK = 17;

// https://github.com/marnusw/react-css-transition-replace/issues/6
export default class ReactCSSTransitionReplace extends ReactCSSTransitionReplaceOld {

    constructor(props) {
        super(props);
        this.state = {
            currentChild: props.children ? React.Children.only(props.children) : null,
            nextChild: null,
            height: null
        };
    }

    componentWillReceiveProps(nextProps) {
        // Setting false indicates that the child has changed, but it is a removal so there is no next child.
        const nextChild = nextProps.children ? React.Children.only(nextProps.children) : false;
        const currentChild = this.state.currentChild;

        if (currentChild && nextChild && nextChild.key === currentChild.key) {
            // Nothing changed, but we are re-rendering so update the currentChild.
            return this.setState({
                currentChild: nextChild
            });
        }

        // Set the next child to start the transition, and set the current height.
        this.setState({
            nextChild,
            height: this.state.currentChild ? ReactDOM.findDOMNode(this.refs.curr).offsetHeight : 0
        });

        // Enqueue setting the next height to trigger the height transition.
        this.timeout = setTimeout(() => {
            const nextNode = ReactDOM.findDOMNode(this.refs.next);
            if (nextNode) {
                this.setState({ height: nextChild ? nextNode.offsetHeight : 0 });
            }
            this.timeout = null;
        }, TICK);
    }
}
