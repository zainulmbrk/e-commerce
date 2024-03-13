import { Flex, Space, Typography } from "antd";
import Image from "next/image";
import { Children } from "react";
import { thousandsFormat } from "src/utils/formats";

const { Text } = Typography;

export const FormLoginLayout = ({ children }: any) => {
	return (
		<Flex justify="center">
			<div className="w-9/12">{children}</div>
		</Flex>
	);
};

export const EachItems = ({ render, data }: any) => <>{Children.toArray(data.map((item: any, index: any) => render(item, index)))}</>;

export const TitleInformations = ({ title, description }: { title: string; description: string }) => {
	return (
		<Flex align="center" gap={15} vertical className="mt-16 mb-12">
			<div className="font-hnd-bold text-4xl">{title}</div>
			<div className="font-hnd-reg">{description}</div>
		</Flex>
	);
};

export const ProductItems = ({ imgSrc, brand, name, price, discount }: any) => {
	const discountRate = discount;
	const decimalDiscount = discountRate / 100;
	const priceAfterDiscount = price - price * decimalDiscount;
	return (
		<div>
			<Image src={imgSrc} width={279} height={350} className="object-cover rounded-2xl" />
			<div className="px-2">
				<div className="font-hnd-black mt-2">{brand}</div>
				<div className="font-hnd-reg mb-4">{name}</div>
				<Space>
					{discount ? (
						<Text delete className="font-hnd-reg text-gray-600 text-md">
							Rp {thousandsFormat(price)}
						</Text>
					) : (
						<Text className="font-hnd-bold text-gray-900 text-lg">Rp {thousandsFormat(price)}</Text>
					)}
					<Text type="danger" className="font-hnd-reg font-bold text-md">
						{discount ? `-${discount}%` : ""}
					</Text>
				</Space>
				{discount ? <div className="font-hnd-bold text-lg text-gray-900">Rp {thousandsFormat(priceAfterDiscount)}</div> : ""}
			</div>
		</div>
	);
};
