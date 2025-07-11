import { LLM } from "@/types"

const ANTHROPIC_PLATFORM_LINK =
  "https://docs.anthropic.com/claude/reference/getting-started-with-the-api"

// Anthropic Models (UPDATED 03/13/24) -----------------------------

// Claude 2 (UPDATED 12/21/23)
const CLAUDE_2: LLM = {
  modelId: "claude-2.1",
  modelName: "Claude 2",
  provider: "anthropic",
  hostedId: "claude-2.1",
  platformLink: ANTHROPIC_PLATFORM_LINK,
  imageInput: false
}

// Claude Instant (UPDATED 12/21/23)
const CLAUDE_INSTANT: LLM = {
  modelId: "claude-instant-1.2",
  modelName: "Claude Instant",
  provider: "anthropic",
  hostedId: "claude-instant-1.2",
  platformLink: ANTHROPIC_PLATFORM_LINK,
  imageInput: false
}

// Claude 3 Haiku (UPDATED 03/13/24)
const CLAUDE_3_HAIKU: LLM = {
  modelId: "claude-3-haiku-20240307",
  modelName: "Claude 3 Haiku",
  provider: "anthropic",
  hostedId: "claude-3-haiku-20240307",
  platformLink: ANTHROPIC_PLATFORM_LINK,
  imageInput: true
}

// Claude 3 Sonnet (UPDATED 03/04/24)
const CLAUDE_3_SONNET: LLM = {
  modelId: "claude-3-sonnet-20240229",
  modelName: "Claude 3 Sonnet",
  provider: "anthropic",
  hostedId: "claude-3-sonnet-20240229",
  platformLink: ANTHROPIC_PLATFORM_LINK,
  imageInput: true
}

// Claude 3.7 Sonnet (NEW)
const CLAUDE_3_7_SONNET: LLM = {
  modelId: "claude-3-7-sonnet-20250219",
  modelName: "Claude 3.7 Sonnet",
  provider: "anthropic",
  hostedId: "claude-3-7-sonnet-20250219",
  platformLink: ANTHROPIC_PLATFORM_LINK,
  imageInput: true
}

// Claude 3.5 Sonnet (UPDATED 03/04/24)
const CLAUDE_3_5_SONNET: LLM = {
  modelId: "claude-3-5-sonnet-20240620",
  modelName: "Claude 3.5 Sonnet",
  provider: "anthropic",
  hostedId: "claude-3-5-sonnet-20240620",
  platformLink: ANTHROPIC_PLATFORM_LINK,
  imageInput: true
}

// Claude 3 Opus (UPDATED 03/04/24)
const CLAUDE_3_OPUS: LLM = {
  modelId: "claude-3-opus-20240229",
  modelName: "Claude 3 Opus",
  provider: "anthropic",
  hostedId: "claude-3-opus-20240229",
  platformLink: ANTHROPIC_PLATFORM_LINK,
  imageInput: true
}

// Claude Opus 4 (NEW)
const CLAUDE_OPUS_4: LLM = {
  modelId: "claude-opus-4-20250514",
  modelName: "Claude Opus 4",
  provider: "anthropic",
  hostedId: "claude-opus-4-20250514",
  platformLink: ANTHROPIC_PLATFORM_LINK,
  imageInput: true
}

// Claude Sonnet 4 (NEW)
const CLAUDE_SONNET_4: LLM = {
  modelId: "claude-sonnet-4-20250514",
  modelName: "Claude Sonnet 4",
  provider: "anthropic",
  hostedId: "claude-sonnet-4-20250514",
  platformLink: ANTHROPIC_PLATFORM_LINK,
  imageInput: true
}

export const ANTHROPIC_LLM_LIST: LLM[] = [
  CLAUDE_2,
  CLAUDE_INSTANT,
  CLAUDE_3_HAIKU,
  CLAUDE_3_SONNET,
  CLAUDE_3_7_SONNET,
  CLAUDE_3_5_SONNET,
  CLAUDE_3_OPUS,
  CLAUDE_OPUS_4,
  CLAUDE_SONNET_4
]
