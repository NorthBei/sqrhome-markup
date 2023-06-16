# sqrhome-markup
 <img width="1920" alt="image" src="https://github.com/NorthBei/sqrhome-markup/assets/15665709/918b2f1e-656a-4528-9a1d-2556155df72d">


## Project Intro

### Introduction

It's Sqrhome - 紅紅數位 offical website's markup. This markup's goal was used as a communication bridge between front end engineer and designer.
The special point of this website is including much gorgeous animation base on CSS and Lottie.

After this markup finished, I porting it into wordpress (CMS), integration HTML with PHP and make thing work well.
The start date of this project was 2018/03/13, and production already released here [Sqrhome](https://sqrhome.com/)

### Person In charge
- Website Dev by NorthBei from [Metartemis](https://metartemis.co)
- Website Design by Bin from Sqrhome

### Relative Link
- [Sqrhome](https://sqrhome.com/)
  - [about](https://sqrhome.com/about/)
  - [news](https://sqrhome.com/news/)
  - [web](https://sqrhome.com/web/)

### Screenshots/Film

**Home Page**

- PC

https://github.com/NorthBei/sqrhome-markup/assets/15665709/82f0eab8-ea4a-4879-b25d-5dd147154ada

- Mobile

https://github.com/NorthBei/sqrhome-markup/assets/15665709/b1ccf065-1134-4bca-8c50-9d99010691fe


**Home Page Intro Animation**

- PC

https://github.com/NorthBei/sqrhome-markup/assets/15665709/a75d8199-e1d7-473c-9906-b1fee062038b


- Mobile

https://github.com/NorthBei/sqrhome-markup/assets/15665709/3f6441b2-3b6d-40dc-bf57-0689a3c46d91


**About Page**

- PC

https://github.com/NorthBei/sqrhome-markup/assets/15665709/dcdd12a4-faba-4d63-911a-5ad5af54c17e


- Mobile

https://github.com/NorthBei/sqrhome-markup/assets/15665709/b3ad7112-9631-4e10-8f13-7a23523b92dc


**News Page**

- PC

https://github.com/NorthBei/sqrhome-markup/assets/15665709/4bd6df1d-08af-4936-a343-651b5335f60d
 
- Moblie

https://github.com/NorthBei/sqrhome-markup/assets/15665709/1f33dc97-7ee5-4852-8e47-7a8f60c3be48


**Media Page**

- PC

https://github.com/NorthBei/sqrhome-markup/assets/15665709/cc255f1f-374d-47b3-8cec-07b6852c0f7c

- Moblie

https://github.com/NorthBei/sqrhome-markup/assets/15665709/8c9911a4-a9e1-4cc2-86c0-14405a94a521


**Products Page**

- PC

https://github.com/NorthBei/sqrhome-markup/assets/15665709/bbc50502-d518-497d-8cde-7d052c108e46


- Moblie

https://github.com/NorthBei/sqrhome-markup/assets/15665709/755ea4b7-044b-425a-91bb-ba49bc4a2ad4


## Development Instruction

### Environment

|Service|Version|
|-|-|
|Node.js|v18.16.0|
|yarn| v1.22.19|

### Getting Started

Install packages & Run the development server:

```zsh
yarn install
yarn dev
```

### Project setup

Install all package
```zsh
yarn install
```

### Start Development

Run development web server at http://localhost:3000 for development

```zsh
yarn dev
```

### Lint/Format files under `src` folder

Run format/lint for all `.pug`, `.scss`, `.js` files

```zsh
// lint scss
yarn lint:style

// format pug
yarn format:pug

// format js
yarn format:js

// run 3 above command together
yarn format:all
```

### Build Production

After lint/format, bundle pug, scss, js to generate webpage by webpack

```zsh
yarn build
```

### Test Built Result

Run local static file server for testing built result at http://localhost:6060

```zsh
yarn serve
```

## Reference
- Webpack
  - [How to use Pug & Sass in Webpack 5 - 2022 🐶](https://dev.to/thiagoow/how-to-use-pug-sass-in-webpack-5-2022-5cpk)
  - [pug-plugin](https://www.npmjs.com/package/pug-plugin#recipe-inline-js)
    - [How to use responsive images with Pug](https://webdiscus.github.io/pug-plugin/responsive-image/)
  - [copy-webpack-plugin](https://webpack.js.org/plugins/copy-webpack-plugin/)
- Pug
  - [pug offical website](https://pugjs.org/api/getting-started.html)
  - [Prettier Plugin Pug](https://prettier.github.io/plugin-pug/guide/)
- stylelint
  - [Get started](https://stylelint.io/user-guide/get-started)
  - [stylelint-config-standard](https://www.npmjs.com/package/stylelint-config-standard)
  - [vscode-stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
  - [no-descending-specificity error reported on two different classes](https://stackoverflow.com/questions/57871075/no-descending-specificity-error-reported-on-two-different-classes)
  - [css specificity calculator](https://specificity.keegan.st/)
- Sass
  - [如何利用 Sass 的 @mixin 功能，讓撰寫 RWD 網站變的輕而易舉](https://medium.com/@wywsmail/%E5%A6%82%E4%BD%95%E5%88%A9%E7%94%A8-sass-%E7%9A%84-mixin-%E5%8A%9F%E8%83%BD-%E8%AE%93%E6%92%B0%E5%AF%AB-rwd-%E7%B6%B2%E7%AB%99%E8%AE%8A%E7%9A%84%E8%BC%95%E8%80%8C%E6%98%93%E8%88%89-d44912b01f3c)
- Js libs
  - [shuffle.js](https://github.com/Vestride/Shuffle)
  - [lottie](https://github.com/airbnb/lottie-web)
    - [translate3d(0,0,0) can make small SVG blurry #2718](https://github.com/airbnb/lottie-web/issues/2718)
    - [Event 'complete' and 'onComplete' not firing #474](https://github.com/airbnb/lottie-web/issues/474)
 
