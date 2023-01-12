import React from 'react';
import styles from './Title.module.css';

const Title = (props) => {
  const { children, className } = props;
  return <div className={styles[className]}>{children}</div>;
};

export default Title;
