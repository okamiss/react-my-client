import React, { useState } from 'react';
import { usePopper } from 'react-popper';

export default function Example() {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: 'arrow', options: { element: arrowElement } }]
  });

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
      <button
        ref={setReferenceElement}
        type="button"
        className="btn btn-primary"
      >
        Click me
      </button>
      <div
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
      >
        Popper content
        <div ref={setArrowElement} style={styles.arrow} />
      </div>
    </div>
  );
}
