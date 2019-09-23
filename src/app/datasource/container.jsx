import { connect } from 'react-redux';
import Component from './component';
import {fetchData} from './actions';



const mapStateToProps = state => ( 
                                   {   
                                       loading:state.appReducer.appState.loading,
                                       userData:state.appReducer.appState.userData 
                                    }
                                );

const mapDispatchToProps = dispatch => {

    return{ 
        fetchData:() =>{
            dispatch(fetchData());
    } }

};

export default connect(mapStateToProps,mapDispatchToProps)(Component);