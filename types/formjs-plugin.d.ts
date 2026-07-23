declare module "formjs-plugin" {
  type FormOptions = {
    fieldOptions?: {
      trimValue?: boolean;
      validateOnEvents?: string;
    };
  };

  export default class Form {
    constructor(form: HTMLFormElement | string, options?: FormOptions);
    destroy(): void;
  }
}
