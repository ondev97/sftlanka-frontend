export default function ValidateSignUp(values) {
  let errors = {};

  let pattern = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
  );

  if (!values.firstName.trim()) {
    errors.firstName = "First Name is Required";
  } else if (values.firstName.length > 100) {
    errors.firstName = "First Name Must Be Less Than 10 characters";
  }
  if (!values.lastName.trim()) {
    errors.lastName = "Last Name is Required";
  } else if (values.lastName.length > 100) {
    errors.lastName = "Last Name Must Be Less Than 20 characters";
  }
  if (!values.userName.trim()) {
    errors.userName = "User Name Is Required";
  } else if (values.userName.length < 6) {
    errors.userName = "User Name Must Be More Than 6 characters";
  } else if (
    values.userName.match(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)
  ) {
    errors.userName = "User Name Must Not Be Contain Special Characters";
  }
  if (!values.email.trim()) {
    errors.email = "Email is Required";
  } else if (values.email.length > 35) {
    errors.email = "Email Must Be Less Than 35 characters";
  } else if (!pattern.test(values.email)) {
    errors.email = "Please Enter Valid Email";
  }
  if (!values.address.trim()) {
    errors.address = "Address Is Required";
  } else {
    if (values.address.length >= 255) {
      errors.address = "Address Must Be Less Than 255 Characters";
    }
  }
  if (values.district === "") {
    errors.district = "Please Select District";
  }
  if (!values.phonenumber.trim()) {
    errors.phonenumber = "Phone Number is Required";
  } else if (isNaN(values.phonenumber)) {
    errors.phonenumber = "Please Insert Valied Phone Number";
  } else if (values.phonenumber.length > 12) {
    errors.phonenumber = "Phone Number Must Be Less Than 12 characters";
  }
  if (!values.telegram_number.trim()) {
    errors.telegram_number = "Telegram Number is Required";
  } else if (isNaN(values.telegram_number)) {
    errors.telegram_number = "Please Insert Valied Telegram Number";
  } else if (values.telegram_number.length > 12) {
    errors.telegram_number = "Telegram Number Must Be Less Than 12 characters";
  }
  if (!values.parent_number.trim()) {
    errors.parent_number = "Parent Phone Number is Required";
  } else if (isNaN(values.parent_number)) {
    errors.parent_number = "Please Insert Valied Parent Phone Number";
  } else if (values.parent_number.length > 12) {
    errors.parent_number =
      "Parent Phone Number Must Be Less Than 12 characters";
  }
  if (!values.pw.trim()) {
    errors.pw = "Password Is Required";
  } else if (values.pw.length < 8) {
    errors.pw = "Password Must Be More Than 8 characters";
  } else {
    if (!values.cpw.trim()) {
      errors.cpw = "Retype Password Is Required";
    } else if (values.pw !== values.cpw) {
      errors.cpw = "Password Does Not Match";
    }
  }
  return errors;
}
