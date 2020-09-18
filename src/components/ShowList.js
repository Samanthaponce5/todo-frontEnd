import React from 'react';
import {fetchList} from '../actions/index'
import {connect} from 'react-redux'
import '../index.css';


class ShowList extends React.Component {
    componentDidMount(){
    this.props.fetchList()
    }


    
    renderList=()=>{
      return  this.props.list.map(l=>{
        return(<div key={l.id} className='whattt'>{l.task}</div>)
        })
    }

 render(){
    
  return (
    <>{this.renderList()}</>
  );
}
}

const mapStateToProps=(state)=>{

    return {list:Object.values(state.list)}

}


export default connect(mapStateToProps,{fetchList})(ShowList);
