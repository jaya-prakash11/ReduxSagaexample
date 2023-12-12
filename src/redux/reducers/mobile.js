const initialState = {
    noOfMobile: 100,
    users: [],
    user:{}
}

export const mobileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BUY_MOBILE': 
            return { ...state, noOfMobile: state.noOfMobile - 1 }
        case 'SELL_MOBILE': 
            return { ...state, noOfMobile: state.noOfMobile + 1 }
        
        case 'GET_ALL_USERS_SUCCESS': 
            return { ...state, users: action.data }
         case 'GET_ALL_USERS_FAILED': 
            return { ...state, message: action.message }
        case 'GET_SINGLE_USER_SUCCESS': 
            return { ...state, user: action.data }
         case 'GET_SINGLE_USER_FAILED': 
         
            return { ...state, message: action.message }
        case 'ADD_USER_SUCCESS': {
            let users = [...state.users];
            users.push(action.data)
            return { ...state, users }
        }
         case 'ADD_USER_FAILED': 
            return { ...state, message: action.message }
        case 'EDIT_USER_SUCCESS': {
            let users = [...state.users];
            let index = users.findIndex(res => res.id === action.data.id)
            users[index] = action.data
            return { ...state, users }
        }
         case 'EDIT_USER_FAILED': 
            return { ...state, message: action.message }
        
        case 'DELETE_USER_SUCCESS': {
            let users = [...state.users];
            let index = users.findIndex(res => res.id === action.data.id)
            users.splice(index, 1)
            return { ...state, users }
        }
         case 'DELETE_USER_FAILED': 
            return { ...state, message: action.message }
        default: 
            return state;
    }
}