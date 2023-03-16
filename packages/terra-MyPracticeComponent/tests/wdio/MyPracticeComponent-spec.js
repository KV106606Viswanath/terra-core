Terra.describeViewports('MyPracticeComponent', ['tiny', 'medium', 'large'], () => {
  describe('Default', () => {
    before(() => browser.url('/components/terra-my-practice-component/my-practice-component/my-practice-component'));

    it('validates the element', () => {
      Terra.validates.element('fusion');
    });
  });
});
