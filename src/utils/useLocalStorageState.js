import React, { useState, useEffect } from "react";

export const useLocalStorageState = (initialState, key) => {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialState;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);
  return [value, setValue];
};
