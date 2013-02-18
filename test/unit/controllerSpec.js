(function() {

  describe('controllers', function() {
    return it('should work', function() {
      var ctrl, scope;
      scope = {};
      ctrl = new PhoneListCtrl(scope);
      return expect(scope.phones.length).toBe(2);
    });
  });

}).call(this);
