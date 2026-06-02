import { LLM } from "@/types"

const OPENAI_PLATORM_LINK = "https://platform.openai.com/docs/overview"

// OpenAI Models (UPDATED 06/2026) -----------------------------

// GPT-5.5 — alias estable de OpenAI, apunta al snapshot más reciente
const GPT5_5: LLM = {
  modelId: "gpt-5.5",
  modelName: "GPT-5.5",
  provider: "openai",
  hostedId: "gpt-5.5",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 5,
    outputCost: 30
  }
}

// GPT-5.4 mini
const GPT5_4Mini: LLM = {
  modelId: "gpt-5.4-mini",
  modelName: "GPT-5.4 mini",
  provider: "openai",
  hostedId: "gpt-5.4-mini",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.75,
    outputCost: 4.5
  }
}

// GPT-5.4 nano
const GPT5_4Nano: LLM = {
  modelId: "gpt-5.4-nano",
  modelName: "GPT-5.4 nano",
  provider: "openai",
  hostedId: "gpt-5.4-nano",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.2,
    outputCost: 1.25
  }
}

export const OPENAI_LLM_LIST: LLM[] = [GPT5_5, GPT5_4Mini, GPT5_4Nano]
