import { useMantineColorScheme } from '@mantine/core';
import React from 'react'
import style from "@/pages/index.module.css"
import { TxKeyPath } from '@/i18n';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
    type?: string;
    className?: string;
    placeholder?: string | TxKeyPath  ;
    value?: string;
    onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
    style?: React.CSSProperties;
    label?: string;
  }

const Input = (props: InputProps) => {
  const { label, ...values } = props;
  const {colorScheme, setColorScheme } = useMantineColorScheme();
  


  return (
    <div className={style.inputBox}>
      <p className={`${style.labelStyle} ${colorScheme ==='dark' ? style.darkLabel : style.lightLabel}`}>{label}</p>
      <input {...values} />
    </div>
  );
};


export default Input