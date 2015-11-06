import { connect } from 'react-redux';
import NewProject from '../components/new_project';
import * as actionCreators from '../actions';

export default connect(() => ({}), actionCreators)(NewProject);
