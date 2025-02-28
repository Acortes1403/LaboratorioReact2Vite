import { useEffect, useState } from 'react';

export const useFetch = ( url ) => {
    const [state, setState] = useState({ 
        data: null, 
        loading: true, 
        error: null 
    });
    const getFetch = async () => {
        setState({ ...state, isLoading: true,})
        const resp = await fetch(url);
        const data = await resp.json();
        setState({
            data: data,
            loading: false,
            error: null
        })
    }
    useEffect(() => {
        getFetch()
    }, [url])
  return {
    data: state.data,
    isLoading: state.loading,
    hasError: state.error,
  }
}
    