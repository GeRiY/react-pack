import {ComponentProps} from "./MAIN.model";
declare module '@makra/pack' {
	function Pack(props: ComponentProps): JSX.Element;
	export = Pack;
}
