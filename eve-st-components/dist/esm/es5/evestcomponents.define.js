
// evestcomponents: Custom Elements Define Library, ES Module/es5 Target

import { defineCustomElement } from './evestcomponents.core.js';
import { COMPONENTS } from './evestcomponents.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, COMPONENTS, opts);
}
