import { CheckboxBase } from '@material/mwc-checkbox/mwc-checkbox-base';
import { style } from '@material/mwc-checkbox/mwc-checkbox-css';
import { ScopedElementsMixin as Scoped } from '@open-wc/scoped-elements';
import { ScopedElementsHost } from '@open-wc/scoped-elements/types/src/types';
import { Constructor } from 'lit-element';
import { Ripple } from './mwc-ripple';

export class Checkbox extends (Scoped(CheckboxBase) as Constructor<
  CheckboxBase & ScopedElementsHost
>) {
  static get scopedElements() {
    return {
      'mwc-ripple': Ripple,
    };
  }
  static styles = style;
}
