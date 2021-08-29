import _ from 'lodash';

export function imported(): void {
  _.range(1).forEach(() => { // I'm doing to force usage of a commonJS library (lodash)
    console.log("The imported library was used")
  })
}
