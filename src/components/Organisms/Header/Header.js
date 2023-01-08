import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Header.module.css';
import Title from '../../Atoms/Title/Title';

const Header = () => (
  <div className={styles.Header}>
    {/* titleのstyleと渡す要素はここで指定 */}
    <Title children='Todo App' className='title' />
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
