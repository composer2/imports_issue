"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const analytics_1 = require("./analytics");
debugger;
function buildHello() {
    return `${analytics_1.HELLO} ${analytics_1.WORLD}!`;
}
if (analytics_1.HELLO === 'Hello') {
    console.log(buildHello());
}
//# sourceMappingURL=app.js.map