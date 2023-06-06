declare global {
	interface Window {
		config: any;
		startLoading: Function;
		endLoading: Function;
		get: Function;
		post: Function;
		setStorage: Function;
		getStorage: Function;
		deleteStorageKey: Function;
		emptyStorage: Function;
		clearStorageKeepKeys: Function;
		alrt: Function;
		alrt2: Function;
		alrt3: Function;
		alrt4: Function;
		alrtThreeButtons: Function;
		alrtConfirm: Function;
		getMainInstitution: Function;
		catchError: Function;
	}
}

async function get(url: string, customHash = false, withLoading = true) {
	if (process.env.NODE_ENV === 'development') {}
	return window.get(url, customHash, withLoading);
}

async function post(url: string, body: any = null, customHash = false, withLoading = true) {
	if (process.env.NODE_ENV === 'development') {}
	return window.post(url, body, customHash, withLoading);
}

function startLoading(): void {
	window.startLoading();
}

function endLoading(): void {
	window.endLoading();
}

function setStorage(k: string, v: any) {
	return window.setStorage(k, v);
}

function getStorage(key: string) {
	return window.getStorage(key);
}

function deleteStorageKey(key: string) {
	return window.deleteStorageKey(key);
}

function emptyStorage() {
	return window.emptyStorage();
}

function clearStorageKeepKeys(keys: string[]) {
	return window.clearStorageKeepKeys(keys);
}

function alrt(msg: string, callback: Function | null = null, title = '', buttonText = 'OK') {
	return window.alrt(msg, callback, title, buttonText);
}

function alrt2(msg: string, callback: Function | null = null, title = '', buttonText = 'Igen') {
	return window.alrt2(msg, callback, title, buttonText);
}

function alrt3(msg: string, callback: Function | null = null, plusButtons: any[] = []) {
	return window.alrt3(msg, callback, plusButtons);
}

function alrt4(
	msg: string,
	okText: string,
	okCallback: Function | null = null,
	cancelText: string,
	cancelCallback: Function | null = null
) {
	return window.alrt4(msg, okText, okCallback, cancelText, cancelCallback);
}

function alrtConfirm(
	msg: string,
	callbackOk: Function | null = null,
	callbackClose: Function | null = null,
	okText = 'OK',
	cancelText = 'MÉGSEM',
	title = ''
) {
	return window.alrtConfirm(msg, callbackOk, callbackClose, okText, cancelText, title);
}

function alrtThreeButtons(
	msg: string,
	title = '',
	button1callback: Function | null = null,
	button1Text = 'Igen',
	button2callback: Function | null = null,
	button2Text = 'Igen'
) {
	return window.alrtThreeButtons(msg, title, button1callback, button1Text, button2callback, button2Text);
}
function getMainInstitution(): string {
	return window.getMainInstitution();
}

function catchError(error: Error) {
	window.catchError(error);
}

function alertError(): void {
	alrt('Valami hiba történt. Kérjük, próbálja meg újból!');
}
export {
	get,
	post,
	startLoading,
	endLoading,
	setStorage,
	getStorage,
	deleteStorageKey,
	emptyStorage,
	clearStorageKeepKeys,
	alrt,
	alrt2,
	alrt3,
	alrt4,
	alrtThreeButtons,
	alrtConfirm,
	getMainInstitution,
	catchError,
	alertError,
};
