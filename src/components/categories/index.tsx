import { EachItems } from "@components/custom";
import { Flex } from "antd";
import { categoryOptions } from "src/utils/options";

export const Categories: React.FC = () => {
	return (
		<Flex gap={30} wrap="wrap" justify="center" className="font-hnd-reg font-bold px-24">
			<EachItems
				data={categoryOptions}
				render={(item: any, index: any) => (
					<div key={index}>
						<div className="cursor-pointer">{item.text}</div>
					</div>
				)}
			/>
		</Flex>
	);
};
