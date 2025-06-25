document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    const timelineItems = document.querySelectorAll('.timeline .container');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
  
        const filter = button.getAttribute('data-filter') || button.textContent.toLowerCase();
  
        timelineItems.forEach(item => {
          const period = item.getAttribute('data-period');
          if (filter === 'all' || period === filter) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
        AOS.refresh();
      });
    });
  });
  