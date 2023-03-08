import moment from 'moment';

export default {
  convertDate(val, format = 'YYYY-MM-DD') {
    return moment(val).locale('id').format(format);
  },
  today(format = 'YYYY-MM-DD HH:mm:ss') {
    return moment().locale('id').format(format);
  },
  toCurrency(num, separator = '.', decimal = 0, currency = '') {
    num = parseFloat(num);
    if (isNaN(num) == true || num == null) {
      return `${currency} 0`;
    } else {
      let result = num.toFixed(decimal).split('.');
      return (
        `${currency}` +
        result[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + `${separator}`) +
        (result[1] ? ',' + result[1] : '')
      );
    }
  },
  unmaskMoney(amount) {
    return amount ? parseInt(amount.toString().split('.').join('')) : 0;
  },
};
