import type { Program, Course, Education } from '../types';

export const KTH_EDUCATION: Education[] = [
  {
    type: 'civilingenjör',
    programs: [
      {
        code: 'CDATE',
        name: 'Datateknik',
        years: 5,
      },
      {
        code: 'CMETE',
        name: 'Medieteknik',
        years: 5,
      },
      {
        code: 'CTFYS',
        name: 'Teknisk fysik',
        years: 5,
      },
      {
        code: 'CELTE',
        name: 'Elektroteknik',
        years: 5,
      },
      {
        code: 'CBIOT',
        name: 'Bioteknik',
        years: 5,
      },
      {
        code: 'CINEK',
        name: 'Industriell ekonomi',
        years: 5,
      },
      {
        code: 'CSAMH',
        name: 'Arkitektur',
        years: 5,
      },
      {
        code: 'CMAST',
        name: 'Matematik',
        years: 5,
      },
      {
        code: 'CDEPR',
        name: 'Design och produktframtagning',
        years: 5,
      },
      {
        code: 'COPEN',
        name: 'Civilingenjör och lärare',
        years: 5,
      }
    ]
  },
  {
    type: 'högskoleingenjör',
    programs: []
  },
  {
    type: 'kandidatprogram',
    programs: []
  }
];

export const SAMPLE_COURSES: { [key: string]: { [key: number]: Course[] } } = {
  'CDATE': {
    1: [
      {
        code: 'DD1331',
        name: 'Grundläggande Programmering',
        credits: 5.0,
        year: 1
      },
      {
        code: 'SF1625',
        name: 'Envariabelanalys',
        credits: 7.5,
        year: 1
      },
      {
        code: 'DD1301',
        name: 'Datorintroduktion',
        credits: 7.5,
        year: 1
      },
      {
        code: 'SF1624',
        name: 'Algebra och Geometri',
        credits: 7.5,
        year: 1
      },
      {
        code: 'DD1337',
        name: 'Programmering',
        credits: 7.5,
        year: 1
      },
      {
        code: 'SF1626',
        name: 'Flervariabelanalys',
        credits: 7.5,
        year: 1
      },
      {
        code: 'IK1203',
        name: 'Nätverk och Kommunikation',
        credits: 7.5,
        year: 1
      },
      {
        code: 'IS1200',
        name: 'Datorteknik',
        credits: 7.5,
        year: 1
      }
    ],
    2: [
      {
        code: 'DD1338',
        name: 'Algoritmer och Datastrukturer',
        credits: 7.5,
        year: 2
      },
      {
        code: 'SF1514',
        name: 'Numeriska Metoder',
        credits: 7.5,
        year: 2
      },
      {
        code: 'DD1396',
        name: 'Parallell och Samtidig Programmering',
        credits: 7.5,
        year: 2
      },
      {
        code: 'SF1689',
        name: 'Diskret Matematik',
        credits: 7.5,
        year: 2
      },
      {
        code: 'DD1351',
        name: 'Logik för Datavetenskap',
        credits: 7.5,
        year: 2
      },
      {
        code: 'IS1500',
        name: 'Datororganisation och Komponenter',
        credits: 7.5,
        year: 2
      },
      {
        code: 'ME1003',
        name: 'Industriell Ekonomi, Grundkurs',
        credits: 6.0,
        year: 2
      },
      {
        code: 'SF1546',
        name: 'Numeriska Metoder, Grundkurs',
        credits: 7.5,
        year: 2
      }
    ],
    3: [
      {
        code: 'DD1354',
        name: 'Modeller och Simulering',
        credits: 7.5,
        year: 3
      },
      {
        code: 'SF1688',
        name: 'Diskret Matematik',
        credits: 7.5,
        year: 3
      },
      {
        code: 'DD1389',
        name: 'Programvaruteknik i Projektform',
        credits: 7.5,
        year: 3
      },
      {
        code: 'SF1610',
        name: 'Diskret Matematik',
        credits: 7.5,
        year: 3
      },
      {
        code: 'DD1368',
        name: 'Databasteknik',
        credits: 7.5,
        year: 3
      },
      {
        code: 'II1305',
        name: 'Projekt i Informations- och Kommunikationsteknik',
        credits: 7.5,
        year: 3
      },
      {
        code: 'DD1393',
        name: 'Programvaruteknik',
        credits: 7.5,
        year: 3
      },
      {
        code: 'DD1380',
        name: 'Java-programmering för Python-programmerare',
        credits: 1.5,
        year: 3
      }
    ]
  },
  'CMETE': {
    1: [
      {
        code: 'DM1571',
        name: 'Introduktion till Medieteknik',
        credits: 7.5,
        year: 1
      },
      {
        code: 'DD1331',
        name: 'Grundläggande Programmering',
        credits: 5.0,
        year: 1
      },
      {
        code: 'SF1625',
        name: 'Envariabelanalys',
        credits: 7.5,
        year: 1
      },
      {
        code: 'DH1622',
        name: 'Människa-Datorinteraktion, Introduktionskurs',
        credits: 7.5,
        year: 1
      },
      {
        code: 'DM1573',
        name: 'Grafik och Kommunikation',
        credits: 7.5,
        year: 1
      },
      {
        code: 'SF1626',
        name: 'Flervariabelanalys',
        credits: 7.5,
        year: 1
      },
      {
        code: 'DD1337',
        name: 'Programmering',
        credits: 7.5,
        year: 1
      },
      {
        code: 'DM1578',
        name: 'Programintegrerande Kurs i Medieteknik',
        credits: 7.5,
        year: 1
      }
    ],
    2: [
      {
        code: 'DM1581',
        name: 'Introduktion till Medieproduktion',
        credits: 7.5,
        year: 2
      },
      {
        code: 'SF1624',
        name: 'Algebra och Geometri',
        credits: 7.5,
        year: 2
      },
      {
        code: 'DD1338',
        name: 'Algoritmer och Datastrukturer',
        credits: 7.5,
        year: 2
      },
      {
        code: 'DM1595',
        name: 'Programutveckling för Interaktiva Medier',
        credits: 7.5,
        year: 2
      },
      {
        code: 'SK1140',
        name: 'Fysik för Media',
        credits: 9.0,
        year: 2
      },
      {
        code: 'DM1579',
        name: 'Medieproduktion',
        credits: 7.5,
        year: 2
      },
      {
        code: 'SF1919',
        name: 'Sannolikhetsteori och Statistik',
        credits: 6.0,
        year: 2
      },
      {
        code: 'DH1620',
        name: 'Människa-Datorinteraktion, Introduktionskurs',
        credits: 6.0,
        year: 2
      }
    ],
    3: [
      {
        code: 'DM1588',
        name: 'Digital Bildbehandling och Analys',
        credits: 7.5,
        year: 3
      },
      {
        code: 'DM2518',
        name: 'Mobilutveckling med Webbteknologier',
        credits: 7.5,
        year: 3
      },
      {
        code: 'DM1590',
        name: 'Maskininlärning för medieteknik',
        credits: 7.5,
        year: 3
      },
      {
        code: 'DM1587',
        name: 'Programmering av interaktiva medier',
        credits: 7.5,
        year: 3
      },
      {
        code: 'DM1595',
        name: 'Hållbar utveckling för medieteknik',
        credits: 7.5,
        year: 3
      }
    ]
  },
  'CTFYS': {
    1: [
      {
        code: 'SF1673',
        name: 'Analys i En Variabel',
        credits: 7.5,
        year: 1
      },
      {
        code: 'SI1121',
        name: 'Fysik I',
        credits: 7.5,
        year: 1
      },
      {
        code: 'DD1331',
        name: 'Grundläggande Programmering',
        credits: 5.0,
        year: 1
      },
      {
        code: 'SF1674',
        name: 'Flervariabelanalys',
        credits: 7.5,
        year: 1
      },
      {
        code: 'SI1122',
        name: 'Fysik II',
        credits: 7.5,
        year: 1
      },
      {
        code: 'SF1624',
        name: 'Algebra och Geometri',
        credits: 7.5,
        year: 1
      },
      {
        code: 'SG1113',
        name: 'Mekanik I',
        credits: 7.5,
        year: 1
      },
      {
        code: 'SK1108',
        name: 'Klassisk Fysik',
        credits: 7.5,
        year: 1
      }
    ],
    2: [
      {
        code: 'SF1544',
        name: 'Numeriska Metoder, Grundkurs',
        credits: 7.5,
        year: 2
      },
      {
        code: 'SI1140',
        name: 'Modern Fysik',
        credits: 9.0,
        year: 2
      },
      {
        code: 'SF1683',
        name: 'Differentialekvationer och Transformer',
        credits: 7.5,
        year: 2
      },
      {
        code: 'SF1682',
        name: 'Komplex Analys',
        credits: 7.5,
        year: 2
      },
      {
        code: 'SH1014',
        name: 'Modern Fysik',
        credits: 7.5,
        year: 2
      },
      {
        code: 'SF1628',
        name: 'Komplex Analys',
        credits: 7.5,
        year: 2
      },
      {
        code: 'SI1155',
        name: 'Teoretisk Fysik',
        credits: 6.0,
        year: 2
      },
      {
        code: 'SK1109',
        name: 'Klassisk Fysik II',
        credits: 7.5,
        year: 2
      }
    ],
    3: [
      {
        code: 'SI1336',
        name: 'Klassisk Mekanik, Fortsättningskurs',
        credits: 7.5,
        year: 3
      },
      {
        code: 'SI1337',
        name: 'Elektromagnetism och Vågor',
        credits: 7.5,
        year: 3
      },
      {
        code: 'SI1338',
        name: 'Kvantfysik',
        credits: 7.5,
        year: 3
      },
      {
        code: 'SI1339',
        name: 'Statistisk Fysik',
        credits: 7.5,
        year: 3
      },
      {
        code: 'SH1015',
        name: 'Projekt i Fysik',
        credits: 7.5,
        year: 3
      },
      {
        code: 'SF1687',
        name: 'Matematiska Metoder inom Fysik',
        credits: 12.0,
        year: 3
      },
      {
        code: 'SK2758',
        name: 'Fasta Tillståndets Fysik',
        credits: 7.5,
        year: 3
      },
      {
        code: 'EJ1200',
        name: 'Elkraftsystem',
        credits: 7.5,
        year: 3
      },
      {
        code: 'ME1003',
        name: 'Industriell ekonomi, grundkurs',
        credits: 6.0,
        year: 3
      }
    ]
  },
  'CELTE': {
    1: [
      {
        code: 'SF1625',
        name: 'Envariabelanalys',
        credits: 7.5,
        year: 1
      },
      {
        code: 'EI1110',
        name: 'Elkretsanalys, Utökad Kurs',
        credits: 7.5,
        year: 1
      },
      {
        code: 'DD1331',
        name: 'Grundläggande Programmering',
        credits: 5.0,
        year: 1
      },
      {
        code: 'SF1626',
        name: 'Flervariabelanalys',
        credits: 7.5,
        year: 1
      },
      {
        code: 'EI1220',
        name: 'Digital Design',
        credits: 7.5,
        year: 1
      },
      {
        code: 'SF1624',
        name: 'Algebra och Geometri',
        credits: 7.5,
        year: 1
      },
      {
        code: 'EI1110',
        name: 'Elektroniksystem',
        credits: 7.5,
        year: 1
      },
      {
        code: 'EL1110',
        name: 'Elektroteknik, Grundkurs',
        credits: 7.5,
        year: 1
      }
    ],
    2: [
      {
        code: 'EI1220',
        name: 'Digital Design',
        credits: 7.5,
        year: 2
      },
      {
        code: 'SF1544',
        name: 'Numeriska Metoder, Grundkurs',
        credits: 7.5,
        year: 2
      },
      {
        code: 'EL1120',
        name: 'Elteknikens Grunder',
        credits: 7.5,
        year: 2
      },
      {
        code: 'SF1633',
        name: 'Differentialekvationer I',
        credits: 7.5,
        year: 2
      },
      {
        code: 'EI1240',
        name: 'Elektromagnetisk Fältteori',
        credits: 7.5,
        year: 2
      },
      {
        code: 'EL1130',
        name: 'Elektronik och Mätteknik',
        credits: 7.5,
        year: 2
      },
      {
        code: 'SF1901',
        name: 'Sannolikhetsteori och Statistik',
        credits: 6.0,
        year: 2
      },
      {
        code: 'EQ1110',
        name: 'Signaler och System',
        credits: 7.5,
        year: 2
      }
    ],
    3: [
      {
        code: 'EI1320',
        name: 'Kommunikationssystem',
        credits: 7.5,
        year: 3
      },
      {
        code: 'EL1150',
        name: 'Kraftelektronik',
        credits: 7.5,
        year: 3
      },
      {
        code: 'EQ1120',
        name: 'Reglerteknik',
        credits: 7.5,
        year: 3
      },
      {
        code: 'EI1330',
        name: 'Mikrovågsteknik',
        credits: 7.5,
        year: 3
      },
      {
        code: 'EJ1200',
        name: 'Elkraftsystem',
        credits: 7.5,
        year: 3
      },
      {
        code: 'ME1003',
        name: 'Industriell ekonomi, grundkurs',
        credits: 6.0,
        year: 3
      }
    ]
  },
  'CBIOT': {
    1: [
      {
        code: 'BB1010',
        name: 'Introduktion till Bioteknik',
        credits: 7.5,
        year: 1
      },
      {
        code: 'SF1625',
        name: 'Envariabelanalys',
        credits: 7.5,
        year: 1
      },
      {
        code: 'KD1020',
        name: 'Allmän Kemi',
        credits: 6.0,
        year: 1
      },
      {
        code: 'SF1626',
        name: 'Flervariabelanalys',
        credits: 7.5,
        year: 1
      },
      {
        code: 'BB1030',
        name: 'Mikrobiologi',
        credits: 7.5,
        year: 1
      },
      {
        code: 'KD1090',
        name: 'Organisk Kemi',
        credits: 7.5,
        year: 1
      },
      {
        code: 'BB1160',
        name: 'Eukaryot Cellbiologi',
        credits: 7.5,
        year: 1
      },
      {
        code: 'BB1170',
        name: 'Ingenjörsfärdigheter inom Life Science',
        credits: 7.5,
        year: 1
      }
    ],
    2: [
      {
        code: 'BB1190',
        name: 'Genteknik',
        credits: 7.5,
        year: 2
      },
      {
        code: 'KD1510',
        name: 'Kemisk Analys',
        credits: 7.5,
        year: 2
      },
      {
        code: 'BB1200',
        name: 'Biokemi',
        credits: 7.5,
        year: 2
      },
      {
        code: 'SF1901',
        name: 'Sannolikhetsteori och Statistik',
        credits: 6.0,
        year: 2
      },
      {
        code: 'BB1210',
        name: 'Rening av Biomolekyler',
        credits: 7.5,
        year: 2
      },
      {
        code: 'BB1220',
        name: 'Projekt i Bioteknik',
        credits: 7.5,
        year: 2
      },
      {
        code: 'KD1070',
        name: 'Molekylär Struktur',
        credits: 7.5,
        year: 2
      },
      {
        code: 'BB1230',
        name: 'Processbioteknik',
        credits: 7.5,
        year: 2
      }
    ],
    3: [
      {
        code: 'BB1240',
        name: 'Tillämpad Genteknik',
        credits: 7.5,
        year: 3
      },
      {
        code: 'BB1250',
        name: 'Proteomik',
        credits: 7.5,
        year: 3
      },
      {
        code: 'BB1260',
        name: 'Cellulär Bioteknik',
        credits: 7.5,
        year: 3
      },
      {
        code: 'BB1270',
        name: 'Miljöbioteknik',
        credits: 7.5,
        year: 3
      }
    ]
  },
  'CINEK': {
    1: [
      {
        code: 'SF1625',
        name: 'Envariabelanalys',
        credits: 7.5,
        year: 1
      },
      {
        code: 'ME1003',
        name: 'Industriell Ekonomi, Grundkurs',
        credits: 6.0,
        year: 1
      },
      {
        code: 'DD1331',
        name: 'Grundläggande Programmering',
        credits: 5.0,
        year: 1
      },
      {
        code: 'SF1626',
        name: 'Flervariabelanalys',
        credits: 7.5,
        year: 1
      },
      {
        code: 'ME1004',
        name: 'Industriell Ekonomi och Organisation',
        credits: 7.5,
        year: 1
      },
      {
        code: 'SF1624',
        name: 'Algebra och Geometri',
        credits: 7.5,
        year: 1
      },
      {
        code: 'ME1005',
        name: 'Projektledning',
        credits: 7.5,
        year: 1
      },
      {
        code: 'ME1006',
        name: 'Företagsekonomi',
        credits: 7.5,
        year: 1
      }
    ],
    2: [
      {
        code: 'ME2015',
        name: 'Projektledning: Ledarskap och Styrning',
        credits: 7.5,
        year: 2
      },
      {
        code: 'ME2016',
        name: 'Investeringsanalys',
        credits: 7.5,
        year: 2
      },
      {
        code: 'SF1901',
        name: 'Sannolikhetsteori och Statistik',
        credits: 6.0,
        year: 2
      },
      {
        code: 'ME2017',
        name: 'Ekonomistyrning',
        credits: 7.5,
        year: 2
      },
      {
        code: 'ME2018',
        name: 'Supply Chain Management',
        credits: 7.5,
        year: 2
      },
      {
        code: 'ME2019',
        name: 'Riskhantering',
        credits: 7.5,
        year: 2
      },
      {
        code: 'ME2020',
        name: 'Verksamhetsstrategi',
        credits: 7.5,
        year: 2
      },
      {
        code: 'SF1633',
        name: 'Differentialekvationer I',
        credits: 7.5,
        year: 2
      }
    ],
    3: [
      {
        code: 'ME2021',
        name: 'Avancerad Industriell Ekonomi',
        credits: 7.5,
        year: 3
      },
      {
        code: 'ME2022',
        name: 'Företagsstrategi',
        credits: 7.5,
        year: 3
      },
      {
        code: 'ME2023',
        name: 'Industriell Marknadsföring',
        credits: 7.5,
        year: 3
      },
      {
        code: 'ME2024',
        name: 'Innovationsledning',
        credits: 7.5,
        year: 3
      },
      {
        code: 'ME2025',
        name: 'Verksamhets- och kvalitetsutveckling',
        credits: 7.5,
        year: 3
      }
    ]
  },
  'CSAMH': {
    1: [
      {
        code: 'A11SAH',
        name: 'Arkitektur och Samhälle',
        credits: 7.5,
        year: 1
      },
      {
        code: 'A11TES',
        name: 'Arkitekturteknik och Hållbarhet',
        credits: 7.5,
        year: 1
      },
      {
        code: 'A11P1A',
        name: 'Arkitekturprojekt 1:1',
        credits: 7.5,
        year: 1
      },
      {
        code: 'A11P1B',
        name: 'Arkitekturprojekt 1:2',
        credits: 7.5,
        year: 1
      },
      {
        code: 'A11HIA',
        name: 'Arkitekturhistoria',
        credits: 7.5,
        year: 1
      },
      {
        code: 'A11TEK',
        name: 'Byggnadsteknik',
        credits: 7.5,
        year: 1
      },
      {
        code: 'A11P2A',
        name: 'Arkitekturprojekt 2:1',
        credits: 7.5,
        year: 1
      },
      {
        code: 'A11P2B',
        name: 'Arkitekturprojekt 2:2',
        credits: 7.5,
        year: 1
      }
    ],
    2: [
      {
        code: 'A21P1A',
        name: 'Arkitekturprojekt 3:1',
        credits: 7.5,
        year: 2
      },
      {
        code: 'A21P1B',
        name: 'Arkitekturprojekt 3:2',
        credits: 7.5,
        year: 2
      },
      {
        code: 'A21TEB',
        name: 'Byggsystem',
        credits: 7.5,
        year: 2
      },
      {
        code: 'A21HIB',
        name: 'Arkitekturens Historia och Teori',
        credits: 7.5,
        year: 2
      },
      {
        code: 'A21P2A',
        name: 'Arkitekturprojekt 4:1',
        credits: 7.5,
        year: 2
      },
      {
        code: 'A21P2B',
        name: 'Arkitekturprojekt 4:2',
        credits: 7.5,
        year: 2
      },
      {
        code: 'A21TEC',
        name: 'Konstruktionslära',
        credits: 7.5,
        year: 2
      },
      {
        code: 'A21HIC',
        name: 'Stadsbyggnadshistoria och Teori',
        credits: 7.5,
        year: 2
      }
    ],
    3: [
      {
        code: 'A31P1A',
        name: 'Arkitekturprojekt 5:1',
        credits: 9.0,
        year: 3
      },
      {
        code: 'A31P1B',
        name: 'Arkitekturprojekt 5:2',
        credits: 9.0,
        year: 3
      },
      {
        code: 'A31TED',
        name: 'Miljödesign',
        credits: 7.5,
        year: 3
      },
      {
        code: 'A31HID',
        name: 'Samtida Arkitekturteori',
        credits: 7.5,
        year: 3
      },
      {
        code: 'A31P2A',
        name: 'Arkitekturprojekt 6:1',
        credits: 9.0,
        year: 3
      },
      {
        code: 'A31P2B',
        name: 'Arkitekturprojekt 6:2',
        credits: 9.0,
        year: 3
      }
    ]
  },
  'CMAST': {
    1: [
      {
        code: 'SF1625',
        name: 'Envariabelanalys',
        credits: 7.5,
        year: 1
      },
      {
        code: 'SF1624',
        name: 'Algebra och Geometri',
        credits: 7.5,
        year: 1
      },
      {
        code: 'DD1331',
        name: 'Grundläggande Programmering',
        credits: 5.0,
        year: 1
      },
      {
        code: 'SF1626',
        name: 'Flervariabelanalys',
        credits: 7.5,
        year: 1
      },
      {
        code: 'SF1662',
        name: 'Diskret Matematik',
        credits: 7.5,
        year: 1
      },
      {
        code: 'SF1604',
        name: 'Linjär Algebra',
        credits: 7.5,
        year: 1
      },
      {
        code: 'SF1544',
        name: 'Numeriska Metoder, Grundkurs',
        credits: 7.5,
        year: 1
      },
      {
        code: 'SF1611',
        name: 'Introduktionskurs i Matematik I',
        credits: 7.5,
        year: 1
      }
    ],
    2: [
      {
        code: 'SF1628',
        name: 'Komplex Analys',
        credits: 7.5,
        year: 2
      },
      {
        code: 'SF1677',
        name: 'Analysens Grunder',
        credits: 7.5,
        year: 2
      },
      {
        code: 'SF1630',
        name: 'Diskret Matematik',
        credits: 7.5,
        year: 2
      },
      {
        code: 'SF1901',
        name: 'Sannolikhetsteori och Statistik',
        credits: 6.0,
        year: 2
      },
      {
        code: 'SF1632',
        name: 'Kompletterande Kurs i Analys',
        credits: 7.5,
        year: 2
      },
      {
        code: 'SF1633',
        name: 'Differentialekvationer I',
        credits: 7.5,
        year: 2
      },
      {
        code: 'SF1640',
        name: 'Algebraiska Metoder',
        credits: 7.5,
        year: 2
      },
      {
        code: 'SF1641',
        name: 'Matematiska Metoder',
        credits: 7.5,
        year: 2
      }
    ],
    3: [
      {
        code: 'SF1642',
        name: 'Avancerad Analys',
        credits: 7.5,
        year: 3
      },
      {
        code: 'SF1643',
        name: 'Analys i Flera Variabler',
        credits: 7.5,
        year: 3
      },
      {
        code: 'SF1644',
        name: 'Topologi',
        credits: 7.5,
        year: 3
      },
      {
        code: 'SF1645',
        name: 'Linjär och Ickelinjär Optimering',
        credits: 7.5,
        year: 3
      },
      {
        code: 'SF1691',
        name: 'Komplex analys',
        credits: 7.5,
        year: 3
      }
    ]
  },
  'CDEPR': {
    1: [
      {
        code: 'MF1061',
        name: 'Design and Product Development Introduction',
        credits: 7.5,
        year: 1
      },
      {
        code: 'SF1625',
        name: 'Calculus in One Variable',
        credits: 7.5,
        year: 1
      },
      {
        code: 'MF1062',
        name: 'Design and Product Realization Methods',
        credits: 7.5,
        year: 1
      },
      {
        code: 'SF1626',
        name: 'Calculus in Several Variables',
        credits: 7.5,
        year: 1
      },
      {
        code: 'MF1063',
        name: 'Design and Product Development Project',
        credits: 7.5,
        year: 1
      },
      {
        code: 'SF1624',
        name: 'Algebra and Geometry',
        credits: 7.5,
        year: 1
      },
      {
        code: 'MF1064',
        name: 'Design Materials',
        credits: 7.5,
        year: 1
      },
      {
        code: 'DD1331',
        name: 'Fundamentals of Programming',
        credits: 5.0,
        year: 1
      }
    ],
    2: [
      {
        code: 'MF1065',
        name: 'Design and Innovation',
        credits: 7.5,
        year: 2
      },
      {
        code: 'MH1000',
        name: 'Mechanical Engineering',
        credits: 9.0,
        year: 2
      },
      {
        code: 'MF1066',
        name: 'Design for Manufacturing',
        credits: 7.5,
        year: 2
      },
      {
        code: 'SF1901',
        name: 'Probability Theory and Statistics',
        credits: 6.0,
        year: 2
      },
      {
        code: 'MF1067',
        name: 'Computer Aided Design and Manufacturing',
        credits: 7.5,
        year: 2
      },
      {
        code: 'MF1068',
        name: 'Design Visualization',
        credits: 7.5,
        year: 2
      },
      {
        code: 'MF1069',
        name: 'Design Project Management',
        credits: 7.5,
        year: 2
      },
      {
        code: 'MF1070',
        name: 'Design Analysis',
        credits: 7.5,
        year: 2
      }
    ],
    3: [
      {
        code: 'MF1071',
        name: 'Industrial Design Engineering',
        credits: 7.5,
        year: 3
      },
      {
        code: 'MF1072',
        name: 'Design for Sustainability',
        credits: 7.5,
        year: 3
      },
      {
        code: 'MF1073',
        name: 'User-Centered Design',
        credits: 7.5,
        year: 3
      },
      {
        code: 'MF1074',
        name: 'Design Research Methods',
        credits: 7.5,
        year: 3
      },
      {
        code: 'MF1075',
        name: 'Designportfolio',
        credits: 7.5,
        year: 3
      },
      {
        code: 'MF107X',
        name: 'Degree Project in Design and Product Realisation, First Cycle',
        credits: 15.0,
        year: 3
      }
    ]
  },
  'COPEN': {
    1: [
      {
        code: 'LT1001',
        name: 'Lärande och Undervisning',
        credits: 7.5,
        year: 1
      },
      {
        code: 'SF1625',
        name: 'Envariabelanalys',
        credits: 7.5,
        year: 1
      },
      {
        code: 'LT1002',
        name: 'Utbildningsvetenskap och Verksamhetsförlagd Utbildning',
        credits: 7.5,
        year: 1
      },
      {
        code: 'SF1626',
        name: 'Flervariabelanalys',
        credits: 7.5,
        year: 1
      },
      {
        code: 'LT1003',
        name: 'Ämnesdidaktik',
        credits: 7.5,
        year: 1
      },
      {
        code: 'SF1624',
        name: 'Algebra och Geometri',
        credits: 7.5,
        year: 1
      },
      {
        code: 'DD1331',
        name: 'Grundläggande Programmering',
        credits: 5.0,
        year: 1
      },
      {
        code: 'LT1004',
        name: 'Verksamhetsförlagd Utbildning I',
        credits: 7.5,
        year: 1
      }
    ],
    2: [
      {
        code: 'LT2001',
        name: 'Lärande och Utveckling',
        credits: 7.5,
        year: 2
      },
      {
        code: 'SF1901',
        name: 'Sannolikhetsteori och Statistik',
        credits: 6.0,
        year: 2
      },
      {
        code: 'LT2002',
        name: 'Bedömning och Betygssättning',
        credits: 7.5,
        year: 2
      },
      {
        code: 'SF1633',
        name: 'Differentialekvationer I',
        credits: 7.5,
        year: 2
      },
      {
        code: 'LT2003',
        name: 'Specialpedagogik',
        credits: 7.5,
        year: 2
      },
      {
        code: 'SF1604',
        name: 'Linjär Algebra',
        credits: 7.5,
        year: 2
      },
      {
        code: 'LT2004',
        name: 'Verksamhetsförlagd Utbildning II',
        credits: 7.5,
        year: 2
      },
      {
        code: 'SF1544',
        name: 'Numeriska Metoder, Grundkurs',
        credits: 7.5,
        year: 2
      }
    ],
    3: [
      {
        code: 'LT3001',
        name: 'Pedagogiskt Ledarskap',
        credits: 7.5,
        year: 3
      },
      {
        code: 'SF1628',
        name: 'Komplex Analys',
        credits: 7.5,
        year: 3
      },
      {
        code: 'LT3002',
        name: 'Forskningsmetodik inom Utbildning',
        credits: 7.5,
        year: 3
      },
      {
        code: 'SF1662',
        name: 'Diskret Matematik',
        credits: 7.5,
        year: 3
      },
      {
        code: 'LT3003',
        name: 'Verksamhetsförlagd utbildning III',
        credits: 15.0,
        year: 3
      },
     
    ]
  }
};

export const calculateGPA = (courses: Course[]): number => {
  const gradePoints = {
    'A': 5,
    'B': 4.5,
    'C': 4,
    'D': 3.5,
    'E': 3,
    'F': 0
  };

  const completedCourses = courses.filter(course => course.grade && course.grade !== 'F');
  
  if (completedCourses.length === 0) return 0;

  const totalWeightedPoints = completedCourses.reduce((sum, course) => {
    return sum + (gradePoints[course.grade as keyof typeof gradePoints] * course.credits);
  }, 0);

  const totalCredits = completedCourses.reduce((sum, course) => sum + course.credits, 0);

  return totalWeightedPoints / totalCredits;
}; 