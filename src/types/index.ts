export interface Course {
  code: string;
  name: string;
  credits: number;
  grade?: string;
  year: number;
}

export interface Program {
  code: string;
  name: string;
  years: number;
}

export type Year = {
  [key: number]: Course[];
};

export type EducationType = 'civilingenjör' | 'högskoleingenjör' | 'kandidatprogram';

export type Education = {
  type: EducationType;
  programs: Program[];
};

export interface StudentProgress {
  program: Program;
  currentYear: number;
  completedCourses: Course[];
} 