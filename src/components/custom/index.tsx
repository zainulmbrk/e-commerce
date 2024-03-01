import { Flex } from "antd";

export const FormLoginLayout = ({children}: any) => {
	return (
		<Flex justify="center">
			<div className="w-9/12">
				{children}
			</div>
		</Flex>
	);
};
