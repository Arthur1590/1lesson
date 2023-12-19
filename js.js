
while (true) {
  try {
      const num = parseFloat(prompt("Введите число:"));
      const degree = parseInt(prompt("Введите степень:"));
      if (isNaN(num) || isNaN(degree)) {
          alert('Вы допустили ошибку! Поробуйте');
      } 
      const result = num ** degree;
      alert(`Вы ввели ${num}. Степень ${degree}. Результат: ${result}`);

      break;
  } catch (error) {
      alert(error.message);
  }
}





