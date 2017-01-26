import { CrowdFundedPage } from './app.po';

describe('crowd-funded App', function() {
  let page: CrowdFundedPage;

  beforeEach(() => {
    page = new CrowdFundedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
