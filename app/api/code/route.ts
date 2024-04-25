import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import {OpenAI} from "openai"
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

const openai = new OpenAI({
  baseURL: "https://api.gptsapi.net/v1",
  apiKey: process.env.OPENAI_API_KEY, // This is the default and can be omitted
});

const instactionMessage: ChatCompletionMessageParam = {
  role: 'system',
  content: "You are a code generation. You must answer only in markdown "+
  "code snippets. Use code comments for explanations."
}

export async function POST(
  req:Request
) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if(!userId){
      return new NextResponse("Unauthorized",{ status:401 });
    }

    if(!openai.apiKey){
      return new NextResponse("OpenAI API Key not configured",{
        status: 500
      });
    }

    if(!messages){
      return new NextResponse("Messages are required", { status: 400 });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [instactionMessage, ...messages]
    });

    return NextResponse.json(response.choices[0]);

  }catch (error:any){
    console.log("CONVERSATION_ERROR",error);
    return new NextResponse("Internal error",{ status:500});
  }
}

// from openai import OpenAI
//   client = OpenAI(
//       base_url="https://api.gptsapi.net/v1",
//       api_key="sk-icQef96039635ac1ec0353392b3ad032a72e377a3339tLsl"
//   )