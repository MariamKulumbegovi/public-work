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
              isActive ? <PlusOutlined /> : <MinusOutlined />
            }
          >
            {questions.map((question, index) => (
              <Panel header={question.title} key={index}>
                <p>{question.info}</p>
                <p>{question.infoTwo}</p>
              </Panel>
            ))}
          </Collapse>
        </section>
      </div>
    </main>
  );
};
