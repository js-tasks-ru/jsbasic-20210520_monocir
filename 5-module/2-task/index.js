function toggleText() {
  document.querySelector('.toggle-text-button').addEventListener('click', () => {
    document.getElementById('text').toggleAttribute('hidden');
  });
};