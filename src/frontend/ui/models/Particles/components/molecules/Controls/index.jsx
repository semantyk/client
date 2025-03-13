//* Imports
import { OrbitControls } from "@react-three/drei";
import Box from "../../atoms/Box";
import Circle from "../../atoms/Circle";
import Plane from "../../atoms/Plane";
import RayLine from "../../atoms/RayLine";
import Camera from "../../atoms/Camera";

//* Main
export default function Controls(args) {
    // Props
    const { general: { showHelpers } } = args.config;
    // Return
    return (<>
        <Box {...args} />
        <Camera {...args} />
        <Circle {...args} />
        <Plane {...args} />
        <RayLine {...args} />
        {showHelpers && <OrbitControls />}
    </>);
}