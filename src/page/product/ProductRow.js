// import React from 'react';
// import styles from './ProductRow.module.scss';//모듈방식(로컬로 지정됨), 모듈이 없으면 글로벌로 지정됨.
// //https://create-react-app.dev/docs/post-processing-css/
// import classNames from 'classnames';//클레스 바인딩
//
// export const ProductRow = (props) => {
//   //[key] => computed property 객체를 계산해서 넣어라 ex){[1+2] : 'aaa'}
//   return (
//     //key(클래스명):value(true or false)
//     <tr className={classNames({[styles.stock]: !props.stocked}, 'foo')}>
//                         {/*-----------------*/}
//                         {/*                 */}
//       <td>{props.name}</td>
//       <td>{props.price}</td>
//     </tr>
//   );
// }

import React from 'react';
import style from './ProductRow.module.scss';
import className from 'classnames'

export const ProductRow = (props) => {
  return (
    <tr className={className({[style.stock]: !props.stocked})}>
      <td>{props.name}</td>
      <td>{props.price}</td>
    </tr>
  )
}