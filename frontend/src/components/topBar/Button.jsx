import React, { useState, useContext } from 'react';
import { Context } from '../../context/Context';

function Button() {
  const ctx = useContext(Context);
  return <button onClick={ctx.toggleMenu}>Toggle menu</button>;
}

export default Button;
