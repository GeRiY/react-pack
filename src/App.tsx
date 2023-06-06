import { forwardRef } from 'react';
import MainComponent from './components/MAIN';

function App(props: any, ref: any) {
	return <MainComponent {...props} ref={ref} />;
}

export default forwardRef(App);
