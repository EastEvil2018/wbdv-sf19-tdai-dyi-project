import { connect } from 'react-redux';
import UserService from "../../services/user/UserService";
import HomeComponent from "../../components/Home/HomeComponent";


const stateToPropsMapper = state => ({
    ...state.HomeReducer,
    ...state.UserStateReducer
})

const propsToDispatcher = dispatch => ({
})

const HomeContainer 
    = connect(
        stateToPropsMapper,
        propsToDispatcher)(HomeComponent);

export default HomeContainer;