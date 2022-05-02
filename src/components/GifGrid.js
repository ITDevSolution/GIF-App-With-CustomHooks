
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import {Loading} from './Loading';


export const GifGrid = ({ category }) => {

const { data:images, loading } = useFetchGifs(category)

  return (
    <>
      <h3 className="animate__bounceIn">{category}</h3>

      {
          loading && <Loading />
      }

      <div className="card-grid animate__bounceIn">

        {images.map((item) => (
          <GifItem
            key={item.id}
            // { ...item }
            item={item}
          />
        ))}
      </div>
    </>
  );
};
