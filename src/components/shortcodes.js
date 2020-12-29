import React from 'react';
import style from './shortcodes.module.css'

export const NoteMessage = ({ children }) => <p className={style.note}>{children}</p>

export const WarningMessage = ({ children }) => <p className={style.warning}>{children}</p>
