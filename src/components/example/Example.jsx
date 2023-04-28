import React from 'react';
import './Example.scss';
import Input from '../ui/Input/Input';
import TextArea from '../ui/textArea/textArea';

function Example() {
  return (
    <div className="wrap">
      <div className="div1">div1div1div1div1</div>
      <div className="div2">div2</div>
      <div>
      </div>
      <div>
      <Input typeInput="name"/>
      </div>
      <TextArea />
    </div>

  )
}

export default Example;
