import store from "@redux/store";
import "@styles/global.css";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import "tailwindcss/tailwind.css";
import "swiper/css";
import 'swiper/css/pagination';
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }: any): JSX.Element {
	return (
		<SessionProvider>
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</SessionProvider>
	);
}

export default MyApp;
