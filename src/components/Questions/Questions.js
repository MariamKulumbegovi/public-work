import React, { useState } from 'react';
import data from './data';
import './Questions.css';
import { Collapse } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

const { Panel } = Collapse;
export const Questions = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className="container">
        <h1 className="title">ხშირად დასმული კითხვები</h1>
        <br />
        <section className="info">
          {/* {questions.map(question => (
            <Info key={question.id} {...question} />
          ))} */}
          <Collapse
            defaultActiveKey={['0']}
            expandIconPosition="right"
            expandIcon={({ isActive }) =>
              isActive ? <MinusOutlined /> : <PlusOutlined />
            }
          >
            {questions.map((question, index) => (
              <Panel header={question.title} key={index}>
                <p>{question.info}</p>
                <p>{question.infoTwo}</p>
                <ul>
                  <li>{question.list1}</li>
                  <li>{question.list2}</li>
                  <li>{question.list3}</li>
                  <li>{question.list4}</li>
                  <li>{question.list5}</li>
                  <li>{question.list6}</li>
                  <li>{question.list7}</li>
                  <p>{question.infoThree}</p>
                  <p>{question.infoFour}</p>
                  <li>{question.a}</li>
                  <li>{question.b}</li>
                  <a href="mailto:infosesa@moh.gov.ge">{question.mail}</a>
                </ul>
              </Panel>
            ))}
          </Collapse>
        </section>
      </div>
    </main>
  );
};
