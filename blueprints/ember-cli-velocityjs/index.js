/*jshint node:true*/

module.exports = {
  description: 'Add bower dependencies for velocity to the project',

  normalizeEntityName: function() {

  }, // :normalizeEntityName

  afterInstall: function(options) {
    return this.addBowerPackagesToProject([
      {name: 'velocity', target: '^1.5.0'}
    ]);
  } // :afterInstall

}; // module.exports
