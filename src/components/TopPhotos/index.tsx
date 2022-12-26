import { useGetTopPhotos } from '../../hooks';
import Loader from '../Loader';

interface IData {
  href: string
}

export default function TopPhotos(){
  const {isLoading, data, erros} =  useGetTopPhotos<IData[]>();

  if(isLoading)
    return <Loader />;

  return (
    <div>
      {data?.map((photo, index)=> <img key={index} src={photo.href}/>)}
    </div>
  );
}
