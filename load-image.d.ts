declare module 'load-image' {
  function loadImage(src: string, callback: (img: HTMLImageElement) => void, options?: any): void;
  export = loadImage;
}
