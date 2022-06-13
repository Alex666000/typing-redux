import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {RootState} from '../store/redusers';
// типизация useSelector:
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector