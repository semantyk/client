import {render} from '@testing-library/react';

import App from "./App";

describe("GET /", () => {
    it("status: 200 OK", () => {
        render(App());
    });
});
