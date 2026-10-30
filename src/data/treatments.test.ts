import test from 'node:test';
import assert from 'node:assert/strict';
import { TREATMENTS, getTreatmentBySlug } from './treatments.js';

test('TREATMENTS array contains exactly 6 individual dental treatments', () => {
  assert.equal(TREATMENTS.length, 6);
});

test('All treatments have valid slugs, HTML filenames, titles, and eyebrows', () => {
  const expectedSlugs = [
    'dental-implants.html',
    'invisible-orthodontics.html',
    'teeth-whitening.html',
    'restorative-dentistry.html',
    'periodontics.html',
    'hygiene-prevention.html'
  ];

  TREATMENTS.forEach((treatment, idx) => {
    assert.equal(treatment.slug, expectedSlugs[idx]);
    assert.ok(treatment.title && treatment.title.length > 0, `Missing title for ${treatment.slug}`);
    assert.ok(treatment.eyebrow && treatment.eyebrow.length > 0, `Missing eyebrow for ${treatment.slug}`);
    assert.ok(treatment.heroIntro && treatment.heroIntro.length > 0, `Missing heroIntro for ${treatment.slug}`);
    assert.ok(treatment.overviewHeading && treatment.overviewHeading.length > 0, `Missing overviewHeading for ${treatment.slug}`);
    assert.ok(treatment.overviewParagraph1 && treatment.overviewParagraph1.length > 0, `Missing overview paragraph for ${treatment.slug}`);
    assert.ok(treatment.heroImg && treatment.heroImg.startsWith('http'), `Missing valid hero image for ${treatment.slug}`);
    assert.ok(treatment.secondaryImg && treatment.secondaryImg.startsWith('http'), `Missing secondary image for ${treatment.slug}`);
    assert.ok(treatment.benefits.length >= 4, `Expected at least 4 benefits for ${treatment.slug}, got ${treatment.benefits.length}`);
    assert.ok(treatment.processSteps.length >= 3, `Expected at least 3 process steps for ${treatment.slug}, got ${treatment.processSteps.length}`);
    assert.ok(treatment.faqs.length >= 4, `Expected at least 4 FAQs for ${treatment.slug}, got ${treatment.faqs.length}`);
    assert.ok(treatment.suitability && treatment.suitability.headline, `Missing suitability headline for ${treatment.slug}`);
  });
});

test('Previous and Next navigation links form a continuous sequence', () => {
  for (let i = 0; i < TREATMENTS.length; i++) {
    const current = TREATMENTS[i];
    const prevExpected = TREATMENTS[(i - 1 + TREATMENTS.length) % TREATMENTS.length];
    const nextExpected = TREATMENTS[(i + 1) % TREATMENTS.length];

    assert.equal(current.prevSlug, prevExpected.slug, `Prev link mismatch for ${current.title}`);
    assert.equal(current.nextSlug, nextExpected.slug, `Next link mismatch for ${current.title}`);
  }
});

test('getTreatmentBySlug handles paths, filenames, and IDs gracefully', () => {
  assert.equal(getTreatmentBySlug('/dental-implants.html')?.title, 'Dental Implants');
  assert.equal(getTreatmentBySlug('dental-implants.html')?.title, 'Dental Implants');
  assert.equal(getTreatmentBySlug('dental-implants')?.title, 'Dental Implants');
  assert.equal(getTreatmentBySlug('/hygiene-prevention.html')?.title, 'Hygiene & Prevention');
  assert.equal(getTreatmentBySlug('unknown-route'), null);
});
