import { FormControl } from '@angular/forms';

export class DateFormControl extends FormControl {
  override setValue(
    value: any,
    options?: {
      onlySelf?: boolean | undefined;
      emitEvent?: boolean | undefined;
      emitModelToViewChange?: boolean | undefined;
      emitViewToModelChange?: boolean | undefined;
    }
  ): void {
    if (value.match(/[^0-9|\/]/gi)) {
      super.setValue(this.value, { ...options, emitModelToViewChange: true });
      return;
    }
    if (value.length > 5) {
      super.setValue(this.value, { ...options, emitModelToViewChange: true });
      return;
    }
    if (value.length === 2 && this.value.length === 3) {
      super.setValue(value, { ...options, emitModelToViewChange: true });
      return;
    }

    if (value.length === 2) {
      super.setValue(value + '/', { ...options, emitModelToViewChange: true });
      return;
    }
    super.setValue(value, { ...options, emitModelToViewChange: true });
  }
}

// value is just function argument and this.value is property of FormControl class instance
