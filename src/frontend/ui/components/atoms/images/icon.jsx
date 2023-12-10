/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `icon.jsx` | `images`
 * client | Semantyk
 *
 * Created: Dec 10, 2023
 * Modified: Dec 10, 2023
 *
 * Author(s): Semantyk Team
 * Maintainer(s):
 *
 * Copyright © Semantyk 2023. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

import Image from "next/image";
import icon from "@/app/icon.png";

export default function Icon(props) {
    return (
        <Image src={icon} alt="Semantyk" title="Semantyk" {...props}/>
    );
}