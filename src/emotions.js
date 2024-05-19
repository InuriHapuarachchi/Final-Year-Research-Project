const emotions = {
  happy: 1,
  sad: 0,
  unloved: 3,
  frightened: 4,
  loved: 2,
};

const getEmotionValue = (emo) => {
  return emotions[emo];
};

export default emotions;
export { getEmotionValue };
