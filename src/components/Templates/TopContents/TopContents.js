import React from 'react';
// import PropTypes from 'prop-types';
import styles from './TopContents.module.css';
import Header from '../../Organisms/Header/Header';

const TopContents = () => (
  <div className={styles.TopContents}>
    {/* 汎用的に使うためstyleの指定はNG */}
    <Header />
  </div>
);

TopContents.propTypes = {};

TopContents.defaultProps = {};

export default TopContents;
