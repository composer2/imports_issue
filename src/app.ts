import {
  HELLO,
  WORLD
} from './analytics'
debugger
function buildHello () {
  return `${HELLO} ${WORLD}!`
}

if (HELLO === 'Hello') {
  console.log(buildHello())
}