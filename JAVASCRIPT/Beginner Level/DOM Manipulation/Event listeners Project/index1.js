// Function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Random color button event
document.getElementById('randomColorBtn').addEventListener('click', function() {
  document.body.style.backgroundColor = getRandomColor();
});

// Color picker apply button event
document.getElementById('applyColorBtn').addEventListener('click', function() {
  const selectedColor = document.getElementById('colorPicker').value;
  document.body.style.backgroundColor = selectedColor;
});