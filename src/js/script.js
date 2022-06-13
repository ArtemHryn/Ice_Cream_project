var granimInstance = new Granim({
  element: '#canvas-basic',
  direction: 'left-right',
  isPausedWhenNotInView: true,
  states: {
    'default-state': {
      gradients: [
        ['#FFA5BA', '#ad5d74'],
        ['#FFB8CA', '#FFB8CA'],
        ['#FFA5BA', '#FFB8CA'],
      ],
    },
  },
});
