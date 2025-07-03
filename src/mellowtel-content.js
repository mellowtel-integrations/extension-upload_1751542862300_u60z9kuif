import Mellowtel from "mellowtel";

(async () => {
    const mellowtel = new Mellowtel("14a8d428");
    await mellowtel.initContentScript();
})();