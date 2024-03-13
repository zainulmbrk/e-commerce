import { UserOutlined } from "@ant-design/icons";
import { FormLoginLayout } from "@components/custom";
import { GoogleSigninButton } from "@components/googleSigninButton";
import { Button, Checkbox, Divider, Flex, Form, Image, Input, Modal, Space, Typography } from "antd";
import { useSession, signOut } from "next-auth/react";
import React, { useState } from "react";

const { Text, Link } = Typography;

const Login = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [showModal, setShowModal] = useState(false);

	const { data } = useSession();
	const user: any = data && data.user;

	console.log("data", data);

	const [form_input] = Form.useForm();

	function loginModal() {
		setShowModal(true);
	}

	function rememberMe(e: any) {
		console.log(e.target.checked);
	}

	async function handleLogin() {
		const fields = await form_input.validateFields();

		const payload = {
			email: fields.email,
			password: fields.password,
		};
		console.log("payload : ", payload);
	}

	function handleLogout() {
		signOut();
	}

	function renderLoginConditions() {
		return user ? (
			<Space onClick={handleLogout}>
				<img src={user.image} className="w-5 h-5 rounded-full" alt={user.name} title={user.name} />
				<div className="font-din-pro font-bold">{user.name}</div>
			</Space>
		) : (
			<Space onClick={loginModal}>
				<UserOutlined />
				<div className="font-din-pro font-bold">Login / Register</div>
			</Space>
		);
	}

	return (
		<>
			<Space className="font-hnd-bold pointer">{renderLoginConditions()}</Space>
			<Modal title="" width={"40%"} confirmLoading={isLoading} open={showModal} footer={false} onCancel={() => setShowModal(false)}>
				<Typography className="font-din-pro text-center text-2xl mt-10">Login to your account</Typography>
				<Divider />
				<GoogleSigninButton />
				<FormLoginLayout>
					<Divider plain>or</Divider>
					<Form layout="vertical" form={form_input} onFinish={handleLogin}>
						<Form.Item name="email" label={<div className="font-din-pro">Email</div>}>
							<Input className="w-full h-10" />
						</Form.Item>
						<Form.Item name="password" label={<div className="font-din-pro">Password</div>}>
							<Input.Password className="w-full h-10" />
						</Form.Item>
						<Space direction="vertical" size={20}>
							<Text underline className="font-din-pro cursor-pointer">
								Forgot password?
							</Text>
							<Checkbox onChange={rememberMe} className="font-din-pro">
								I want to stay logged in
							</Checkbox>
						</Space>
						<Button className="w-full h-10 bg-primary mt-6 text-white font-din-pro" htmlType="submit">
							Submit
						</Button>
						<div className="w-full text-center font-din-pro mt-3">
							By creating or registering an account, you agree to the contents of our <Link>Terms and Conditions</Link> &<br />{" "}
							<Link>Privacy Policy</Link>.
						</div>
					</Form>
				</FormLoginLayout>
			</Modal>
		</>
	);
};

export default Login;
