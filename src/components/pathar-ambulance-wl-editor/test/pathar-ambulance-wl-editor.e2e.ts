import { newE2EPage } from '@stencil/core/testing';

describe('pathar-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pathar-ambulance-wl-editor></pathar-ambulance-wl-editor>');

    const element = await page.find('pathar-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
