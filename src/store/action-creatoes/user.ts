/*тут находятся АС связанные с пользователями:*/

import {ActionsTypes, UserActions} from '../../types/user';
import {Dispatch} from 'redux';
import axios from 'axios';

export const fetchUsers = (dispatch: Dispatch<ActionsTypes>): (dispatch: Dispatch<ActionsTypes>) => Promise<void> => {
    return async (dispatch: Dispatch<ActionsTypes>) => {
        try {
            //  в диспатч нам из бизнеса нужно передать action FETCH_USERS который сделает loading true и у нас на сайте появится "крутилка" или надпись о том что пользователи загружаются
            dispatch({type: UserActions.FETCH_USERS})
            // логика запроса на сервер:
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            // сделаем имитацию интервала запроса:
            setTimeout( () => {
                // если запрос выполнен успешно - в качестве payload передаем те данные которые получили:
                dispatch({type: UserActions.FETCH_USERS_SUCCSES, payload: response.data })
            },1000)


        } catch (e) {
            // если возникла ошибка передаем:
            dispatch({
                type: UserActions.FETCH_USERS_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей'})
        }
    }
}

