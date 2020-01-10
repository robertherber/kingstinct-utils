import omitUndefined from '../omitUndefined';
import {
  KINGSTINCT_PUSHOVER_DEVICE,
  KINGSTINCT_PUSHOVER_PRIORITY,
  KINGSTINCT_PUSHOVER_SOUND,
  KINGSTINCT_PUSHOVER_TITLE,
  KINGSTINCT_PUSHOVER_TOKEN,
  KINGSTINCT_PUSHOVER_URL_TITLE,
  KINGSTINCT_PUSHOVER_URL,
  KINGSTINCT_PUSHOVER_USER,
} from './config';

const Pushover = require('pushover-notifications');// eslint-disable-line @typescript-eslint/no-var-requires

type Sound = 'pushover' |
'bike' |
'bugle' |
'cashregister' |
'classical' |
'cosmic' |
'falling' |
'gamelan' |
'incoming' |
'intermission' |
'magic' |
'mechanical' |
'pianobar' |
'siren' |
'spacealarm' |
'tugboat' |
'alien' |
'climb' |
'persistent' |
'echo' |
'updown' |
'none';

export type Message = {
  message: string;
  title?: string;
  sound?: Sound;
  device?: string;
  priority?: number;
  url?: string;
  url_title?: string;
};

type PushoverClient = {
  sendMessage: (message: Message) => void;
};

const pushoverClient = (
  user = KINGSTINCT_PUSHOVER_USER,
  token = KINGSTINCT_PUSHOVER_TOKEN,
): PushoverClient => {
  const defaultMessage = {
    title: KINGSTINCT_PUSHOVER_TITLE,
    sound: KINGSTINCT_PUSHOVER_SOUND,
    device: KINGSTINCT_PUSHOVER_DEVICE,
    priority: KINGSTINCT_PUSHOVER_PRIORITY,
    url: KINGSTINCT_PUSHOVER_URL,
    url_title: KINGSTINCT_PUSHOVER_URL_TITLE,
  };

  if (!user || !token) {
    throw new Error('Please specify user and token for Pushover, you can do this by specifying the KINGSTINCT_PUSHOVER_USER and KINGSTINCT_PUSHOVER_TOKEN environment variables');
  }

  const pushover = new Pushover({
    user,
    token,
    // httpOptions: {
    //   proxy: process.env['http_proxy'],
    // },
    // onerror: function(error) {},
    // update_sounds: true // update the list of sounds every day - will
    // prevent app from exiting.
  });

  const sendMessage = (
    message: Message,
  ): void => pushover.send(omitUndefined({ ...defaultMessage, ...message }));
  return { sendMessage };
};


export default pushoverClient;
