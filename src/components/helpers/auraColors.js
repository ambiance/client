export const getColor = aura => {
  switch (aura) {
    case 'imaginative':
      return 'var(--imaginative)';
    case 'lively':
      return 'var(--lively)';
    case 'intimate':
      return 'var(--intimate)';
    case 'exotic':
      return 'var(--exotic)';
    case 'groovy':
      return 'var(--groovy)';
    case 'inspired':
      return 'var(--inspired)';
    case 'upscale':
      return 'var(--upscale)';
    case 'hipster':
      return 'var(--hipster)';
    case 'cheerful':
      return 'var(--cheerful)';
    case 'peaceful':
      return 'var(--peaceful)';
    case 'powerful':
      return 'var(--powerful)';
    case 'classy':
      return 'var(--classy)';
    case 'casual':
      return 'var(--casual)';
    case 'trendy':
      return 'var(--trendy)';
    case 'romantic':
      return 'var(--romantic)';
    default:
      return 'var(--mint)';
  }
};
