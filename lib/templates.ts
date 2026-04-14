import type { TranslationOutput } from './types'

export const FALLBACK_AVIATION: TranslationOutput = {
  role_title: 'Aircraft Maintenance Engineer — B1/B2 (ช่างซ่อมบำรุงอากาศยาน)',
  demand_count: 500,
  timeline_months: 24,
  core_skills: [
    { name: 'CAAT Part-66 Category B1 Airframe & Powerplant', level: 'advanced' },
    { name: 'CAAT Part-66 Category B2 Avionics', level: 'advanced' },
    { name: 'Airbus A320 family systems', level: 'intermediate' },
    { name: 'Boeing 787 Dreamliner systems', level: 'intermediate' },
    { name: 'Aircraft structural repair', level: 'intermediate' },
    { name: 'Technical English for aviation', level: 'intermediate' },
  ],
  curriculum_modules: {
    required: [
      { module_name: 'Aircraft Structures & Materials', credits: 3, type: 'required', description: 'Principles of airframe construction, materials, and structural inspection methods.' },
      { module_name: 'Powerplant Systems (CFM56 / LEAP)', credits: 3, type: 'required', description: 'Gas turbine engine theory, maintenance, and troubleshooting.' },
      { module_name: 'Avionics & Electrical Systems', credits: 3, type: 'required', description: 'Aircraft electrical, instrument, and navigation systems.' },
      { module_name: 'Aviation Regulations & Safety', credits: 2, type: 'required', description: 'CAAT, ICAO Annex 6, and SMS requirements.' },
    ],
    elective: [],
    lab: [],
    internship: [
      { module_name: 'Line Maintenance Practicum', credits: 6, type: 'internship', description: 'Supervised hands-on maintenance at CAAT-approved MRO facility.' },
    ],
  },
  scorecard: [
    {
      university: 'CATC',
      readiness_score: 95,
      strengths: ['CAAT Part-147 approved organization', 'Direct industry partnerships with Thai Airways'],
      gaps: ['Limited degree-granting authority'],
      recommendation: 'lead',
    },
    {
      university: 'KMITL',
      readiness_score: 88,
      strengths: ['Existing aerospace engineering faculty', 'CAAT-approved training infrastructure'],
      gaps: ['Limited B2 avionics lab capacity'],
      recommendation: 'lead',
    },
    {
      university: 'KMUTT',
      readiness_score: 62,
      strengths: ['Strong engineering foundation', 'Mechatronics and materials labs'],
      gaps: ['No aviation-specific certification', 'No MRO industry tie-up'],
      recommendation: 'partner',
    },
  ],
  pathway: {
    options: [
      {
        track: 'Fast-track Certificate (CAAT Part-147)',
        duration_months: 24,
        program_type: 'ประกาศนียบัตร',
        institutions: ['CATC', 'KMITL'],
        notes: 'Leads directly to CAAT Part-66 B1/B2 license exam eligibility.',
      },
      {
        track: 'Bachelor of Engineering (Aerospace)',
        duration_months: 48,
        program_type: 'ปริญญาตรี',
        institutions: ['KMITL', 'KMUTT'],
        notes: 'Full degree with CAAT endorsement integrated in years 3–4.',
      },
    ],
    recommended_track: 'Fast-track Certificate (CAAT Part-147)',
  },
  upskill: {
    target: 'ช่างอากาศยานที่ทำงานอยู่แล้วในสายการบินหรือ MRO ที่ต้องการต่ออายุใบอนุญาต CAAT หรืออัปเกรดจาก Cat A เป็น B1/B2',
    modules: [
      { module_name: 'CAAT Part-66 B1 Refresher', duration_weeks: 4, format: 'onsite', description: 'ทบทวนและสอบ B1 license สำหรับช่างที่มี Cat A อยู่แล้ว' },
      { module_name: 'Avionics Systems Update (B2)', duration_weeks: 6, format: 'hybrid', description: 'อัปเดตระบบ avionics ใหม่สำหรับ A320neo และ B787' },
      { module_name: 'Safety Management Systems', duration_weeks: 2, format: 'online', description: 'SMS และ Human Factors ตาม ICAO Annex 6 ฉบับล่าสุด' },
    ],
    options: [
      {
        track: 'CAAT Part-66 License Upgrade Program',
        duration_months: 3,
        format: 'hybrid',
        institutions: ['CATC', 'KMITL'],
        funding: 'กองทุนพัฒนาฝีมือแรงงาน + employer co-funding (Thai Airways, Bangkok Airways)',
        notes: 'เหมาะกับช่างที่มี Cat A และต้องการ upgrade เป็น B1/B2 เร็วที่สุด',
      },
    ],
    recommended_track: 'CAAT Part-66 License Upgrade Program',
  },
  priority: [
    {
      level: 'urgent',
      reason: '500 annual openings with no current Part-66 program at scale; CAAT licensing is a legal prerequisite.',
      action: 'อว. ควรเร่งรับรอง CATC + KMITL และเปิด HE Sandbox ภายใน Q1 ปีการศึกษาหน้า',
    },
  ],
}

