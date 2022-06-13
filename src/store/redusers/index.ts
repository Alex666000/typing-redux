import {combineReducers} from 'redux';
import {userReduser} from './userReduser';

// "проинециализировали" комбайнредюсер который объединяет все редюсеры нашего приложения:
export const rootReduser = combineReducers({
    user: userReduser,

})
//  с помощью TS ReturnType получим тип нашего редюсера далее с помощью этого типа мы сможем сделать кастомный хъук который будет  работать уже с типизированным useSelector() - он по дефолту не типизируется...
export type RootState = ReturnType<typeof rootReduser>