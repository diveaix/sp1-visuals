// main.js

export function initStackSection() {
  const descriptions = {
    'Rust Code': 'Write Rust code that defines your computation.',
    'SP1 Compiler': 'Compile Rust code to a format SP1 can understand.',
    'Execution Trace': 'Generate a trace of the computation\'s execution.',
    'Proof Generation': 'Create a ZK proof from the execution trace.',
    'Verifier': 'Use the proof to verify the result efficiently.'
  };

  const buttons = document.querySelectorAll('.stack-step');
  const descBar = document.querySelector('.hover-description');

  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      const key = button.innerText.trim().replace(/^\d+\.\s*/, '');
      descBar.textContent = descriptions[key] || '';
      descBar.classList.add('visible');
    });

    button.addEventListener('mouseleave', () => {
      descBar.classList.remove('visible');
    });
  });
}

export function initTraceSection() {
  const traceVisual = document.querySelector('.trace-visual');
  let isExpanded = true;

  function animateCubes() {
    traceVisual.innerHTML = '';

    for (let i = 0; i < 8; i++) {
      const cube = document.createElement('div');
      cube.className = 'trace-cube';
      cube.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      traceVisual.appendChild(cube);

      setTimeout(() => {
        cube.style.opacity = 1;
        cube.style.transform = isExpanded ? 'scale(1)' : 'scale(0.5)';
      }, i * 100);

      cube.addEventListener('mouseenter', () => {
        cube.style.transform = 'scale(1.2)';
      });

      cube.addEventListener('mouseleave', () => {
        cube.style.transform = isExpanded ? 'scale(1)' : 'scale(0.5)';
      });
    }

    isExpanded = !isExpanded;
  }

  animateCubes();
  setInterval(animateCubes, 5000);
}

export function applyAnimatedBackground(style = 'starscape') {
  const body = document.body;

  if (style === 'starscape') {
    body.classList.add('starscape-bg');
  } else if (style === 'glowgrid') {
    body.classList.add('glowgrid-bg');
  } else if (style === 'gradientflow') {
    body.classList.add('gradientflow-bg');
  }
} 

window.addEventListener('DOMContentLoaded', () => {
  applyAnimatedBackground('gradientflow');
});
