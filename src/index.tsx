import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Test from './Test';

const renderMainComponent = (appProps: AppProps) => {
	const root = ReactDOM.createRoot(document.getElementById(appProps.container) as HTMLElement);
	const APP = { root, ref: null };
	if (process.env.NODE_ENV === 'development') {
		root.render(
			<React.StrictMode>
				<Test
					{...appProps}
					ref={(ref: any) => {
						return (APP.ref = ref);
					}}
				/>
			</React.StrictMode>
		);
	} else {
		root.render(
			<React.StrictMode>
				<App
					{...appProps}
					ref={(ref: any) => {
						return (APP.ref = ref);
					}}
				/>
			</React.StrictMode>
		);
	}

	return APP;
};

//Fejlesztés során rögtön renderelünk, build során pedig a render függvényt adjuk vissza
if (process.env.NODE_ENV === 'development') {
	const props = {
		container: 'root',
	};
	renderMainComponent(props);
} else {
	window.renderMainComponent = renderMainComponent;
}
declare global {
	interface Window {
		renderMainComponent: any;
	}
}

interface AppProps {
	container: string;
}