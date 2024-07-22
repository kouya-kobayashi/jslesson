const button = document.getElementById('button');

  button.addEventListener('mouseover', () => {
    button.style.color = 'red';
  });

  button.addEventListener('mouseout', () => {
    button.style.color = '';
  });