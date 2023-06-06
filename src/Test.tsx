import { forwardRef } from 'react';
import MainComponent from './components/MAIN';
function TestMainComponent(props: any, ref: any) {
	const _props = {};
	return <div style={{padding:20}}>
		<MainComponent {...props} {..._props} />
	</div>;
}

export default forwardRef(TestMainComponent);
