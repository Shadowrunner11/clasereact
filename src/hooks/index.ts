import { useState } from 'react';
import ApiFetcher from '../services';

const apiFetchInstance = new ApiFetcher('https://pokemon.api/');

export function useGetTopPhotos<T = any>(){
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<T | null>(null);
  const [erros, setErros] = useState(null);

  apiFetchInstance
    .get('/photos')
    .then((data)=>{
      setData(data);
      setIsLoading(false);
    })
    .catch((error)=>{
      setErros(error);
    });

  return { isLoading, data, erros };
}
