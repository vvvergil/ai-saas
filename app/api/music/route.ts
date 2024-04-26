import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
  auth:process.env.REPLICATE_API_TOKEN
});

export async function POST(
  req:Request
) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt } = body;

    if(!userId){
      return new NextResponse("Unauthorized",{ status:401 });
    }


    if(!prompt){
      return new NextResponse("Messages are required", { status: 400 });
    }

    const response = await replicate.run(
      "riffusion/riffusion:8cf61ea6c56afd61d8f5b9ffd14d7c216c0a93844ce2d82ac1c9ecc9c7f24e05",
      {
        input: {
          alpha: 0.5,
          prompt_a: prompt,
          prompt_b: "90's rap",
          denoising: 0.75,
          seed_image_id: "vibes",
          num_inference_steps: 50
        }
      }
    );

    return NextResponse.json(response);

  }catch (error:any){
    console.log("MUSIC_ERROR",error);
    return new NextResponse("Internal error",{ status:500});
  }
}

// from openai import OpenAI
//   client = OpenAI(
//       base_url="https://api.gptsapi.net/v1",
//       api_key="sk-icQef96039635ac1ec0353392b3ad032a72e377a3339tLsl"
//   )