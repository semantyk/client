//* Imports
import { OrbitControls } from "@react-three/drei";
import Box from "../../atoms/Box";
import Circle from "../../atoms/Circle/Circle";
import Plane from "../../atoms/Plane/Plane";
import RayLine from "../../atoms/RayLine/RayLine";
import Camera from "../../atoms/Camera/Camera";

//* Main
export default function Controls(args) {
    // Props
    const { general: { showControls } } = args.config;
    // Return
    return (<>
        <Box {...args} />
        <Camera {...args} />
        <Circle {...args} />
        <Plane {...args} />
        <RayLine {...args} />
        {showControls && <OrbitControls />}
    </>);
}