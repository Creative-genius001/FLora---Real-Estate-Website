// add this file to your project and name it "jquery.d.ts"
declare module 'jquery' {
  interface JQuery {
    slick(options?: any): any;
    // add more type declarations for other jQuery functions and methods you need
  }
}
