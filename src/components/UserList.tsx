import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useTypedSelector} from '../hooks/useTypesSelector';
import {fetchUsers} from '../store/action-creatoes/user';
import {useActions} from '../hooks/useAction';

// компонента отрисовывает только пользователей:
const UserList: React.FC = () => {
    // достаем данные из состояния с помощью хука useSelector: переписали useSelector на кастомный типизированный useTypedSelector:
    const {users, loading, error} = useTypedSelector(state => state.user)
    const {fetchUsers} = useActions()
        // воспользуемся этим АС, что делали запрос на сервер воспользуемся им в хуке useEffect при первом рендере компоненты:
        const
    dispatch = useDispatch()

    useEffect(() => {
        //диспатч получаем из хука useDispatch()  и в него передаем AC что мы сделали:
        dispatch(fetchUsers())
    }, [])

    // припервом рендере пользователи загрузятся:
    if (loading) {
        return <h1>Идет загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }


    return (
        <div>
            {/*когда пользователи загрузились для каждого отрисуем:*/}
            {users.map(user => <div>{user.name}</div>)}
        </div>
    );
};

export default UserList