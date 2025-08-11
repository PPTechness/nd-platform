export type IntakeInputs = {
    ageBand?: '3-6' | '7-11' | '12-16';
    challenge?: 'morningTransitions' | 'homeworkRefusal' | 'publicMeltdowns' | 'bedtimeAnxiety' | 'earlySigns';
    confidence?: 1 | 2 | 3;
    trigger?: 'noise' | 'lights' | 'crowd' | 'none';
    parentPrefers?: 'visuals' | 'text' | 'audio' | 'none';
  };
  
  export type Recommendation = {
    activities: { key: string; title: string; href: string }[];
    why: string;
    dataUsed: Record<string, string | number | undefined>;
  };
  
  const activities = {
    morningChecklist: { key: 'morningChecklist', title: 'Morning routine checklist', href: '/activities/morning-routine-checklist' },
    coRegulation60s: { key: 'coRegulation60s', title: 'Co-regulation (60s)', href: '/activities/co-regulation' },
    twoChoiceWardrobe: { key: 'twoChoiceWardrobe', title: 'Two-choice wardrobe prompt', href: '/activities/morning-routine-checklist' },
  
    microStart3m: { key: 'microStart3m', title: 'Homework micro-start (3m)', href: '/activities/homework-micro-start' },
    nextStepScript: { key: 'nextStepScript', title: 'Next-step script', href: '/activities/homework-micro-start' },
    rewardPlanner: { key: 'rewardPlanner', title: 'Reward planner', href: '/activities/homework-micro-start' },
  
    coRegulationPublic: { key: 'coRegulationPublic', title: 'Co-regulation in public', href: '/activities/co-regulation' },
    sensoryTryLog: { key: 'sensoryTryLog', title: 'Supermarket sensory plan', href: '/activities/co-regulation' },
    exitCue: { key: 'exitCue', title: 'Exit cue card', href: '/activities/co-regulation' },
  
    windDownBuilder: { key: 'windDownBuilder', title: 'Bedtime wind-down', href: '/activities/morning-routine-checklist' },
    bodyScan2m: { key: 'bodyScan2m', title: 'Body scan (2m)', href: '/activities/morning-routine-checklist' },
    worryPark: { key: 'worryPark', title: 'Worry park note', href: '/activities/morning-routine-checklist' },
  
    visualCalmMenu: { key: 'visualCalmMenu', title: 'Visual calm menu', href: '/activities/co-regulation' },
    breathing60s: { key: 'breathing60s', title: '60-second breathing', href: '/activities/co-regulation' },
    bodySignalsCheck: { key: 'bodySignalsCheck', title: 'Body signals check', href: '/activities/co-regulation' },
  };
  
  export function recommend(inputs: IntakeInputs): Recommendation {
    const { ageBand, challenge, confidence, trigger, parentPrefers } = inputs;
  
    if (challenge === 'morningTransitions' && ageBand === '3-6') {
      return {
        activities: [activities.morningChecklist, activities.coRegulation60s, activities.twoChoiceWardrobe],
        why: 'You picked morning transitions and your child is 3 to 6, so we start with a two-item visual and a 60-second co-regulation step.',
        dataUsed: { ageBand, challenge }
      };
    }
    if (challenge === 'homeworkRefusal' && confidence === 1) {
      return {
        activities: [activities.microStart3m, activities.nextStepScript, activities.rewardPlanner],
        why: 'You marked homework as hard and confidence at 1, so we begin with a three-minute micro-start and a simple next-step choice.',
        dataUsed: { challenge, confidence }
      };
    }
    if (challenge === 'publicMeltdowns' && trigger === 'noise') {
      return {
        activities: [activities.coRegulationPublic, activities.sensoryTryLog, activities.exitCue],
        why: 'You selected public meltdowns with noise as a trigger, so we pair co-regulation with a quick sensory plan and an exit cue.',
        dataUsed: { challenge, trigger }
      };
    }
    if (challenge === 'bedtimeAnxiety' && ageBand === '7-11') {
      return {
        activities: [activities.windDownBuilder, activities.bodyScan2m, activities.worryPark],
        why: 'You chose bedtime anxiety for ages 7 to 11, so we set a short wind-down and a two-minute body scan, then park worries.',
        dataUsed: { challenge, ageBand }
      };
    }
    if (challenge === 'earlySigns') {
      return {
        activities: [activities.visualCalmMenu, activities.breathing60s, activities.bodySignalsCheck],
        why: 'You noted early signs before upsets, so we suggest a child-chosen calm tool and short breathing.',
        dataUsed: { challenge }
      };
    }
    if (parentPrefers === 'visuals') {
      return {
        activities: [activities.visualCalmMenu, activities.morningChecklist, activities.coRegulation60s],
        why: 'You said visual tools help, so we prioritised the calm menu and a short checklist.',
        dataUsed: { parentPrefers }
      };
    }
  
    return {
      activities: [activities.coRegulation60s, activities.morningChecklist, activities.microStart3m],
      why: 'Based on your answers we’ve started with a calm step, a short visual, and a tiny timed start.',
      dataUsed: { ageBand, challenge, confidence, trigger, parentPrefers }
    };
  }