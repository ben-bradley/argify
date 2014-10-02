module.exports = function() {
  var args = {};
  process.argv.forEach(function(arg) {
    arg = arg.match(/^--([^\=]+)=(.+)/);
    if (arg)
      args[arg[1]] = arg[2];
  })
  return args;
}();
