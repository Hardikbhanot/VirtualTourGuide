import React from "react";
// import Link from "next/link";
import Lottie from "react-lottie";
import * as animationData from "../../../images/footer-lottie.json";
import "./footer.scss";
import { Link } from "react-router-dom";
const Footer = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <div className="ft-footer-container">
      <div className="ft-footer-columns-container">
        <div className="ft-footer-columns">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              zoomAndPan="magnify"
              viewBox="0 0 75 30.000001"
              preserveAspectRatio="xMidYMid meet"
              version="1.0"
              className="ft-footer-logo"
            >
              <defs>
                <g />
              </defs>
              <g fill="#d4a05a" fillOpacity="1">
                <g transform="translate(5.566678, 22.863493)">
                  <g>
                    <path d="M 8.078125 0.625 L 6.828125 -1.109375 L 13.796875 -5.328125 L 13.796875 -6.46875 L 8.59375 -6.46875 L 8.59375 -5.515625 C 8.59375 -4.941406 8.460938 -4.53125 8.203125 -4.28125 C 7.941406 -4.03125 7.648438 -3.90625 7.328125 -3.90625 C 6.992188 -3.90625 6.644531 -4.007812 6.28125 -4.21875 C 5.925781 -4.4375 5.59375 -4.710938 5.28125 -5.046875 C 4.96875 -5.390625 4.71875 -5.75 4.53125 -6.125 C 4.34375 -6.507812 4.25 -6.863281 4.25 -7.1875 C 4.25 -7.5 4.363281 -7.765625 4.59375 -7.984375 C 4.820312 -8.203125 5.222656 -8.3125 5.796875 -8.3125 L 6.546875 -8.3125 L 6.546875 -11.015625 C 6.546875 -11.828125 6.5 -12.445312 6.40625 -12.875 C 6.3125 -13.3125 6.175781 -13.660156 6 -13.921875 C 5.65625 -14.441406 5.113281 -14.703125 4.375 -14.703125 C 3.90625 -14.703125 3.550781 -14.585938 3.3125 -14.359375 C 3.070312 -14.140625 2.953125 -13.847656 2.953125 -13.484375 C 2.953125 -12.992188 3.15625 -12.617188 3.5625 -12.359375 C 3.96875 -12.109375 4.660156 -11.957031 5.640625 -11.90625 L 5.4375 -10.0625 C 4.144531 -10.164062 3.113281 -10.476562 2.34375 -11 C 1.570312 -11.53125 1.1875 -12.347656 1.1875 -13.453125 C 1.1875 -14.453125 1.515625 -15.1875 2.171875 -15.65625 C 2.828125 -16.125 3.601562 -16.359375 4.5 -16.359375 C 5.132812 -16.359375 5.703125 -16.265625 6.203125 -16.078125 C 6.703125 -15.898438 7.144531 -15.59375 7.53125 -15.15625 C 7.84375 -14.8125 8.097656 -14.347656 8.296875 -13.765625 C 8.492188 -13.191406 8.59375 -12.375 8.59375 -11.3125 L 8.59375 -8.3125 L 13.796875 -8.3125 L 13.796875 -14.25 L 10.40625 -14.25 L 10.40625 -16.09375 L 18.546875 -16.09375 L 18.546875 -14.25 L 15.890625 -14.25 L 15.890625 0 L 13.796875 0 L 13.796875 -3.1875 Z M 8.078125 0.625 " />
                  </g>
                </g>
              </g>
              <g fill="#ffffff" fillOpacity="1">
                <g transform="translate(22.833573, 22.281956)">
                  <g>
                    <path d="M 1.09375 0.0625 C 0.988281 0.0625 0.90625 0.0195312 0.84375 -0.0625 C 0.78125 -0.15625 0.75 -0.257812 0.75 -0.375 C 0.757812 -0.5625 0.796875 -0.671875 0.859375 -0.703125 C 0.929688 -0.742188 1.0625 -0.765625 1.25 -0.765625 C 1.632812 -0.765625 1.90625 -0.828125 2.0625 -0.953125 C 2.226562 -1.085938 2.320312 -1.242188 2.34375 -1.421875 C 2.375 -1.597656 2.390625 -1.878906 2.390625 -2.265625 L 2.390625 -7.28125 C 2.390625 -7.664062 2.378906 -7.945312 2.359375 -8.125 C 2.335938 -8.300781 2.242188 -8.453125 2.078125 -8.578125 C 1.921875 -8.710938 1.648438 -8.78125 1.265625 -8.78125 C 1.097656 -8.78125 0.96875 -8.804688 0.875 -8.859375 C 0.789062 -8.910156 0.75 -9.03125 0.75 -9.21875 C 0.75 -9.3125 0.773438 -9.394531 0.828125 -9.46875 C 0.890625 -9.550781 0.976562 -9.597656 1.09375 -9.609375 C 2.050781 -9.753906 2.835938 -9.945312 3.453125 -10.1875 C 3.691406 -10.257812 3.859375 -10.300781 3.953125 -10.3125 L 4.015625 -10.3125 C 4.253906 -10.3125 4.375 -10.175781 4.375 -9.90625 L 4.375 -8.515625 L 4.4375 -8.515625 C 4.519531 -8.609375 4.738281 -8.828125 5.09375 -9.171875 C 5.445312 -9.515625 5.84375 -9.769531 6.28125 -9.9375 C 6.726562 -10.113281 7.238281 -10.203125 7.8125 -10.203125 C 8.519531 -10.203125 9.128906 -10.050781 9.640625 -9.75 C 10.148438 -9.457031 10.53125 -9.046875 10.78125 -8.515625 L 10.828125 -8.515625 C 11.390625 -9.054688 11.929688 -9.472656 12.453125 -9.765625 C 12.972656 -10.054688 13.644531 -10.203125 14.46875 -10.203125 C 15.457031 -10.203125 16.242188 -9.898438 16.828125 -9.296875 C 17.421875 -8.703125 17.71875 -7.914062 17.71875 -6.9375 L 17.71875 -2.265625 C 17.71875 -1.878906 17.726562 -1.597656 17.75 -1.421875 C 17.78125 -1.242188 17.875 -1.085938 18.03125 -0.953125 C 18.195312 -0.828125 18.472656 -0.765625 18.859375 -0.765625 L 18.984375 -0.765625 C 19.109375 -0.765625 19.195312 -0.742188 19.25 -0.703125 C 19.3125 -0.660156 19.347656 -0.550781 19.359375 -0.375 C 19.359375 -0.257812 19.328125 -0.15625 19.265625 -0.0625 C 19.203125 0.0195312 19.117188 0.0625 19.015625 0.0625 C 18.160156 0.0195312 17.390625 0 16.703125 0 C 16.046875 0 15.285156 0.0195312 14.421875 0.0625 C 14.304688 0.0625 14.21875 0.0195312 14.15625 -0.0625 C 14.101562 -0.15625 14.078125 -0.257812 14.078125 -0.375 C 14.085938 -0.5625 14.125 -0.671875 14.1875 -0.703125 C 14.257812 -0.742188 14.390625 -0.765625 14.578125 -0.765625 C 14.953125 -0.765625 15.21875 -0.828125 15.375 -0.953125 C 15.539062 -1.085938 15.640625 -1.242188 15.671875 -1.421875 C 15.703125 -1.597656 15.71875 -1.878906 15.71875 -2.265625 L 15.71875 -6.921875 C 15.71875 -7.585938 15.503906 -8.097656 15.078125 -8.453125 C 14.648438 -8.816406 14.160156 -9 13.609375 -9 C 12.929688 -9 12.378906 -8.835938 11.953125 -8.515625 C 11.535156 -8.191406 11.238281 -7.847656 11.0625 -7.484375 L 11.0625 -2.265625 C 11.0625 -2.171875 11.054688 -1.96875 11.046875 -1.65625 C 11.046875 -1.351562 11.128906 -1.128906 11.296875 -0.984375 C 11.460938 -0.835938 11.738281 -0.765625 12.125 -0.765625 L 12.25 -0.765625 C 12.382812 -0.765625 12.472656 -0.742188 12.515625 -0.703125 C 12.566406 -0.660156 12.601562 -0.550781 12.625 -0.375 C 12.625 -0.257812 12.59375 -0.15625 12.53125 -0.0625 C 12.476562 0.0195312 12.390625 0.0625 12.265625 0.0625 C 11.398438 0.0195312 10.65625 0 10.03125 0 C 9.425781 0 8.695312 0.0195312 7.84375 0.0625 C 7.71875 0.0625 7.625 0.0195312 7.5625 -0.0625 C 7.507812 -0.15625 7.484375 -0.257812 7.484375 -0.375 C 7.503906 -0.5625 7.546875 -0.671875 7.609375 -0.703125 C 7.671875 -0.742188 7.796875 -0.765625 7.984375 -0.765625 C 8.472656 -0.765625 8.773438 -0.863281 8.890625 -1.0625 C 9.003906 -1.257812 9.054688 -1.484375 9.046875 -1.734375 C 9.046875 -1.992188 9.046875 -2.171875 9.046875 -2.265625 L 9.046875 -6.921875 C 9.046875 -7.585938 8.835938 -8.097656 8.421875 -8.453125 C 8.003906 -8.816406 7.515625 -9 6.953125 -9 C 6.285156 -9 5.738281 -8.835938 5.3125 -8.515625 C 4.882812 -8.191406 4.578125 -7.847656 4.390625 -7.484375 L 4.390625 -2.265625 C 4.390625 -1.878906 4.40625 -1.597656 4.4375 -1.421875 C 4.46875 -1.242188 4.5625 -1.085938 4.71875 -0.953125 C 4.882812 -0.828125 5.15625 -0.765625 5.53125 -0.765625 L 5.65625 -0.765625 C 5.78125 -0.765625 5.867188 -0.742188 5.921875 -0.703125 C 5.984375 -0.660156 6.019531 -0.550781 6.03125 -0.375 C 6.03125 -0.257812 6 -0.15625 5.9375 -0.0625 C 5.882812 0.0195312 5.800781 0.0625 5.6875 0.0625 C 4.832031 0.0195312 4.0625 0 3.375 0 C 2.71875 0 1.957031 0.0195312 1.09375 0.0625 Z M 1.09375 0.0625 " />
                  </g>
                </g>
              </g>
              <g fill="#ffffff" fillOpacity="1">
                <g transform="translate(42.499055, 22.281956)">
                  <g>
                    <path d="M 3.6875 0.265625 C 2.8125 0.265625 2.101562 0.015625 1.5625 -0.484375 C 1.019531 -0.984375 0.75 -1.601562 0.75 -2.34375 C 0.75 -3.269531 1.054688 -3.960938 1.671875 -4.421875 C 2.285156 -4.878906 3.015625 -5.175781 3.859375 -5.3125 C 4.710938 -5.457031 5.8125 -5.566406 7.15625 -5.640625 L 7.15625 -7.375 C 7.15625 -8.09375 6.972656 -8.640625 6.609375 -9.015625 C 6.253906 -9.390625 5.679688 -9.578125 4.890625 -9.578125 C 4.441406 -9.578125 4.046875 -9.4375 3.703125 -9.15625 C 3.367188 -8.875 3.203125 -8.5 3.203125 -8.03125 C 3.203125 -7.800781 3.253906 -7.609375 3.359375 -7.453125 C 3.472656 -7.296875 3.59375 -7.164062 3.71875 -7.0625 C 3.84375 -6.96875 3.90625 -6.910156 3.90625 -6.890625 C 3.90625 -6.804688 3.8125 -6.691406 3.625 -6.546875 C 3.445312 -6.410156 3.226562 -6.34375 2.96875 -6.34375 C 2.53125 -6.34375 2.179688 -6.503906 1.921875 -6.828125 C 1.660156 -7.148438 1.53125 -7.53125 1.53125 -7.96875 C 1.53125 -8.726562 1.867188 -9.289062 2.546875 -9.65625 C 3.234375 -10.019531 4.0625 -10.203125 5.03125 -10.203125 C 6.226562 -10.203125 7.203125 -9.972656 7.953125 -9.515625 C 8.710938 -9.066406 9.09375 -8.226562 9.09375 -7 L 9.09375 -1.890625 C 9.101562 -1.578125 9.195312 -1.28125 9.375 -1 C 9.550781 -0.726562 9.835938 -0.59375 10.234375 -0.59375 C 10.347656 -0.59375 10.429688 -0.570312 10.484375 -0.53125 C 10.535156 -0.488281 10.5625 -0.390625 10.5625 -0.234375 C 10.5625 -0.0664062 10.425781 0.0546875 10.15625 0.140625 C 9.882812 0.222656 9.617188 0.265625 9.359375 0.265625 C 8.796875 0.265625 8.300781 0.101562 7.875 -0.21875 C 7.457031 -0.539062 7.21875 -0.972656 7.15625 -1.515625 C 6.851562 -0.941406 6.378906 -0.5 5.734375 -0.1875 C 5.097656 0.113281 4.414062 0.265625 3.6875 0.265625 Z M 4.390625 -0.921875 C 4.890625 -0.921875 5.347656 -1.046875 5.765625 -1.296875 C 6.191406 -1.546875 6.53125 -1.882812 6.78125 -2.3125 C 7.03125 -2.75 7.15625 -3.226562 7.15625 -3.75 L 7.15625 -5 C 5.625 -4.882812 4.539062 -4.632812 3.90625 -4.25 C 3.28125 -3.875 2.96875 -3.265625 2.96875 -2.421875 C 2.96875 -1.421875 3.441406 -0.921875 4.390625 -0.921875 Z M 4.390625 -0.921875 " />
                  </g>
                </g>
              </g>
              <g fill="#ffffff" fillOpacity="1">
                <g transform="translate(53.495044, 22.281956)">
                  <g>
                    <path d="M 1.078125 0.0625 C 0.972656 0.0625 0.882812 0.0195312 0.8125 -0.0625 C 0.75 -0.15625 0.71875 -0.257812 0.71875 -0.375 C 0.738281 -0.5625 0.785156 -0.671875 0.859375 -0.703125 C 0.929688 -0.742188 1.0625 -0.765625 1.25 -0.765625 C 1.632812 -0.765625 1.90625 -0.828125 2.0625 -0.953125 C 2.226562 -1.085938 2.320312 -1.242188 2.34375 -1.421875 C 2.363281 -1.597656 2.375 -1.878906 2.375 -2.265625 L 2.375 -7.28125 C 2.375 -7.664062 2.363281 -7.945312 2.34375 -8.125 C 2.320312 -8.300781 2.226562 -8.453125 2.0625 -8.578125 C 1.90625 -8.710938 1.632812 -8.78125 1.25 -8.78125 C 1.070312 -8.78125 0.9375 -8.804688 0.84375 -8.859375 C 0.757812 -8.910156 0.71875 -9.03125 0.71875 -9.21875 C 0.71875 -9.3125 0.75 -9.394531 0.8125 -9.46875 C 0.875 -9.550781 0.960938 -9.597656 1.078125 -9.609375 C 2.023438 -9.753906 2.804688 -9.945312 3.421875 -10.1875 C 3.671875 -10.257812 3.835938 -10.300781 3.921875 -10.3125 L 4 -10.3125 C 4.226562 -10.3125 4.34375 -10.175781 4.34375 -9.90625 L 4.34375 -8.515625 L 4.40625 -8.515625 C 4.832031 -8.910156 5.175781 -9.210938 5.4375 -9.421875 C 5.707031 -9.640625 6.050781 -9.820312 6.46875 -9.96875 C 6.882812 -10.125 7.378906 -10.203125 7.953125 -10.203125 C 8.941406 -10.203125 9.726562 -9.898438 10.3125 -9.296875 C 10.90625 -8.703125 11.203125 -7.914062 11.203125 -6.9375 L 11.203125 -2.265625 C 11.203125 -1.878906 11.210938 -1.597656 11.234375 -1.421875 C 11.265625 -1.242188 11.359375 -1.085938 11.515625 -0.953125 C 11.679688 -0.828125 11.957031 -0.765625 12.34375 -0.765625 L 12.46875 -0.765625 C 12.582031 -0.765625 12.671875 -0.742188 12.734375 -0.703125 C 12.796875 -0.660156 12.832031 -0.550781 12.84375 -0.375 C 12.84375 -0.257812 12.804688 -0.15625 12.734375 -0.0625 C 12.671875 0.0195312 12.585938 0.0625 12.484375 0.0625 C 11.640625 0.0195312 10.875 0 10.1875 0 C 9.53125 0 8.769531 0.0195312 7.90625 0.0625 C 7.800781 0.0625 7.710938 0.0195312 7.640625 -0.0625 C 7.578125 -0.15625 7.546875 -0.257812 7.546875 -0.375 C 7.566406 -0.5625 7.609375 -0.671875 7.671875 -0.703125 C 7.734375 -0.742188 7.863281 -0.765625 8.0625 -0.765625 C 8.4375 -0.765625 8.703125 -0.828125 8.859375 -0.953125 C 9.023438 -1.085938 9.125 -1.242188 9.15625 -1.421875 C 9.1875 -1.597656 9.203125 -1.878906 9.203125 -2.265625 L 9.203125 -6.921875 C 9.203125 -7.585938 8.988281 -8.097656 8.5625 -8.453125 C 8.132812 -8.816406 7.644531 -9 7.09375 -9 C 6.414062 -9 5.832031 -8.832031 5.34375 -8.5 C 4.863281 -8.175781 4.539062 -7.835938 4.375 -7.484375 L 4.375 -2.265625 C 4.375 -1.878906 4.382812 -1.597656 4.40625 -1.421875 C 4.4375 -1.242188 4.53125 -1.085938 4.6875 -0.953125 C 4.851562 -0.828125 5.128906 -0.765625 5.515625 -0.765625 L 5.640625 -0.765625 C 5.753906 -0.765625 5.84375 -0.742188 5.90625 -0.703125 C 5.96875 -0.660156 6.003906 -0.550781 6.015625 -0.375 C 6.015625 -0.257812 5.984375 -0.15625 5.921875 -0.0625 C 5.867188 0.0195312 5.78125 0.0625 5.65625 0.0625 C 4.8125 0.0195312 4.046875 0 3.359375 0 C 2.703125 0 1.941406 0.0195312 1.078125 0.0625 Z M 1.078125 0.0625 " />
                  </g>
                </g>
              </g>
              <path
                strokeLinecap="butt"
                transform="matrix(1.95855, 0, 0, 1.959558, 25.201237, 7.556875)"
                fill="none"
                strokeLinejoin="miter"
                d="M 0.000964181 0.00087712 L 20.260686 0.00087712 "
                stroke="#d4a05a"
                strokeWidth="1"
                strokeOpacity="1"
                strokeMiterlimit="4"
              />
            </svg>
            <p className="ft-footer-para">
              {" "}
              magna etiam tempor orci eu lobortis elementum nibh tellus molestie
              nunc non blandit massa enim nec dui nunc mattis enim ut tellus
              elementum sagittis{" "}
            </p>
          </div>
        </div>
        <div className="ft-footer-columns">
          <div>
          <Lottie options={defaultOptions}
              height="100%"
              width="100%"
              style={{position: 'absolute'}}
              />
          </div>
        </div>
        <div className="ft-footer-columns">
          <h3>Pages</h3>
          <div className="ft-footer-link-list">
            <Link to="#">
              <a className="ft-footer-link">
                <i className="ft-footer-arrow"></i> &nbsp; Home{" "}
              </a>
            </Link>
            <Link to="#">
              <a className="ft-footer-link">
                <i className="ft-footer-arrow"></i> &nbsp; Contact Us{" "}
              </a>
            </Link>
            <Link to="#">
              <a className="ft-footer-link">
                <i className="ft-footer-arrow"></i> &nbsp; About Us{" "}
              </a>
            </Link>
          </div>
        </div>
        <div className="ft-footer-columns">
          <h3>Get in touch</h3>
          <div className="ft-footer-icon-container">
            <div className="ft-footer-icon">
              <Link to="#">
                <svg style={{marginLeft:5}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    fill="#fff"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  />
                </svg>
              </Link>
            </div>
            <div className="ft-footer-icon">
              <Link to="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    fill="#1DA1F2"
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="ft-footer-phone">
            <div className="ft-footer-phone-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  fill="#D4A05A"
                  d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                />
              </svg>
            </div>
            <p>+916969696969</p>
          </div>
          <div className="ft-footer-email">
            <div className="ft-footer-email-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  fill="#D4A05A"
                  d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"
                />
              </svg>
            </div>
            <p>info@bhraman.com</p>
          </div>
        </div>
      </div>
      <div>
        <hr className="ft-footer-hr" />
      </div>
      <div className="ft-footer-lower">
        <span>&copy; BHRAMAN</span>
        <span>ALL RIGHTS RESERVED</span>
      </div>
    </div>
  );
};

export default Footer;