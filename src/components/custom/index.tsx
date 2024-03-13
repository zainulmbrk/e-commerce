import { Flex } from "antd";
import { Children } from "react";

export const FormLoginLayout = ({ children }: any) => {
	return (
		<Flex justify="center">
			<div className="w-9/12">{children}</div>
		</Flex>
	);
};

export const EachItems = ({ render, data }: any) => <>{Children.toArray(data.map((item: any, index: any) => render(item, index)))}</>;
