import { featuredProjectsData } from "../../utils/featuredProjects";
import Card from "./Card";
import { FeaturedProjectsStyle, SwiperPagination } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const FeaturedProjects = () => {
  return (
    <FeaturedProjectsStyle>
      <h2>Projetos em destaque</h2>
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
          EffectCoverflow,
        ]}
        loop={true}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={{ enabled: true, hideOnClick: true }}
        effect="coverflow"
        autoplay={{ delay: 5000 }}>
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
