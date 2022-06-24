import { MarketPlace } from 'types/marketPlaceApiTypes';

export const onMobile = () => {
  if (typeof window !== 'undefined') {
    return window.innerWidth < 767;
  }
};

export const fullPageWidth = () => {
  const width = typeof window !== 'undefined' ? window.outerWidth : null;

  return width;
};

export const fullPageHeight = () => {
  const height = typeof window !== 'undefined' ? window.outerHeight : null;

  return height;
};

export function replaceWithTheCapitalLetter(values: string) {
  if (!values) return;
  return values?.charAt(0).toUpperCase() + values.slice(1);
}

export function addDashBetweenStrings(value: string) {
  return value?.replace(/\s/g, '-');
}

export function addSpaceBetweenStrings(value: string) {
  return value?.replace(/-/g, ' ');
}

export const getDistance = (distance: number | null) => {

if (!distance) return

  if (distance < 1000) {
    return `${distance.toFixed()}m`; // eg. 234m
  }

  if (distance > 1000 && distance < 10000) {
    return `${(distance / 1000).toFixed(2)}km`; // also round eg. 1.23km
  }
 
  if (distance > 10000) {
    return `${(distance / 1000).toFixed(1)}km`; // eg 12.3km 134.3km
  }
};
export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export const MONTHS30 = ['April', 'June', 'September', 'November'];

export const generateArrayOfYears = () => {
  let max = new Date().getFullYear();
  let min = max - 80;
  let years = [];

  for (let i = max; i >= min; i--) {
    years.push(i);
  }
  return years;
};

export const generateDates = (start: number, end: number) => {
  let numbers = [];
  for (let i = start; i <= end; i++) {
    numbers.push(i);
  }
  return numbers;
};

export const getNumberOfYear = (year: string) => {
  if (year === 'January') {
    return `01`;
  }
  if (year === 'February') {
    return `02`;
  }
  if (year === 'March') {
    return `03`;
  }
  if (year === 'April') {
    return `04`;
  }
  if (year === 'May') {
    return `05`;
  }
  if (year === 'June') {
    return `06`;
  }
  if (year === 'July') {
    return `07`;
  }
  if (year === 'August') {
    return `08`;
  }
  if (year === 'September') {
    return `09`;
  }
  if (year === 'October') {
    return 10;
  }
  if (year === 'November') {
    return 11;
  }
  if (year === 'December') {
    return 12;
  }
};

export const formatDateToMonthDayAndYear = (x: any, y: any) => {
  var z: any = {
    M: x.getMonth() + 1,
    d: x.getDate(),
    h: x.getHours(),
    m: x.getMinutes(),
    s: x.getSeconds()
  };
  y = y.replace(/(M+|d+|h+|m+|s+)/g, function(v: any) {
    return ((v.length > 1 ? '0' : '') + z[v.slice(-1)]).slice(-2);
  });

  return y.replace(/(y+)/g, function(v: any) {
    return x
      .getFullYear()
      .toString()
      .slice(-v.length);
  });
};
