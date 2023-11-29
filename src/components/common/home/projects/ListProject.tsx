"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import CardProject from "~/components/ui/card-project";
import { projects } from "~/utils/projects";

export default function ListProject() {
  return (
    <div>
      <Swiper
        grabCursor
        pagination={{
          el: "#pagination-list",
          clickable: true,
          bulletActiveClass: "swiper-bullet__active",
          bulletClass: "swiper-bullet-custom",
        }}
        modules={[Pagination]}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <CardProject data={project} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        id="pagination-list"
        className="mt-4 flex justify-center items-center gap-x-[10px]"
      ></div>
    </div>
  );
}
