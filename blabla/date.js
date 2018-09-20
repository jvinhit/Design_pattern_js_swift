String.prototype.toDate = function(format) {
    var normalized = this.replace(/[^a-zA-Z0-9]/g, '-');
    var normalizedFormat = format.toLowerCase().replace(/[^a-zA-Z0-9]/g, '-');
    var formatItems = normalizedFormat.split('-');
    var dateItems = normalized.split('-');

   
    //=================
    var monthIndex = formatItems.indexOf('mm');
    // +++++++++++++++++ Conflic
    var dayIndex = formatItems.indexOf('dd');
    var yearIndex = formatItems.indexOf('yyyy');
    var hourIndex = formatItems.indexOf('hh');
    var minutesIndex = formatItems.indexOf('ii');
    var secondsIndex = formatItems.indexOf('ss');
    //=================
	16
    //=================
    var today = new Date();

    var year = yearIndex > -1 ? dateItems[yearIndex] : today.getFullYear();
    var month = monthIndex > -1 ? dateItems[monthIndex] - 1 : today.getMonth() - 1;
    var day = dayIndex > -1 ? dateItems[dayIndex] : today.getDate();

    var hour = hourIndex > -1 ? dateItems[hourIndex] : today.getHours();
    var minute = minutesIndex > -1 ? dateItems[minutesIndex] : today.getMinutes();
    var second = secondsIndex > -1 ? dateItems[secondsIndex] : today.getSeconds();

    return new Date(year, month, day, hour, minute, second);
};
a = '03/09/2017';
// b = '2018/03/02';
console.log(a.toDate('dd/mm/yyyy'));
// console.log(b.toDate('yyyy/mm/dd hh:ii:ss'));
// console.log(a.toDate('dd/mm/yyyy').getMonth());
console.log('$$$: ', Math.floor(a.toDate('dd/mm/yyyy').getMonth() / 3) + 1);
// console.log('22/03/2016 14:03:01'.toDate('dd/mm/yyyy hh:ii:ss'));
// console.log('2016-03-29 18:30:00'.toDate('yyyy-mm-dd hh:ii:ss'));

////
// console.log('1) ' + new Date().toDateString());
// console.log('2) ' + new Date().toISOString());
// console.log('3) ' + new Date().toJSON());
// console.log('4) ' + new Date().toLocaleDateString('vi-vn'));
// console.log('5) ' + new Date().toLocaleString());
// console.log('6) ' + new Date().toLocaleTimeString());
// console.log('7) ' + new Date().toString());
// console.log('8) ' + new Date().toISOString().slice(0, 10));
// console.log('9) ' + new Date().getMonth());

// console.log('10) ', Math.floor((6 + 1) / 3) * 3 + 1);
