"use client";

import type { ComponentPropsWithoutRef, ChangeEvent } from 'react';
import { twMerge } from 'tailwind-merge';
import { Label } from '@/components/label';
import { ErrorMessage } from '@/components/error-message';
import { useState } from 'react';

type Props = Omit<ComponentPropsWithoutRef<'input'>, 'type'> & {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  onFileChange?: (file: File | null) => void;
};

export const FileInput = ({ className, label, name, required, error, onFileChange, ...rest }: Props) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      if (onFileChange) {
        onFileChange(file);
      }
    } else {
      setFileName(null);
      if (onFileChange) {
        onFileChange(null);
      }
    }
  };

  return (
    <div className="flex flex-col gap-y-1">
      <Label text={label} htmlFor={name} required={required} />
      <input
        type="file"
        name={name}
        id={name}
        onChange={handleFileChange}
        className={twMerge(
          'block w-full text-sm text-slate-500',
          'file:mr-4 file:py-2 file:px-4',
          'file:rounded-md file:border-0',
          'file:text-sm file:font-semibold',
          'file:bg-lightBlue file:text-darkNavy',
          'hover:file:bg-darkNavy hover:file:text-white file:cursor-pointer',
          'focus:outline-none focus:ring-2 focus:ring-black ring-offset-2 rounded-md border border-gray p-2',
          className,
        )}
        {...rest}
      />
      {fileName && <p className="text-xs text-gray-600 mt-1">Selected file: {fileName}</p>}
      <ErrorMessage error={error} />
    </div>
  );
}; 
