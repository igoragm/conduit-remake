```js
import { Router } from "react-router";
import Header from "./Header";

import { createBrowserHistory } from "history";

const history = createBrowserHistory();

<Router history={history}>
    <Header />
</Router>;
```
