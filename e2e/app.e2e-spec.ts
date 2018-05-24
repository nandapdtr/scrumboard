import { AssignmentPage } from './app.po';

describe('assignment App', () => {
  let page: AssignmentPage;

  beforeEach(() => {
    page = new AssignmentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
