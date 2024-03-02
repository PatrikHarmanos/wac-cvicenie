import { newE2EPage } from '@stencil/core/testing';

describe('pathar-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pathar-ambulance-wl-list></pathar-ambulance-wl-list>');

    const element = await page.find('pathar-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
