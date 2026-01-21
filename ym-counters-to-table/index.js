var pr_array = [];
$('.counters-list-table__items .counters-list-table-item').each(function(){
    pr_array.push([
        $(this).find('a.counters-list-table-item__counter-title').text().trim(),
        $(this).find('a.counters-list-table-item__site-link').text().trim(),
        $(this).find('.counters-list-table-item__counter-id').text().trim(),
        $(this).find('.counters-list-table-item__cell-type-visits .counter-week-stats__default').text().replaceAll(/\D/g,''),
        $(this).find('.counters-list-table-item__cell-type-hits .counter-week-stats__default').text().replaceAll(/\D/g,''),
        $(this).find('.counters-list-table-item__cell-type-users .counter-week-stats__default').text().replaceAll(/\D/g,''),
        $(this).find('.counters-list-table-item__cell-type-owner-login').text().trim()
    ]);
});

// 1. Формируем заголовки столбцов (первая строка)
var headers = ['Название', 'Ссылка', 'Номер счетчика', 'Визиты', 'Просмотры', 'Посетители', 'Владелец'];
var outputText = headers.join('\t') + '\n'; // Используем табуляцию (\t) как разделитель

// 2. Добавляем данные, экранируя возможные символы табуляции в тексте
pr_array.forEach(function(row) {
    // Заменяем символы табуляции в ячейках на пробелы, чтобы не нарушить структуру
    var safeRow = row.map(function(cell) {
        return String(cell).replace(/\t/g, ' ');
    });
    outputText += safeRow.join('\t') + '\n'; // Объединяем ячейки строки табуляцией
});

// 3. Выводим результат в консоль
console.log(outputText);
console.log('--- Готово для копирования ---');
console.log('Скопируйте весь текст выше, начиная с заголовков, и вставьте в Google Таблицы.');