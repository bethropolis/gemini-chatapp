import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import Gemini from "gemini-ai";


const gemini = new Gemini(env.PRIVATE_API_KEY);

export async function POST({ request }) {
  const { query } = await request.json();

  try {
    const chat = gemini.createChat();
    
    let text = await gemini.ask(query);


    return json({ text }, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(error);
    return json({ error: error.message }, { status: 500 });
  }
}