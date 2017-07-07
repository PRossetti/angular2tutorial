import { MyNg2appPage } from './app.po';

describe('my-ng2app App', () => {
  let page: MyNg2appPage;

  beforeEach(() => {
    page = new MyNg2appPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
