// @ts-check
/// <reference types="@prettier/plugin-pug/src/prettier" />

/**
 * @type {import('prettier').Options}
 */
module.exports = {
  plugins: [require.resolve('@prettier/plugin-pug')],
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  printWidth: 120,

  pugSingleQuote: false,
  pugCommentPreserveSpaces: 'trim-all',
  pugSortAttributes: 'asc',

};