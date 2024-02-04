import axios from "axios";
import { messages } from "./store";
import { formatChats } from "./utils";

/**
 * @typedef {Object} TextObject
 * @property {string} text - The text property of type string
 */


/**
 * Asynchronously makes a request using axios to post a chat to "https://api.gemini.com/v1/chat".
 *
 * @param {Object} chat - the chat object to be posted
 * @return {Promise<import('axios').AxiosResponse<any>>} A Promise object representing the response from the request
 */
const makeRequest = async (chat) => {


    try {
        let response = axios.post("/api/gemini", {
            ...chat
        })

        return response;
    } catch (/** @type {any}*/error) {
        return error;
    }
}

/**
 * Asynchronously sends a new message and retrieves a response.
 *
 * @param {Object} newMessage - The new message to be sent
 * @return {Promise<TextObject>} A Promise object representing the response from the request
 */
export const ask = async (newMessage) => {

    /**
    * @typedef {import('./types.js').formatedMessages}formatedMessages
    * @type  {Array<[formatedMessages, formatedMessages]>}     
    * */
    let chats = [];
    let unsubscribe = await messages.subscribe((value) => {
        let formatted = formatChats(value);
        chats = formatted;
    })

    let chat = { chats, msg: newMessage }

    let response = await makeRequest(chat);

    unsubscribe();
    return response.data;
}

