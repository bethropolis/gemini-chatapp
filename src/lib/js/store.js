import { writable } from "svelte/store";

/**
 * @typedef {Object} Message
 * @property {number} id - The unique identifier for the message
 * @property {string} sender - The sender of the message
 * @property {string} text - The content of the message
 */

/**
 * @type {import('svelte/store').Writable<Message[]>}
 */
export let messages = writable([]);

export let sidebar = writable(true);