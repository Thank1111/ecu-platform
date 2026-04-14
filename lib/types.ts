export interface Skill {
  name: string
  level: 'basic' | 'intermediate' | 'advanced' | 'expert'
}

export interface CurriculumModule {
  module_name: string
  credits: number
  type: 'required' | 'elective' | 'lab' | 'internship'
  description: string
}

export interface CurriculumModules {
  required: CurriculumModule[]
  elective: CurriculumModule[]
  lab: CurriculumModule[]
  internship: CurriculumModule[]
}

export interface UniversityScore {
  university: string
  readiness_score: number
  strengths: string[]
  gaps: string[]
  recommendation: 'lead' | 'partner' | 'observe'
}

export interface PathwayOption {
  track: string
  duration_months: number
  program_type: 'ปริญญาตรี' | 'อนุปริญญา' | 'ประกาศนียบัตร' | 'HE Sandbox' | 'Micro-credential'
  institutions: string[]
  notes: string
}

export interface Pathway {
  options: PathwayOption[]
  recommended_track: string
}

export interface PriorityItem {
  level: 'urgent' | 'high' | 'medium' | 'low'
  reason: string
  action: string
}

export interface UpskillModule {
  module_name: string
  duration_weeks: number
  format: 'online' | 'onsite' | 'hybrid' | 'weekend'
  description: string
}

export interface UpskillPathwayOption {
  track: string
  duration_months: number
  format: 'online' | 'onsite' | 'hybrid' | 'weekend'
  institutions: string[]
  funding: string
  notes: string
}

export interface UpskillPathway {
  target: string
  modules: UpskillModule[]
  options: UpskillPathwayOption[]
  recommended_track: string
}

export interface TranslationOutput {
  role_title: string
  demand_count: number
  timeline_months: number
  core_skills: Skill[]
  curriculum_modules: CurriculumModules
  scorecard: UniversityScore[]
  pathway: Pathway
  upskill: UpskillPathway
  priority: PriorityItem[]
}

export interface TranslateRequest {
  sector: string
  input: string
}

export interface TranslateResponse {
  success: boolean
  data?: TranslationOutput
  error?: string
  fallback?: boolean
}
