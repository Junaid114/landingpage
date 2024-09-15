import React from 'react';


const VerticalLine = () => {
  return (
    // <div style={styles.container}>
    //   <div style={styles.line}></div>
    //   <div style={styles.centerIcon}>
    //     &lt;&gt; 
    //   </div>
    //   <div style={styles.line}></div>
    // </div>
    <div style={styles.container}>
    <div style={styles.line}></div>
  </div>
  );
};

const styles = {
  container: {
    position: relative
  },
  line: {
    position: absolute,
    top: 0,
    left: '50%',
    width: '2px',
    height: '100%',
    backgroundColor: '#ff00ff',
    boxShadow: '0 0 10px rgba(255, 0, 255, 0.5)'
  },
};

export default VerticalLine;
