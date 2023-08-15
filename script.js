let expression = '';

function appendValue(value) {
  expression += value;
  document.getElementById('result').value = expression;
}

function appendOperator(operator) {
  if (expression.length === 0) return;
  
  const lastChar = expression[expression.length - 1];
  if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
    expression = expression.slice(0, -1);
  }
  
  expression += operator;
  document.getElementById('result').value = expression;
}

function calculate() {
  if (expression.length === 0) return;
  
  let result;
  try {
    result = eval(expression);
  } catch (error) {
    result = 'Invalid Expression';
  }
  
  document.getElementById('result').value = result;
}

function clearResult() {
  expression = '';
  document.getElementById('result').value = '';
}