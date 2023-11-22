import zxcvbn from 'zxcvbn';

export function checkPasswordStrength(password) {
  const result = zxcvbn(password);

  let color = ''; // Изначально цвет не определен

  switch (result.score) {
    case 0:
      color = 'red'; // Очень слабый пароль
      break;
    case 1:
      color = 'orange'; // Слабый пароль
      break;
    case 2:
      color = 'yellow'; // Средний пароль
      break;
    case 3:
      color = 'green'; // Сильный пароль
      break;
    case 4:
      color = 'darkgreen'; // Очень сильный пароль
      break;
    default:
      color = ''; // По умолчанию цвет не определен
      break;
  }

  return {
    score: result.score,
    color,
  };
}
