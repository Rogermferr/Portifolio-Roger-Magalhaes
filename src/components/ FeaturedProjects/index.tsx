import Card from "./Card";
import { FeaturedProjectsStyle, SwiperPagination } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { featuredProjectsData } from "../../utils";

const FeaturedProjects = () => {
  return (
    <FeaturedProjectsStyle>
      <h2>Projetos em destaque</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
        loop={true}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={{ enabled: true, hideOnClick: true }}
        effect="coverflow">
        <ul>
          {featuredProjectsData.map((project) => (
            <SwiperSlide key={project.repository}>
              <Card project={project} />
            </SwiperSlide>
          ))}
        </ul>
        <SwiperPagination />
      </Swiper>
    </FeaturedProjectsStyle>
  );
};

export default FeaturedProjects;
