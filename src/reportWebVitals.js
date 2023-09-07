/*
 * File: reportWebVitals.js
 * Project: refree
 * Created: Wednesday, September 6th 2023, 7:23:01 am
 * Last Modified: Thursday, September 7th 2023, 4:52:47 am
 * Copyright © 2023 AMDE Agência
 */

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
