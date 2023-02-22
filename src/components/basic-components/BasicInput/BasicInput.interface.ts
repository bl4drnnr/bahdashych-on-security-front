import React from 'react';

export interface InputProps {
  value: any;
  placeholder: string;
  locale: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  innerPlaceholder?: string;
  disabled?: boolean;
}
