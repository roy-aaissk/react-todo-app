import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainContents.module.css';
import TextForm from '../../Organisms/TextForm/TextForm';
import CardList from '../../Organisms/CardList/CardList';

const MainContents = () => (
  <div className={styles.MainContents}>
    {/* 全体的なstyleの指定widthやhigh */}
    <TextForm />
    <CardList />
  </div>
);

MainContents.propTypes = {};

MainContents.defaultProps = {};

export default MainContents;
