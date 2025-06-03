export type Course = {
  code: string;
  name: string;
  credits: number;
  year: number;
  grade?: string;
};

export type Year = {
  [key: number]: Course[];
};

export type Program = {
  code: string;
  name: string;
  years: number;
};

export type EducationType = 'civilingenjör' | 'högskoleingenjör' | 'kandidatprogram';

export type Education = {
  type: EducationType;
  programs: Program[];
}; 