var weight = 500;

function dependencies(settings) {
  return {
    devDependencies: {
      'yaml-loader' : '^0.4.0'
    }
  };
}

function config() {
  return {
    loaders: [{ test: /\.yaml$/, loader: 'yaml', include: path.resolve('data') }],
    extensions: ['.yaml']
  };
}
