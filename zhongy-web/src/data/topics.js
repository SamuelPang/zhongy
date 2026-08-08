export const topics = {
  philosophy: {
    id: 'philosophy',
    title: '哲学篇',
    subtitle: '阴阳五行，哲学基础',
    component: 'Philosophy',
    icon: '哲',
    color: '#37415a',
    bgGradient: 'from-slate-600 to-slate-800',
    documents: ['01', '02', '04', '05'],
    viz: {
      primary: 'YinYangChart',
      secondary: ['FiveElementsCycle', 'QiMechanism']
    },
    description: '中医理论的哲学基础，包括阴阳学说、五行学说、气学说等核心概念'
  },
  theory: {
    id: 'theory',
    title: '理论篇',
    subtitle: '脏腑经络，核心理论',
    component: 'Theory',
    icon: '理',
    color: '#3d5a6e',
    bgGradient: 'from-dai-500 to-dai-700',
    documents: ['03', '06', '07', '08', '09', '24'],
    viz: {
      primary: 'OrganSystem',
      secondary: ['MeridianChart', 'QiBloodFlow', 'SixMeridians']
    },
    description: '中医核心理论体系，包括藏象学说、气血津液、经络学说、病因病机等'
  },
  diagnosis: {
    id: 'diagnosis',
    title: '诊断篇',
    subtitle: '四诊合参，辨证论治',
    component: 'Diagnosis',
    icon: '诊',
    color: '#9a7a45',
    bgGradient: 'from-jin-500 to-jin-600',
    documents: ['10', '11', '12', '13'],
    viz: {
      primary: 'FourExams',
      secondary: ['EightPrinciples', 'DiagnosticTree']
    },
    description: '中医诊断方法，包括望闻问切四诊和八纲辨证、脏腑辨证等体系'
  },
  treatment: {
    id: 'treatment',
    title: '治则篇',
    subtitle: '治法方药，治疗原则',
    component: 'Treatment',
    icon: '治',
    color: '#58755c',
    bgGradient: 'from-zhuqing-500 to-zhuqing-600',
    documents: ['14', '15', '16', '17'],
    viz: {
      primary: 'TherapyTree',
      secondary: ['FormulaPairing', 'AcupointMap']
    },
    description: '中医治疗原则和方法，包括中药学、方剂学、食疗养生、针灸推拿等'
  },
  clinical: {
    id: 'clinical',
    title: '临床篇',
    subtitle: '常见病证，体质养生',
    component: 'Clinical',
    icon: '临',
    color: '#a8322a',
    bgGradient: 'from-zhusha-500 to-zhusha-700',
    documents: ['18', '19', '20'],
    viz: {
      primary: 'ConstitutionMap',
      secondary: ['DiseaseTherapy']
    },
    description: '临床应用指导，包括常见病证诊治、体质辨识、四季养生等'
  },
  classics: {
    id: 'classics',
    title: '经典篇',
    subtitle: '四大经典，源流传承',
    component: 'Classics',
    icon: '经',
    color: '#4a5d80',
    bgGradient: 'from-indigo-500 to-violet-500',
    documents: ['21', '22', '23', '24'],
    viz: {
      primary: 'ClassicTree',
      secondary: ['SixMeridians', 'HerbProperties']
    },
    description: '中医四大经典解读，包括黄帝内经、伤寒论、金匮要略、神农本草经'
  },
  wellness: {
    id: 'wellness',
    title: '养生篇',
    subtitle: '防病保健，延年益寿',
    component: 'Wellness',
    icon: '养',
    color: '#6f8f6f',
    bgGradient: 'from-teal-500 to-cyan-500',
    documents: [],
    viz: {
      primary: 'SeasonalWellness',
      secondary: ['AcupointCare']
    },
    description: '中医养生保健知识，包括四季养生、情志调摄、运动导引等（建设中）',
    placeholder: true
  },
  modern: {
    id: 'modern',
    title: '现代篇',
    subtitle: '中西医结合，现代研究',
    component: 'Modern',
    icon: '今',
    color: '#6b675f',
    bgGradient: 'from-slate-500 to-gray-500',
    documents: [],
    viz: {
      primary: 'EastWestCompare',
      secondary: ['CaseFlow']
    },
    description: '现代中医发展和应用，包括中西医结合、现代研究、案例解析等（建设中）',
    placeholder: true
  }
}

export const topicList = Object.values(topics)
