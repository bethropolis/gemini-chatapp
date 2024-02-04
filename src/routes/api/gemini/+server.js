import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private'; 
import Gemini from "gemini-ai";


const gemini = new Gemini(env.PRIVATE_API_KEY);

/**
 * Sends a POST request to create a chat and return the result as JSON.
 *
 * @param {import('@sveltejs/kit').RequestEvent } request - The request object containing the query.
 * @return {Promise<object>} The JSON response with the chat text or an error message.
 */
export async function POST({ request }) {
  const { msg, chats } = await request.json();

  console.log(msg, chats);

  if (!msg) {
    return json({ error: 'No message provided' }, { status: 400 });
  }

  
  try {
    const chat = gemini.createChat({
      messages: chats,
      temperature: 0.7,
      maxOutputTokens: 1000
    });
    
    let text = await gemini.ask(msg.text);


    return json({ text }, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json', 
      },
    });
  } 
  catch (error) {
    return json({ error: error.message }, { status: 500 });
  }
}