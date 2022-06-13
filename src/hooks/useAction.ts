import * as UserActionCreators from '../store/action-creatoes/user'
// связываем все АС с диспатчем то есть  диспатч уже не понадобится достаточно вызвать АС  и он сам прокинется в дистпатч - для этого понадобится из редакс функция bindActionCreators и импортируем в этот модуль все АС из папки action-creator из папки user.ts
import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';

export  const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(UserActionCreators, dispatch)

}