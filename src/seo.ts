/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # semantyk.com
 * Module | `seo.ts`
 *
 * July 7, 2022
 *
 * Copyright © Semantyk 2022. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

import {project} from "./project";

export const seo = {
    title: project.name,
    description: `${project.slogan}. | ${project.description}.`,
    domain: project.domain,
    favicon: project.images.favicon,
    keywords: project.keywords,
    apple_touch_icon: project.images.apple_touch_icon,
    preview: project.images.preview
};