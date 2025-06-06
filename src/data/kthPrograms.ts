import type { Course, Education } from '../types/index';

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
        name: 'Samhällsbyggnad',
        years: 5,
      },
      {
        code: 'CMAST',
        name: 'Maskinteknik',
        years: 5,
      },
      {
        code: 'CDEPR',
        name: 'Design och produktframtagning',
        years: 5,
      },
      {
        code: 'CLGYM',
        name: 'Civilingenjör och lärare',
        years: 5,
      },
      {
        code: 'CMEDT',
        name: 'Medicinsk teknik',
        years: 5,
      },
      {
        code: 'CTKEM',
        name: 'Teknisk kemi',
        years: 5,
      },
      {
        code: 'CFATE',
        name: 'Farkostteknik',
        years: 5,
      },
      {
        code: 'CITEH',
        name: 'Industriell teknik och hållbarhet',
        years: 5,
      },
      {
        code: 'CINTE',
        name: 'Informations- och kommunikationsteknik',
        years: 5,
      },
      {
        code: 'CMATD',
        name: 'Materialdesign',
        years: 5,
      },      
      {
        code: 'CMEDT',
        name: 'Medicinsk teknik',
        years: 5,
      },
      {
        code: 'CTMAT',
        name: 'Teknisk matematik',
        years: 5,
      },
      {
        code: 'CENMI',
        name: 'Energi och miljö',
        years: 5,
      },
    ]
  },
  {
    type: 'högskoleingenjör',
    programs: [
      {
        code: 'TIBYH',
        name: 'Byggteknik och design',
        years: 3,
      },
      {
        code: 'TIDAB',
        name: 'Datateknik',
        years: 3,
      },
      {
        code: 'TIDAA',
        name: 'Datateknik, Flemingsberg',
        years: 3,
      },
      {
        code: 'TIEDB',
        name: 'Elektronik och datorteknik',
        years: 3,
      },
      {
        code: 'TIELA',
        name: 'Elektroteknik, Flemingsberg',
        years: 3,
      },
      {
        code: 'TINTE',
        name: 'Industriell teknik',
        years: 3,
      },
      {
        code: 'TIKED',
        name: 'Kemiteknik',
        years: 3,
      },
      {
        code: 'TIMEL',
        name: 'Medicinsk teknik',
        years: 3,
      },
      {
        code: 'TITEH',
        name: 'Teknik och ekonomi',
        years: 3,
      },
    ]
  },
  {
    type: 'kandidatprogram',
    programs: [
      {
        code: 'TFOTK',
        name: 'Fastighet och finans',
        years: 3,
      },
      {
        code: 'TFAFK',
        name: 'Fastighetsutveckling med fastighetsförmedling',
        years: 3,
      },
      {
        code: 'TCOMK',
        name: 'Informations- och kommunikationsteknik',
        years: 3,
      },
    ]
  },
  
];

