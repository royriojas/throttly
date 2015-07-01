describe( 'throttly', function () {
  beforeEach( function () {
    var me = this;
    me.clock = me.sandbox.useFakeTimers();
  } );

  afterEach( function () {
    var me = this;
    me.clock.restore();
  } );

  it( 'should return function that executes once within specified milliseconds', function () {
    var throttly = require( '../index' );
    var me = this;
    var spyFn = me.sandbox.spy();

    var newFn1 = throttly( spyFn, 50 );

    newFn1();
    me.clock.tick( 25 );

    newFn1();
    me.clock.tick( 25 );

    newFn1();
    me.clock.tick( 25 );

    //spyFn.should.have.callCount( 1 );
    expect( spyFn.callCount ).to.equal( 1 );

  } );

  it( 'should return function that executes once within specified milliseconds', function () {
    var throttly = require( '../index' );

    var me = this;
    var spyFn = me.sandbox.spy();

    var newFn1 = throttly( spyFn, 50, null, true /* immediate */ );

    newFn1();
    // at this time the function should already be executed
    //spyFn.should.have.callCount( 1 );
    expect( spyFn.callCount ).to.equal( 1 );
    me.clock.tick( 25 );

    newFn1();
    me.clock.tick( 25 );

    newFn1();
    //spyFn.should.have.callCount( 2 );
    expect( spyFn.callCount ).to.equal( 2 );

  } );

  it( 'should return function that executes once within specified milliseconds', function () {
    var throttly = require( '../index' );

    var me = this;
    var spyFn = me.sandbox.spy();

    var newFn1 = throttly( spyFn, 50 );

    newFn1();
    // at this time the function should already be executed
    //spyFn.should.have.callCount( 0 );
    expect( spyFn.callCount ).to.equal( 0 );
    me.clock.tick( 25 );

    newFn1();
    newFn1.cancel();

    me.clock.tick( 25 );
    //spyFn.should.have.callCount( 0 );
    expect( spyFn.callCount ).to.equal( 0 );

  } );
} );
