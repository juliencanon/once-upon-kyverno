import { SfeirThemeInitializer } from "../web_modules/sfeir-school-theme/sfeir-school-theme.mjs";

// One method per module
function schoolSlides() {
  return [
    "00_intro.md",
    "99_speaker.md",
  ];
}

function formation() {
  return [
    //
    ...schoolSlides(),
  ].map((slidePath) => {
    return { path: slidePath };
  });
}

await SfeirThemeInitializer.init(formation);
