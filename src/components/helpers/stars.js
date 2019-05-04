import starImages from '../../data/starImages';

export const handleStars = stars => {
  switch (stars) {
    case 0.5:
      return starImages[1].src;
    case 1:
      return starImages[2].src;
    case 1.5:
      return starImages[3].src;
    case 2:
      return starImages[4].src;
    case 2.5:
      return starImages[5].src;
    case 3:
      return starImages[6].src;
    case 3.5:
      return starImages[7].src;
    case 4:
      return starImages[8].src;
    case 4.5:
      return starImages[9].src;
    case 5:
      return starImages[10].src;

    default:
      return starImages[0].src;
  }
};