export const FALLBACK_DRONE: TranslationOutput = {
  role_title: 'Agricultural Drone Technician (ช่างเทคนิคโดรนเกษตร)',
  demand_count: 300,
  timeline_months: 6,
  core_skills: [
    { name: 'Multi-rotor UAV operation and maintenance', level: 'intermediate' },
    { name: 'DJI Agras T40/T60 series operation', level: 'intermediate' },
    { name: 'Precision agriculture sensor systems (NDVI, multispectral)', level: 'basic' },
    { name: 'CAOT drone pilot certification', level: 'intermediate' },
    { name: 'Field calibration and spray system maintenance', level: 'intermediate' },
    { name: 'GIS and field mapping basics', level: 'basic' },
  ],
  curriculum_modules: {
    required: [
      { module_name: 'UAV Fundamentals & Safety', credits: 2, type: 'required', description: 'Drone aerodynamics, safety regulations, and CAOT exam preparation.' },
      { module_name: 'Agricultural Drone Systems', credits: 2, type: 'required', description: 'Spray systems, tank maintenance, and sensor calibration for crop monitoring.' },
      { module_name: 'Precision Agriculture Applications', credits: 2, type: 'required', description: 'NDVI mapping, variable rate application, and field data interpretation.' },
    ],
    elective: [],
    lab: [],
    internship: [
      { module_name: 'Field Practicum', credits: 4, type: 'internship', description: 'Supervised drone operation on real agricultural fields with cooperating farmers.' },
    ],
  },
  scorecard: [
    {
      university: 'KU',
      readiness_score: 85,
      strengths: ['National agricultural university mandate', 'DJI equipment partnership'],
      gaps: ['Bangkok-centric, less reach to farming regions'],
      recommendation: 'lead',
    },
    {
      university: 'KKU',
      readiness_score: 82,
      strengths: ['Strong Northeast agricultural network', 'Existing agri-tech research center'],
      gaps: ['Limited UAV maintenance workshop'],
      recommendation: 'lead',
    },
    {
      university: 'CMU',
      readiness_score: 70,
      strengths: ['Northern region agricultural network', 'Smart farming pilot programs'],
      gaps: ['UAV regulatory compliance infrastructure nascent'],
      recommendation: 'partner',
    },
  ],
  pathway: {
    options: [
      {
        track: 'Micro-credential: Agricultural Drone Operator',
        duration_months: 6,
        program_type: 'Micro-credential',
        institutions: ['KU', 'KKU', 'CMU'],
        notes: 'Stackable credential; CAOT license + precision ag competency. Deployable nationwide via regional campuses.',
      },
      {
        track: 'HE Sandbox: Smart Farmer Technology Program',
        duration_months: 12,
        program_type: 'HE Sandbox',
        institutions: ['KU', 'KKU'],
        notes: 'Extended program covering IoT soil sensors, drone fleets, and farm management systems.',
      },
    ],
    recommended_track: 'Micro-credential: Agricultural Drone Operator',
  },
  upskill: {
    target: 'เกษตรกรและเจ้าหน้าที่ส่งเสริมการเกษตรที่ต้องการเรียนรู้การใช้โดรนเกษตรและระบบ precision farming',
    modules: [
      { module_name: 'โดรนเกษตรเบื้องต้น', duration_weeks: 2, format: 'onsite', description: 'ฝึกบินโดรน DJI Agras และการบำรุงรักษาเบื้องต้น' },
      { module_name: 'Precision Farming with Sensors', duration_weeks: 2, format: 'hybrid', description: 'การแปลผล NDVI และการวางแผนการพ่นยา' },
      { module_name: 'CAOT License Exam Prep', duration_weeks: 1, format: 'online', description: 'เตรียมสอบใบอนุญาตนักบินอากาศยานซึ่งบังคับบัญชาไม่ได้' },
    ],
    options: [
      {
        track: 'Upskill: Smart Farmer Drone Certificate',
        duration_months: 2,
        format: 'weekend',
        institutions: ['KU', 'KKU', 'CMU'],
        funding: 'กรมส่งเสริมการเกษตร + กรมพัฒนาฝีมือแรงงาน',
        notes: 'เรียนวันเสาร์-อาทิตย์ รุ่นละ 30 คน จัดที่สำนักงานเกษตรจังหวัด',
      },
    ],
    recommended_track: 'Upskill: Smart Farmer Drone Certificate',
  },
  priority: [
    {
      level: 'high',
      reason: '300 openings/year backed by direct government mandate (Smart Farmer policy); fast 6-month timeline is achievable.',
      action: 'อว. ควรกำหนด KU และ KKU เป็น lead และเปิดรับสมัครรุ่นแรกภายในภาคการศึกษาถัดไป',
    },
  ],
}

