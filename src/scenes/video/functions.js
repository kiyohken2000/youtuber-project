const calculateHeight = ({width}) => {
  const aspectRatio = 9 / 16; // 16:9のアスペクト比
  const height = width * aspectRatio;
  return height;
};

export { calculateHeight }