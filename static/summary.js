function addSummaryItem(item) {
    var container = $('#summary ul'),
        itemTemplate = $('#templates .summary-item');

    var newItem = itemTemplate.clone().appendTo(container);
    newItem.find('.url').attr('href', item.url);
    newItem.find('.description').text(item.description);
}

function setSummaries(summaries) {
    $('#summary ul').empty();
    summaries.forEach(addSummaryItem);
}