export const FALLBACK_LOGISTICS: TranslationOutput = {
  role_title: 'Warehouse Automation Technician (ช่างเทคนิคระบบคลังสินค้าอัตโนมัติ)',
  demand_count: 800,
  timeline_months: 12,
  core_skills: [
    { name: 'PLC programming (Siemens S7, Mitsubishi iQ-F)', level: 'intermediate' },
    { name: 'Automated storage and retrieval systems (AS/RS)', level: 'intermediate' },
    { name: 'Conveyor and sortation system maintenance', level: 'intermediate' },
    { name: 'WMS (Warehouse Management System) operation', level: 'basic' },
    { name: 'Robot arm basic programming (Fanuc, KUKA)', level: 'basic' },
    { name: 'Industrial IoT sensor integration', level: 'basic' },
    { name: 'Electrical troubleshooting and wiring', level: 'intermediate' },
  ],
  curriculum_modules: {
    required: [
      { module_name: 'Industrial Electrical Systems', credits: 3, type: 'required', description: 'Three-phase power, motor control, and industrial wiring standards.' },
      { module_name: 'PLC & Automation Programming', credits: 3, type: 'required', description: 'Ladder logic, function blocks, and HMI development for warehouse automation.' },
      { module_name: 'AS/RS and Conveyor Systems', credits: 2, type: 'required', description: 'Stacker cranes, mini-load systems, and belt/roller conveyor maintenance.' },
      { module_name: 'WMS and Industrial IoT', credits: 2, type: 'required', description: 'Warehouse management software integration and sensor data monitoring.' },
    ],
    elective: [],
    lab: [
      { module_name: 'Automation Workshop Practicum', credits: 6, type: 'lab', description: 'Hands-on fault diagnosis and maintenance in simulated warehouse environment.' },
    ],
    internship: [],
  },
  scorecard: [
    {
      university: 'KMUTT',
      readiness_score: 90,
      strengths: ['Advanced manufacturing and robotics labs', 'Strong EEC industry partnerships'],
      gaps: ['Logistics-specific curriculum not yet formalized'],
      recommendation: 'lead',
    },
    {
      university: 'KMITL',
      readiness_score: 80,
      strengths: ['Industrial engineering program', 'Automation and mechatronics equipment'],
      gaps: ['Limited warehouse simulation facility'],
      recommendation: 'lead',
    },
    {
      university: 'KKU',
      readiness_score: 60,
      strengths: ['Regional logistics hub proximity', 'Engineering faculty with industrial focus'],
      gaps: ['PLC lab capacity insufficient', 'No current automation partnership'],
      recommendation: 'partner',
    },
  ],
  pathway: {
    options: [
      {
        track: 'HE Sandbox: Warehouse Automation Certificate',
        duration_months: 12,
        program_type: 'HE Sandbox',
        institutions: ['KMUTT', 'KMITL'],
        notes: 'Co-designed with DHL, Kerry Express, and Flash Express. Industry-recognized credential.',
      },
      {
        track: 'Associate Degree (Industrial Automation)',
        duration_months: 24,
        program_type: 'อนุปริญญา',
        institutions: ['KMUTT', 'KMITL', 'KKU'],
        notes: 'Broader automation credential stackable toward B.Eng.',
      },
      {
        track: 'Bachelor of Engineering (Industrial Engineering)',
        duration_months: 48,
        program_type: 'ปริญญาตรี',
        institutions: ['KMUTT', 'KMITL'],
        notes: 'Full degree with logistics automation specialization track.',
      },
    ],
    recommended_track: 'HE Sandbox: Warehouse Automation Certificate',
  },
  upskill: {
    target: 'พนักงานคลังสินค้าที่ทำงานอยู่แล้วในบริษัท logistics ที่กำลัง transition ไปสู่ระบบ automated warehouse',
    modules: [
      { module_name: 'PLC Operation Basics', duration_weeks: 3, format: 'onsite', description: 'การอ่านและควบคุม PLC สำหรับพนักงาน operator ที่ไม่มีพื้นฐาน electrical' },
      { module_name: 'WMS System Operation', duration_weeks: 2, format: 'online', description: 'การใช้งาน Warehouse Management System และการแก้ปัญหาเบื้องต้น' },
      { module_name: 'AS/RS Troubleshooting', duration_weeks: 3, format: 'hybrid', description: 'การวิเคราะห์และแก้ไขปัญหาระบบ automated storage เบื้องต้น' },
    ],
    options: [
      {
        track: 'Upskill: Warehouse Automation Operator',
        duration_months: 2,
        format: 'hybrid',
        institutions: ['KMUTT', 'KMITL'],
        funding: 'กรมพัฒนาฝีมือแรงงาน + DHL/Kerry Express co-funding',
        notes: 'เรียนในช่วงเย็นวันธรรมดา ไม่กระทบการทำงาน รับรองโดยนายจ้าง',
      },
    ],
    recommended_track: 'Upskill: Warehouse Automation Operator',
  },
  priority: [
    {
      level: 'urgent',
      reason: '800 annual openings in EEC logistics zones; Thailand 4.0 advanced manufacturing push requires immediate workforce.',
      action: 'อว. ควรเร่ง KMUTT เป็น lead institution และประสานงาน EEC กับ DHL/Kerry Express เพื่อร่วมออกแบบหลักสูตรและจัดหาอุปกรณ์',
    },
  ],
}

export const FALLBACK_BY_SECTOR: Record<string, TranslationOutput> = {
  aviation: FALLBACK_AVIATION,
  aerospace: FALLBACK_AVIATION,
  agriculture: FALLBACK_DRONE,
  agritech: FALLBACK_DRONE,
  logistics: FALLBACK_LOGISTICS,
  'supply chain': FALLBACK_LOGISTICS,
}

export function getFallback(sector: string): TranslationOutput {
  const key = sector.toLowerCase()
  for (const [sectorKey, template] of Object.entries(FALLBACK_BY_SECTOR)) {
    if (key.includes(sectorKey)) return template
  }
  return FALLBACK_LOGISTICS
}
