import { LLM } from "@/types"
import { ANTHROPIC_LLM_LIST } from "./anthropic-llm-list"
import { OPENAI_LLM_LIST } from "./openai-llm-list"

// Providers deshabilitados (06/2026). Los archivos y rutas siguen ahí
// por si en el futuro queremos resucitarlos — solo no se incluyen en
// la agregación que puebla el dropdown del UI.
// import { GOOGLE_LLM_LIST } from "./google-llm-list"
// import { MISTRAL_LLM_LIST } from "./mistral-llm-list"
// import { GROQ_LLM_LIST } from "./groq-llm-list"
// import { PERPLEXITY_LLM_LIST } from "./perplexity-llm-list"

export const LLM_LIST: LLM[] = [...OPENAI_LLM_LIST, ...ANTHROPIC_LLM_LIST]

export const LLM_LIST_MAP: Record<string, LLM[]> = {
  openai: OPENAI_LLM_LIST,
  azure: OPENAI_LLM_LIST,
  anthropic: ANTHROPIC_LLM_LIST
  // google: GOOGLE_LLM_LIST,
  // mistral: MISTRAL_LLM_LIST,
  // groq: GROQ_LLM_LIST,
  // perplexity: PERPLEXITY_LLM_LIST
}
