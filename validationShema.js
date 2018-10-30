const validationSchema = yup.object().shape({
  dateOfBirth: yup.date().required("This field is required!"),
  firstName: yup.string().required("This field is required!"),
  gender: yup.string().required("This field is required!"),
  lastName: yup
    .string()
    .required("This field is required!")
    .min(3, "This field needs to be longer than 3 characters!"),
  nationality: yup
    .string()
    .required("This field is required!")
    .matches(
      /\[A-Z]{2}/,
      "This field has to be a country code like BE, NL, ..!"
    )
});
