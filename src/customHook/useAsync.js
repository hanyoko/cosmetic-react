import { useEffect, useReducer } from 'react';

//1. 상태 초기화
const initialState = {
    loading: false,
    data: null,
    error: null
}
//2. 리듀서 함수 구현
//로딩 중일 때 상태 업데이트 LOADING
//데이터를 성공적으로 받을 때 상태 업데이트 SUCCESS
//에러가 발생했을 경우 상태 업데이트 ERROR
function reducer(state, action){
    switch(action.type){
        case 'LOADING':
            return {
                loading: true,
                data: null,
                error: null
            };
        case 'SUCCESS':
            return {
                loading: false,
                data: action.data,
                error: null
            };
        case 'ERROR':
            return {
                loading: false,
                data: action.data,
                error: null
            };    
    }
}
const useAsync = (callback, deps=[], id) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    //데이터 요청 함수
    const fetchData = async () => {
        //loading의 value를 true로 상태 업데이트
        dispatch({ type: "LOADING"});
        //에러가 발생할 확률이 높은 코드 작성시 에러 핸들링
        try {
            const data = await callback(id);
            dispatch({ type: "SUCCESS", data: data})    //data: data를 data로 생략가능
        }
        //error가 발생하면 넘어간다
        catch(e){
            dispatch({ type: "ERROR", error: e })
        }
    }
    useEffect(()=>{
        fetchData();
    }, deps)
    return state;
};

export default useAsync;