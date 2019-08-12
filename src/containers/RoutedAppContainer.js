import { connect } from 'react-redux';
import RoutedApp from '../RoutedApp';


const stateToPropsMapper = state => ({
    ...state.UserStateReducer
})

const propsToDispatcher = dispatch => ({
})

const RoutedAppContainer 
    = connect(
        stateToPropsMapper,
        propsToDispatcher)(RoutedApp);

export default RoutedAppContainer;