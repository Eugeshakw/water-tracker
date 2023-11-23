import * as yup from 'yup';

// const emailPattern = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
export const updateUserProfileSchema = yup.object().shape({
  // gender: yup.string().required(),
  name: yup
    .string()
    .max(32, 'Max length 32')
    .matches(
      /^[a-zA-Zа-яА-ЯіІїЇєЄґҐ]+$/,
      'Name should only contain letters (Latin, Ukrainian or Cyrillic)'
    ),
  email: yup.string().matches(emailPattern, 'Email is not valid'),
  oldPassword: yup
    .string()
    .min(8, 'Min length 8')
    .max(64, 'Max length 64')
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,64}$/,
    //   'Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character'
    // )
    .when('newPassword', (newPassword, field) =>
      newPassword[0] ? field.required() : field
    ),
  newPassword: yup
    .string()
    .min(8, 'Min length 8')
    .max(64, 'Max length 64')
    .nullable()
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,64}$/,
    //   'Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character'
    // )
    .test(
      'differentPassword',
      'The new password must differ from the old one.',
      function (value) {
        const oldPassword = this.parent.oldPassword;
        return !oldPassword || value !== oldPassword;
      }
    ),
  repeatPassword: yup
    .string()
    .min(8, 'Min length 8')
    .max(64, 'Max length 64')
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,64}$/,
    //   'Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character'
    // )
    .test('commonPassword', 'Passwords do not match.', function (value) {
      const newPassword = this.resolve(yup.ref('newPassword'));
      return !newPassword || String(value) === String(newPassword);
    }),
});

export const signUpSchema = yup.object().shape({
  email: yup.string().matches(emailPattern, 'Email is not valid').required(),
  password: yup
    .string()
    .min(8, 'Min length 8')
    .max(64, 'Max length 64')
    .required(),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password must match')
    .required('You should confirm your password!'),
});

export const signInSchema = yup.object().shape({
  email: yup.string().matches(emailPattern, 'Email is not valid').required(),
  password: yup
    .string()
    .min(8, 'Min length 8')
    .max(64, 'Max length 64')
    .required(),
});

//  Напиши валидацию для формы с обновлением  данных о пользователе с помощью библиотеки Yup.
// ПОля формы: имя, почта, пароль, повтор пароля, старый пароль, gender
// Валидация: email поле повинно містити валідний емейл
// password поле повинно містити мінімум 8 символів, максимум 64
// oldPassword поле повинно містити мінімум 8 символів, максимум 64
// gender: поле повинно містити одне із двох значень: mail, femail
// name: поле повинно містити максимум 32 символи
// repeatPassword: повинно співпадати з паролем

// const updateUserProfileSchema = yup.object().shape({
//   email: yup.string().matches(emailPattern, 'Email is not valid').required(),
//   password: yup
//     .string()
//     .min(8, 'Min length 8')
//     .max(64, 'Max length 64')
//     .required(),
//   repeatPassword: yup
//     .string()
//     .oneOf([yup.ref('password'), null], 'Password must match')
//     .required('You should confirm your password!'),
//   oldPassword: yup.string().required()

// });
