const xdg = require('.');

console.log('Darwin', xdg({ subdir: 'FooBar', platform: 'darwin' }));
console.log('---');
console.log('Linux', xdg({ subdir: 'FooBar', platform: 'linux' }));
console.log('---');
console.log('Windows', xdg({ subdir: 'FooBar', platform: 'win32' }));
console.log('---');

console.log('==== EXPANDED ====');

console.log('Expanded Darwin', xdg({ subdir: 'FooBar', platform: 'darwin', expanded: true }));
console.log('---');
console.log('Expanded Linux', xdg({ subdir: 'FooBar', platform: 'linux', expanded: true }));
console.log('---');
console.log('Expanded Windows', xdg({ subdir: 'FooBar', platform: 'win32', expanded: true }));
console.log('---');

console.log('==== METHODS ====');

console.log('METHOD xdg.darwin()', xdg.darwin({ subdir: 'FooBar', expanded: true }));
console.log('---');
console.log('METHOD xdg.linux()', xdg.linux({ subdir: 'FooBar', expanded: true }));
console.log('---');
console.log('METHOD xdg.windows()', xdg.win32({ subdir: 'FooBar', expanded: true }));
console.log('---');


