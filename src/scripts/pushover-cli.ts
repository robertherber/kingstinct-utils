#!/usr/bin/env node


import pushoverClient, { Message } from '../node/pushover';

const program = require('commander'); // eslint-disable-line @typescript-eslint/no-var-requires

let message;

program
  .version('0.1.0')
  .arguments('<message>')
  .action((msg) => {
    message = msg;
  })
  .option('-t, --title [title]')
  .option('-s, --sound [sound]')
  .option('-d, --device [device]')
  .option('-p, --priority [priority]', 'priority', parseInt)
  .option('-u, --url [url]')
  .option('-ut, --url_title [url_title]')
  .option('--user [user]', 'specify user here or with KINGSTINCT_PUSHOVER_USER environment variable')
  .option('--token [token]', 'specify token here or with KINGSTINCT_PUSHOVER_TOKEN environment variable')
  .parse(process.argv);

const msg: Message = {
  message,
  title: program.title,
  sound: program.sound,
  device: program.device,
  priority: program.priority,
  url: program.url,
  url_title: program.url_title,
};

try {
  pushoverClient(program.user, program.token).sendMessage(msg);
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
