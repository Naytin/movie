import {bindActionCreators} from "redux";
import ActionCreators from '../store/reducers'
import {useMemo} from "react";
import {useDispatch} from "react-redux";

// создаем hook, который связывает все actions creators с диспатчем
// нам больше не понядобиться использование диспатча в комоненте, просто будем вызывать функцию

//has some conflicts with useDispatch types, just use any type in the general parameter
export const useAppDispatch = () => useDispatch<any>()

export const useActions = () => {
    const dispatch = useDispatch()
    return useMemo( () => {
        return bindActionCreators(ActionCreators, dispatch)
    },[])
}
