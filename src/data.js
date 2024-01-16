import React, { createContext, useContext, useState } from 'react';

let currentIndex = 0;

const setIndex = (value) => {
  currentIndex = value;
};

const getIndex = () => {
  return currentIndex;
};

export { setIndex, getIndex};