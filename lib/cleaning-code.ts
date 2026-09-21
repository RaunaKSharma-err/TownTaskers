// Deterministic cleaning code generator — no AI involved.

export interface CleaningCodeInput {
  space: string;
  problem: string;
  severity: string;
  frequency: string;
}

export interface CleaningCodeResult {
  code: string;
  recommendedApproach: string;
  toolsNeeded: string[];
  steps: string[];
  safetyNotes: string;
  whenToCallProfessional: string;
}

const spaceCodes: Record<string, string> = {
  'Bedroom': 'BED',
  'Kitchen': 'KIT',
  'Bathroom': 'BATH',
  'Living Room': 'LIV',
  'Office': 'OFF',
  'Sofa': 'SFA',
  'Tiles': 'TIL',
  'Other': 'OTH',
};

const problemCodes: Record<string, string> = {
  'Dust': 'DST',
  'Stain': 'STN',
  'Grease': 'GRS',
  'Mold': 'MLD',
  'Odor': 'ODR',
  'Dirt': 'DRT',
  'General Cleaning': 'GEN',
};

const severityCodes: Record<string, string> = {
  'Light': 'LT',
  'Moderate': 'MOD',
  'Heavy': 'HVY',
};

const frequencyCodes: Record<string, string> = {
  'Daily': 'D',
  'Weekly': 'W',
  'Monthly': 'M',
  'One-time': 'O',
};

export function generateCleaningCode(input: CleaningCodeInput): CleaningCodeResult {
  const space = spaceCodes[input.space] || 'OTH';
  const problem = problemCodes[input.problem] || 'GEN';
  const severity = severityCodes[input.severity] || 'LT';
  const frequency = frequencyCodes[input.frequency] || 'W';

  const code = `${space}-${problem}-${severity}-${frequency}`;

  const isHeavy = input.severity === 'Heavy';
  const isMold = input.problem === 'Mold';
  const isGrease = input.problem === 'Grease';

  const approachMap: Record<string, string> = {
    Dust: 'Start with dry methods — vacuum or microfiber cloth to capture dust before it spreads. Follow with a damp wipe on hard surfaces.',
    Stain: 'Identify the stain type and surface before treating. Blot liquids — do not rub. Apply an appropriate stain remover and work from the outside in.',
    Grease: 'Use warm water with dish soap as a first pass. For heavy grease, a dedicated degreaser may be needed. Wipe in the direction of the grain on stainless surfaces.',
    Mold: 'Use a mould-specific cleaner or a vinegar solution. Scrub affected areas thoroughly. Address the moisture source to prevent recurrence.',
    Odor: 'Clean the source of the odour first. Ensure ventilation. Use baking soda to absorb lingering smells. Avoid simply masking with air fresheners.',
    Dirt: 'Remove loose dirt with a brush or vacuum first. Follow with a mop or wipe using a suitable cleaner for the surface type.',
    'General Cleaning': 'Work top to bottom — dust high surfaces first, then mid-level, then floors. This prevents resettling on already-cleaned areas.',
  };

  const toolsMap: Record<string, string[]> = {
    Dust: ['Microfiber cloths', 'Vacuum with dust attachment', 'Duster with extendable handle'],
    Stain: ['Clean cloths', 'Stain remover (surface-appropriate)', 'Soft brush'],
    Grease: ['Degreaser or dish soap', 'Warm water', 'Non-abrasive sponge', 'Clean cloths'],
    Mold: ['Mould cleaner or white vinegar', 'Scrub brush', 'Gloves', 'Mask'],
    Odor: ['Baking soda', 'Clean cloths', 'Ventilation'],
    Dirt: ['Broom or vacuum', 'Mop and bucket', 'Surface-appropriate cleaner'],
    'General Cleaning': ['Microfiber cloths', 'All-purpose cleaner', 'Vacuum', 'Mop'],
  };

  const stepMap: Record<string, string[]> = {
    Bedroom: [
      'Strip and air the bed linens',
      'Dust surfaces from top to bottom',
      'Vacuum or sweep the floor',
      'Wipe down switches and handles',
    ],
    Kitchen: [
      'Clear and wipe countertops',
      'Clean stovetop and sink',
      'Wipe appliance exteriors',
      'Sweep and mop the floor',
    ],
    Bathroom: [
      'Spray cleaner on surfaces and let sit',
      'Scrub toilet, sink, and shower',
      'Clean mirrors and fixtures',
      'Mop the floor and squeegee glass',
    ],
    'Living Room': [
      'Dust shelves, electronics, and decor',
      'Vacuum upholstery and cushions',
      'Vacuum or mop the floor',
      'Tidy and organise clutter',
    ],
    Office: [
      'Declutter the desk',
      'Disinfect keyboard, mouse, and phone',
      'Wipe desk surface',
      'Empty waste bin and vacuum',
    ],
    Sofa: [
      'Vacuum all surfaces and cushions',
      'Treat any visible stains',
      'Deodorise with baking soda',
      'Allow to dry fully before use',
    ],
    Tiles: [
      'Sweep or vacuum loose dirt',
      'Apply tile and grout cleaner',
      'Scrub grout lines',
      'Mop and rinse thoroughly',
    ],
    Other: [
      'Assess the space and identify priority areas',
      'Remove loose dirt and debris',
      'Clean surfaces with an appropriate cleaner',
      'Do a final wipe-down and inspection',
    ],
  };

  const safetyNotes: string[] = [
    'Never mix household cleaning chemicals unless the product instructions explicitly state they can be combined.',
    'Test cleaning products on an inconspicuous area before applying broadly.',
    'Ensure adequate ventilation when using cleaning sprays.',
  ];

  if (isMold) {
    safetyNotes.push('Wear a mask and gloves when dealing with mould. Avoid spreading spores to other areas.');
  }
  if (isGrease) {
    safetyNotes.push('Do not use water on grease fires. Ensure kitchen appliances are off and cool before cleaning.');
  }

  const whenToCall: string[] = [
    'If the problem covers a large area or keeps returning despite regular cleaning.',
    'If you are unsure which products are safe for your surface type.',
    'If the job requires equipment or expertise you do not have.',
  ];

  if (isHeavy) {
    whenToCall.unshift('Heavy buildup often requires professional-grade equipment for best results.');
  }

  return {
    code,
    recommendedApproach: approachMap[input.problem] || approachMap['General Cleaning'],
    toolsNeeded: toolsMap[input.problem] || toolsMap['General Cleaning'],
    steps: stepMap[input.space] || stepMap['Other'],
    safetyNotes: safetyNotes.join(' '),
    whenToCallProfessional: whenToCall.join(' '),
  };
}

export const spaceOptions = ['Bedroom', 'Kitchen', 'Bathroom', 'Living Room', 'Office', 'Sofa', 'Tiles', 'Other'];
export const problemOptions = ['Dust', 'Stain', 'Grease', 'Mold', 'Odor', 'Dirt', 'General Cleaning'];
export const severityOptions = ['Light', 'Moderate', 'Heavy'];
export const frequencyOptions = ['Daily', 'Weekly', 'Monthly', 'One-time'];
