import React, { useState } from 'react';
import data from './data';
import './Questions.css';
import { Info } from './Info';

export const Questions = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className="container">
        <h1>ხშირად დასმული კითხვები</h1>
        <section className="info">
          {questions.map(question => (
            <Info key={question.id} {...question} />
          ))}
        </section>
      </div>
    </main>
  );
};
