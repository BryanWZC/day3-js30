// Grab inputs
const inputs = document.querySelectorAll('.controls input');

// Handles updates to spacing, blur and base color
function handleUpdate (){
  const suffix = this.dataset.sizing || ''; // No suffix for hexcode
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// Event Listeners
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
inputs.forEach(input => input.addEventListener('touchmove', handleUpdate));
