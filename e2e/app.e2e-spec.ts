import { LibraryFrontEndPage } from './app.po';

describe('library-front-end App', function() {
  let page: LibraryFrontEndPage;

  beforeEach(() => {
    page = new LibraryFrontEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
