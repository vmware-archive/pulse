import { connect } from 'react-redux';
import Home from '../components/home';
import * as actionCreators from '../actions';

export default connect(({projects}) => ({ projects }), actionCreators)(Home);
