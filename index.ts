// adapted from https://cycle.js.org/

import {run} from '@cycle/run'
import {div, label, input, hr, h1, makeDOMDriver, DOMSource, VNode} from '@cycle/dom'
import {Stream} from "xstream";

interface Sources {
  Dom: DOMSource
}

interface Sinks {
  Dom: Stream<VNode>
}


function main(sources: Sources): Sinks {
  const input$ = sources.Dom.select('.field').events('input')

  const name$ = input$.map(ev => (ev.target as HTMLInputElement).value).startWith('')

  const vdom$ = name$.map(name =>
    div([
      label('Name:'),
      input('.field', {attrs: {type: 'text'}}),
      hr(),
      h1('Hello ' + name),
    ])
  )

  return { Dom: vdom$ }
}

run(main, { Dom: makeDOMDriver('#app-container') })