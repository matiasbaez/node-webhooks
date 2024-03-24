
import express from "express";
import { envs } from "./config/envs";

(() => {
    main();
})();

function main() {
    const app = express();

    app.listen(envs.PORT, () => {
        console.log(`Server listening on port ${envs.PORT}`);
    });
}