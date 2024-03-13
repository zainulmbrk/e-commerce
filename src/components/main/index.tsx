import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { ProductItems, TitleInformations } from "@components/custom";
import { Flex, Space, Typography } from "antd";
import Image from "next/image";

const { Text } = Typography;

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
					<img src="/assets/images/banner.jpg" alt="" className="rounded-3xl object-cover" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="/assets/images/banner2.gif" alt="" className="rounded-3xl object-cover" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="/assets/images/banner3.jpg" alt="" className="rounded-3xl object-cover" />
				</SwiperSlide>
			</Swiper>

			<TitleInformations
				title="New Arrivals"
				description="Our new arrivals are built to withstand your activity while keeping you looking your best"
			/>

			<Flex justify="space-between">
				<ProductItems brand="H&M" name="Long Sleeve Casual Shirt" imgSrc="/assets/images/p1.jpg" price={899000} />
				<ProductItems brand="Trendyol" name="Long Sleeve Casual Shirt" imgSrc="/assets/images/p2.jpg" price={899000} discount={50} />
				<ProductItems brand="Platini" name="Long Sleeve Casual Shirt" imgSrc="/assets/images/p3.jpg" price={699000} discount={45} />
				<ProductItems brand="Tolliver" name="Short Casual Shirt" imgSrc="/assets/images/p4.jpg" price={499000} discount={30} />
			</Flex>

			<TitleInformations title="Collections" description="Best Brand Choices with Special Offers" />

			<Flex justify="space-between">
				<ProductItems brand="H&M" name="Round-neck T-shirt Regular Fit" imgSrc="/assets/images/p5.jpg" price={99900} discount={40} />
				<ProductItems brand="PUMA" name="Essentials Full-zip Men's Hoodie" imgSrc="/assets/images/p6.jpg" price={549000} discount={25} />
				<ProductItems brand="Hush Puppies" name="So 2 Basic Polos" imgSrc="/assets/images/p7.jpg" price={459000} discount={57} />
				<ProductItems brand="Hush Puppies" name="Cord Stripe Collar Polo" imgSrc="/assets/images/p8.jpg" price={499000} discount={60} />
			</Flex>
		</div>
	);
};
