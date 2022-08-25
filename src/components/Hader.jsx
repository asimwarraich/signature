import React, { useLayoutEffect } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { Close } from "./Close";
import { Menu } from "./Menu";

export default function Hader() {
  const [isOpen, setIsOpen] = React.useState(true);
  const [isScrolling, setIsScrolling] = React.useState(false);
  function checkNavOpenClose() {
    if (window.innerWidth < 900) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }
  useLayoutEffect(() => {
    checkNavOpenClose();
    window.addEventListener("resize", checkNavOpenClose);
    window.addEventListener("scroll", () => {
      checkNavOpenClose();
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    });
  }, []);
  return (
    <>
      <div
        className={
          isScrolling
            ? "sign__nav__bar__wraper sign__nav__bar__wraper__active"
            : "sign__nav__bar__wraper"
        }
      >
        <div className="signature__header__logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="55"
            viewBox="0 0 221.969 66.503"
          >
            <g
              id="Group_71"
              data-name="Group 71"
              transform="translate(-277.311 -35.344)"
            >
              <text
                id="SIGNATURE"
                transform="translate(362.28 72)"
                fill="#39001c"
                font-size="27"
                font-family="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  S
                </tspan>
                <tspan y="0" letter-spacing="-0.006em">
                  I
                </tspan>
                <tspan y="0">G</tspan>
                <tspan y="0" letter-spacing="-0.001em">
                  N
                </tspan>
                <tspan y="0" letter-spacing="-0.059em">
                  A
                </tspan>
                <tspan y="0">TURE</tspan>
              </text>
              <g id="Group_3" data-name="Group 3" transform="translate(278 36)">
                <path
                  id="Path_7"
                  data-name="Path 7"
                  d="M76.955,19.111s-.6-11.634,9.644-17.7c0,0,6.828.316,9.7,2.209A20.471,20.471,0,0,0,85.581,25.591"
                  transform="translate(-62.489 -0.984)"
                  fill="none"
                  stroke="#af9131"
                  stroke-miterlimit="10"
                  stroke-width="1.3"
                />
                <path
                  id="Path_8"
                  data-name="Path 8"
                  d="M98.13,49.836c-17.252-13.739-30.34,2-30.34,2"
                  transform="translate(-58.51 -19.578)"
                  fill="none"
                  stroke="#af9131"
                  stroke-miterlimit="10"
                  stroke-width="1.3"
                />
                <path
                  id="Path_9"
                  data-name="Path 9"
                  d="M98.475,16.212s19.2,7.265,11.347,28.133"
                  transform="translate(-71.841 -7.415)"
                  fill="none"
                  stroke="#af9131"
                  stroke-miterlimit="10"
                  stroke-width="1.3"
                />
                <path
                  id="Path_10"
                  data-name="Path 10"
                  d="M103.065,47.943s-19.1,9.707-7.474,29.52c0,0,9.218-3.81,11.928-11.126"
                  transform="translate(-68.958 -21.201)"
                  fill="none"
                  stroke="#af9131"
                  stroke-miterlimit="10"
                  stroke-width="1.3"
                />
                <path
                  id="Path_11"
                  data-name="Path 11"
                  d="M101.764,55.628S105.438,74.96,127.7,72.007"
                  transform="translate(-73.27 -24.539)"
                  fill="none"
                  stroke="#af9131"
                  stroke-miterlimit="10"
                  stroke-width="1.3"
                />
                <path
                  id="Path_12"
                  data-name="Path 12"
                  d="M106.525,51.315c23.5-.23,22.954-19.816,22.954-19.816s-7.11-3.016-15.773,1.823"
                  transform="translate(-75.338 -13.653)"
                  fill="none"
                  stroke="#af9131"
                  stroke-miterlimit="10"
                  stroke-width="1.3"
                />
                <path
                  id="Path_13"
                  data-name="Path 13"
                  d="M79.039,46.78S56.628,44.923,62.305,19.114a24.119,24.119,0,0,1,10.469-4.783"
                  transform="translate(-55.727 -6.598)"
                  fill="none"
                  stroke="#af9131"
                  stroke-miterlimit="10"
                  stroke-width="1.3"
                />
                <path
                  id="Path_14"
                  data-name="Path 14"
                  d="M122.482,17.923s-1.62-10.165-11.316-14.632A27.76,27.76,0,0,1,121.834.657s6.37,4.525,6.911,8.093"
                  transform="translate(-77.355 -0.657)"
                  fill="none"
                  stroke="#af9131"
                  stroke-miterlimit="10"
                  stroke-width="1.3"
                />
                <path
                  id="Path_15"
                  data-name="Path 15"
                  d="M125.136,16.058s9.632-4.589,19.967,2.907c0,0,5.812,16.208-9.4,25.741,0,0-3.072-4.671-4.583-5.7"
                  transform="translate(-83.424 -6.744)"
                  fill="none"
                  stroke="#af9131"
                  stroke-miterlimit="10"
                  stroke-width="1.3"
                />
                <path
                  id="Path_16"
                  data-name="Path 16"
                  d="M147.113,32.212s11.143,3.156,13.974,14.593c0,0-2.4,7.016-5.581,9.285"
                  transform="translate(-92.972 -14.366)"
                  fill="none"
                  stroke="#af9131"
                  stroke-miterlimit="10"
                  stroke-width="1.3"
                />
                <path
                  id="Path_17"
                  data-name="Path 17"
                  d="M136.205,58.016s6.7,5.823,3.184,19.793c0,0-12.524,10.649-27.405-1.145"
                  transform="translate(-77.71 -25.577)"
                  fill="none"
                  stroke="#af9131"
                  stroke-miterlimit="10"
                  stroke-width="1.3"
                />
                <path
                  id="Path_18"
                  data-name="Path 18"
                  d="M129.987,67.782s4.855,9.187,0,18.383c0,0-4.123,6.63-7.316,8.448,0,0-6.97.215-10.687-2.585"
                  transform="translate(-77.71 -29.82)"
                  fill="none"
                  stroke="#af9131"
                  stroke-miterlimit="10"
                  stroke-width="1.3"
                />
                <path
                  id="Path_19"
                  data-name="Path 19"
                  d="M74.451,31.077S59.07,28.4,51.381,46.25a23.807,23.807,0,0,0,14.459,14.5"
                  transform="translate(-51.381 -13.811)"
                  fill="none"
                  stroke="#af9131"
                  stroke-miterlimit="10"
                  stroke-width="1.3"
                />
                <path
                  id="Path_20"
                  data-name="Path 20"
                  d="M79.344,68.388S70.676,82.272,86.979,95.25c0,0,12.819-1.611,17.46-9.739"
                  transform="translate(-62.53 -30.083)"
                  fill="none"
                  stroke="#af9131"
                  stroke-miterlimit="10"
                  stroke-width="1.3"
                />
                <path
                  id="Path_21"
                  data-name="Path 21"
                  d="M61.377,74.042s-1,3.928,1.144,11.414c0,0,9.945,6.957,19.735,3.346"
                  transform="translate(-55.622 -32.539)"
                  fill="none"
                  stroke="#af9131"
                  stroke-miterlimit="10"
                  stroke-width="1.3"
                />
              </g>
              <text
                id="HOTELS_MURREE"
                data-name="HOTELS MURREE"
                transform="translate(362 86)"
                fill="#59595b"
                font-size="11"
                font-family="SegoeUI-Light, Segoe UI"
                font-weight="300"
                letter-spacing="0.053em"
              >
                <tspan x="0" y="0">
                  HOTELS MURREE
                </tspan>
              </text>
            </g>
          </svg>
        </div>

        {isOpen ? (
          <OutsideClickHandler
            onOutsideClick={() => {
              if (window.innerWidth < 900) {
                setIsOpen(false);
              }
            }}
          >
            <div className="sign__nav__links__wraper">
              <a
                href="#first__section__header"
                Click={() => {
                  if (window.innerWidth < 900) {
                    setIsOpen(false);
                  }
                }}
                className="sign__nav__link"
              >
                Home
              </a>
              <a
                href="#nature__section"
                onClick={() => {
                  if (window.innerWidth < 900) {
                    setIsOpen(false);
                  }
                }}
                className="sign__nav__link"
              >
                About us
              </a>
              <a
                href="#feature__section"
                onClick={() => {
                  if (window.innerWidth < 900) {
                    setIsOpen(false);
                  }
                }}
                className="sign__nav__link"
              >
                Amenities
              </a>
              <a
                href="#location__section"
                onClick={() => {
                  if (window.innerWidth < 900) {
                    setIsOpen(false);
                  }
                }}
                className="sign__nav__link"
              >
                Location
              </a>
              <a
                href="#contant__section"
                onClick={() => {
                  if (window.innerWidth < 900) {
                    setIsOpen(false);
                  }
                }}
                className="sign__nav__link"
              >
                Contact Us
              </a>
            </div>
          </OutsideClickHandler>
        ) : null}
        <button
          className="signature__contant__nav__menu"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          title="menu"
        >
          {isOpen ? (
            <Close size="24" color="white" />
          ) : (
            <Menu size="24" color="white" />
          )}
        </button>
      </div>
    </>
  );
}
