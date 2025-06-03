import { useState, useMemo } from 'react';
import {
  Container,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  ThemeProvider,
  createTheme,
  Divider,
  LinearProgress,
} from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';
import type { Program, Course } from './types';
import { ProgramSelector } from './components/ProgramSelector';
import { CourseList } from './components/CourseList';
import { SAMPLE_COURSES, KTH_EDUCATION, calculateGPA } from './data/kthPrograms';
import SchoolIcon from '@mui/icons-material/School';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import BarChartIcon from '@mui/icons-material/BarChart';

// KTH colors and theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1954A6',
      light: '#2196F3',
      dark: '#1565C0',
    },
    secondary: {
      main: '#E83C3D',
      light: '#FF5252',
      dark: '#C62828',
    },
    background: {
      default: '#EBF3FF',
      paper: '#FFFFFF',
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
      marginBottom: '1.5rem',
    },
    h6: {
      fontWeight: 500,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          borderRadius: 8,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
  },
});

function App() {
  const [selectedEducationType, setSelectedEducationType] = useState('');
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [selectedYear, setSelectedYear] = useState<number>(0);
  const [courses, setCourses] = useState<Course[]>([]);

  // Get available programs based on selected education type
  const availablePrograms = useMemo(() => {
    if (!selectedEducationType) return [];
    const education = KTH_EDUCATION.find(edu => edu.type === selectedEducationType);
    return education?.programs || [];
  }, [selectedEducationType]);

  // Calculate statistics
  const stats = useMemo(() => {
    if (!courses.length) return null;

    const completedCourses = courses.filter(course => course.grade);
    const totalCredits = completedCourses.reduce((sum, course) => sum + course.credits, 0);
    
    // Grade distribution
    const gradeDistribution = {
      'A': 0, 'B': 0, 'C': 0, 'D': 0, 'E': 0, 'F': 0
    };
    completedCourses.forEach(course => {
      if (course.grade) {
        gradeDistribution[course.grade as keyof typeof gradeDistribution]++;
      }
    });

    // Calculate percentages
    const totalGrades = completedCourses.length;
    const gradePercentages = Object.entries(gradeDistribution).map(([grade, count]) => ({
      grade,
      percentage: totalGrades ? (count / totalGrades) * 100 : 0
    }));

    return {
      totalCredits,
      completedCourses: completedCourses.length,
      totalCourses: courses.length,
      gradeDistribution: gradePercentages,
      passRate: totalGrades ? ((totalGrades - gradeDistribution['F']) / totalGrades) * 100 : 0
    };
  }, [courses]);

  // Get all courses up to the selected year
  const relevantCourses = useMemo(() => {
    if (!selectedProgram) return [];
    
    const allCourses: Course[] = [];
    for (let year = 1; year <= selectedYear; year++) {
      const yearCourses = SAMPLE_COURSES[selectedProgram.code]?.[year] || [];
      allCourses.push(...yearCourses);
    }
    return allCourses;
  }, [selectedProgram, selectedYear]);

  const handleEducationTypeChange = (event: SelectChangeEvent<string>) => {
    const type = event.target.value;
    setSelectedEducationType(type);
    setSelectedProgram(null);
    setSelectedYear(0);
    setCourses([]);
  };

  const handleProgramChange = (program: Program) => {
    setSelectedProgram(program);
    setSelectedYear(0); // Reset to 0 to indicate no year selected
    setCourses([]); // Clear any existing courses
  };

  const handleYearChange = (event: SelectChangeEvent<number>) => {
    const year = event.target.value as number;
    setSelectedYear(year);
    if (selectedProgram) {
      // Get all existing courses with their grades
      const existingCourses = new Map(courses.map(course => [course.code, course]));
      
      // Get all courses up to the selected year
      const allCourses: Course[] = [];
      for (let y = 1; y <= year; y++) {
        const yearCourses = SAMPLE_COURSES[selectedProgram.code]?.[y] || [];
        // Preserve grades for existing courses
        allCourses.push(...yearCourses.map(course => ({
          ...course,
          grade: (existingCourses.get(course.code)?.grade || '') as '' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F'
        })));
      }
      setCourses(allCourses);
    }
  };

  const handleGradeChange = (courseCode: string, grade: '' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F') => {
    setCourses(prevCourses =>
      prevCourses.map(course =>
        course.code === courseCode ? { ...course, grade } : course
      )
    );
  };

  const gpa = calculateGPA(courses);

  return (
    <ThemeProvider theme={theme}>
      <Box 
        sx={{ 
          minHeight: '100vh',
          width: '100%',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, #EBF3FF 0%, #E6EEFF 100%)',
          overflowY: 'auto',
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 4, md: 6 }, py: 4 }}>
          {/* Header Section */}
          <Box sx={{ 
            textAlign: 'center',
            mb: { xs: 4, md: 6 },
            maxWidth: '800px',
            mx: 'auto',
          }}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: { xs: 2, md: 3 },
            }}>
              <Box sx={{
                bgcolor: 'primary.main',
                borderRadius: '50%',
                width: { xs: 56, md: 64 },
                height: { xs: 56, md: 64 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <SchoolIcon sx={{ 
                  fontSize: { xs: 32, md: 36 }, 
                  color: 'white',
                }} />
              </Box>
              <Typography 
                variant="h4" 
                component="h1"
                color="primary"
                sx={{
                  fontSize: { xs: '1.75rem', md: '2.5rem' },
                  fontWeight: 'bold',
                  lineHeight: 1.2,
                  mt: '4px',
                }}
              >
                Beräkna ditt betygssnitt
              </Typography>
            </Box>
            <Typography 
              variant="subtitle1" 
              color="text.secondary"
              sx={{ 
                fontSize: { xs: '1rem', md: '1.125rem' },
                mb: { xs: 3, md: 4 },
              }}
            >
              Beräkna ditt medelbetyg utan att registrera ett konto
            </Typography>
          </Box>

          <Box sx={{ 
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
          }}>
            {/* Main Content */}
            <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 66.666%' } }}>
              <Paper 
                sx={{ 
                  p: { xs: 2, sm: 3, md: 4 },
                  mb: 4,
                  background: 'linear-gradient(to bottom, #FFFFFF, #FAFBFF)',
                }}
              >
                <Box sx={{ mb: 3 }}>
                  <FormControl fullWidth sx={{ mb: 3 }}>
                    <InputLabel id="education-type-label">Utbildning</InputLabel>
                    <Select
                      labelId="education-type-label"
                      id="education-type"
                      value={selectedEducationType}
                      label="Utbildning"
                      onChange={handleEducationTypeChange}
                    >
                      <MenuItem value=""><em>Välj utbildning</em></MenuItem>
                      <MenuItem value="civilingenjör">Civilingenjör</MenuItem>
                      <MenuItem value="högskoleingenjör">Högskoleingenjör</MenuItem>
                      <MenuItem value="kandidatprogram">Kandidatprogram</MenuItem>
                    </Select>
                  </FormControl>

                  {selectedEducationType && (
                    <ProgramSelector
                      selectedProgram={selectedProgram}
                      onProgramChange={handleProgramChange}
                      availablePrograms={availablePrograms}
                    />
                  )}
                </Box>

                {selectedProgram && (
                  <Box sx={{ mb: 3 }}>
                    <FormControl fullWidth>
                      <InputLabel>Årskurs</InputLabel>
                      <Select
                        value={selectedYear}
                        label="Årskurs"
                        onChange={handleYearChange}
                      >
                        <MenuItem value={0}><em>Välj årskurs</em></MenuItem>
                        {Array.from({ length: 3 }, (_, i) => i + 1).map(
                          (year) => (
                            <MenuItem key={year} value={year}>
                              Årskurs {year}
                            </MenuItem>
                          )
                        )}
                      </Select>
                    </FormControl>
                  </Box>
                )}

                {selectedProgram && selectedYear > 0 && courses.length > 0 && (
                  <CourseList 
                    courses={courses} 
                    selectedYear={selectedYear}
                    onGradeChange={handleGradeChange} 
                  />
                )}
              </Paper>
            </Box>

            {/* GPA Display and Tips */}
            <Box sx={{ 
              flex: { xs: '1 1 100%', md: '1 1 33.333%' },
              position: { xs: 'static', md: 'sticky' },
              top: '2rem',
              alignSelf: 'flex-start',
            }}>
              <Paper sx={{ 
                p: 3,
                mb: 4,
                background: 'linear-gradient(135deg, #1954A6 0%, #1565C0 100%)',
                color: 'white',
              }}>
                <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>
                  Ditt betygssnitt
                </Typography>
                <Typography 
                  variant="h3" 
                  sx={{ 
                    textAlign: 'center',
                    fontWeight: 'bold',
                    mb: 2,
                  }}
                >
                  {gpa.toFixed(2)}
                </Typography>
                <Divider sx={{ bgcolor: 'rgba(255,255,255,0.2)', my: 2 }} />
                <Typography variant="body2" sx={{ textAlign: 'center' }}>
                  {gpa > 4.5 ? 'A/B i snitt' : 
                   gpa > 4.0 ? 'B/C i snitt' :
                   gpa > 3.5 ? 'C/D i snitt' : 
                   gpa > 3.0 ? 'D/E i snitt' :
                   gpa > 0 ? 'E i snitt' : 'Börja registrera dina betyg'}
                </Typography>
              </Paper>

              {/* Statistics Section */}
              {stats && (
                <Paper sx={{ 
                  p: 3, 
                  mb: 4,
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)',
                }}>
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 1,
                    mb: 2,
                  }}>
                    <BarChartIcon color="primary" />
                    <Typography variant="h6">Statistik</Typography>
                  </Box>

                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle2" color="primary" sx={{ mb: 1 }}>
                      Avklarade högskolepoäng
                    </Typography>
                    <Typography variant="h5" sx={{ mb: 1 }}>
                      {stats.totalCredits}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {stats.completedCourses} av {stats.totalCourses} kurser avklarade
                    </Typography>
                  </Box>

                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle2" color="primary" sx={{ mb: 1 }}>
                      Betygsfördelning
                    </Typography>
                    {stats.gradeDistribution.map(({ grade, percentage }) => (
                      <Box key={grade} sx={{ mb: 1 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                          <Typography variant="body2">{grade}</Typography>
                          <Typography variant="body2">{percentage.toFixed(1)}%</Typography>
                        </Box>
                        <LinearProgress 
                          variant="determinate" 
                          value={percentage} 
                          sx={{
                            height: 6,
                            borderRadius: 3,
                            backgroundColor: 'rgba(0,0,0,0.05)',
                            '& .MuiLinearProgress-bar': {
                              backgroundColor: grade === 'F' ? 'error.main' : 'primary.main',
                            }
                          }}
                        />
                      </Box>
                    ))}
                  </Box>

                  <Box>
                    <Typography variant="subtitle2" color="primary" sx={{ mb: 1 }}>
                      Godkännandegrad
                    </Typography>
                    <Typography variant="h5" sx={{ color: stats.passRate >= 70 ? 'success.main' : 'warning.main' }}>
                      {stats.passRate.toFixed(1)}%
                    </Typography>
                  </Box>
                </Paper>
              )}

              <Paper sx={{ p: 3 }}>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1,
                  mb: 2,
                }}>
                  <TipsAndUpdatesIcon color="primary" />
                  <Typography variant="h6">Tips för framgång</Typography>
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle2" color="primary" sx={{ mb: 1 }}>
                    Studietips
                  </Typography>
                  <Typography variant="body2" color="text.secondary" component="ul" sx={{ pl: 2 }}>
                    <li>Delta aktivt på föreläsningar, övningar och laborationer.</li>
                    <li>Utnyttja skolans resurser såsom kurslitteratur och kurs-assistenter.</li>
                    <li>Studera tillsammans med vänner.</li>
                    <li>Hitta din egen studieteknik.</li>
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle2" color="primary" sx={{ mb: 1 }}>
                    Planering
                  </Typography>
                  <Typography variant="body2" color="text.secondary" component="ul" sx={{ pl: 2 }}>
                    <li>Planera din tid väl för att hinna med ett liv utanför studierna.</li>
                    <li>Stressa inte för mycket över dina studier.</li>
                    <li>Sätt realistiska mål.</li>
                  </Typography>
                </Box>
              </Paper>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
