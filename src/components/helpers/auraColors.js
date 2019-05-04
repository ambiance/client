export const getColor = aura => {
  switch (aura) {
    case 'casual':
      return 'var(--casual)';
    case 'cheerful':
      return 'var(--cheerful)';
    case 'classy':
      return 'var(--classy)';
    case 'exotic':
      return 'var(--exotic)';
    case 'groovy':
      return 'var(--groovy)';
    case 'hipster':
      return 'var(--hipster)';
    case 'imaginative':
      return 'var(--imaginative)';
    case 'inspired':
      return 'var(--inspired)';
    case 'intimate':
      return 'var(--intimate)';
    case 'lively':
      return 'var(--lively)';
    case 'peaceful':
      return 'var(--peaceful)';
    case 'powerful':
      return 'var(--powerful)';
    case 'romantic':
      return 'var(--romantic)';
    case 'trendy':
      return 'var(--trendy)';
    case 'touristy':
      return 'var(--touristy)';
    case 'upscale':
      return 'var(--upscale)';
    default:
      return 'var(--mint)';
  }
};
