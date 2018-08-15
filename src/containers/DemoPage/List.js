/**
 * @file DemoPage/List
 * @author chenbo09
 */

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as DemoPageAction from '../../actions/DemoPageAction';
import List from '../../components/DemoPage/List';

const ListContainer = props => {
    const defaultFilterData = {
        pageNo: 1,
        pageSize: 50
    };

    return <List {...props} defaultFilterData={defaultFilterData} />;
};

const mapStateToProps = (state, ownProps) => ({...ownProps, ...state});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(DemoPageAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
