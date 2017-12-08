var dataRows = document.querySelectorAll('.data_row');
if (dataRows.length) {
    dataRows.forEach(function(val, index) {
        var num = Math.random() > 0.2 ? 1 : 2;
        dataRows[index]
            .querySelectorAll('td')[num]
            .querySelector('a')
            .click()
    });
} else {
    dataRows = document.querySelectorAll('.formstyle');
    dataRows.forEach(function(val, index) {
        var num = Math.random() > 0.8 ? 1 : 0;
        dataRows[index]
            .querySelectorAll('dd')[num]
            .querySelector('a')
            .click()
    });
}

var commentText = '该老师很认真，我还是比较喜欢该老师的';

var improvementText = '声音再大一点就好了';

var text = [
    commentText,
    improvementText
];

document
    .querySelectorAll('.surveryMain textarea')
    .forEach(function(val,index) {
    val.value = text[index];
});

document.querySelector('#next_button').click();
