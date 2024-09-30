import { useQuery } from "@tanstack/react-query";
import "./card.css";
import "./swiper.css";
import { getProductosFn } from "../../api/productos";
import ProductCardClient from "./CardProductClient";
import IsLoading from "../Common/IsLoading/IsLoading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

const ListProductClient = ({ title, searchTerm }) => {
  const {
    data: productos,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["productos"],
    queryFn: getProductosFn,
  });

  if (isLoading) {
    return <IsLoading />;
  }

  if (isError) {
    return (
      <div className="alert alert-danger mt-3">
        Ocurrió un error cargando la tabla de productos
      </div>
    );
  }

  if (productos && productos.data.length === 0) {
    return (
      <div className="alert alert-info mt-3">
        No se encontraron productos para listar
      </div>
    );
  }

  const productosFiltrados = productos.data.filter(
    (p) =>
      p.categoria.includes(title) &&
      p.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="text-center mt-5" id={title}>
      {productosFiltrados.length === 0 ? (
        <div></div>
      ) : (
        <div>
          <h1>{title}</h1>
          <Swiper
            spaceBetween={25}
            slidesPerView={3}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              580: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              581: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              870: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
            {productosFiltrados.map((p) => (
              <SwiperSlide key={p.id}>
                <ProductCardClient producto={p} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default ListProductClient;
