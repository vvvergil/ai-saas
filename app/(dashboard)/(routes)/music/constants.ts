import * as z from "zod";

export const formSchema = z.object({
  prompt: z.string().min(1, {
    message: "请输入音乐描述"
  })
})