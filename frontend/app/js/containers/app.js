import { connect } from 'react-redux';
import App from '../components/app';
import * as actionCreators from '../actions';

export default connect(({ui}) => ({ui}), actionCreators)(App);
