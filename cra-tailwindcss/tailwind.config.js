module.exports = {
  theme: {
      screens: {
          pc: '1024px',
          tab: '720px',
          mob: '320px'
      },
      extend: {
          colors: {
              cyan: '#9cdbff',
          },
          margin: {
              '96': '24rem',
              '128': '32rem',
          },
          width: {
              '1/7': '14.2857143%',
              'container': '600px'
          },
          minHeight: {
              'container': '400px',
          }
      }
  },
  variants: {
      opacity: ['responsive', 'hover']
  }
}
