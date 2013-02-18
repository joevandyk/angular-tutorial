describe 'controllers', ->
  it 'should work', ->
    scope = {}
    ctrl = new PhoneListCtrl(scope)
    expect(scope.phones.length).toBe(2)

