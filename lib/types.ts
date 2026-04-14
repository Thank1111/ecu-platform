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

export interface SkillGapItem {
  skill_name: string
  current_level: 'none' | 'basic' | 'intermediate' | 'advanced' | 'expert'
  required_level: 'basic' | 'intermediate' | 'advanced' | 'expert'
  gap_severity: 'critical' | 'moderate' | 'minor'
  recommended_action: string
}

export interface SkillGap {
  summary: string
  gaps: SkillGapItem[]
  strengths: string[]
}

export interface GapToTarget {
  skill_name: string
  current_level: 'none' | 'basic' | 'intermediate' | 'advanced' | 'expert'
  national_floor: 'basic' | 'intermediate' | 'advanced' | 'expert'
  company_target: 'basic' | 'intermediate' | 'advanced' | 'expert'
  gap_to_floor: string
  gap_to_target: string
  recommended_action: string
}

export interface CompanyTargetAnalysis {
  company_goal: string
  timeline_to_floor_months: number
  timeline_to_target_months: number
  summary: string
  gaps: GapToTarget[]
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
  skill_gap?: SkillGap
  company_target?: CompanyTargetAnalysis
  priority: PriorityItem[]
}

export interface TranslateRequest {
  sector: string
  input: string
  current_skills?: string
  company_target?: string
}

export interface TranslateResponse {
  success: boolean
  data?: TranslationOutput
  error?: string
  fallback?: boolean
}
