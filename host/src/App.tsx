import { useState } from 'react';
import { loadRemote } from '@module-federation/enhanced/runtime'
import { createRemoteComponent } from '@module-federation/bridge-react';
// import WebpackGuestButton from 'webpack_guest_app/Button';
import './App.css'

console.log(loadRemote);

// use createRemoteComponent to export remote component
const ViteButton = createRemoteComponent({
	// loader is for loading remote module, for example: loadRemote('remote1/export-app')、import('remote1/export-app')
	loader: () => import('vite_guest_app/Button'),
	// fallback is for error handling
	fallback: () => <div>error</div>,
	// loading is for loading state
	loading: <div>loading</div>,
});


function App() {
	const [clickNum, setClickNum] = useState(0);

	return (
		<div>
			<div id={'parent'}/>
			{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
			{/* @ts-expect-error */}
			<ViteButton />
			{/*<WebpackGuestButton />*/}
			<button onClick={() => setClickNum(prev => prev + 1)}>{clickNum}</button>
		</div>
	)
}

export default App
