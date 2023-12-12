import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { buyMobile, sellMobile } from './redux/actions/mobileaction';
import { getAllUsers , getSingleUser , addUser, editUser , deleteUser } from './redux/actions/mobileaction';
function MobileDetails({ buyMobile, sellMobile, noOfMobile , users, getAllUsers , user , getSingleUser, addUser, editUser, deleteUser}) {
     
  return (
      <div>
          <h1>Number of mobiles {noOfMobile} and users {users.length} and {user?.username}</h1>
          <button onClick={()=>buyMobile()}>buy mobile</button>
          <button onClick={() => sellMobile()}>sell mobiles</button>
          <button onClick={() => addUser({name:'venketash'})}>add user</button>
          <button onClick={() => getAllUsers()}>Get all user</button>
          <button onClick={() => getSingleUser(1)}>Get Single user</button>
          <button onClick={() => editUser({name:'venketash'}, 1)}>edit user</button>
          <button onClick={()=>deleteUser(1)}>Delete user</button>


    
      </div>
  )
};

const mapStateToProps = (state) => {
    console.log(state.users)
    return {
        
        noOfMobile: state.noOfMobile,
        users: state.users,
        user:state.user
    }
};


const dispatchToProps = (dispatch) => {
    return bindActionCreators({
        buyMobile,
        sellMobile,
        getAllUsers,
        getSingleUser,
        addUser,
        editUser,
        deleteUser
    }, dispatch)
};

export default connect(mapStateToProps, dispatchToProps)(MobileDetails)
