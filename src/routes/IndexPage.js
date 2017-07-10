import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import UrlPage from '../components/UrlPage/UrlPage'

function IndexPage() {
  return (
    <div className={styles.normal}>
      <UrlPage/>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
