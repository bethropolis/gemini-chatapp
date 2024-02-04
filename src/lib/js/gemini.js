import axios from "axios";
import { messages } from "./store";



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
 * @return {Promise<Object>} A Promise object representing the response from the request
 */
export const ask = async (newMessage) => {
    let chats;
    let unsubscribe = messages.subscribe((value) => {
        chats = value;
    })

    let chat = {chats, msg: newMessage}

    let response = await makeRequest(chat);
    console.log(response);

    unsubscribe();
    return response.data;
}

