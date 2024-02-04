import { user } from './store.js';



/**
 * @typedef {import('./types.js').formatedMessages}formatedMessages
 * @param {Array<import('./types.js').messages>} messages
 * @returns  {Array<[formatedMessages, formatedMessages]>}
 */
export function formatChats(messages) {
   if (messages.length < 2) return [];
  
   const pairedMessages = [];
   for (let i = 0; i < messages.length - 1; i += 2) {
      pairedMessages.push([
        { role: 'user', parts: [{ text: messages[i].text }] },
        { role: 'model', parts: [{ text: messages[i + 1].text }] }
      ]);
   }
  
   return pairedMessages;
   }