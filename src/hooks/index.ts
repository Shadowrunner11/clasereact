import { useReducer, Reducer } from 'react';
import ApiFetcher from '../services';

const apiFetchInstance = new ApiFetcher('https://pokemon.api/');

interface IResponse{
  isLoading: boolean;
  data: unknown;
  errors: unknown
}

export function useGetTopPhotos(){
  
  const [{isLoading, data, errors}, dispatch] = useReducer<ReducerTypePhotos>(
    getTopPhotosReducer, 
    {isLoading: true, data: null, errors: null}
  );


  apiFetchInstance
    .get('/photos')
    .then((data)=>{
      dispatch({
        data,
        isLoading: false
      });
    })
    .catch((errors)=>{
      dispatch({errors});
    });

  return { isLoading, data, errors };
}


function getTopPhotosReducer<T = IResponse, K = IResponse>(prevState: T, action: K){
  return {
    ...prevState,
    ...action
  };
}


type ReducerTypePhotos = Reducer<IResponse,Partial<IResponse>>
