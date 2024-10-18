// import { inject as injectViteButton } from 'vite_guest_app/Button';
// import WebpackGuestButton from 'webpack_guest_app/Button';
import './App.css'
import { useEffect, useState } from 'react';

function App() {
    const [clickNum, setClickNum] = useState(0);
    // eslint-disable-next-line @typescript-eslint/ban-types
    const [viteButton, setViteButton] = useState<{ inject?: Function }>({ inject: undefined });
    useEffect(() => {
        const a = async () => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            const b = await import('vite_guest_app/Button');
            setViteButton(b);
        }
        a();
    }, []);

    useEffect(() => {
        if (clickNum > 0 && viteButton.inject) {
            return viteButton.inject('parent', {number: clickNum});
        }
    }, [clickNum, viteButton.inject])

  return (
    <div>
        <div id={'parent'}/>
        {/*<WebpackGuestButton />*/}
        <button onClick={() => setClickNum(prev => prev + 1)}/>
    </div>
  )
}

export default App
