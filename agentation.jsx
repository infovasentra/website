import React from 'react';
import { createRoot } from 'react-dom/client';
import { Agentation } from 'agentation';

// Mount Agentation visual feedback toolbar
document.addEventListener('DOMContentLoaded', () => {
  let rootEl = document.getElementById('agentation-root');
  if (!rootEl) {
    rootEl = document.createElement('div');
    rootEl.id = 'agentation-root';
    document.body.appendChild(rootEl);
  }

  const root = createRoot(rootEl);
  root.render(<Agentation appName="VasEntra Languages" copyToClipboard={true} />);
});
