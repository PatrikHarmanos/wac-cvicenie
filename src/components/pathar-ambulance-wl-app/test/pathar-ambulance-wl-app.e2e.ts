import { newE2EPage } from '@stencil/core/testing';

describe('pathar-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pathar-ambulance-wl-app></pathar-ambulance-wl-app>');

    const element = await page.find('pathar-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
