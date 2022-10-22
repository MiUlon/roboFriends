import React, {Component} from 'react';

class ErrorHandler extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true});
    };

    render() {
        if (this.state.hasError) {
            return <h1>Something is wrong. We are working to solve it.</h1>
        } else {
            return this.props.children;
        }
    }
}

export default ErrorHandler;