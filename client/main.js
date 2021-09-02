import {Soket} from './modules/soket.js';
import {Messages} from "./modules/messages.js";
import {Username} from "./modules/username.js";
import {MessageForm} from "./modules/message-form.js";

document.addEventListener('DOMContentLoaded', () => {
  const soket = new Soket();
  const username = new Username('#username');
  const messages = new Messages('#messages');
  const messageForm = new MessageForm('#messageForm');

  soket.onSetUsername(name => {
    username.render(name);
    messages.renderSystemMessage(`${name} assigned to you.`);
  });

  soket.onUserJoined(name => {
    messages.renderSystemMessage(`${name} joined.`);
  });
  soket.onUserLeft(name => {
    messages.renderSystemMessage(`${name} left.`);
  });

  soket.onChatMessage(({name, message}) => {
    messages.renderMessage(name, message);
  });

  // messageForm.onSubmit(value => {
  //   soket.emitChatMessage(value);
  // });

  messageForm.onSubmit(soket.emitChatMessage);
});
