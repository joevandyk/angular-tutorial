describe 'list view', ->
  beforeEach -> browser().navigateTo('../../app/index.html')

  it 'should work', ->
    expect(repeater('.phones li').count()).toBe(3)

    input('query').enter('nexus')
    expect(repeater('.phones li').count()).toBe(1)

    input('query').enter('iPhone')
    expect(repeater('.phones li').count()).toBe(1)

    input('query').enter('something')
    expect(repeater('.phones li').count()).toBe(0)

