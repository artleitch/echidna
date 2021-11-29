const StyleDictionary = require("style-dictionary");
const baseConfig = require("./config.json");

const notDefault = (value, defaultValue) =>
  value !== defaultValue ? value : "";

const fontFamily = ({ fontFamily }, { fontFamilies } = {}) =>
  fontFamilies && fontFamilies[fontFamily]
    ? fontFamilies[fontFamily]
    : fontFamily;

StyleDictionary.registerTransform({
  name: "web/font",
  type: "value",
    matcher: function (token) {
      console.log('MATCHER', token.type)
    return token.type === "custom-fontStyle";
  },
    transformer: function ({ value: font }, { options }) {
      console.log('YOU HIT ME')
    return `${notDefault(font.fontStretch, "normal")} ${notDefault(
      font.fontStyle,
      "normal"
    )} ${font.fontWeight} ${font.fontSize}/${font.lineHeight} ${fontFamily(
      font,
      options
    )}`.trim();
  },
});

StyleDictionary.registerTransform({
  name: "size/px",
  type: "value",
  matcher: (token) => {
      
    return token.unit === "pixel" && token.value !== 0;
  },
  transformer: (token) => {
    return `${token.value}px`;
  },
});

StyleDictionary.registerTransform({
  name: "size/percent",
  type: "value",
  matcher: (token) => {
    return token.unit === "percent" && token.value !== 0;
  },
  transformer: (token) => {
    return `${token.value}%`;
  },
});

StyleDictionary.registerTransformGroup({
  name: "custom/css",
  transforms: StyleDictionary.transformGroup["css"].concat([
    "size/px",
    "size/percent",
  ]),
});

StyleDictionary.registerTransformGroup({
  name: "custom/less",
  transforms: StyleDictionary.transformGroup["less"].concat([
    "size/px",
    "size/percent",
  ]),
});

StyleDictionary.registerTransformGroup({
  name: "custom/scss",
  transforms: StyleDictionary.transformGroup["less"].concat([
    "size/px",
      "size/percent",
    'web/font',
  ]),
});

const StyleDictionaryExtended = StyleDictionary.extend(baseConfig);

StyleDictionaryExtended.buildAllPlatforms();
