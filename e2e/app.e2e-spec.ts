import { MyAwesomeAppPage } from './app.po';

describe('my-awesome-app App', function() {
  let page: MyAwesomeAppPage;

  beforeEach(() => {
    page = new MyAwesomeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
