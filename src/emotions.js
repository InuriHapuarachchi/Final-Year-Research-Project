const emotions = {
  happy: 1,
  sad: 2,
  unloved: 3,
  frightened: 4,
  loved: 1,
};

const getEmotionValue = (emo) => {
  return emotions[emo];
};

export default emotions;
export { getEmotionValue };
