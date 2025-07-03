import Mellowtel from "mellowtel";

let mellowtel;

(async () => {
    mellowtel = new Mellowtel("14a8d428");
    await mellowtel.initBackground();
})();

browser.runtime.onInstalled.addListener(async function(details) {
    console.log("Extension Installed or Updated");
    await mellowtel.generateAndOpenOptInLink();
});