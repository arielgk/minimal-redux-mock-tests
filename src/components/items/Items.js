import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as itemsAction from "../../actions/itemsActions";
import ItemList from "./ItemList";
import AddItem from "./AddItem";
import Loading from "./Loading";



export const Items = ({items, actions,ajaxStatus}) => {
    return (
        <div className="container">
            <AddItem
                onSave={item => {
                    actions.addItem(item);
                }}
            />


            <ItemList items={items}/>
            { ajaxStatus !== 0 || <Loading/> }
        </div>
    );
};

Items.propTypes = {
    items: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    ajaxStatus: PropTypes.number.isRequired
};

export const mapStateToProps = (state, ownProps) => {
    return {
        items: state.items,
        ajaxStatus: state.ajaxStatus
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(itemsAction, dispatch)
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Items);
