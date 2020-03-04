import { SocialLoginsPage } from './app.po';

describe('social-logins App', () => {
  let page: SocialLoginsPage;

  beforeEach(() => {
    page = new SocialLoginsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
