import { Aygo } from 'aygo';

export function typescript() {
    Aygo.debug("DEBUG : This", "is", { "key": "a test" }, 134);
    Aygo.log("LOG : This", "is", { "key": "a test" }, 134);
    Aygo.info("INFO : This", "is", { "key": "a test" }, 134);
    Aygo.warn("WARN : This", "is", { "key": "a test" }, 134);
    Aygo.error("ERROR : This", "is", { "key": "a test" }, 134);
}

window.onload = typescript;
