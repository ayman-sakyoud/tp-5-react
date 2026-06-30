const reportWebVitals = (onPerfEntry) => {
  if (typeof onPerfEntry === 'function') {
    import('web-vitals').then((webVitals) => {
      Object.keys(webVitals).forEach((key) => {
        const metricFunction = webVitals[key];
        if (typeof metricFunction === 'function') {
          metricFunction(onPerfEntry);
        }
      });
    });
  }
};

export default reportWebVitals;