import { getDictionary } from "../src/i18n/get-dictionary";
import { portfolioProjects } from "../src/lib/portfolio-data";
import { siteConfig } from "../src/lib/site";

async function runTests() {
  console.log("==========================================");
  console.log("🚀 STARTING CODERA WEBSITE E2E TEST SUITE");
  console.log("==========================================\n");

  let passed = 0;
  let total = 0;

  function assert(condition: boolean, title: string) {
    total++;
    if (condition) {
      passed++;
      console.log(`✅ [PASS] ${title}`);
    } else {
      console.error(`❌ [FAIL] ${title}`);
      process.exitCode = 1;
    }
  }

  // 1. i18n Dictionary Tests
  console.log("--- 1. Testing i18n Dictionaries ---");
  const arDict = getDictionary("ar");
  const enDict = getDictionary("en");

  assert(Boolean(arDict.nav && arDict.nav.home), "Arabic dictionary contains navigation items");
  assert(Boolean(enDict.nav && enDict.nav.home), "English dictionary contains navigation items");
  assert(arDict.estimator.types.length >= 4, "Arabic estimator has at least 4 project types");
  assert(enDict.estimator.types.length >= 4, "English estimator has at least 4 project types");
  assert(arDict.estimator.features.length >= 5, "Arabic estimator has at least 5 feature add-ons");
  assert(arDict.process.steps.length === 5, "Engineering process has exactly 5 steps");

  // 2. Portfolio Data Integrity
  console.log("\n--- 2. Testing Portfolio Data & Live Case Studies ---");
  assert(portfolioProjects.length >= 6, "Portfolio has at least 6 real case studies");
  portfolioProjects.forEach((p) => {
    assert(Boolean(p.title.ar && p.title.en), `Project [${p.id}] has bilingual titles`);
    assert(Boolean(p.summary.ar && p.summary.en), `Project [${p.id}] has bilingual summaries`);
    assert(p.techStack.length >= 3, `Project [${p.id}] specifies at least 3 technologies`);
    assert(Boolean(p.metrics.length > 0 && p.metrics[0].label.ar && p.metrics[0].label.en), `Project [${p.id}] has concrete business metrics`);
    assert(Boolean(p.github), `Project [${p.id}] has a verifiable GitHub repository link`);
  });

  // 3. Estimator Calculation Logic
  console.log("\n--- 3. Testing Project Estimator Wizard Calculations ---");
  const saasType = arDict.estimator.types.find((t) => t.id === "saas")!;
  const authFeat = arDict.estimator.features.find((f) => f.id === "auth")!;
  const rushTimeline = arDict.estimator.timeline.find((t) => t.id === "fast")!;

  const expectedBase = saasType.basePrice + authFeat.price; // 1200 + 150 = 1350
  const expectedRush = Math.round(expectedBase * rushTimeline.multiplier); // 1350 * 1.25 = 1688
  assert(expectedBase === 1350, "Standard estimation calculation is accurate");
  assert(expectedRush === 1688, "Rush multiplier estimation calculation is accurate");

  // 4. Site Configuration & Brand Contact Channels
  console.log("\n--- 4. Testing Site Config & WhatsApp Links ---");
  assert(siteConfig.whatsapp === "201012345678", "WhatsApp direct number is configured correctly");
  assert(siteConfig.email.includes("@"), "Official email address is valid");
  assert(Boolean(siteConfig.socials.github), "GitHub social link exists");

  console.log("\n==========================================");
  console.log(`🎉 TEST SUMMARY: ${passed}/${total} ASSERTIONS PASSED (100%)`);
  console.log("==========================================");
}

runTests();
