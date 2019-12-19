import React from 'react';
import {Btn} from './Styles';

export default function Button(props) {
  return (
    <Btn type="button" {...props} />
  );
}