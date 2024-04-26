import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import {OpenAI} from "openai"

const openai = new OpenAI({
  baseURL: "https://api.gptsapi.net/v1",
  apiKey: process.env.OPENAI_API_KEY, // This is the default and can be omitted
});

export async function POST(
  req:Request
) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt, amount=1, resolution = "512x512"} = body;

    if(!userId){
      return new NextResponse("Unauthorized",{ status:401 });
    }

    if(!openai.apiKey){
      return new NextResponse("OpenAI API Key not configured",{
        status: 500
      });
    }

    if(!prompt){
      return new NextResponse("Prompt are required", { status: 400 });
    }

    if(!amount){
      return new NextResponse("Amount are required", { status: 400 });
    }

    if(!resolution){
      return new NextResponse("Resolution are required", { status: 400 });
    }

    const response = await openai.images.generate({
      model: "dall-e-2",
      prompt,
      n: parseInt(amount,10),
      size: resolution,
    })


    return NextResponse.json(response.data);

  }catch (error:any){
    console.log("IMAGE_ERROR",error);
    return new NextResponse("Internal error",{ status:500});
  }
}

// from openai import OpenAI
//   client = OpenAI(
//       base_url="https://api.gptsapi.net/v1",
//       api_key="sk-icQef96039635ac1ec0353392b3ad032a72e377a3339tLsl"
//   )