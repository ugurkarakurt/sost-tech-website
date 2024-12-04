// src/types/theme.ts
import { PaletteMode } from '@mui/material';

export interface ColorModeContextType {
  mode: PaletteMode;
  toggleColorMode: () => void;
}