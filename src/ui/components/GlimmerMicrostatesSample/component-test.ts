import hbs from '@glimmer/inline-precompile';
import { setupRenderingTest } from '@glimmer/test-helpers';

const { module, test } = QUnit;

module('Component: GlimmerMicrostatesSample', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await this.render(hbs`<GlimmerMicrostatesSample />`);
    assert.equal(this.containerElement.textContent, 'Welcome to Glimmer!\n');
  });
});
