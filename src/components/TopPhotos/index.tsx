import { useGetTopPhotos } from '../../hooks';
import Loader from '../Loader';


export default function TopPhotos(){
  const {isLoading, data } = useGetTopPhotos();

  if(isLoading)
    return <Loader />;

  return (
    <div>
      {data?.map((photo, index)=> <img key={`photo-${index}`} src={photo.href}/>)}
    </div>
  );
}
