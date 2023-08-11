import * as React from "react";
const SouthAfrica = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${props.strokeClassName} ${props.fillClassName}`}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={props.strokeWidth}
      viewBox="0 0 800 900"
    >
      <path d="m286.4 203.8 3.4.1.4 15.5-.6.7-.3 1.1v1.3l.2 1.3v.1l.4 2.6.4.8.5.3 1.1.1h.6l.7-.1h1.3l.6.1.8.1.8.4.5.6.6.2 1.5.2.9.3.5.5.6.9.3-.2.7-.1 3.1 2.2.2.8-.4 1.9v1l.2 1.8-.2 1.1-.7 1.1-.3 1v.7l1.6 5.3 1.3 2 .3.4-.2.4-.6.3-2.1.9-.6.8-.3 1.4-.1 1.6v1.1l.2 1.3.5 1.6.6.7.7.6 2.3.3 1.9 1.7 4.1 4.7 1 .6.9.2 2.3.2 1.2.3 1 .5 2.6 2.2.5.2h.4l1.1.1 1 .8.3.6.2.5.1.7 4.1.5 1.4.4 1.9 1.2 1.9.9 2 .7 1.1-.1 1.1-1.1.5-.8.1-.2.7-.3h1l1.6.2.9-.1.7-.4.2-.5-.1-.6-.8-.5-.1-.6.2-.8.6-.6.9-.2 1.4.3 1.6.1.3-.5-.3-1.2-.1-.8V268l.4-.8.2-.4.2-.6 1 1.2 1.2 1.9-.1 5.4-.2.9v.8l.2 1 .3 3 1.3 2.4v3.2l1.2 2.9 14.4-3.3.3.9.4 1.1.3 3.6-.2 1.2-.4.8-1.5 1.5-.5 1-.5 1.2.3 1.1.6.6 1.1.2.7.5 1.3 1.7.1 1.1-.3.5-.3.8.1.8 3.7 3.2 1.2-1.2.5-.8.3-1.1.4-.4 1.9-1.7.3-1 .1-1-.1-1.3v-.4l.1-1.3.8-1 .5-1.1.3-.3.8-.3.3-.3.3-.4.3-.7.1-.5v-1.4l.3-1.2.1-.6-.1-1.3-.3-.5-.7-.4-.1-.2-.3-1v-.6l.1-.4.4-1 .1-.3-.3-1.2v-.9l.1-.6.3-.5.5-.3h.7l1.3.3h.2l.6.7.5 1.6.5 1.1.1.9.4.6 1.2.4 7.3-.1.9.1.6.2.4.2.6.7-8.5 10.4-.8.1 5 9.9.3.1h.4l.7-.4 1-1 .4-.1h.5l.4-.1v1.7l-.1.8-1.4 3.8-.5 1.1-.9 1.4-1.2 1.3-1.1.7-.3.7.2.6.4.6.4.4.1.6-.2 1.1-1 3.7-.5 1.2-.8 1.3-.9 2.8-.2 3.3.4 1.5.5.9.6.3.2.3-.1.6-5.2 11.4-5 10.8-11 23.5-3.2 6.7-.4.7.3.6.4 2 .4.8 2.1 2.8.9.7.6.4h1.5l.2.2.2 1 .3.3 1-.1h.5l.4.2 2.1 2.7 1.4.9 1.9.3.5.4.3.9.1 1.2.2.8.4.6.6.4.7.3 1.5.3.7.1 1.4.3 1.1 1.8 4.6 9.7.3.3.6.3.4.1h.5l.7 1.4.3.5.5.4.4.5 2 .9.2.3.1 1.2.1.6.2.4 4.1 3.7 2.5 3.1 1.5 1.1 1.9 1.1.7.7.3 1 .5.8 1.1.2 2.2-.1 1.6 1 1.6 1.5 1.7 1.1.7 7.7.9 1.1.9 1.4-.3 1.2-1.1 1.4-.1 1.1.4 1.4.4 2.1-.3 1.3-1.3 2 .3 1.9-.6 1.2-.7 1-.2 1.3-1.1 1.7-1.6 1.9-.4 2.7-1.3.9-6.3-1.4-7.1 3.4-3.7.8-.7.3-2.6 1.9-1.8.9-1.2 1.3-1.8.5-2 1.1-3.2.5-6.4.2v1.1l-.7 2.7-.9 1.4-.5 3-.6 8.3-7.7.8-4.3 1.6h-2.8l-1.2.5-.4 1.7-3.7-.9-2-2.9-1.3-.2-1.5.6-1.4 1.9-1.5 1.1-1.7 1-2.2-1.8.1-1.2-.5-1-1.1-1-4-2.3-3.2-.4-1.7.2-1.9.8-1.2.3-5.8-.1-2 2.1-3 1.7-3.2 4.5-1.1 2-.9 1.1-5.2 4.7-1.4-2.4-.1-.5-.5-2-1.7-.9-2.1-.7-3.4-.2-2.1-.9-3.2-.2-2.8-1.7-4.2-1.4-2-3.1-2.2-2.3-1.7-1.4-8.7-4.5-1.3 1.9-5.5 13.6-1.8.4-.4 1.1-.4.7v.9l-.2.9.1 1.7-.4 2.2v.6l.3.5.8 2.2-1 2-1.1.3-2.7 3.2-1.2 2-2.7 1.9-2.8.7-3-.6-1.6-.6-1.8-.5-1.8.6-2-.4-1.4.3-2.3 1.1-1.4 2.7-2.6 1.6-2.1 1.6-1.9.4-3.5 1.2-1.6 2.1-.8.9-.8.6-2.1.9-.9 3-2.5 5.2-3.6 1.6-2.1.6-2.7.4-3.4 1.2-1.9 2.2-.5 2.1-.4 3.1-.9 2.8-3.7 3.1-4.5.2-1.7-.9-1.2-.2-2.6 1.4-3.2.6-2-2-1-.5-1-1.7-1.2-1.2-1.3-1.9-1.1-.7-1.1-.6-1.1-1-1.1-1.5-.6-2.8-2.3-4.9-1.3-4.1-.7-3.5.1-2.6 1.2-.9 1.4-1.5 3.5-4.6V530l-.7-1.1-.6-1.3-.8-.7-1.3.2-2.9 3-1.3.8-1.5 2-4.3 3.4-2.6.7-3.1.2-1.1.8-2.2 1-1.2 1.7-1.5.7-.9.2-1.1-.6-.9.8-.6 1.9-.9 2.2-.2 1.7.6 1.6.5.7-.3.5-2.6 1.3-2.9-2.9.7-5.2v-1.3l-1.9-3.5-.3-.9-.3-1.3-.4-2.9 1-1.7 2-2.1.2-.5-.5-2.8-.4-1.3v-.4l.2-.8-.1-.4-.1-.6v-.4l.2-1.2-.1-.4-.3-.1h-.5l-.6-.1-.5-.5-.4-.7-.4-.5-.4-.3-.5-.1-.6.2-.4.3-.5-.1-.5-.5-.2-.1h-.8l-.4-.2-.3-.5-.8-1.7-.4-.7-.6-.3-1.3-.7-.2-.4.1-.7.7-2.8-.3-.3-.6.3-1.6 1.4-.7.3-.5.1-.2-.1-.5-.3-.6.1-.7.4-.5-.1-.6-.5-.4-.3-.7-.4-.7-.2-2.4-.1.8-3.6 1-1.9.2-2.5-.8-4.7.3-1.3v-2.2l.3-1.1-.3-1.3-.6-.8-.2-1.3-1.2-1.1-.4-1.3v-2.2l-.9-5.1.3-1.7.1-.8-.5-.8-1.3-1.5-1-2.8-1.5-10.1 1.1-3.7-1-3.2 1.4-2.1.1-6.5-4.5-1.5-2.1-2.2-1.2-2.1-1.7-2.1-2-1.6-2.8-1.6-3.3-2.5-2.5.2-1.3 1.2-.7 1.6-2.5-1.5-.8 1.7-1.4 2.5-1.2 4.2-1.9 3.6-2.2 3.3-2.2 1.3-2 .8-1.7-.8-1.2-.6-.9-.7-.8-.3-.7-.2-.9.1-1 .8-1.3 1.4-1.1 3.8-2.7 2.6-.7 3.9-2.3 3.1-.3 5.7-2.5-.7-.8-1.3-.2-.2-.5-1.3-.2-.3-.6-1-1-2.4-.4-.9-3.3-4.6-2.5-5.2-.3-.8-.4-2-.5-1.8-2.8-3.8-1.2-2.4.2-2-1.2-1.3-2.6-4.8-.4-1.3-.8-1-3-5.2-.2-.6-.2-1.4-.4-1.7-.2-.4-.1-1.5-2.4-4.3-.6-1.7-.2-2.1-1.1-4.3-2.9-6.9-.3-1.8-.1-.3-.4-.6-.1-.6-.1-.6-1.2-4.4h.3l-.2-.6v-1.5l-.1-.7-1.1-3.1v-.6l-.6-.5-.4-1.1-.1-2.1-1.4-3.8-.4-.6-1.7-5.2-.2-.4-.9-1-.3-.7-.8-1.1-1-3.2-.3-.5-.5-.5-.2-.4.1-1.3-.2-.5-.4-.8-.4-1.2-.2-1.2.2-.9-.7-1.2-2.9-2.6-.5-.7-.7-2.1-.3-.7-2.1-2.9-3.2-2.7-.5-1.2-.4-1.8-.3-1.9.2-1.1-.6-1.3-.1-.4-.2-.3-.8-.1-.3-.1-1-2.2-.7-.6-1.2-1.3-.1-.3.5-.3.3-.8.1-.9-.1-.5.8-.4 1.3-.8 1.2-.7 1.8-.6 3.5-3.5.5-.2.4.3.2.6.2.7.2.5.7.1.9-.8.9-1.2.5-.9.1-.9.1-1.2.2-1 .7-.5.5-.4-.3-1-1-1.5-.4-.8-.1-1.1.2-.9.8-.4.4.2.5.3.4.2.5-.4v-.6l-.2-.7-.4-.5-.1-.4.2-.5.2-.2 1 .1.7-.2v-.4l-.8-1-.1-.3.1-.3.2-.3.4.3.8-.1.4.3.4-.6.3-4.1.2-.2.8-.9.3-.2.3.1.5.5.5.1.5-.2.7-.7.5-.1 1.3.3 1.5-1.2.5-.3.9-.2h.5l.5.2.7.8.5 1.1.6 1 .9.4 1.2.3.4 1v1.1l-.1 1.2.2 2.5 1 1.2 1.5.3 2.9-.7 1.2-.1.5.3.2.6.1.6.2.5.4.7.1.5.1.6.2.6.3.6.7 1 .3.6.1 1.1-.2 1.4-.3 1.3-.8.5-.8.2-.8.5-.6.7-.2.8.4 1 1.3 1.6.2 1.2.4.9 1.7.6.5 1.2-.3 2.1-.6 2.2.1 1.6 1.8.2 2-.5 1.9-.2 1-.2.9-.4.7-.2.7.5.3 1.1v1.3l.2 1.1 1 .4 1.5.5.6-.1.4-.2.9-.6.5-.3 1.5-.1 7.8 1.7 1.7.8 1.5 1 2.8 2.3 1.8 1 3.9 1.3h.9l1.6-.5 4.1-.6h1.1l1.9.8 1.1.2.9-.4.4-.2.5-.2.9-.2.7-.3h.2l.2.1.6.5.2.1 1-.3 1.7-.9 8.9-1.4 9.7 1.5.8.7 1.1 1.9.5.5.3.1 1.7.2.5.2.2.2.8 1.1 1.8-.1 1.9-.7 2.6-1.4.4-.4.5-.8.3-.2 1.5-.1.6-.4v-.6l-1.7-3-.3-1.2.1-1.1.8-1.5.6-.7.6-.5.6-.1 1.1.9.5.1.7-.3 3.8-1 .9-.4.8-.7.5-.7 1.3-4.3.3-.4.8-.4.4-1 .2-.4.4-.5.6-.8.5-.3.4-.1 4.6-.4.8-.4 1-.7 1-.4 2.2-.2 1.4-.4 2.1-1.9 1.2-.7h.5l1.5.2.5-.1 1.4-.3.1-1.6V134.5l.5.6.8.6.9 1.4 2.4 1.9 1.2 1.4.5.4.5.1.9.1.5.1 3.5 2.2 6 5 .5.6 1.5 3.2 1.2 2 .5 1.1v.7l-.4.9.4.7.9.5.8.4.1 1.3.1.4.3.3.9.4.3.3.1.5-.4.6v.4l.2.3.5.7.2.4.3 1.6.3.6.7.5 1.4.6.2.5.2 1 .7-.1v.4l-.3.6v.6l.5.2.4-.2.4-.3h.5l.6.6-1.4.8-.3.9-.1 1.4 2.1 1.9.4 1.3-.3.5-1 .6-.3.4.1.6.5.2h.6l.3.3.1.6-.4 1.1v.6l.3.5 1.2.6.5.4.5.9.9 3.4-.5 1v.5l.6-.2.5-.3.3.1.5.6v.1l1.2 3.1.4 4.5-.1 3.7.2 1 1.7 3.1-.1.8-2 2.8-.9 2-1 1.9-2.7 3.4-1.4 2.6-.6.8-1.4 1-.2.7-.6 2.7-.2 1.5.2 1.4.3.6.7 1.1.2.7v1.2l-1 3.5v1.6l.2 1.9.5 1.9.6 1.4.6.7.7.5.4.6.5 1.6.3.5.1-.1 1-.7 3-1.4 2.1-1.6 1.2-.6 2.6-.3 2 .8 1.9 1.2 6.1 1.4 1.4-.1 4.1-1.2h.6l1.3.2h.7l3.9-1.1 2.1-.1 1.1.2 2.2 1.1 4 .1 2.8.7h.9l1.1-.4 2.6-1.8.9-.8.5-.9.2-1-.1-1-.4-2.3.1-.8.5-.6 1.3-.4 1.4-.3h4.5l3-.7 2.7-1.7 2.3-2.4 1.8-2.7 1.5-4.1.9-1.9 1.8-1.9.5-1.1.4-.3 2.2-.4.7-.2 1.1-.6 2.4-2.3 1.6-2.4 1-.8 1.5-.3 2.1.4.8-.3.9-1.3.7-1.8.6-.7.9-.7.4-.4z" />
      <path d="m993.7 1421.3-1.3 1.2-1.3.5-.4-.1-.8-.3-5.2-.3-.7.2-1.7-.3-.7-.4-.7-.7-.2-.5-.3-.9-.1-.9.9-.8 1-1.6.4-.4.3-.3 1-1.5.5-.5 1.5-.5 1.5.3 4.3 1.2 2.2 2.6 1.3.5-.5 1.8-1 1.7zm5.2-20.1-1.7.7-2.2-.3-1.4-1 .2-1.4 1.6-1 2.1-.1 1.5 1.2-.1 1.9zm-641.7-896 .5 1.5-.4.4-.3 1.1-.6.7-.2 1.7 1.3.7 1 1.4.3 1.4-1.1 1.7-.8.7-.8.4-.4.7v.7l-.2 1-.5.7v1.3l.1.8-.5 1.4-1.8 1.1-1.1 1.7-6.6 2.9-1.9-.3-4.1-1.5-1.6.7-2.2 1.7-1.8 3.7-1.6 1-7.2.9-2.2 1.1-3.4-.3-1.7 2-2.1 1.8-.3 2.1v2.3l1.2 2.1.6 2.4.3 1.9-.2 2.6 1.6 1.8.8 1.9 1.9 1.8-2 2.2-3-.2-3.1.2-2.4 1.1-.9.3h-.5l-.6-.6-.3-.6-.3-.8-.8-.8-.1.2.2 1.4v1.9l-.6 1.2-1.8.6-1 .6-2.2 3-.2 1.7-1.5 2.2.7 2.3-.7 2.2-7.9 12.9-.4 2 .6 2.1 7.2.2 5.8-.8 10.7.5 8.2 1.9 3.4 1.5 2.4 2 .9 3.8 2.4 3.1-.7 1.3-8.4 3.8-1 1.2-.6.8-1.7 1.9 4.2.4 1.2-.5 1.1.2 1.8.7.8 1.5 5.8 2.8-2.2 3.5v2.5h-.2l-2.2.1-7.5 1.7-1 .5-.8.6-.8.7-.4 1.3.3 1.1.8.7 1.1.2v.4l-16.1-1.5-.2-.4-.3-1.6-.1-.4-1.4-.1-.6-.2-.4-.4.2.8.3.3.5.2.4.4.5.8v.4l-.3.4-.3-.3-.6-.2-1.3-.2-.6.2-.9.3h-.8l-3.7-1.2-1.5-.9-.5-.2-.6-.4-.3-.8-.1-.5v-.4l.3-.2h.7l-.7-.7-1.1-.3-2-.2.4.8.7.9.7.6.7.4-.8.3-1.1-.3-5.3-1.8-.9-.1h-1.2l-.9.2-.8.3-2.4 2-1.9 1-2 .5-4.4-.5-1.9.1-4 .9-.9.5-.8.6-1.4 1.5-.5 1.2.2.9.6.6.9.5-.7.6-.9.3-6 .9-1.8.8-1.1 1.3-.2.9.3 1.8-.5.6-.9 1.7-.3.2-2.7 1.6-1.9.7-2 .4-2 .1-4.9-1-1.7-1-1.1-.3-1 .2-1.9.8-1.6.3-.4.3-.4.7-.3.3-3.1 1.4-2 .3-2-.2-7.6-2.9-1.9-.4-4.5-.4-2.2.3-1.9.9h.4l-2.7.7-.8.5 1.2.2 1.1.8.6 1.2-.4 1.2-.9.3-8.2-1.5-6.5.9-1.9.9-1.6 1.3-2.6 3.5-.8.8-.9.4-.7.1-.3.4-.2.5-.5.5-.4.3-1.5.5-.8.6-.8.8-.7.9-.3 1-.5-.2-1.1.3-1.9.8-3.4 2.6-1.3 1.7.6 1.6v.3l-.8.2-1.2.8-.7.2-.8-.1-.7-.3-.7-.4-2.9-2.2-.7-.7-.8-.4-7.4.2-.7.2-.8.8-.6.2-.5-.1-.3-.4-.4-.7-2.4-1.4-3.5-3.6-2.4-1.4-.7-.6-.7-.9-.9-.7-1.1-.1-1.1.3-.9.7-.4-.3h-.4l-.4.1-.4.2.1-.6 2.8-3.8.2-.6-.2-1.6-.7-1.8-1-1.6-.9-1.2-.6-.5-.6-.2-3.3.7-2.8-.2-.6-.2-.7-.6-.8-1.6-.7-.5v-.4l1.1-.2.6-.8.3-1.2.5-1.3-.8.5-1.1 1.9-.5.4-3.5-.3-.6.1-1.4.5-4.5.7-1 .7-.2.4-.4.2-.5-.1-.5-.3-.4-.7.1-.6.3-.6-.3-1.9v-.4l.2-.7.4-.4.4-.5.4-1.1-.1-.8-.7-1.9v-1.2l.4-.5.6-.5.6-.9-1.9-3-.8-.5-2.7-.6-4.4-.5-4.3.3-.6.3-.4.2-1.7.7-.8.6-.4.4-.4.6-.7.7-.2.4-.1.8.1.6.3.3.3.2.3.4.6 2.3.1 1.1-.4 3.7.2 1.1.8.7-.9.2-1.1-.6-1.2-1-.7-.9-1.1-2.3-.1-.6v-.4l.2-.8.1-.4-.1-.2-.5-.4-.5-1.4-.4-.6-1.3-.5-.4-.5-.1-.8.1-.8.3-.4.5-.2.3-.2.2-.9v-.7l.1-.6.2-.6.3-.6-.7.1-.6.3-.6-1-.1-.8.4-.8.7-.8.6-1.1.5-2 .5-1.2 1.5-1.2 1.8.1 1.5-.3.6-2-.2-1.1-.9-1.5-.2-.7-.1-1.1-1.3-4.9-1.2-2.5-.2-1.1-.5-.2-2.1-2.6-.8-.5-.3-.3-.2-.5v-2.3l-.1-1.2-.3-.9-1.2-1.9-1.3-1.5-5-3.5.4-.9-.2-1.1-1.2-2.2-.6-1.5-1.1-1.5-.2-.6-.4-.7-2.1-2.1-.8-.4-1-.4-.6-.9-.6-1-.5-.8 1.2-.6.7-.2.5.2.3.7.3.6.3.5.5.4-.2.6.4.4 1.2 1 .9 1.2.6.7.6.2.7-.4-.2-.6-1-1.1-.2-.4-.1-1-.2-.3-.2-.2h-.5l-.2-.1-1-1.1-.4-.5-.2-.6.2-2.4-.2-.8-.6-1.1-1.1-.5-1.4-.1-1.4.2.5.9.2.3-.6.1-.4.3-1 .7-.5-.6-.2-.6-.2-.9-.2-.5-.3-.5-.1-.6.3-.8-.2-.5-.6-1.6-.3-1.2v-.4l.1-.5.5-.6.3-.7-.3-.6-1.1-1.5-.4-.3.1-.5.1-.1.7.1.3-.4.7-.6.6-.2.1-.5.2-.4v-2.1l.1-.7.7-.5 1.1-.5 1.1-.2h.7l-.4.4.6.9 2.3 2.2 2 .8 1.8-.5 1.6-1.2 5.6-5.7 1-2.2.7-1.9 1.1-4.5.2-2.2-.2-3.8-.3-.9-.6-1.2.3-.9 1.1-1.5.2-2.2-1.8-7.2-.5-5.9-.8-2.3-.3-1.2.1-2.4-.1-1.2-.5-1.1-.6-.7-.5-1-.3-.7v-1.5l-1-3.8-.8-1.8-1.1-1.9-2.1-2.8-.4-.7-.1-.5-2.1-3.1-2.2-2.3-.4-.9-.3-1-.7-.8-1.5-1.4-1.8-2.8-1.3-1-.5-1.4-.6-2.5-.5-.7-1.9-1.6-.4-.5-.3-.7-1.7-2.9 2.5.7.3-5.7 2.3-3.1.7-3.9 2.7-2.6 1.1-3.8 1.3-1.4 1-.8.9-.1.7.2.8.3.9.7 1.2.6 1.7.8 2-.8 2.2-1.3 2.2-3.3 1.9-3.6 1.2-4.2 1.4-2.5.8-1.7 2.5 1.5.7-1.6 1.3-1.2 2.5-.2 3.3 2.5 2.8 1.6 2 1.6 1.7 2.1 1.2 2.1 2.1 2.2 4.5 1.5-.1 6.5-1.4 2.1 1 3.2-1.1 3.7 1.5 10.1 1 2.8 1.3 1.5.5.8-.1.8-.3 1.7.9 5.1v2.2l.4 1.3 1.2 1.1.2 1.3.6.8.3 1.3-.3 1.1v2.2l-.3 1.3.8 4.7-.2 2.5-1 1.9-.8 3.6 2.4.1.7.2.7.4.4.3.6.5.5.1.7-.4.6-.1.5.3.2.1.5-.1.7-.3 1.6-1.4.6-.3.3.3-.7 2.8-.1.7.2.4 1.3.7.6.3.4.7.8 1.7.3.5.4.2h.8l.2.1.5.5.5.1.4-.3.6-.2.5.1.4.3.4.5.4.7.5.5.6.1h.5l.3.1.1.4-.2 1.2v.4l.1.6.1.4-.2.8v.4l.4 1.3.5 2.8-.2.5-2 2.1-1 1.7.4 2.9.3 1.3.3.9 1.9 3.5v1.3l-.7 5.2 2.9 2.9 2.6-1.3.3-.5-.5-.7-.6-1.6.2-1.7.9-2.2.6-1.9.9-.8 1.1.6.9-.2 1.5-.7 1.2-1.7 2.2-1 1.1-.8 3.1-.2 2.6-.7 4.3-3.4 1.5-2 1.3-.8 2.9-3 1.3-.2.8.7.6 1.3.7 1.1v2.3l-3.5 4.6-1.4 1.5-1.2.9-.1 2.6.7 3.5 1.3 4.1 2.3 4.9.6 2.8 1.1 1.5 1.1 1 1.1.6 1.1.7 1.3 1.9 1.2 1.2 1 1.7 1 .5 2 2 3.2-.6 2.6-1.4 1.2.2 1.7.9 4.5-.2 3.7-3.1.9-2.8.4-3.1.5-2.1 1.9-2.2 3.4-1.2 2.7-.4 2.1-.6 3.6-1.6 2.5-5.2.9-3 2.1-.9.8-.6.8-.9 1.6-2.1 3.5-1.2 1.9-.4 2.1-1.6 2.6-1.6 1.4-2.7 2.3-1.1 1.4-.3 2 .4 1.8-.6 1.8.5 1.6.6 3 .6 2.8-.7 2.7-1.9 1.2-2 2.7-3.2 1.1-.3 1-2-.8-2.2-.3-.5v-.6l.4-2.2-.1-1.7.2-.9v-.9l.4-.7.4-1.1 1.8-.4 5.5-13.6 1.3-1.9 8.7 4.5 1.7 1.4 2.2 2.3 2 3.1 4.2 1.4 2.8 1.7 3.2.2 2.1.9 3.4.2 2.1.7 1.7.9.5 2 .1.5 1.4 2.4 5.2-4.7.9-1.1 1.1-2 3.2-4.5 3-1.7 2-2.1 5.8.1 1.2-.3 1.9-.8 1.7-.2 3.2.4 4 2.3 1.1 1 .5 1-.1 1.2 2.2 1.8 1.7-1 1.5-1.1 1.4-1.9 1.5-.6 1.3.2 2 2.9 3.7.9zM462 127.8v4.2l.3 1.3 1.3 2.3.3 1.2.4.2 8 .7 1.1.3 1.5.9 1.2.6.9.2 1.1.2.7-.2 2.9-1.6 5.3-2.3 2-1.4.5-1.3.5-.5.7-.2.6.4.3.9.6 5.2 1.1 1.9 1.6 1 1.6 1.6.6 1.6.4.6.6.5 4.9.8 3.6 2.7 3.5.1 2.1-.3.5.4.3 1.4.3.4.2.2.5.1.4-.1.5-.5 1.7-2.7.2-1 .1-1.2.1-.4.5-.3 1-.4h1l1.1-.2 1.9 1.8.8-.5.7-.4.7-.1 7 .8h.5l.2-.1.4-.3.6-.4 1-.1 2.3.6 2.2.2 1.7.4 3.6 1.7 1.4.8.7 1-.2 1.4-.3 1-.6.5-1 .1-.6-.3-.9-.5-.9-.5-.7-.1-1 .4-.4.7.2 1 1 .7.6.7.4 1.2.6.5 1 .2 1.5-.3 1 .5.7.4 2.9 4.7-.4 4.3-1.9 1.3-1.2.4-2.5.1-.6.3-.5.2-.8.1-.3-.4v-.7l.5-.6v-.5l-.4-.2-1 .1-1.1.5-.4.8v.9l.6 2.9.2.5v.9l-.3 1.3-1.2 1.8-1.1 1.1-1.2.8-3.5.8 1.5 3.5.2.6.1.7v.4l-.4.3-.3.1-.2.3.1.6.1 1-.2 1-.9 1.2-1.5.6-.8.6-3.2.7-3.6.6-.8-.7-1.8.1-1-.9-1.2-.7-.8-1-3.8 1.4-3.1 2.2-1.2 5.9-1.1 5.1-1.1 1.5-1.6.6-.8 1.1-2.8.2 1.6 7.2-4.1 2.9-2.4 2.2 1.7 3.3.3.7.1.8v.4h.3l.3.3 1.6-.3.6-.3.6-.3 2.2-1 .8-1 5.7-1.7.8.7.4.6.6.3.4.4h4.2l-.3 1.7-.5.2-.3.3-.3.8-.3 3-.7.7-.6 1.3.1 1.3-.4 6.8-.4.1-.6.6-.2 1v1.1l-.2.5-1.4 2.2-.5.3-2.9.8h-.6l-.6-.2-1.5-1.4-.6-.3-1.3.2-1.1 1-2 2.3-1.8 1.4-1 .4-.4-.4.3-1v-.5l-.5-.1h-.4l-.8.3-4.6.1-2-.3-1.6-.8-.9-1.7-.6-.6-.7.5-.2.8.2 3.4-1.1-.7-1.5-1.4-.2-.1-1 .6-.6.6-.3.4-.4-.2-.7-.6-.2.2-.5.4-1.1.3-.8.6-1.3 1.2-.2.3-.3.7v.4l-.2.6h-.3l-.4-.4-.9-.4-.7-.2-.7.3-.6.5-1.3 1.4-.3.6-.1.8.2.8-.1.6-.6.6-1.2-.4h-.5l-1.2 1.5-.8.6-2.7.8-.9 1.2 1 1.5 1.6 1.4.9 1.1-.1 3h-.3l-.4.2-.6 1-.3 1 .3.8 1.2.3h.5l.4.2.4.3.1.4-.2.1h-4.6l-.9-.3H460l-.6.1-.5.4-.4 1-.2.3-.8-.6-.3-.1-1.3.2-1.1.7-.8 1.1-.3 1.3.1.9-.1.3-.4.5-.2.1-.7.1-.3.1-4.2 4-1 1.4-1.1 2.1-.1.5.1.6.5.9.1.5-.2.5-.4.3-.6.2-.5-.1-.3-.1-.3-.2-.2-.5-.2-1.1-.2-.9-.3-1.3-.3-.2-.4-.2-3.2-.6-.6-.1-1 .1h-.3l-.4-.2-.4-.3-.7-.7-.6-.7-.4-.3-1 .1-4.9 2.8-1.2 1-.6.8-.4.2-.3.1-.8-.3-.9-.5-.5-.2h-.5l-.4.2-.5.7-.5.3-.8.5-.5.1-.3-.1-.4-.3h-.3l-.3.1-.5.6-2.9.8-.7.5-3.4 3-.3.2-.6.2-.6.1h-1l-.5.4-.7 1.2-.6.3v.4l.2.8-.3.7-.7 1-.7.8-.9.6-.5.8-.2.1h-1.1l-.5.1-.5.3-.2.3-1.3 2.2.1.4.1.3v.4l-.9 1.7-.7.9-.6.6h-.4l-.5-.2h-.5l-.4.7h-.1l-.4.1h-.5l-.4.1-1 1-.7.4h-.4l-.3-.1-5-9.9.8-.1 8.5-10.4-.6-.7-.4-.2-.6-.2-.9-.1-7.3.1-1.2-.4-.4-.6-.1-.9-.5-1.1-.5-1.6-.6-.7h-.2l-1.3-.3h-.7l-.5.3-.3.5-.1.6v.9l.3 1.2-.1.3-.4 1-.1.4v.6l.3 1 .1.2.7.4.3.5.1 1.3-.1.6-.3 1.2v1.4l-.1.5-.3.7-.3.4-.3.3-.8.3-.3.3-.5 1.1-.8 1-.1 1.3v.4l.1 1.3-.1 1-.3 1-1.9 1.7-.4.4-.3 1.1-.5.8-1.2 1.2-3.7-3.2-.1-.8.3-.8.3-.5-.1-1.1-1.3-1.7-.7-.5-1.1-.2-.6-.6-.3-1.1.5-1.2.5-1 1.5-1.5.4-.8.2-1.2-.3-3.6-.4-1.1-.3-.9-14.4 3.3-1.2-2.9v-3.2l-1.3-2.4-.3-3-.2-1v-.8l.2-.9.1-5.4-1.2-1.9-1-1.2-.2.6-.2.4-.4.8v1.2l.1.8.3 1.2-.3.5-1.6-.1-1.4-.3-.9.2-.6.6-.2.8.1.6.8.5.1.6-.2.5-.7.4-.9.1-1.6-.2h-1l-.7.3-.1.2-.5.8-1.1 1.1-1.1.1-2-.7-1.9-.9-1.9-1.2-1.4-.4-4.1-.5-.1-.7-.2-.5-.3-.6-1-.8-1.1-.1h-.4l-.5-.2-2.6-2.2-1-.5-1.2-.3-2.3-.2-.9-.2-1-.6-4.1-4.7-1.9-1.7-2.3-.3-.7-.6-.6-.7-.5-1.6-.2-1.3v-1.1l.1-1.6.3-1.4.6-.8 2.1-.9.6-.3.2-.4-.3-.4-1.3-2-1.6-5.3v-.7l.3-1 .7-1.1.2-1.1-.2-1.8v-1l.4-1.9-.2-.8-3.1-2.2-.7.1-.3.2-.6-.9-.5-.5-.9-.3-1.5-.2-.6-.2-.5-.6-.8-.4-.8-.1-.6-.1h-1.3l-.7.1h-.6l-1.1-.1-.5-.3-.4-.8-.4-2.6v-.1l-.2-1.3v-1.3l.3-1.1.6-.7-.4-15.5-3.4-.1.1-.2 2-2.9v-.6l-.2-.6v-.4l.5-.4 1.3-.5.5-.4.4-.6.2-.9.1-1.2v-1.2l-.2-.6-.6-.9.5-.9.9-.8.7-.8.5-.9v-.3l-.3-.7-.4-.5-.4-.3v-.7l.2-1.1.7-1.1 2-2.4.3-.5.1-.6.1-.7-.1-.6-.1-.4v-.4l.7-.5.4-.5-.2-.6-.5-.5-.3-.5.1-.5.1-.4.4-.8.9-3.1.3-.6 1.2-.4.5-.6.7-2 .4-.7.4-.4.5-.3.6-.3.6-.4.2-.4.1-.4.2-.4 1.8-1.9 1.1-.6 1.1.2.3.4.2.5.3.3.6-.3.4-.4 3.5-1.7 2.2-.6 2.3-.2 2.6.5 2.1.8.7.2.8-.1 1.5-.6.6-.1.7.2.4.4.7 1.1.6.7.5.3 1.4.7 1.1.7 4.9 3.9.4.5.6.6 2.6.8.4.4.5 1 .3.5.4.3 1 .3.4.2 1.7 2.4 2.1 1.5.7 1 .9.6 2.4-.6.6.1.4.3.5.4.1.4-.3.4.1.3 1-.2 4.8-1.3h2.4l2.1 1.2 3.2 3.8 1.9 1.5 2.4.4 1.2-.3 1-.4.9-.2 5.6 2.1 2.4 1.7 1.7.4 3.3-.4 1.6.3 1.3.4 1.4-.2 2.7-.7 1-.4 2.7-2.1 2.1-1.1 1.8-.2 1.8.3 2.1.6 2 .4 9.6-1 3.4-1.7 6-4.7 1-3.1 2.5-6.2 1.5-6.6 4-9.2 1.1-3.4 1.4-2.5v-1.9l1.4-3.1.5-1.7v-2l-.5-3.8.1-1.2.3-.3h.3l1.6-.6 2.3.1.7-.3 1.5-1.2 12.3-3.8 2.2-.4.9.1.9.2.8.1 1.1.2z" />
      <path d="m549.4 245.4 1.6.8.8.2 1.1-.1 1 .1.5.2.3.2.2.9.2.5.7.8.3.1.3-.1.2-.1.5-.6.6-.3h.6l.6.3.4.7.6.5.2.5 1.3.6.1.4-.3.7-.4 1.2.6-.2 2.1-1.9.6-.3.7-.1h1l.7-.2-.1-.5-.8-.7-.4-.3-.4.1.1-.5 1.4-.7 2.1.8 3.5 2.4.6.2.7.2.5.4.5.3.5-.1.5-.2.4-.1.4.1.6.6h.4l.4-.3.6-.8.3-.3.5-.3.8-.2.5-.4.4-.3h.6l.9.1 2 1.4.5.1.4.1.2.2-.1.7.2.5v.6l.1.5.4.4.3.4.3.5.4 1 .4.9.5.8.4.1h.2l.6-.5.2-.1.6-.2h1.1l1 .1.5.1.4.2.5.6.4.4.6.4.9.3.5.2.8.8 1 .2.4.1.3.4-.2.6v.3l.2.4.6.2.6-.1.8-.3.3-.1.7.1.4.1 1.5 1 .7.9.3.8.2 1 .4.6.3.2.1.3-.1.6.1.2 1.5 1.7.8.5.3.3.1.2-.2.5-.1.4.2.5.4.3 3.1 4 .5.4h.6l.4-.2.3-.4.3-.1.6-.2.6.1.3-.3.1-.2v-.8l.2-.5.2-.2.4-.3.9-.2h.8l1 .3-2.2 1.1-.2.5.1.3v.4l-.2.7-.1.4.2.3.2.1 1.6.5.2.2.2.4.2.6.2 1.3-.1.6-.1.4-.2.2-2.6 1.4-.7.5-.5.7-.1.7v.3l.3.5.6.9.2.5v.7l-.2 2v.8l.2.5.6.6.1.7-.1.3-.5.9-.8 2.1-.3.7-.5.8-.3.4-.1.7.1 2-.1.4-.1.3-.4.3-.6 1-.5 1.3-.3.7v.5l.1.6.5.7 1 .8.3.4.3.5.2.9-.3 1.6-.3.7-1.3.9-.6.7-.4.7-.5 1.3-.3.5-.4.4-.5.1-2.7.2-.6.1-.5.3-.3.2-3.1 4-.7.7-.8.5-1.2.4-.6.3-.6.4-1.6 2-2.4.4-.8.4-.2.1-1 1.1-.5.7-.2.5v.3l.3.7v.8l-.2.6-.3.2-.5.2-.5.2-.8.3-.5.1h-.7l-1.1-.3-.3-.1-2.4.5-3.2 1.2-.7.9-.9.8-.2.4-.2.4.1 1.1-.1.5-.2.5-1.2 1.1-.4.7-.2 1-1 2.5-.3.6-.7-.4-.8-.3-1.5-.3-.3-.3-1.4-2.5-.7-.6-2-.1-.5-.7-.4-2.2-.2-1-.5-.9-.6-.8-.9-.6-.6.1-2.7 1.8-.9.2-6.5.4-.9.4-.9 1-1.3 2.1-.9.8-.9.4-1.1.1-1-.1-1-.4-3.1.3-.4-.1-.5.6-.6.8-1.3 1.9-.1.3-2.1 2.2-1.7 2.3-.2.5-.1.7-.4.1H535l-.6-.3-.4-.5-.5-.5-.9-.1-.7.4-.4.7-.3.8-.4.8-1.2.5-5.3-.3.3.9-.5.4-.7.2-.4.5v1.1l-.3.6-.1.7-.4-.1h-.2l-.8 1.3-.6.7-.6.2-.7.2.2.5.6.6.4.5-.3.1-.7.3-.3-.4-.3.4.2 1.3-1 1.9-2.7 3.3-.8.4-.5.3-.3.4v.6l.3 1.2.1.6-.5.4-2.3.7-.8.5-.1.5-.1 1.2-.1.5-.5.6-.4.2-.4.2-.4.3-.1.4.4.6.2.4-.1.7-.2.3-.3.3-1.9 2.1-.5.8-.2 1-.3.2h-1.1l-.2.2-.1.6-.2.5-.4.5-.3.3-1.5.9-1 .5-1.3.2-.8.5-.5.2-1.3.1-1.3.5-.3.2-1.5 1.6-.2.1-.4-.1-.2-.6h-.5l-.3.2-.3.9-.3.4-.5-.7h-.4l-.4.5v.9l-.6 1.3.4.2.6.6.7.3.6.5 1.3 2.1.4.8 5.1 12.2.9 1.1 2.2 1.9.7 1 .6 2.6.4.7.5.9.5.2.5-.1h1.1l.7.2.4.3v.6l-.7.7-1 2.5v1.5l1.1 2.9-.1.9h.5l-.7.2-.6.3.6 1.1.4 1.1.5-.4h.4l.4.2.3.5-.7 1-1 .1-1-.1-1 .3-.1 1 .9.6.7.6-1 .6-.4-.1-1.2-.6h-.3l-.4.5.2.5.4.3.6.1.2.3-.2.6-.7.8-.4.2-.6.1-1-.1-.1-.1-.4-.5-.4-.2-.2.4h-.2l-.8.1-.4.2-.6.6-1.9-.1-.7.1v.4l.3.5-.1.4-.9.7-.8-.1-.9-.3-1-.3-2.2.4-.5.3.3.6 1 1 .3 1-.4.2-1.8-.1-1 .3-.8.7-.5.9.4 1-.5.5-.6.2h-1.3l-.8.2-.6.8-.5.2-.8-.4-.6-.7-.7-.7-1.3-.1-.3.3-1 .7-.4.2-.8-.1-.3.1-.3.1-.5.5-.4.1-.5-.1-.6-.4-.6.1-1 .5h-.4l.4-.5v-.3l-.8-.4-1-.1h-2.1l-.8-.2-2-1.1-.5-.5-.2-.4-.2-1.4-.7-.9-.4-.5-.3-.1-6 1.1-1.5-.1-.6-.8-.3-1.1-.8-.4-.9-.2-.9-.4-.5-.6-.4-.7-.6-.6-1.2-.3-.3.5v1l-.2.8-1.3-.1-1.6-.6h-.6l-2.7.8-.7.3-1.4 1.3-.9.4-1.4-1.1-.7-.2-.6.3-.4.5v.6l.2.9-.6.7-1 1.1-3 2.2-1.4.8-.9.4-1.3-.2-.6-.2-.9-.6-.3-.1-1.2-.2-.4-.3-.2-.6-.1-1.3-.3-.5-1.5-.2-2.7.3h-.7l-1.8.2-1.7-1.1-1.6-1.5-1.6-1-2.2.1-1.1-.2-.5-.8-.3-1-.7-.7-1.9-1.1-1.5-1.1-2.5-3.1-4.1-3.7-.2-.4-.1-.6-.1-1.2-.2-.3-2-.9-.4-.5-.5-.4-.3-.5-.7-1.4h-.5l-.4-.1-.6-.3-.3-.3-4.6-9.7-1.1-1.8-1.4-.3-.7-.1-1.5-.3-.7-.3-.6-.4-.4-.6-.2-.8-.1-1.2-.3-.9-.5-.4-1.9-.3-1.4-.9-2.1-2.7-.4-.2h-.5l-1 .1-.3-.3-.2-1-.2-.2h-1.5l-.6-.4-.9-.7-2.1-2.8-.4-.8-.4-2-.3-.6.4-.7 3.2-6.7 11-23.5 5-10.8 5.2-11.4.1-.6-.2-.3-.6-.3-.5-.9-.4-1.5.2-3.3.9-2.8.8-1.3.5-1.2 1-3.7.2-1.1-.1-.6-.4-.4-.4-.6-.2-.6.3-.7 1.1-.7 1.2-1.3.9-1.4.5-1.1 1.4-3.8.1-.8v-1.7h.1l.4-.7h.5l.5.2h.4l.6-.6.7-.9.9-1.7v-.4l-.1-.3-.1-.4 1.3-2.2.2-.3.5-.3.5-.1h1.1l.2-.1.5-.8.9-.6.7-.8.7-1 .3-.7-.2-.8v-.4l.6-.3.7-1.2.5-.4h1l.6-.1.6-.2.3-.2 3.4-3 .7-.5 2.9-.8.5-.6.3-.1h.3l.4.3.3.1.5-.1.8-.5.5-.3.5-.7.4-.2h.5l.5.2.9.5.8.3.3-.1.4-.2.6-.8 1.2-1 4.9-2.8 1-.1.4.3.6.7.7.7.4.3.4.2h.3l1-.1.6.1 3.2.6.4.2.3.2.3 1.3.2.9.2 1.1.2.5.3.2.3.1.5.1.6-.2.4-.3.2-.5-.1-.5-.5-.9-.1-.6.1-.5 1.1-2.1 1-1.4 4.2-4 .3-.1.7-.1.2-.1.4-.5.1-.3-.1-.9.3-1.3.8-1.1 1.1-.7 1.3-.2.3.1.8.6.2-.3.4-1 .5-.4.6-.1h1.3l.9.3h4.6l.2-.1-.1-.4-.4-.3-.4-.2h-.5l-1.2-.3-.3-.8.3-1 .6-1 .4-.2h.3l.1-3-.9-1.1-1.6-1.4-1-1.5.9-1.2 2.7-.8.8-.6 1.2-1.5h.5l1.2.4.6-.6.1-.6-.2-.8.1-.8.3-.6 1.3-1.4.6-.5.7-.3.7.2.9.4.4.4h.3l.2-.6v-.4l.3-.7.2-.3 1.3-1.2.8-.6 1.1-.3.5-.4.2-.2.7.6.4.2.3-.4.6-.6 1-.6.2.1 1.5 1.4 1.1.7-.2-3.4.2-.8.7-.5.6.6.9 1.7 1.6.8 2 .3 4.6-.1.8-.3h.4l.5.1v.5l-.3 1 .4.4 1-.4 1.8-1.4 2-2.3 1.1-1 1.3-.2.6.3 1.5 1.4.6.2h.6l2.9-.8.5-.3 1.4-2.2.2-.5v-1.1l.2-1 .6-.6.4-.1.6-.2h1l-.3-1.1.6-.3h.9l.4-.2.3-.3.6.6.5.9.2.4h.7l3.3-.4.2.2.3.4.4.4.5.1.4-.3v-.7l.2-.4.8-.5 1.1-.3 2.1-.3 1.1-.3.7-.7.6-.8.6-.7 1-.7.6-.1.5.3.9.8.3.5-.2.3-.5.5.5 1.3 1.9 3.4.6.8 1.3.5.9.6.9.7.6.7.6.6 1-.9h.5l.3 1.1.3.6.8.6 1.2-.2.9-.3.5-.1.3.1.4.4.8.6z" />
      <path d="m549.4 245.4-.8-.6-.4-.4-.3-.1-.5.1-.9.3-1.2.2-.8-.6-.3-.6-.3-1.1h-.5l-1 .9-.6-.6-.6-.7-.9-.7-.9-.6-1.3-.5-.6-.8-1.9-3.4-.5-1.3.5-.5.2-.3-.3-.5-.9-.8-.5-.3-.6.1-1 .7-.6.7-.6.8-.7.7-1.1.3-2.1.3-1.1.3-.8.5-.2.4v.7l-.4.3-.5-.1-.4-.4-.3-.4-.2-.2-3.3.4h-.7l-.2-.4-.5-.9-.6-.6-.3.3-.4.2h-.9l-.6.3.3 1.1h-1l-.6.2.4-6.8-.1-1.3.6-1.3.7-.7.3-3 .3-.8.3-.3.5-.2.3-1.7h-4.2l-.4-.4-.6-.3-.4-.6-.8-.7-5.7 1.7-.8 1-2.2 1-.6.3-.6.3-1.6.3-.3-.3h-.3v-.4l-.1-.8-.3-.7-1.7-3.3 2.4-2.2 4.1-2.9-1.6-7.2 2.8-.2.8-1.1 1.6-.6 1.1-1.5 1.1-5.1 1.2-5.9 3.1-2.2 3.8-1.4.8 1 1.2.7 1 .9 1.8-.1.8.7 3.6-.6 3.2-.7.8-.6 1.5-.6.9-1.2.2-1-.1-1-.1-.6.2-.3.3-.1.4-.3v-.4l-.1-.7-.2-.6-1.5-3.5 3.5-.8 1.2-.8 1.1-1.1 1.2-1.8.3-1.3v-.9l-.2-.5-.6-2.9v-.9l.4-.8 1.1-.5 1-.1.4.2v.5l-.5.6v.7l.3.4.8-.1.5-.2.6-.3 2.5-.1 1.2-.4 1.9-1.3.4-4.3 3.3-.3.5.6h2.7l2.4-1.2.8-1 1.2-.5 2.4-.2 1.5.3 1.5-.5.5-.3.4-.5-.1-1-.9-.5-.8-1.3-.4-.4-.5-1.3.9-.4 4-.5 1.9-1.4 3.6-.2 1.1 1.6.3.5.4.1 1.2-.7.7-.2.4.1.2.3-.1.4-.2.4-.6.7-.2.3v.5l.1.8v.7l-.2.5-.3.3-.2.1-.2-.2-.5-1-.5-.3-.5.5.2 1.6.3 1.1.1.6-.1.6-.4.5-.3.5-1.9 1.6.1 1 2.7 1.1 2-.7 1-.8 1.8-.2 1.2-.3 2.2.7 1.1-.7 3.5-.9.9.1 1.6.6 1.5-.3.9.5v.8l-.3 1-1.1 2.2-2.6-.1-.9 1-.3.8-.6 1-1.1.4-.3.6-.2.2.1.3-.2.3-.2 1.1-1.3 1.5-.9 3.4-2.6 2.5-.6 1.4.2 1.2-.4 2.1-.8 1.8v1.1l-.2 1.2-.3.6-.7.9-1.6 1.1-1.7 4.7-.3 1.9-3.4-.1-.8-.7-1.3-.2-.5-.2h-5l-.2.2-1.2 1.6-.4 1.1-.6 1-.6.3-1.6-.1-.7.2-.5.2-1.2.9 1.1 2.4.6.3.8 1.9.5 1.8.6 1 2.3 1.7.3.3.3.5v1.6l3.1.6 2 .7 5.5-.8 2 4.2-4.7 3.9-.5.5-.3.3-.7.6-4.5 1.1-.7.7-1.9.1-1.5.5-1 1-.7 1.4-.2.2-1.1.4-.6.5-.6.9-1 .6-2.5 1.9-1 2.3v.3l.3.3.1.4-.1 1-1.2.8-.6.9-.9.8-.2 1.3.2.8-.7 2.3z" />
      <path d="m686.6 262-2.7 3.4-1.7 1.4h-2.1l-2.1.6-3.7 1-1.2-.2-1.2-.9-.5-.8-.7-.4-1.8.4-.6.4-.4.3-.4.1-.7-.3-1.1-.7-1.7-.9h-.3l-.6-.5-.6-.2-1.6-.5h-.6l-.8.1-1.3.4-.6.3-.4.2-.7.8-1 .1-3.3-.5-2.8.4-.7-.4-.2-.5-.1-.9-.4-.3-.8-.2-.7.1-.5.4-.5.5-.2.2-1.1-.1-.7.2-1 .5-.6.1-.9.6-1.4 1.1-.4.2-2.5 1-.4.3-.3.7-1 .2-3.6-1-.7.3-.8.7-.6.1-2.5-.5-.7-.4h-.6l-1.9.5-.8.2-.6.2-.4.3-.4.8-.3.9-.5 1-.4.6-.3.4-.5.2-1.2-.5-1-.3h-.8l-.9.2-.4.3-.2.2-.2.5v.8l-.1.2-.3.3-.6-.1-.6.2-.3.1-.3.4-.4.2h-.6l-.5-.4-3.1-4-.4-.3-.2-.5.1-.4.2-.5-.1-.2-.3-.3-.8-.5-1.5-1.7-.1-.2.1-.6-.1-.3-.3-.2-.4-.6-.2-1-.3-.8-.7-.9-1.5-1-.4-.1-.7-.1-.3.1-.8.3-.6.1-.6-.2-.2-.4v-.3l.2-.6-.3-.4-.4-.1-1-.2-.8-.8-.5-.2-.9-.3-.6-.4-.4-.4-.5-.6-.4-.2-.5-.1-1-.1h-1.1l-.6.2-.2.1-.6.5h-.2l-.4-.1-.5-.8-.4-.9-.4-1-.3-.5-.3-.4-.4-.4-.1-.5v-.6l-.2-.5.1-.7-.2-.2-.4-.1-.5-.1-2-1.4-.9-.1h-.6l-.4.3-.5.4-.8.2-.5.3-.3.3-.6.8-.4.3h-.4l-.6-.6-.4-.1-.4.1-.5.2-.5.1-.5-.3-.5-.4-.7-.2-.6-.2-3.5-2.4-2.1-.8-1.4.7-.1.5.4-.1.4.3.8.7.1.5-.7.2h-1l-.7.1-.6.3-2.1 1.9-.6.2.4-1.2.3-.7-.1-.4-1.3-.6-.2-.5-.6-.5-.4-.7-.6-.3h-.6l-.6.3-.5.6-.2.1-.3.1-.3-.1-.7-.8-.2-.5-.2-.9-.3-.2-.5-.2-1-.1-1.1.1-.8-.2-1.6-.8.7-2.3-.2-.8.2-1.3.9-.8.6-.9 1.2-.8.1-1-.1-.4-.3-.3v-.3l1-2.3 2.5-1.9 1-.6.6-.9.6-.5 1.1-.4.2-.2.7-1.4 1-1 1.5-.5 1.9-.1.7-.7 4.5-1.1.7-.6.3-.3.5-.5 4.7-3.9-2-4.2-5.5.8-2-.7-3.1-.6v-1.6l-.3-.5-.3-.3-2.3-1.7-.6-1-.5-1.8-.8-1.9-.6-.3-1.1-2.4 1.2-.9.5-.2.7-.2 1.6.1.6-.3.6-1 .4-1.1 1.2-1.6.2-.2h5l.5.2 1.3.2.8.7 3.4.1.3-1.9 1.7-4.7 1.6-1.1.7-.9.3-.6.2-1.2v-1.1l.8-1.8.4-2.1-.2-1.2.6-1.4 2.6-2.5.9-3.4 1.3-1.5.2-1.1.2-.3-.1-.3.2-.2.3-.6 1.1-.4.6-1 .3-.8.9-1 2.6.1 1.1-2.2.3-1v-.8l-.9-.5-1.5.3-1.6-.6-.9-.1-3.5.9-1.1.7-2.2-.7-1.2.3-1.8.2-1 .8-2 .7-2.7-1.1-.1-1 1.9-1.6.3-.5.4-.5.1-.6-.1-.6-.3-1.1-.2-1.6.5-.5.5.3.5 1 .2.2.2-.1.3-.3.2-.5v-.7l-.1-.8v-.5l.2-.3.6-.7.2-.4.1-.4-.2-.3-.4-.1-.7.2-1.2.7-.4-.1-.3-.5-1.1-1.6-3.6.2-1.9 1.4-4 .5-.9.4-4.1 1.3-.5.3-.8.6-1 .5-1.6.4-1.9.2-1.1-.3-.5-.9-.1-.6.2-.6.6-.5 1.7-.6 1.8-1 .5-.9.9-.5 1.1-.4 1.2-.3 1.9-.6.8-.9.3-1.5v-.9l.2-.8 3.9-1.8 1.4-.8 1-.5 1.1-.3 1-.1 2.5.3 3.7-.3 1.2.5v-3l2.1-.2 1.4.2.8 1.2.3.2 1.8 3.4 4-1.9.4-.5.9-2.2.2-1.1.7-.9 1.2-1.1 3.6-1 2-1.3 3.3-1.3.1 1.5.3 1.5v.7l-.1.4-.5.6-.4.2h-.5l-.5-.5-.2.1-.6.6-.5.6-.1.5v.3l.9 2 .1.9v.8l-.2.8-.5.3-.6.6-.1.3.1.5.2.3.4-.1 1-.7.3-.1.4.1 2.4 2.5.4 1.1.8 1.1.4.4.4.1.4.2.8.7 1.5 1.8 1.2 1.2 2.2.6 3.1.4 3.8-1.2.6-1.4.9-.4.3-1.3-1.1-1.4-.5-.5-.4-.6.2-1 1.4-.6.9-1.3v-.3l5-4.2 6.1-4.7 2.3-1.3.7-1.6.2-1.7-1.1-2.1.1-4.2 1.8-.9.8-.2.9.4 1.1.7.5.1.5-.3.8-1.2h1.8l2.1-.4 1.9-.6 5.4 1.3 2.3 1.1 1.9-.7.8-.8.5-1.3.3-1.1 1.1-.6.7.3 3.2-.8.2-2.1.3-.8.9-1.8 3.6 3.6 1.5.7 4.6 1.1.8 1.5 3.2.5 1.3 3 .8.9.8.6.9.1 1-.1h.5l.4.2.2.5-.3.8-.8 1.2-2.5.8-.7.7.3 1.1 1.8.6.9.8.6.7.6 2.6.9 2 1 .9-.4 1-2.4.5-1.6.8-.6 1.3-.1 2.7 5.2-.5 1.4-.3.1-.2.1-.5.4-.5.6-.2.9.1.3-.1.6-.4.3-.1h3.1l1.4.3.5.2 1.8-2.6-.1-1V141l-.5-.8-2.5-.6-1-.3-.6-.1-.6-.4-.1-1.1.6-2.9 1.6-1.1 2.2-.6 1.9-.3 1.3-.5.6-1.4.4-.8.6-.3h.8l.8-.1.4-.5.2-.6-.3-.7-.8-1.2-5.2-3.5-.4-.8-.1-.8.2-.7-.3-.2.1-.5h-3.6l1.3-2.3-.8-1.6 3-7.7.2-3 1.1-2.3-1.2-1.8-2.8-.5-6.7-.3 1.3-1.2.7-.2 1.8.3.5-.2.8-.6.5-.4.4-.1 1.1.2.6-.2.3-.3.8-.9.4-.4.3-.1 1 .3 1.3.4.7.4.3.1.6.1.4-.2.7-.4.3-.1.2.1.5.6.4.2.5-.1.1-.2.6-.9.4-.4.4-.3h.6l.3.1.3.4.1.6.2.3.4.3.9.2h.9l.4-.3.2-.3.3-1.6.1-.3 2.1-1.8.5-.1.8.3.6.1.7-.1.4-.1.6-.2.3 8 .3 2.2 4.2 9.3 1.2 3.9.2 3.9-.3 3.5.1 15.8v14.2l.1 11.2-.8 2.5-.2 1.3v1.7l.1 1.6.5 1 .3 1.1.4 3.3v1.1l-.2.7-.3.3-.4.2-.6.6-.4.6-2 5.2-.2 1.4.1 1.6 1.9 5.9-2.7 1.4-1.3.3-1.4-.4-9-5.9-9.9-6.4-1.2-.4h-1.3l-1.6.4-1.3.7-8.8 7.9-.6 1-.7 2.7-2.5 6.1-3.2 5.6-3.3 4.3-4.4 5.5-1 3.8.2 12.7.4 3.6.4 1.2h.8l.7-.2.8-.4.7-.6.6-.7 1 3.1.6.9 1.3 1.4.5.8.3 1v1.3l-.5 2.1.2 1.3 1 1.8 4.8 4.3 2.2 3.4.7.7.7.5 4.1 1.4z" />
      <path d="m715 93.7-.6.2-.4.1-.7.1-.6-.1-.8-.3-.5.1-2.1 1.8-.1.3-.3 1.6-.2.3-.4.3h-.9l-.9-.2-.4-.3-.2-.3-.1-.6-.3-.4-.3-.1h-.6l-.4.3-.4.4-.6.9-.1.2-.5.1-.4-.2-.5-.6-.2-.1-.3.1-.7.4-.4.2-.6-.1-.3-.1-.7-.4-1.3-.4-1-.3-.3.1-.4.4-.8.9-.3.3-.6.2-1.1-.2-.4.1-.5.4-.8.6-.5.2-1.8-.3-.7.2-1.3 1.2 6.7.3 2.8.5 1.2 1.8-1.1 2.3-.2 3-3 7.7.8 1.6-1.3 2.3h3.6l-.1.5.3.2-.2.7.1.8.4.8 5.2 3.5.8 1.2.3.7-.2.6-.4.5-.8.1h-.8l-.6.3-.4.8-.6 1.4-1.3.5-1.9.3-2.2.6-1.6 1.1-.6 2.9.1 1.1.6.4.6.1 1 .3 2.5.6.5.8v1.3l.1 1-1.8 2.6-.5-.2-1.4-.3h-3.1l-.3.1-.6.4-.3.1-.9-.1-.6.2-.4.5-.1.5-.1.2-1.4.3-5.2.5.1-2.7.6-1.3 1.6-.8 2.4-.5.4-1-1-.9-.9-2-.6-2.6-.6-.7-.9-.8-1.8-.6-.3-1.1.7-.7 2.5-.8.8-1.2.3-.8-.2-.5-.4-.2h-.5l-1 .1-.9-.1-.8-.6-.8-.9-1.3-3-3.2-.5-.8-1.5-4.6-1.1-1.5-.7-3.6-3.6-.9 1.8-.3.8-.2 2.1-3.2.8-.7-.3-1.1.6-.3 1.1-.5 1.3-.8.8-1.9.7-2.3-1.1-5.4-1.3-1.9.6-2.1.4h-1.8l-.8 1.2-.5.3-.5-.1-1.1-.7-.9-.4-.8.2-1.8.9-.1 4.2 1.1 2.1-.2 1.7-.7 1.6-2.3 1.3-6.1 4.7-5 4.2v.3l-.9 1.3-1.4.6-.2 1 .4.6.5.5 1.1 1.4-.3 1.3-.9.4-.6 1.4-3.8 1.2-3.1-.4-2.2-.6-1.2-1.2-1.5-1.8-.8-.7-.4-.2-.4-.1-.4-.4-.8-1.1-.4-1.1-2.4-2.5-.4-.1-.3.1-1 .7-.4.1-.2-.3-.1-.5.1-.3.6-.6.5-.3.2-.8v-.8l-.1-.9-.9-2v-.3l.1-.5.5-.6.6-.6.2-.1.5.5h.5l.4-.2.5-.6.1-.4v-.7l-.3-1.5-.1-1.5-3.3 1.3-2 1.3-3.6 1-1.2 1.1-.7.9-.2 1.1-.9 2.2-.4.5-4 1.9-1.8-3.4-.3-.2-.8-1.2-1.4-.2-2.1.2v3l-1.2-.5-3.7.3-2.5-.3-1 .1-1.1.3-1 .5-1.4.8-3.9 1.8-.2.8v.9l-.3 1.5-.8.9-1.9.6-1.2.3-1.1.4-.9.5-.5.9-1.8 1-1.7.6-.6.5-.2.6.1.6.5.9 1.1.3 1.9-.2 1.6-.4 1-.5.8-.6.5-.3 4.1-1.3.5 1.3.4.4.8 1.3.9.5.1 1-.4.5-.5.3-1.5.5-1.5-.3-2.4.2-1.2.5-.8 1-2.4 1.2h-2.7l-.5-.6-3.3.3-2.9-4.7-.7-.4-1-.5-1.5.3-1-.2-.6-.5-.4-1.2-.6-.7-1-.7-.2-1 .4-.7 1-.4.7.1.9.5.9.5.6.3 1-.1.6-.5.3-1 .2-1.4-.7-1-1.4-.8-3.6-1.7-1.7-.4-2.2-.2-2.3-.6-1 .1-.6.4-.4.3-.2.1h-.5l-7-.8-.7.1-.7.4-.8.5-1.9-1.8-1.1.2h-1l-1 .4-.5.3-.1.4-.1 1.2-.2 1-1.7 2.7-.5.5-.4.1-.5-.1-.2-.2-.3-.4-.3-1.4-.5-.4-2.1.3-3.5-.1-3.6-2.7-4.9-.8-.6-.5-.4-.6-.6-1.6-1.6-1.6-1.6-1-1.1-1.9-.6-5.2-.3-.9-.6-.4-.7.2-.5.5-.5 1.3-2 1.4-5.3 2.3-2.9 1.6-.7.2-1.1-.2-.9-.2-1.2-.6-1.5-.9-1.1-.3-8-.7-.4-.2-.3-1.2-1.3-2.3-.3-1.3v-4.2l3-3.2.3-.5 1.4-3.7 1.2-1.5 1.2-1.1 3-1.9 2.9-3 .4-.7.9-.6 4.1-1.3 1-.6.7-.6.5-.9.9-4.5.1-2.3 3.3-13.5.2-1.3-.4-1.1 1.4-2.4-.2-.9.2-.9.9-1.6.8-2.1.5-.4.4.2.3.6.4.6h.8l.7-.5-.1-.7-.3-.9v-1l.6.3.1-.5.3-.3.9-.6h-.3l.3-.6.5-.4h.5l.6.3.2-.6-.3-.3-.4-.3-.2-.6.2-.5h.5l.5.2.4.4.2-.3.4-.4.1-.3.3.4.4.2h.4l.5-.3-.7-.9.5-.6 1.7-.6 1.8-.9.8-.6.8-.7 1.1-1.8.7-.5.5 1.6.4-.3.5-.6.1-.3.6-.3.7-.2.3.1-.3.7.6.4.5-.3.4-.6.4-.5.6-.3h1.9l1.1-.3.9-.7.7-.9.2-1.1-.3-1.1.5-.4.3-1.4.9-.9.4-1.4h.5l.7.3.6.2.6-.2 1.8-1.5 1.3 1.4.6.3.7-.3.2-.5.7-2 .5-.3.2-.1-.3-.6-.3-.6-.2-.4.1-.4.5.1 1 .1.8-.3-.3-.9 1.7-.5 2-.8 1.6-1.1.7-1.4-.4-2.2v-1.1l.6-.5.8-.2 1-.3.9-.5.6-.4.8-.7.5-1.1.2-1.1-.4-1.1.1-.5.9-.4 1-.3.7-.3.2-.3.3-.8.2-.3.3-.2 1-.3.4-.4.4-.6v-.4l-.2-.4-.1-.6.1-.7.3-.5 1.4-1.8.4-.3.6-.2 1.1-.1.4-.2 1.7-2 .7-.6 1.7-1 1.8-.5 3.8-.3 3 .8.7-.2 1-.9.8-.1.9.1h1.3l1.6-.5 3.3-2 2.1-.6 1-.1.9-.3.7-.5.2-1 .5-.7h1.1l2 .2.8-.6 1.1-2 .4-.5.2-.6-.3-3.5 1.1-1.4.8-.9.8-.5-.1-.2 1-1.3.4-.2 5.6-.3.9-.3.7-.7.9-.6 1.2-.2 2.6.6 1.3.1.9-.3.3.2.3.1h.7l1-.5 1.7-1 .9-.2 2.3.6 1.2.1.5-.5.4-.8.9-.2 1.5.1 1.8-.8.9-.1.9.6.5-.2 3.1-.2 1 .3 2.7 1.8 1.6.3 1.1.7 1.7.1.6.2 1.3.8.5.2 1 .2.4.2.9 1 .2.4 1.4.2.6.2 1.4 1 1.1.6h.8l2.1-.2h1.1l.9.3.7.4.6.6 1.5 1.1 1.6.3h1.7l1.9-.3.8-.3 1.8-.8.9-.3h.9l3 .3h1.3l.4.1.7.5.4.1.7-.2 1.2-.9.9-.3 5.2-.4 1.5-.6 1.4.4 2.7.3 5.1 1.2 1.6.7.8.2.8-.2 1.5-.8.7-.1.5.3.9 1.2.4.2.3.1.7.5.4.2.4-.1.7-.3h.5l.4.4 1.1 1.6-.4.9 4.4 13.9 7.5 23.4.3 1.6-1 11.5.3 2.1.9 1.8 4.4 4.8.9 1.9 1.8 6.3 1.9 4.5.7 1 .8.8 3 2.3.6.6.2.8.1.9zM637.9 466.5l-.2-.3-.7-.5-.2-.5-.1-.8-.2-.6-.4-.3-.7-.4-.2-.3-.1-.4v-1l-.1-.4-.3-.5-.1-1 .1-.8-.1-.4-.2-.5-.5-.7-1.1-.8-.6-.1-.2-.4-.1-.6-.1-.6-.4-.4-.2-.1-1.2-.1-.6-.3-.5-.5-.7.2-.6-.2-.2-.4-.3-.6-.2-.3-.5-.3-.2-.7v-.3l-.2-.4-.7.2-.2.1h-.4l-.5-.1-.9-.5-1.1-1-1.6-1-.7-.6-.1-.3-.2-.3-.3-.2h-.9l-.4.1-.4.4-.2.1-.6-.4-.7-.2-1.1-.6-.7-.1-.5-.3-.7-.3-1.6.4h-.7l-.4-.2-1.1-.8-1.5-.5-3.3-2.4-.3-.1h-.5l-.5.2-.9.6-.5.2h-2.4l-.5.3-.3.4-.4.3-.3.1-.6-.1-1.2-.4-1.6-1-7.3-2-.4-.2-.4-.3-.1-.5.1-.9-.2-.8-.2-.4-.3-.2-3-1.5-.4-.1-.2.1-.4.3-.1.7-.1 1.6-.1.7-.3.5-.2.1-.3.1-4.4-1-.5-.3-.4-.6-1.1-1.8-.3-.2h-.9l-.7-.2-.2-.1-.4-.6-.4-1.1v-.5l.5-1.9.1-.6v-.4l-.8-1.4-.2-.3.1-.5.2-.6 1.2-2.9.4-.1 3.1 1.4h.3l.4-.3.5-.6.9-1.5.4-.5.4-.1.6.2.3-.1.3-.3.6-.9.6-.7.7-.4.4-.3v-.4l-.4-.8v-.4l.4-.4.6-.2.5-.3.6-.5.5-.1.9.2h.3l.2-.2.7-1.1.1-.3 1-.8.3-.6.1-.8-.1-.5-.2-.4-2-1.8-2.3-3-.4-.6 3.7-2.2.5-.3 1.3-.4.5-.2.3-.5-.1-.5-.5-1-.1-.8v-.5l-.1-.3-.6-.5-.7-1v-1.2l.3-1.5.1-1.3.9-1.6.5-1.5.8-1.3 1.3-1.1 3.6-1.1.5-.7v-.9l.1-.8.8-.5-.7-.9-.3-1.2V382l.3-1.1 1-1 1.3-.6 1.4-.4 1.2-.6.6-.4.3-.4.3-.6-.1-.8.1-.9.9-1.2.1-.8-.1-.3-.6-.6-.2-.3-.1-.4.1-.8-.1-.3-.4-1.2-1.3-1.7-.5-1.9-.4-.9-.6-.7-.8-.6-.5-.6-.2-3.1-1.4-.6h-1.9l-1.5-.5-3.8-4.1-1.6-.7-1.1-.3-.6-.4-.3-.7v-1l-.4-.6-1-.4-1.1-.3h-.7l-2.5-2.6-1.9-3.3-.6-.7-.6-.6.3-.6 1-2.5.2-1 .4-.7 1.2-1.1.2-.5.1-.5-.1-1.1.2-.4.2-.4.9-.8.7-.9 3.2-1.2 2.4-.5.3.1 1.1.3h.7l.5-.1.8-.3.5-.2.5-.2.3-.2.2-.6v-.8l-.3-.7v-.3l.2-.5.5-.7 1-1.1.2-.1.8-.4 2.4-.4 1.6-2 .6-.4.6-.3 1.2-.4.8-.5.7-.7 3.1-4 .3-.2.5-.3.6-.1 2.7-.2.5-.1.4-.4.3-.5.5-1.3.4-.7.6-.7 1.3-.9.3-.7.3-1.6-.2-.9-.3-.5-.3-.4-1-.8-.5-.7-.1-.6v-.5l.3-.7.5-1.3.6-1 .4-.3.1-.3.1-.4-.1-2 .1-.7.3-.4.5-.8.3-.7.8-2.1.5-.9.1-.3-.1-.7-.6-.6-.2-.5v-.8l.2-2v-.7l-.2-.5-.6-.9-.3-.5v-.3l.1-.7.5-.7.7-.5 2.6-1.4.2-.2.1-.4.1-.6-.2-1.3-.2-.6-.2-.4-.2-.2-1.6-.5-.2-.1-.2-.3.1-.4.2-.7v-.4l-.1-.3.2-.5 2.2-1.1 1.2.5.5-.2.3-.4.4-.6.5-1 .3-.9.4-.8.4-.3.6-.2.8-.2 1.9-.5h.6l.7.4 2.5.5.6-.1.8-.7.7-.3 3.6 1 1-.2.3-.7.4-.3 2.5-1 .4-.2 1.4-1.1.9-.6.6-.1 1-.5.7-.2 1.1.1.2-.2.5-.5.5-.4.7-.1.8.2.4.3.1.9.2.5.7.4 2.8-.4 3.3.5 1-.1.7-.8.4-.2.6-.3 1.3-.4.8-.1h.6l1.6.5.6.2.6.5h.3l1.7.9 1.1.7.7.3.4-.1.4-.3.6-.4 1.8-.4.7.4.5.8 1.2.9 1.2.2 3.7-1 2.1-.6h2.1l1.7-1.4 2.7-3.4 9.9 3.5 3.2.6 20.4.3v-.7l-.1-.6-.2-.6-.4-.5-.2-.8-.3-8.1 1.6-9.1.8-4.6-.1-1.5h3.1l.7.2 1.2 1.1.7.3 1.4.3 2.3-.2h1.4l6 1 5.4-.2 19.7-.5-.6 2.1-.7 6.8-.9 3.3-.1 1.1-.2 1.1-1.7 2.3-.1.5-.2 1.5-.1.4-.4.8-.2 1.4-4.9 13.9-3.2 15.3-.1 1.2-.1.5-.4 1.3-.1.5v.7l.2 1 .1.5-2.2 13.1-.3 1-3.9 6.2-.3.8-.2 1.2-.5 1.1-.8.8-1 .3.1.6.2.1.6-.3.4 1.8-.5 2-.8 1.9-.4 1.7-.6 1-4 4.1-.6.5-1.5.7-.6.4-.4.6-.9 1.5-.6.8-5.1 4.4-1.3-1.1-1.8.3-1.1 1.2 1.1 1.4.3-.4.7-.6.7-.4.8-.1-.9 1.7-1.8 1.6-5.8 3-1.6.4-1.8-.1-2.1-.4.2.8.1.2.3.1v.4l-1.4.8-9 10.4-2.2 2-.7.4-.3.2-.1.3-.2.9-.2.2-.6.4-1.8 2.6-.6.6-1.6.9-.6.6-.3.5-.2 1.2-.6.3-.4.4-.3.4-.4.9-6.1 8.5-6.1 12.2-.5 2.1.5 2.1H676l-.5.4-.2 1.4.7-.3 1.6-.6.6-.5v.4l-.3.7-.4.7-1.2 1.4-4.8 4.5-1.4 1.7-2.2 3.9-2.6 6.1-6.7 12-.9 2.2-.2.8-.4.7-2.2 2.4L647 454l-1.3 1.9-.7.8-.7.3-.6.5-1.5 3.2-4.3 5.8zM615 412.6l-2.2-.6-3.5-1.9-1.2-.4h-.7l-1.8-1.5-.4.3-.9 1.1.2.9.5.7-.2.9-1.7 2.3-.2 1.6.1 1.9 1.9 1.6.9 1.1.6 1.5.1 1.2 1.2 4 1.9 2.3 2.1 5.8 2.3.6h1.1l2.1-.7 1.4-.2 1.6.3 1.2.7 1.4 1.1 1 .4 1.3.2 1.6 1.1.6.1.4-.1.8-.6.5-.5.4-.9.2-1.5.2-.8.1-.7.8-.1.1-.5v-.7l-.2-.6v-.3l.1-.3h.2l.5.1h.5l.2-.2.2-.5.4-.4.4.1.4.3.4-.1v-.5l-.1-.6-.3-.3-.3-.4-.8-.7-.8-.5-.5-.5-.1-.6.1-.6.4-.4-.1-.5-.7-.1h-.3l-.2.2-.3.4-.2.1-.6-.4-.4-.4v-.7l-.2-.3-.2-.4-.6-.4-.3-.2-.8-.1-.2-.1-1.2-1.3-.2-.2.3-.5.5-.2.6.2.3-.2-.2-.3-1-1-.4-.5-.7-1.2-.4-.4-.8-.3-.5-.4-.5-.7-.5-2.1-.3-.5-.8-.6-1.5.5h-.7l-3.4-.4z" />
      <path d="m615 412.6 3.4.4h.7l1.5-.5.8.6.3.5.5 2.1.5.7.5.4.8.3.4.4.7 1.2.4.5 1 1 .2.3-.3.2-.6-.2-.5.2-.3.5.2.2 1.2 1.3.2.1.8.1.3.2.6.4.2.4.2.3v.7l.4.4.6.4.2-.1.3-.4.2-.2h.3l.7.1.1.5-.4.4-.1.6.1.6.5.5.8.5.8.7.3.4.3.3.1.6v.5l-.4.1-.4-.3-.4-.1-.4.4-.2.5-.2.2h-.5l-.5-.1h-.2l-.1.3v.3l.2.6v.7l-.1.5-.8.1-.1.7-.2.8-.2 1.5-.4.9-.5.5-.8.6-.4.1-.6-.1-1.6-1.1-1.3-.2-1-.4-1.4-1.1-1.2-.7-1.6-.3-1.4.2-2.1.7H614l-2.3-.6-2.1-5.8-1.9-2.3-1.2-4-.1-1.2-.6-1.5-.9-1.1-1.9-1.6-.1-1.9.2-1.6 1.7-2.3.2-.9-.5-.7-.2-.9.9-1.1.4-.3 1.8 1.5h.7l1.2.4 3.5 1.9 2.2.6zm22.9 53.9-3.4 4.5-1.3.9-1.5 3.3-2.4 2.9-6.8 6.5-.8.4-2.9.9-1 .5-1 .7-.3.9-2.9 3.6-1 .4-.4.3-.3 1.1-.4.4-.3.3-.3.1-1 .3-.8.7-1.5 1.6-.8.5-1.8.6-1.2.9-.8.1-.8.2-.5-.1-.2.1-.3.3.3.8-.9 2-1.4.8-.2.4-.2 1.3-.5.7-1.5 1.1-1.5 1.7-.8 1-.3.9-.1.5-.8 1.5-.7.4-.3 1.1-3 1.5-.5.6-.2.9-.4 1-1.3 2-5.7 6.2-4.8 6.6-2.5 1.6-.4.5-6.2 5.8-1.1 1.6-.4.4-.7.3-.4.4-1.8 1.8-.8 1.1-.3 1-.3.7-5.2 4-1.2.7-1.5 1.3-.7.4-.2.8-1.1.9-2.2 1.2-2.2 1.6-1.4.8-2.6.8-1.1 1.1-.9 1.5-.4 1.6-.4 1.2-1 1.2-4.8 4-1.4.5-.4.4-.6.9-.6.4-.2.8-.2.3-2.2 1-.9 1-.5.3-.9.1-2.3.9-.8.5-4.1 4.4-1.6 1.3-3.3 1.3-.5.4-.2.1-1.1 1.6-.7.3h-.4l-.5-.3-.3 1.4-1.1 1.2-2.5 2.1-1.2.7h-.2l-.4-.4-.2.2-.2.6-4.9 3.4-.4.6-3.5 1.7-.8.5-.3.4-.3.8-.2.5-.4.3-.4.2-1 .1-4 2.2-.9.2-1.1.1-1 .3-2.6 2.3-1 .3-2.2.3-1.6.9-4.4 1.9-.6.1-.3.3-.3 1-.3.2-1 .2-4.5 2.2-1.8.5-1.9.1-4-.5h-1.2l-.9.4-.8.2-1.1-.5-1.7-1-6.2-1.3-6.4-.3-4 .6-3.8 1.2-3.5 1.7-1.5 1.2-1.2 1.5-.9 1.8-.7 3.2-.2 1.3.2.6 1 .4.2.5.2.4 1.3 1 .9 1.4.4.5-.1.4-.2.4-1.5-.5-1 .3-.9.6-1.2.3-1.5-.1-2.4-.8-1.4-.2-2.3.3h-1.1l-1.3-.8-1.6-.3-1.6-1.1-1.7-.7-4-1.1-4.2-.1-4.2.6-2.7.8-1.1.6-.7.9.6 2.3-.5 1.1-.8.9-.5.4-2.2 2.1-.3.8.2.7.4.3.5.3.2.4-.2.5-.8.6-.3.5h-.3l-.6-.9-1-.3-3.1-.1-2.6-.7-1.1-.1-2.9.5-.9-.1-4-1-2-1.1-1.6-1.5-.9-.3-5.7-.7-.8-.4-.6-.5-3-1.3-8.3-.8-1-.2-2-.8-5-.5-8-1.9v-2.5l2.2-3.5-5.8-2.8-.8-1.5-1.8-.7-1.1-.2-1.2.5-4.2-.4 1.7-1.9.6-.8 1-1.2 8.4-3.8.7-1.3-2.4-3.1-.9-3.8-2.4-2-3.4-1.5-8.2-1.9-10.7-.5-5.8.8-7.2-.2-.6-2.1.4-2 7.9-12.9.7-2.2-.7-2.3 1.5-2.2.2-1.7 2.2-3 1-.6 1.8-.6.6-1.2v-1.9l-.2-1.4.1-.2.8.8.3.8.3.6.6.6h.5l.9-.3 2.4-1.1 3.1-.2 3 .2 2-2.2-1.9-1.8-.8-1.9-1.6-1.8.2-2.6-.3-1.9-.6-2.4-1.2-2.1v-2.3l.3-2.1 2.1-1.8 1.7-2 3.4.3 2.2-1.1 7.2-.9 1.6-1 1.8-3.7 2.2-1.7 1.6-.7 4.1 1.5 1.9.3 6.6-2.9 1.1-1.7 1.8-1.1.5-1.4-.1-.8V520l.5-.7.2-1v-.7l.4-.7.8-.4.8-.7 1.1-1.7-.3-1.4-1-1.4-1.3-.7.2-1.7.6-.7.3-1.1.4-.4-.5-1.5.4-1.7 1.2-.5h2.8l4.3-1.6 7.7-.8.6-8.3.5-3 .9-1.4.7-2.7v-1.1l6.4-.2 3.2-.5 2-1.1 1.8-.5 1.2-1.3 1.8-.9 2.6-1.9.7-.3 3.7-.8 7.1-3.4 6.3 1.4 1.3-.9.4-2.7 1.6-1.9 1.1-1.7.2-1.3.7-1 .6-1.2-.3-1.9 1.3-2 .3-1.3-.4-2.1-.4-1.4.1-1.1 1.1-1.4.3-1.2-.9-1.4-.9-1.1-.7-7.7 1.8-.2h.7l2.7-.3 1.5.2.3.5.1 1.3.2.6.4.3 1.2.2.3.1.9.6.6.2 1.3.2.9-.4 1.4-.8 3-2.2 1-1.1.6-.7-.2-.9v-.6l.4-.5.6-.3.7.2 1.4 1.1.9-.4 1.4-1.3.7-.3 2.7-.8h.6l1.6.6 1.3.1.2-.8v-1l.3-.5 1.2.3.6.6.4.7.5.6.9.4.9.2.8.4.3 1.1.6.8 1.5.1 6-1.1.3.1.4.5.7.9.2 1.4.2.4.5.5 2 1.1.8.2h2.1l1 .1.8.4v.3l-.4.5h.4l1-.5.6-.1.6.4.5.1.4-.1.5-.5.3-.1.3-.1.8.1.4-.2 1-.7.3-.3 1.3.1.7.7.6.7.8.4.5-.2.6-.8.8-.2h1.3l.6-.2.5-.5-.4-1 .5-.9.8-.7 1-.3 1.8.1.4-.2-.3-1-1-1-.3-.6.5-.3 2.2-.4 1 .3.9.3.8.1.9-.7.1-.4-.3-.5v-.4l.7-.1 1.9.1.6-.6.4-.2.8-.1h.2l.2-.4.4.2.4.5.1.1 1 .1.6-.1.4-.2.7-.8.2-.6-.2-.3-.6-.1-.4-.3-.2-.5.4-.5h.3l1.2.6.4.1 1-.6-.7-.6-.9-.6.1-1 1-.3 1 .1 1-.1.7-1-.3-.5-.4-.2h-.4l-.5.4-.4-1.1-.6-1.1.6-.3.7-.2 1 .3.4.1.4-.1.9-.4h.8l.3.4.4 1.3.5.8.7.6 1.7.8.3 1.1 1.2 1.2 1.1 1.6.2.5.1 1 .3.4 2.8 2.2 2.5 2.9 1.4.9 1.6.5 2 .2.4-.1.9-.4.4-.1.6.2.7.7.5.4.9.4 1 .3 5.5.5 1.1.5v-1l-.1-.9-.1-.9.3-1.1.3-.5.8-.5.3-.3.4-.5.2-.3.8-2.5v-.5l-.1-.5-.6-.9-.1-.5.4-.6 3.9-3.1.7-.7.3-1.2-.1-1.2-.6-.5-.7-.3-.5-.8.1-1 .7-.8 1-.6.9-.3 1.3-.2.5-.2.3-.3.6-.9.4-.3.7-.7 1.2-2.3.9-.8 1.1-.2 2.3.4 1.1-.4 2-1.3.8-.1h.8l2.2.9h1.6l4.2-1.6 3-.6 3-1.3 5.4-3.5 1.8-1.2.4.6 2.3 3 2 1.8.2.4.1.5-.1.8-.3.6-1 .8-.1.3-.7 1.1-.2.2h-.3l-.9-.2-.5.1-.6.5-.5.3-.6.2-.4.4v.4l.4.8v.4l-.4.3-.7.4-.6.7-.6.9-.3.3-.3.1-.6-.2-.4.1-.4.5-.9 1.5-.5.6-.4.3h-.3l-3.1-1.4-.4.1-1.2 2.9-.2.6-.1.5.2.3.8 1.4v.4l-.1.6-.5 1.9v.5l.4 1.1.4.6.2.1.7.2h.9l.3.2 1.1 1.8.4.6.5.3 4.4 1 .3-.1.2-.1.3-.5.1-.7.1-1.6.1-.7.4-.3.2-.1.4.1 3 1.5.3.2.2.4.2.8-.1.9.1.5.4.3.4.2 7.3 2 1.6 1 1.2.4.6.1.3-.1.4-.3.3-.4.5-.3h2.4l.5-.2.9-.6.5-.2h.5l.3.1 3.3 2.4 1.5.5 1.1.8.4.2h.7l1.6-.4.7.3.5.3.7.1 1.1.6.7.2.6.4.2-.1.4-.4.4-.1h.9l.3.2.2.3.1.3.7.6 1.6 1 1.1 1 .9.5.5.1h.4l.2-.1.7-.2.2.4v.3l.2.7.5.3.2.3.3.6.2.4.6.2.7-.2.5.5.6.3 1.2.1.2.1.4.4.1.6.1.6.2.4.6.1 1.1.8.5.7.2.5.1.4-.1.8.1 1 .3.5.1.4v1l.1.4.2.3.7.4.4.3.2.6.1.8.2.5.7.5.2.3z" />
      <circle cx={449.9} cy={416.3} />
      <circle cx={462.7} cy={237.7} />
      <circle cx={557.7} cy={209.2} />
    </svg>
  );
};
export default SouthAfrica;