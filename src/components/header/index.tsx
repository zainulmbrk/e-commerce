import React from "react";

import { Logo } from "@components";
import Login from "@components/login";
import { Categories } from "@components/categories";
import { Flex, Input } from "antd";

const { Search } = Input;

export const Header: React.FC = () => {
	function onSearch(value: any) {
		console.log("value : ", value);
	}

	function renderSearch() {
		return (
			<Flex align="center" justify="center">
				<Search placeholder="Search here" onSearch={onSearch} className="w-2/4 font-din-pro" enterButton />
			</Flex>
		);
	}

	return (
		<div className="">
			<Flex justify="space-between" align="center" className="h-24">
				<Logo />
				<Login />
			</Flex>
			<div className="mt-16">{renderSearch()}</div>
			<div className="mt-10">
				<Categories />
			</div>
		</div>
	);
};
