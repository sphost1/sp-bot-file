const bedrock = require("bedrock-protocol");

const client = bedrock.createClient({

  host: "148.113.6.59", // optional

  port: 25588, // optional, default 19132

  username: "pappu69069", // the username you want to join as, optional if online mode
  version: '1.19.80',
  offline: false, // optional, default false. if true, do not login with Xbox Live. You will not be asked to sign-in if set to true.

});

const { ping } = require('bedrock-protocol')




client.on("spawn", () => {

  console.log("spawn");

});

client.on("error", (error) => {

  console.log(error);

});

client.on("end", () => {

    setTimeout(() => {

         bedrock.createClient({

  host: "148.113.6.59", // optional

  port: 25588, // optional, default 19132

  username: "pappu69069", // the username you want to join as, optional if online mode

  offline: false, // optional, default false. if true, do not login with Xbox Live. You will not be asked to sign-in if set to true.

})

    }, 60000

    )

})

client.on("text", (packet) => {

  // Listen for chat messages and echo them back.

  if (packet.source_name != client.username) {

    console.log(`${packet.source_name} said: ${

      packet.message

    } on ${new Date().toLocaleString()}`)

  }

});

