import React from 'react';
import './style.less';

export default function CFButton({borderColor = 'orange'}) {
  return (
    <div className="cf-ui-button" style={{borderColor}}>CFButton</div>
  )
}