import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';
import type { Program } from '../types';

interface ProgramSelectorProps {
  selectedProgram: Program | null;
  onProgramChange: (program: Program) => void;
  availablePrograms: Program[];
}

export const ProgramSelector: React.FC<ProgramSelectorProps> = ({
  selectedProgram,
  onProgramChange,
  availablePrograms,
}) => {
  const handleChange = (event: SelectChangeEvent<string>) => {
    const program = availablePrograms.find(p => p.code === event.target.value);
    if (program) {
      onProgramChange(program);
    }
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Program</InputLabel>
      <Select
        value={selectedProgram?.code || ''}
        label="Program"
        onChange={handleChange}
        sx={{
          textAlign: 'left',
          '& .MuiSelect-select': {
            py: 1.5,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderWidth: '2px',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'primary.main',
          },
        }}
      >
        <MenuItem value="" sx={{ fontStyle: 'italic' }}>
          Välj program
        </MenuItem>
        {availablePrograms.map((program) => (
          <MenuItem 
            key={program.code} 
            value={program.code}
            sx={{
              textAlign: 'left',
              '&.Mui-selected': {
                backgroundColor: 'primary.light',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'primary.main',
                },
              },
              '&:hover': {
                backgroundColor: 'primary.lighter',
              },
            }}
          >
            {program.name} ({program.code})
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}; 