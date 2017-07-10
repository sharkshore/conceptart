import React from 'react';
import { connect } from 'dva';
import styles from './UrlPage.css'

/**
 无状态组件,函数式写法
 */
function Users({ dispatch, urls}) {

  function deleteHandler(id) {
    dispatch({
      type: 'users/remove',
      payload: id,
    });
  }

  console.log(urls);

  return (
    <div >
      {
        Object.keys(urls).map((item,i)=>{
          return(
            <div key={i}>
              <p>{urls[item].name}</p>
              <div>
                {
                  urls[item]['list'].map((u,j)=>{
                    return(
                      <a href={u.url} className={styles.url} key={i+""+j}>{u.name}</a>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

function mapStateToProps(state) {
  return {
    urls:state.urlPage.urls,
  };
}

export default connect(mapStateToProps)(Users);

