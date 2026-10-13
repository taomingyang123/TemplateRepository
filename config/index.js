export const supportLocales = [
  { code: "en", language: "en-US", iso: "en-US", name: "English", file: "en-US/index.js" },
  { code: "zh", language: "zh-CN", iso: "zh-CN", name: "简体中文", file: "zh-CN/index.js" },
];

export const language = {
  open: supportLocales.map(locale => locale.code),
  className: "-locales",
};
