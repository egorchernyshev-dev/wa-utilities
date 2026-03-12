(async function() {
    var items = [];

    // Сбор данных из исходной таблицы
    $('.table.table-striped.table-bordered tr').each(function() {
        var $link = $(this).find('td a').first();
        var url = $link.attr('href') ? 'https://lk.intelsib.ru' + $link.attr('href') : '';
        var linkText = $link.text() || '';
        var otherText = $(this).find('td:not(:has(a))').text() || '';
        if (url) { // обрабатываем только строки со ссылкой
            items.push({ otherText, linkText, url });
        }
    });

    console.log('Найдено записей:', items.length);

    // Последовательная обработка каждой ссылки
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        console.log(`Загружаю ${i+1}/${items.length}: ${item.url}`);
        try {
            const html = await $.get(item.url); // GET-запрос
            var $html = $('<div>').html(html);
            var projectName = $html.find('#w2 tr:eq(3)').text().slice(6).trim() || '';
            item.project = projectName;
        } catch (e) {
            console.error(`Ошибка при запросе ${item.url}:`, e);
            item.project = 'Ошибка';
        }
    }

    // Формирование вывода с табуляцией (4 столбца)
    var outputLines = ['Последнее\tТикет\tURL\tНазвание проекта'];
    items.forEach(item => {
        outputLines.push(item.otherText + '\t' + item.linkText + '\t' + item.url + '\t' + item.project);
    });

    var finalText = outputLines.join('\n');

    if (typeof copy === 'function') {
        copy(finalText);
        console.log('✅ Данные скопированы в буфер обмена!');
    } else {
        console.log(finalText);
        console.log('❌ Функция copy недоступна. Скопируйте вывод вручную.');
    }
})();