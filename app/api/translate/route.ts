import { anthropic } from '@/lib/anthropic'
import { SYSTEM_PROMPT, buildUserPrompt } from '@/lib/prompt'
import { getFallback } from '@/lib/templates'
import type { TranslateRequest, TranslateResponse } from '@/lib/types'

export async function POST(request: Request) {
  let sector = ''

  try {
    const body: TranslateRequest = await request.json()
    const { input, current_skills } = body
    sector = body.sector ?? ''

    if (!input || !sector) {
      return Response.json(
        { success: false, error: 'input and sector are required' },
        { status: 400 }
      )
    }

    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 8000,
      temperature: 0,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: 'user',
          content: buildUserPrompt(sector, input, current_skills),
        },
      ],
    })

    const raw = response.content[0].type === 'text' ? response.content[0].text : ''
    const text = raw.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '').trim()
    const data = JSON.parse(text)

    const result: TranslateResponse = { success: true, data, fallback: false }
    return Response.json(result)
  } catch (error) {
    console.error('Translate API error:', error)

    const result: TranslateResponse = {
      success: true,
      data: getFallback(sector),
      fallback: true,
    }
    return Response.json(result)
  }
}
