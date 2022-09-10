const RPC = require("discord-rpc");
const rpc = new RPC.Client({
    transport: "ipc"
})

rpc.on("ready", () => {
    rpc.setActivity({
        details: "Editing Javascript",
        state: "Making Websites",
        largeImageKey: "large",
        largeImageText: "Verified Dev",
    })

    console.log("RPC active");
})

rpc.login({
    clientId: "1012677036051017768"
})
