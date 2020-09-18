import streams from '../apis/ListApi'

export const fetchList=()=>{
    return async (dispatch)=>{
        const response = await streams.get('/lists')

        dispatch({type:'FETCH_LIST', payload:response.data})
    }
}