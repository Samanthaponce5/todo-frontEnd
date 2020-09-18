import React from 'react';
import {fetchList} from '../actions/index'
import {connect} from 'react-redux'

class ShowList extends React.Component {
    componentDidMount(){
    this.props.fetchList()
    }
 render(){
     console.log(this.props)
  return (
    <div>Hello!</div>
  );
}
}

const mapStateToProps=(state)=>{
    return {state:state.list}
}

export default connect(mapStateToProps,{fetchList})(ShowList);
