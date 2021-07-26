import React from 'react';

const note = {
  background: "#e7f5ff",
  borderLeft: "5px solid #228be6",
  padding: "0.5rem 0.5rem 0.5rem 0.75rem"
}

const warning = {
  background: "#fff9db",
  borderLeft: "5px solid #fab005",
  padding: "0.5rem 0.5rem 0.5rem 0.75rem"
}

export const NoteMessage = ({ children }) => <p className={note}>{children}</p>
export const WarningMessage = ({ children }) => <p className={warning}>{children}</p>
