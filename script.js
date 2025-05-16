const categories = document.querySelectorAll('#categories li');
const articles = document.querySelectorAll('main article');

categories.forEach(cat => {
  cat.addEventListener('click', () => {
    categories.forEach(c => c.classList.remove('active'));
    cat.classList.add('active');

    const category = cat.getAttribute('data-category');
    articles.forEach(article => {
      if (category === 'all' || article.getAttribute('data-category') === category) {
        article.style.display = 'block';
      } else {
        article.style.display = 'none';
      }
    });
  });
});
