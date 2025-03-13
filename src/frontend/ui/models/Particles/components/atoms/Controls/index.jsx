//* Imports
import { OrbitControls } from "@react-three/drei";

//* Main
export default function Controls({ config }) {
    // Props
    const { general: { showHelpers } } = config;
    // Return
    return showHelpers && <OrbitControls />;
}