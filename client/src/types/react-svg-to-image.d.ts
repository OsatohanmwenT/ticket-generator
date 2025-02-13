declare module 'react-svg-to-image' {
    interface Options {
      scale?: number;
      format?: string;
      quality?: number;
      download?: boolean;
      ignore?: string;
      background?: string;
    }
  
    function toImg(selector: string, name: string, options?: Options): Promise<any>;
  
    export = toImg;
  }
  