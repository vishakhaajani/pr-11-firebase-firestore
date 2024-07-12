const initialState = {
    user : [],
    err : null
}

const crudReducer = (state=initialState , action) => {
    switch(action.type){
        case 'viewuser' : 
            return {
                ...state,
                user : action.payload,
                error : null
            }

        case 'viewusererr' :
            return {
                ...state,
                error : action.payload
            }

        case 'addrecord' :
             return {
                ...state,
                user : [...state.user],
                error : null
            }

        case 'deleteUser' :
            return {
                ...state,
                user : state.user.filter(val => val.id != action.payload),
                error : null
            }

        case 'updateuser' :
            let up = state.user.map((val) => {
                if(val.id == action.payload.id){
                    val.name = action.payload.name;
                    val.password = action.password.password;
                    val.gender = action.payload.gender;
                    val.department = action.payload.department;
                    val.email = action.payload.email;
                    val.date = action.payload.date;
                    val.course = action.payload.course
                }
                return val
            })
            return {
                ...state,
                user : update,
                error : null
                }

        default :
            return state
    }
}

export default crudReducer