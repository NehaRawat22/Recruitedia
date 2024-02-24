import React, {useState} from 'react'
import {ques} from './api';
import MyFaq from './MyFaq';
import './Faq.css';

function Faq({ question,answer }){
    const [data, setData] = useState(ques);
  return (
   <>
   <div className='con'>
    <section className="main-div">
      <h1 className='heading'>FAQs</h1>
      {
        data.map((curElem )=> {
          const { id } = curElem;
          return <MyFaq key= {id} {...curElem}/>
        })
      }
    </section>
    </div>
    </>
  )
}

export default Faq