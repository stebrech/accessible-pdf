import React from 'react';
import style from './ui.module.css'

export const note = ({ children }) => <p className={style.note}>{children}</p>

export const warning = ({ children }) => <p className={style.warning}>{children}</p>