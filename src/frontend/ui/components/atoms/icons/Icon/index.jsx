import React from "react";
import Image from "next/image";
import useColorScheme from "@semantyk/frontend/hooks/useColorScheme";

//* Main
export default function Icon(props) {
    // Hooks
    const { colorScheme } = useColorScheme();
    // Logic
    const suffix = colorScheme === "dark" ? "-dark" : "";
    // Return
    return colorScheme && (
        <Image
            alt="Semantyk"
            src={`/favicon${suffix}.svg`}
            title="Semantyk"
            {...props}
        />
    );
}