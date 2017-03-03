import { BrionzPage } from './app.po';

describe('brionz App', () => {
  let page: BrionzPage;

  beforeEach(() => {
    page = new BrionzPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
