export const initstate = {
  first_name: "",
  last_name: "",
  gender: "",
  email: "",
  phone: "",
  age: "",
  cin: "",
  errors: {},
  loading: false,
};

export const ActionReducerForm = (stateForm, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...stateForm, loading: action.payload };
    case "input":
      return { ...stateForm, [action.field]: action.payload };
    case "validate":
      const errors = {};

      const validationRules = {
        first_name: "first name required",
        last_name: "last name required",
        gender: "gender required",
        email: "email required",
        phone: "phone required",
        age: "age required",
        cin: "cin required",
      };

      Object.entries(validationRules).forEach(([fieldName, rule]) => {
        if (!stateForm[fieldName]) {
          errors[fieldName] = rule;
        }
      });
      return { ...stateForm, errors };

    case "submit":
      return stateForm;

    case "reset":
      return initstate;
    default:
      return stateForm;
  }
};
