// Так как сделали enum  перечисления константы определены в перечислении и тут сверху можно их удалить:

/*const FETCH_USERS = 'FETCH_USERS'
const FETCH_USERS_SUCCSES = 'FETCH_USERS_SUCCSES'
const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'*/

// типизация state:
export type UserStateType = {
    users: any[]
    loading: boolean
    error: null | string
}
// типизация "экшенов":
export type UserActionType = {
    type: string
    payload?: null | string
}
// либо используем typeof FETCH_USERS - что вернет из константы тип переменной либо используем enum перечисления:
export enum UserActions {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCSES = 'FETCH_USERS_SUCCSES',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}

// для каждого экшена отделнный тип:
type  FetchUsersActionType = {
    // обращаемся к перечислению, чтобы достать тип экшена:
    type: UserActions.FETCH_USERS

}
type  FetchUsersSuccsesActionType = {
    type: UserActions.FETCH_USERS_SUCCSES
    payload: any[]
}
type  FetchUserErrorActionType = {
    type: UserActions.FETCH_USERS_ERROR
    payload: string
}
// объединили все "экшены" в один:
export type ActionsTypes = FetchUsersActionType | FetchUsersSuccsesActionType | FetchUserErrorActionType