export const SAMPLE_COURSES: { [key: string]: { [key: number]: Course[] } } = {
  'CDATE': {
    1: [
      {
        code: 'DA1600',
        name: 'Ingenjörsmässigt skrivande',
        credits: 4.5,
        year: 1
      },
      {
        code: 'DD1337',
        name: 'Programmering',
        credits: 7.0,
        year: 1
      },
      {
        code: 'DD1338',
        name: 'Algoritmer och datastrukturer',
        credits: 6.0,
        year: 1
      },
      {
        code: 'DD1390',
        name: 'Programsammanhållande kurs i datateknik',
        credits: 6.0,
        year: 1
      },
      {
        code: 'SF1624',
        name: 'Algebra och Geometri',
        credits: 7.5,
        year: 1
      },
      {
        code: 'SF1671',
        name: 'Matematik, baskurs, med diskret matematik',
        credits: 7.5,
        year: 1
      },
      {
        code: 'DD1349',
        name: 'Projektuppgift i introduktion till datalogi',
        credits: 3.0,
        year: 1
      },
      {
        code: 'DD1396',
        name: 'Parallellprogrammering i introduktion till datalogi',
        credits: 3.0,
        year: 1
      },
      {
        code: 'DH1623',
        name: ' Människa-datorinteraktion, grundläggande teori',
        credits: 4.5,
        year: 1
      },
      {
        code: 'SF1625',
        name: 'Envariabelanalys',
        credits: 7.5,
        year: 1
      },
      {
        code: 'SF1626',
        name: 'Flervariabelanalys',
        credits: 7.5,
        year: 1
      },
    ],
    2: [
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
        code: 'DD1331',
        name: 'Grundläggande programmering',
        credits: 5.0,
        year: 1
      },
      {
        code: 'SF1672',
        name: 'Linjär algebra',
        credits: 7.5,
        year: 1
      },
      {
        code: 'SF1673',
        name: 'Analys i en variabel',
        credits: 7.5,
        year: 1
      },
      {
        code: 'SI1121',
        name: 'Termodynamik',
        credits: 6.0,
        year: 1
      },
      {
        code: 'SK1104',
        name: 'Klassisk fysik',
        credits: 7.5,
        year: 1
      },
      {
        code: 'SF1674',
        name: 'Flervariabelanalys',
        credits: 7.5,
        year: 1
      },
      {
        code: 'SF1922',
        name: 'Sannolikhetsteori och statistik',
        credits: 6.0,
        year: 1
      },
      {
        code: 'SG1112',
        name: 'Mekanik I',
        credits: 9.0,
        year: 1
      },
      {
        code: 'SK1105',
        name: 'Experimentell fysik',
        credits: 4.0,
        year: 1
      }
    ],
    2: [
      {
        code: 'DD1327',
        name: 'Grundläggande datalogi',
        credits: 6.0,
        year: 2
      },
      {
        code: 'SE1055',
        name: 'Hållfasthetslära, grundkurs med energimetoder',
        credits: 9.0,
        year: 2
      },
      {
        code: 'SF1544',
        name: 'Numeriska metoder, grundkurs IV',
        credits: 6.0,
        year: 2
      },
      {
        code: 'SF1681',
        name: 'Linjär algebra, fortsättningskurs',
        credits: 6.0,
        year: 2
      },
      {
        code: 'SF1683',
        name: 'Differentialekvationer och transformmetoder',
        credits: 9.0,
        year: 2
      },
      {
        code: 'SG1113',
        name: 'Mekanik, fortsättningskurs',
        credits: 6.0,
        year: 2
      },
      {
        code: 'SH1014',
        name: 'Modern fysik',
        credits: 4.0,
        year: 2
      },
      {
        code: 'SI1146',
        name: 'Vektoranalys',
        credits: 4.0,
        year: 2
      },
      {
        code: 'SI1155',
        name: 'Teoretisk fysik',
        credits: 6.0,
        year: 2
      },
      {
        code: 'SI1200',
        name: 'Fysikens matematiska metoder',
        credits: 4.0,
        year: 2
      }
    ],
    3: [
      {
        code: 'EI1320',
        name: 'Teoretisk elektroteknik',
        credits: 9.0,
        year: 3
      },
      {
        code: 'EL1000',
        name: 'Reglerteknik, allmän kurs',
        credits: 6.0,
        year: 3
      },
      {
        code: 'SG1218',
        name: 'Strömningsmekanik',
        credits: 4.0,
        year: 3
      },
      {
        code: 'SH1015',
        name: 'Tillämpad modern fysik',
        credits: 5.0,
        year: 3
      },
      {
        code: 'SI1336',
        name: 'Simulering och modellering',
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
        code: 'SF1624',
        name: 'Algebra och geometri',
        credits: 7.5,
        year: 1
      },
      {
        code: 'EH1110',
        name: 'Elektroteknikens betydelse för ett modernt samhälle',
        credits: 7.5,
        year: 1
      },
      {
        code: 'DD1310',
        name: 'Programmeringsteknik',
        credits: 6.0,
        year: 1
      },
      {
        code: 'IE1205',
        name: 'Digital design',
        credits: 6.0,
        year: 1
      },
      {
        code: 'EI1110',
        name: 'Elkretsanalys, utökad kurs',
        credits: 9.0,
        year: 1
      },
      {
        code: 'SF1626',
        name: 'Flervariabelanalys',
        credits: 7.5,
        year: 1
      },
      {
        code: 'EP1200',
        name: 'Introduktion till datorsystemteknik',
        credits: 6.0,
        year: 1
      },
      {
        code: 'EH1010',
        name: 'Elektroprojekt',
        credits: 7.5,
        year: 1
      }
    ],
    2: [
      {
        code: 'ED1110',
        name: 'Vektoranalys',
        credits: 4.5,
        year: 2
      },
      {
        code: 'EH1110',
        name: 'Elektroteknikens betydelse för ett modernt samhälle',
        credits: 7.5,
        year: 2
      },
      {
        code: 'EI1220',
        name: 'Teoretisk elektroteknik E',
        credits: 10.5,
        year: 2
      },
      {
        code: 'EN1020',
        name: 'Elektroprojekt, del II',
        credits: 6.0,
        year: 2
      },
      {
        code: 'EQ1110',
        name: 'Tidskontinuerliga signaler och system',
        credits: 6.0,
        year: 2
      },
      {
        code: 'SF1920',
        name: 'Sannolikhetsteori och statistik',
        credits: 6.0,
        year: 2
      },
      {
        code: 'SK1108',
        name: 'Klassisk fysik, mekanik och våg',
        credits: 7.5,
        year: 2
      },
      {
        code: 'EQ1120',
        name: 'Tidsdiskreta signaler och system',
        credits: 6.0,
        year: 2
      }
    ],
    3: [
      {
        code: 'EJ1200',
        name: 'Eleffektsystem',
        credits: 6.0,
        year: 3
      },
      {
        code: 'EK1191',
        name: 'Mätteknik',
        credits: 6.0,
        year: 3
      },
      {
        code: 'EL1020',
        name: 'Reglerteknik, allmän kurs',
        credits: 6.0,
        year: 3
      },
      {
        code: 'EQ1270',
        name: 'Stokastiska signaler och system',
        credits: 6.0,
        year: 3
      },
      {
        code: 'IE1207',
        name: 'Analog Elektronik',
        credits: 6.0,
        year: 3
      }
    ]
  },
  'CBIOT': {
    1: [
      {
        code: 'BB1150',
        name: 'Biokemi 1',
        credits: 7.5,
        year: 1
      },
      {
        code: 'BB1160',
        name: 'Eukaryot cellbiologi',
        credits: 7.5,
        year: 1
      },
      {
        code: 'CB1170',
        name: 'Bioteknik för ett hållbart samhälle',
        credits: 1.5,
        year: 1
      },
      {
        code: 'KD1020',
        name: 'Inledande kemi',
        credits: 6.0,
        year: 1
      },
      {
        code: 'SF1625',
        name: 'Envariabelanalys',
        credits: 7.5,
        year: 1
      },
      {
        code: 'BB1030',
        name: 'Mikrobiologi',
        credits: 9.0,
        year: 1
      },
      {
        code: 'BB1190',
        name: 'Genteknik',
        credits: 7.5,
        year: 1
      },
      {
        code: 'KD1230',
        name: 'Organisk kemi, grundläggande koncept och praktik',
        credits: 6.0,
        year: 1
      },
      {
        code: 'KE1180',
        name: 'Inledande kemiteknik',
        credits: 7.5,
        year: 1
      }
    ],
    2: [
      {
        code: 'BB1200',
        name: 'Analys av biomolekyler',
        credits: 6.0,
        year: 2
      },
      {
        code: 'BB1210',
        name: 'Rening av biomolekyler',
        credits: 6.0,
        year: 2
      },
      {
        code: 'BB1230',
        name: 'Biokemi 2',
        credits: 6.0,
        year: 2
      },
      {
        code: 'CB1015',
        name: 'Hållbar utveckling av bioteknik',
        credits: 4.0,
        year: 2
      },
      {
        code: 'CB1050',
        name: 'Python för bioteknologi',
        credits: 7.5,
        year: 2
      },
      {
        code: 'CB1180',
        name: 'Färdigheter för framtidens ingenjörer 1',
        credits: 1.5,
        year: 2
      },
      {
        code: 'CB1190',
        name: 'Färdigheter för framtidens ingenjörer 2',
        credits: 1.5,
        year: 2
      },
      {
        code: 'CK1285',
        name: 'Kemisk jämvikt',
        credits: 5.0,
        year: 2
      },
      {
        code: 'SF1525',
        name: 'Grundkurs i numeriska metoder',
        credits: 6.0,
        year: 2
      },
      {
        code: 'SF1624',
        name: 'Algebra och geometri',
        credits: 7.5,
        year: 2
      },
      {
        code: 'SK1150',
        name: 'Grundläggande fysik I',
        credits: 9.0,
        year: 2
      }
    ],
    3: [
      {
        code: 'BB1300',
        name: 'Odlingsteknologi',
        credits: 7.5,
        year: 3
      },
      {
        code: 'CB1020',
        name: 'Projekt i matematisk modellering',
        credits: 3.0,
        year: 3
      },
      {
        code: 'CB1200',
        name: 'Färdigheter för framtidens ingenjörer 3',
        credits: 1.5,
        year: 3
      },
      {
        code: 'KD1500',
        name: 'Fysikalisk biokemi',
        credits: 7.5,
        year: 3
      },
      {
        code: 'SF1911',
        name: 'Statistik för bioteknik',
        credits: 6.0,
        year: 3
      },
      {
        code: 'SI1410',
        name: 'Grundläggande modellering inom bioteknologi',
        credits: 6.0,
        year: 3
      }
    ]
  },
  'CINEK': {
    1: [
      {
        code: 'DD1317',
        name: 'Programmeringsteknik',
        credits: 7.5,
        year: 1
      },
      {
        code: 'ME1314',
        name: 'Introduktion till industriell ekonomi',
        credits: 9.0,
        year: 1
      },
      {
        code: 'SF1624',
        name: 'Algebra och geometri',
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
        code: 'ME1306',
        name: 'Industriell projektledning för I',
        credits: 7.5,
        year: 1
      },
      {
        code: 'ME1315',
        name: 'Industriell marknadsföring för I',
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
        code: 'SG1109',
        name: 'Mekanik',
        credits: 8.0,
        year: 1
      }
    ],
    2: [
      {
        code: 'ME1308',
        name: 'Industriell verksamhetsledning för I',
        credits: 6.0,
        year: 2
      },
      {
        code: 'ME1309',
        name: 'Industriell ekonomistyrning för I',
        credits: 6.0,
        year: 2
      },
      {
        code: 'ME1316',
        name: 'Kvantitativ affärs- och verksamhetsanalys',
        credits: 6.0,
        year: 2
      },
      {
        code: 'SF1545',
        name: 'Numeriska metoder, grundkurs',
        credits: 6.0,
        year: 2
      },
      {
        code: 'SF1633',
        name: 'Differentialekvationer I',
        credits: 6.0,
        year: 2
      },
      {
        code: 'SF1918',
        name: 'Sannolikhetsteori och statistik',
        credits: 6.0,
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
        code: 'DD1310',
        name: 'Programmeringsteknik',
        credits: 6.0,
        year: 1
      },
      {
        code: 'MF1001',
        name: 'Maskinteknik, introduktionskurs',
        credits: 9.0,
        year: 1
      },
      {
        code: 'MJ1104',
        name: 'Praktisk introduktion till energiteknik',
        credits: 6.0,
        year: 1
      },
      {
        code: 'SF1624',
        name: 'Algebra och geometri',
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
        code: 'SF1626',
        name: 'Flervariabelanalys',
        credits: 7.5,
        year: 1
      },
      {
        code: 'SG1130',
        name: 'Mekanik I',
        credits: 9.0,
        year: 1
      },
      {
        code: 'SK1110',
        name: 'Elektromagnetism och vågrörelselära',
        credits: 7.5,
        year: 1
      }
    ],
    2: [
      {
        code: 'MF1016',
        name: 'Elektroteknik',
        credits: 9.0,
        year: 2
      },
      {
        code: 'MF1044',
        name: 'Maskinkomponenter',
        credits: 6.0,
        year: 2
      },
      {
        code: 'MG1026',
        name: 'Tillverkningsteknik',
        credits: 6.0,
        year: 2
      },
      {
        code: 'MJ1112',
        name: 'Tillämpad termodynamik',
        credits: 9.0,
        year: 2
      },
      {
        code: 'SE1010',
        name: 'Hållfasthetslära, grundkurs med projekt',
        credits: 12.0,
        year: 2
      },
      {
        code: 'SF1514',
        name: 'Numeriska metoder, grundkurs',
        credits: 6.0,
        year: 2
      },
      {
        code: 'SF1633',
        name: 'Differentialekvationer I',
        credits: 6.0,
        year: 2
      },
      {
        code: 'SG1140',
        name: 'Mekanik II',
        credits: 6.0,
        year: 2
      }
    ],
    3: [
      {
        code: 'ME1003',
        name: 'Industriell ekonomi, grundkurs',
        credits: 6.0,
        year: 3
      },
      {
        code: 'MF1045',
        name: 'Produktframtagning - Konstruktion',
        credits: 6.0,
        year: 3
      },
      {
        code: 'MH1004',
        name: 'Materiallära',
        credits: 6.0,
        year: 3
      },
      {
        code: 'SF1915',
        name: 'Sannolikhetsteori och statistik',
        credits: 6.0,
        year: 3
      }
    ]
  },
  'CDEPR': {
    1: [
      {
        code: 'MF1061',
        name: 'Introduktion till design och produktframtagning',
        credits: 9.0,
        year: 1
      },
      {
        code: 'SF1522',
        name: 'Numeriska beräkningar',
        credits: 6.0,
        year: 1
      },
      {
        code: 'SF1624',
        name: 'Algebra och geometri',
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
        code: 'MF1062',
        name: 'Design och produktframtagning',
        credits: 6.0,
        year: 1
      },
      {
        code: 'SF1523',
        name: 'Analytiska och numeriska metoder för differentialekvationer',
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
        code: 'SG1130',
        name: 'Mekanik I',
        credits: 9.0,
        year: 1
      }
    ],
    2: [
      {
        code: 'MF1039',
        name: 'Design och produktframtagning, komponenter',
        credits: 6.0,
        year: 2
      },
      {
        code: 'MF1063',
        name: 'Material i design och produktframtagning',
        credits: 9.0,
        year: 2
      },
      {
        code: 'MF1064',
        name: 'Modellering och simulering i design och produktframtagning',
        credits: 9.0,
        year: 2
      },
      {
        code: 'MG1016',
        name: 'Tillverkningsteknik',
        credits: 6.0,
        year: 2
      },
      {
        code: 'MJ1112',
        name: 'Tillämpad termodynamik',
        credits: 9.0,
        year: 2
      },
      {
        code: 'SD1116',
        name: 'Konstruktion av tysta och vibrationsfria maskiner',
        credits: 6.0,
        year: 2
      },
      {
        code: 'SE1020',
        name: 'Hållfasthetslära, grundkurs',
        credits: 9.0,
        year: 2
      },
      {
        code: 'SG1140',
        name: 'Mekanik II',
        credits: 6.0,
        year: 2
      },
      {
        code: 'ME1003',
        name: 'Industriell ekonomi, grundkurs',
        credits: 6.0,
        year: 2
      },
      {
        code: 'MF1016',
        name: 'Elektroteknik',
        credits: 9.0,
        year: 2
      },
      {
        code: 'MF1040',
        name: 'Design och produktframtagning, metodik',
        credits: 9.0,
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