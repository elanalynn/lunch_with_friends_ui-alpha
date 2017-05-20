import { LenchPage } from './app.po';

describe('lench App', () => {
  let page: LenchPage;

  beforeEach(() => {
    page = new LenchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
