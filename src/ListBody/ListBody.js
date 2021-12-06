import React from 'react'
import style from './ListBody.module.css'

const ListBody = ({todoList, onDelete,isCheck,onChange}) => {
  return (
    <div className={style.list}>
      <ul className={style.listUl}>
        {
          todoList.map((e) => {
            const {id, value} = e;
            console.log(e);
            return (

              <li key={id} className={style.listLi}>
                <input value={isCheck} onChange={() => onChange()}  type="checkbox"/>
                {value}
                <button className={style.deleteBtn} onClick={() => onDelete(id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="24"
                       height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                       strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"/>
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg></button>
              </li>
            )
          })}
      </ul>
    </div>

  )
}

export default ListBody;