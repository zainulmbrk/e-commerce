import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

export const Main: React.FC = () => {
	return (
		<div className="my-12">
			<Swiper
				pagination={{
					dynamicBullets: true,
				}}
				modules={[Pagination, Autoplay]}
				className="h-full w-full"
				slidesPerView={1}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
			>
				<SwiperSlide>
					<img src="/assets/images/banner.jpg" alt="" className="rounded-3xl" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="/assets/images/banner2.gif" alt="" className="rounded-3xl" />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};
