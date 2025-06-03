import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
  Typography,
  Box,
  styled
} from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';
import type { Course } from '../types';

interface CourseListProps {
  courses: Course[];
  selectedYear: number;
  onGradeChange: (courseCode: string, grade: '' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F') => void;
}

const GRADES = ['A', 'B', 'C', 'D', 'E', 'F'];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  '&.MuiTableCell-head': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontWeight: 600,
  },
  '&.MuiTableCell-body': {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:hover': {
    backgroundColor: theme.palette.action.selected,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const YearHeader = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.common.white,
  padding: theme.spacing(1, 2),
  borderRadius: theme.shape.borderRadius,
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(2),
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  '&:first-of-type': {
    marginTop: 0,
  },
}));

export const CourseList: React.FC<CourseListProps> = ({ courses, selectedYear, onGradeChange }) => {
  const handleGradeChange = (courseCode: string) => (event: SelectChangeEvent<string>) => {
    onGradeChange(courseCode, event.target.value as '' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F');
  };

  // Group courses by year
  const coursesByYear = new Map<number, Course[]>();
  for (let year = 1; year <= selectedYear; year++) {
    coursesByYear.set(year, courses.filter(course => course.year === year));
  }

  return (
    <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
      {Array.from(coursesByYear.entries()).map(([year, yearCourses]) => (
        <React.Fragment key={year}>
          <YearHeader>
            <Typography variant="subtitle1" fontWeight="bold">
              Årskurs {year}
            </Typography>
          </YearHeader>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Kurskod</StyledTableCell>
                <StyledTableCell>Kursnamn</StyledTableCell>
                <StyledTableCell align="right">Högskolepoäng</StyledTableCell>
                <StyledTableCell align="right">Betyg</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {yearCourses.map((course) => (
                <StyledTableRow key={course.code}>
                  <StyledTableCell component="th" scope="row">
                    {course.code}
                  </StyledTableCell>
                  <StyledTableCell>{course.name}</StyledTableCell>
                  <StyledTableCell align="right">{course.credits}</StyledTableCell>
                  <StyledTableCell align="right">
                    <Select
                      value={course.grade || ''}
                      onChange={handleGradeChange(course.code)}
                      size="small"
                      sx={{
                        minWidth: 80,
                        '& .MuiSelect-select': {
                          py: 1,
                        },
                      }}
                    >
                      <MenuItem value="">
                        <em>Inget</em>
                      </MenuItem>
                      {GRADES.map((grade) => (
                        <MenuItem key={grade} value={grade}>
                          {grade}
                        </MenuItem>
                      ))}
                    </Select>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </React.Fragment>
      ))}
    </TableContainer>
  );
}; 