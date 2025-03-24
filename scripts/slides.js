import { SfeirThemeInitializer } from "../web_modules/sfeir-school-theme/sfeir-school-theme.mjs";

// One method per module
function schoolSlides() {
  return [
    "00_Intro.md",
    "10_Retour_sur_k8s.md",
    "20_Histoire_Admission.md",
    "30_Kyverno.md",
    "40_Demos.md",
    "50_Policy_reporter.md",
    "60_Conclusions.md",
    "90_Speaker.md",
    "99_Questions.md"
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
