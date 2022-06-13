import {ActionsTypes, UserActions, UserActionType, UserStateType} from '../../types/user';

const initialState: UserStateType = {
    users: [],
    loading: false,
    error: null
}

export const userReduser = (state = initialState, action: ActionsTypes): UserStateType  => {
    switch (action.type) {
        // обращаемся к перечислению чтобы достать тип экшена:
        case UserActions.FETCH_USERS:
            return {users: [], loading: true, error: null}
        case UserActions.FETCH_USERS_SUCCSES:
            return {users: action.payload, loading: false, error: null}
        case UserActions.FETCH_USERS_ERROR:
            return {users: [], loading: false, error: action.payload}
        default: return state
    }
}