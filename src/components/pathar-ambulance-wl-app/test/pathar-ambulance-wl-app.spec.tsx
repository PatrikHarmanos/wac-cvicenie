import { newSpecPage } from '@stencil/core/testing';
import { PatharAmbulanceWlApp } from '../pathar-ambulance-wl-app';

describe('pathar-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [PatharAmbulanceWlApp],
      html: `<pathar-ambulance-wl-app base-path="/"></pathar-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("pathar-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [PatharAmbulanceWlApp],
      html: `<pathar-ambulance-wl-app base-path="/ambulance-wl/"></pathar-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("pathar-ambulance-wl-list");
  });
});
