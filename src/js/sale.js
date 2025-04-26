const items = document.querySelectorAll('.sale-section-list-item');
const bigWatch = document.querySelector('.big-watch img');

items.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const img = item.getAttribute('data-img'); // Получаем путь к изображению
        bigWatch.src = img; // Меняем изображение большой картинки
    });

    item.addEventListener('mouseleave', () => {
        // При уходе с картинки возвращаем исходное изображение
        bigWatch.src = "/img/sale/big-watch-dt.png"; // Исходная картинка
    });
});
