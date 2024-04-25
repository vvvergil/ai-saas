import * as z from "zod";

export const formSchema = z.object({
  prompt: z.string().min(1, {
    message: "请输入图片描述"
  }),
  amount: z.string().min(1),
  resolution: z.string().min(1)
})

export const amountOptions = [
  {
    value: "1",
    label: "1 幅图"
  },
  {
    value: "2",
    label: "2 幅图"
  },
  {
    value: "3",
    label: "3 幅图"
  },
  {
    value: "4",
    label: "4 幅图"
  },
  {
    value: "5",
    label: "5 幅图"
  }, 
]

export const resolutionOptions = [
  {
    value: "256×256",
    label: "256×256",
  },
  {
    value: "512×512",
    label: "512×512",
  },
  {
    value: "1024×1024",
    label: "1024×1024",
  },
]