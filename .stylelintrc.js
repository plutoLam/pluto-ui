module.exports = {
  extends: [
    "stylelint-config-standard-scss", // 官方推荐
    "stylelint-config-standard",
  ],
  "plugins": [
    "stylelint-order",
    "stylelint-scss"
  ],
  "rules": {
    "order/properties-order": [
      "top",
      "position"
    ],
    "indentation": 2,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    "ignoreAnnotations": ["/regex/", /regex/, "string", "/^default/"],
  },
  
}