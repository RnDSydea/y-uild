import React from 'react';
import './yUildHeader.css';
import { useTheme } from '../card/themeContext';

const YuildHeader = ({ children }) => {
  const theme = useTheme();
  const headerClass = `${theme}-card-header`;

  return <div className={headerClass}>{children}</div>;
};

export default YuildHeader;