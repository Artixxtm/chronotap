let instance = null;

export function setScrollNormalizer(normalizer) {
  instance = normalizer;
}

export function getScrollNormalizer() {
  return instance;
}