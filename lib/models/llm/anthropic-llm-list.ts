import { LLM } from "@/types"

const ANTHROPIC_PLATFORM_LINK =
  "https://docs.anthropic.com/claude/reference/getting-started-with-the-api"

// Anthropic Models (UPDATED 06/2026) -----------------------------

// Claude Sonnet 4.6
// Dateless ID: snapshot fijo de la generación 4.6 según docs de Anthropic.
// Cuando salga Sonnet 4.7 / 5.0, hay que actualizar este string.
const CLAUDE_SONNET_4_6: LLM = {
  modelId: "claude-sonnet-4-6",
  modelName: "Claude Sonnet 4.6",
  provider: "anthropic",
  hostedId: "claude-sonnet-4-6",
  platformLink: ANTHROPIC_PLATFORM_LINK,
  imageInput: true
}

// Claude Haiku 4.5
// Dateless ID es alias al snapshot más reciente de Haiku 4.5.
// Cuando salga Haiku 4.6, hay que actualizar este string.
const CLAUDE_HAIKU_4_5: LLM = {
  modelId: "claude-haiku-4-5",
  modelName: "Claude Haiku 4.5",
  provider: "anthropic",
  hostedId: "claude-haiku-4-5",
  platformLink: ANTHROPIC_PLATFORM_LINK,
  imageInput: true
}

export const ANTHROPIC_LLM_LIST: LLM[] = [CLAUDE_SONNET_4_6, CLAUDE_HAIKU_4_5]
