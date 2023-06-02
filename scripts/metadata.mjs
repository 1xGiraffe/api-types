import { writeFileSync } from "fs";
import pkg from "websocket";

const PARAM_PREFIX = "--";
const { w3cwebsocket } = pkg;

const main = () => {
  const args = process.argv.slice(2);
  const params = parseArgs(args);

  const wsParam = params["ws"];
  const chainParam = params["chain"];

  const ws = new w3cwebsocket(wsParam);
  ws.onopen = () => {
    ws.send(
      '{"id":"1","jsonrpc":"2.0","method":"state_getMetadata","params":[]}'
    );
  };

  ws.onmessage = (msg) => {
    writeFileSync(`./src/${chainParam}/metadata.json`, msg.data);
    console.log(`${chainParam} metadata fetched!`);
    process.exit(0);
  };
};

const parseArgs = (args) => {
  const parsedArgs = {};

  args.forEach((arg, i) => {
    if (arg.startsWith(PARAM_PREFIX)) {
      const key = arg.replace(PARAM_PREFIX, "");
      parsedArgs[key] = args[++i];
    }
  });
  return parsedArgs;
};

main();
