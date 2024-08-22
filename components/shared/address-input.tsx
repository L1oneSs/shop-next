'use client';

import React from 'react';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

interface Props {
  onChange?: (value?: string) => void;
}

export const AdressInput: React.FC<Props> = ({ onChange }) => {
  return (
    <AddressSuggestions
      token="8785ceba4c804a5bbd2b2a7df72c494d86258a69"
      onChange={(data) => onChange?.(data?.value)}
    />
  );
};
