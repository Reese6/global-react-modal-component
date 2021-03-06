import React, { forwardRef } from 'react';
import Slide from '@material-ui/core/Slide';

function Transition(props, ref) {
  return <Slide direction='up' ref={ ref } { ...props } />;
}

export default forwardRef(Transition);