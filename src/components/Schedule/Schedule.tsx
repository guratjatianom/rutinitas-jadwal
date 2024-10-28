import React from 'react';
import { routines } from './Routines';

export default function Schedule() {
  return (
    <div>
      <header>
        <h1>Jadwal Rutinitas</h1>
      </header>
      <div className="schedule-container">
        {routines.map((routine, index) => (
          <div key={index} className="routine-card">
            <h3 className="text-black">{routine.title}</h3>
            <p className="text-black">{routine.time}</p>
            <p className="text-black">{routine.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
