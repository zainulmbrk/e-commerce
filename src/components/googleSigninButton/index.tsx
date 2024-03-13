import { Button, Flex, Typography } from "antd";
// import { signIn } from "next-auth/react";
import React from "react";

export const GoogleSigninButton = () => {
	function handleLoginWithGoogle() {
		// signIn("google", { callbackUrl: "/" });
        console.log("Login google here")
	}

	return (
		<Flex justify="center">
			<Button onClick={handleLoginWithGoogle} className="h-10 w-9/12">
				<Flex align="center">
					<img src="/assets/images/google.png" className="w-4 h-4" />
					<div className="font-din-pro text-center w-full">Continue with Google</div>
				</Flex>
			</Button>
		</Flex>
	);
};
