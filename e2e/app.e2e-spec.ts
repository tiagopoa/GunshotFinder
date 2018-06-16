import { GUNSHOTFINDERPage } from './app.po';

describe('gunshotfinder App', function() {
  let page: GUNSHOTFINDERPage;

  beforeEach(() => {
    page = new GUNSHOTFINDERPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
