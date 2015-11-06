import { connectReduxForm } from 'redux-form';
import ProjectForm from '../components/project_form';

export default connectReduxForm({
    form: 'project',
    fields: ['name']
})(ProjectForm);
