import { createBridgeComponent } from '@module-federation/bridge-react';
import Button from './Button';

// export const inject = (parentElementId, props) => {
// 	const root = ReactDOM.createRoot(document.getElementById(parentElementId));
// 	root.render(<Button {...props} />);
//
// 	return () => root.unmount();
// }

const ExportedButton = createBridgeComponent({
	rootComponent: Button
});

export default ExportedButton;
