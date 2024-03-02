import { newSpecPage } from '@stencil/core/testing';
import { PatharAmbulanceWlList } from '../pathar-ambulance-wl-list';

describe('pathar-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PatharAmbulanceWlList],
      html: `<pathar-ambulance-wl-list></pathar-ambulance-wl-list>`,
    });

    const wlList = page.rootInstance as PatharAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);

  });
});
