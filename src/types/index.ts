export interface Course {
  code: string;
  name: string;
  credits: number;
  grade?: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | '';
  year: number;
}

export interface Program {
  code: string;
  name: string;
  years: number;
}

export interface Year {
  year: number;
  courses: Course[];
}

export interface StudentProgress {
  program: Program;
  currentYear: number;
  completedCourses: Course[];
} 