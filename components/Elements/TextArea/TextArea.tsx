import React from 'react'
import style from "@/pages/index.module.css"

interface TextareaProps extends React.HTMLProps<HTMLTextAreaElement> {
    label?: string;
    className?: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.FormEvent<HTMLTextAreaElement>) => void;
    style?: React.CSSProperties;
  }

export const TextArea = (props: TextareaProps) => {
    const { label, ...values } = props;
  
    return (
      <div className={style.inputBox}>
        <p className={style.labelStyle}>{label}</p>
        <textarea {...values} />
      </div>
    );
  };
  