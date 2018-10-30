renderForm = ({ values, setFieldValue, touched, errors }) => (
  <View style={styles.container}>
    <Input
      handleChangeText={firstName => setFieldValue("firstName", firstName)}
      value={values.firstName}
      label="First name"
      error={
        touched.firstName && errors.firstName ? errors.firstName : undefined
      }
    />
    <Input
      handleChangeText={lastName => setFieldValue("lastName", lastName)}
      label="Last name"
      value={values.lastName}
      error={touched.lastName && errors.lastName ? errors.lastName : undefined}
    />

    <DatePicker
      value={values.dateOfBirth}
      handleChangeDate={date => setFieldValue("date", date)}
    />

    <Dropdown
      value={values.gender}
      label="Gender"
      onChangeText={gender => setFieldValue("gender", gender)}
      data={genders}
      error={touched.gender && errors.gender ? errors.gender : undefined}
    />

    <Dropdown
      value={values.nationality}
      label="Nationality"
      onChangeText={nationality => setFieldValue("nationality", nationality)}
      data={nationalities}
      error={
        touched.nationality && errors.nationality
          ? errors.nationality
          : undefined
      }
    />
  </View>
);
