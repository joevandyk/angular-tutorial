(function() {

  describe('list view', function() {
    beforeEach(function() {
      return browser().navigateTo('../../app/index.html');
    });
    return it('should work', function() {
      expect(repeater('.phones li').count()).toBe(3);
      input('query').enter('nexus');
      expect(repeater('.phones li').count()).toBe(1);
      input('query').enter('iPhone');
      expect(repeater('.phones li').count()).toBe(1);
      input('query').enter('something');
      return expect(repeater('.phones li').count()).toBe(0);
    });
  });

}).call(this);
