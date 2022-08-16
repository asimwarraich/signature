import React from "react";
import "./style/global.scss";
import main from "./assets/main.png";
import logo from "./assets/logo.png";

function App() {
  return (
    <div className="signature">
      <div className="sinature__main__container">
        <div className="main__header__img">
          <img src={main} alt="backgroud" />
        </div>
        <div className="sign__nav__bar__wraper">
          <div className="sign__logo__main">
            <img src={logo} alt="logo" />
          </div>
          <div className="sign__nav__links__wraper">
            <a href="#" className="sign__nav__link">
              Home
              <title>Home</title>
            </a>
            <a href="#" className="sign__nav__link">
              About us
            </a>
            <a href="#" className="sign__nav__link">
              Amenities
            </a>
            <a href="#" className="sign__nav__link">
              Location
            </a>
            <a href="#" className="sign__nav__link">
              Contact Us
            </a>
          </div>
        </div>
        <div className="sign__header__contant">
          <div className="sign__header__contant__heading">
            THE FIRST OF ITS KIND
          </div>
          <div className="sign__header__contant__sub__heading">
            5-STAR RESORT HOTEL IN PAKISTAN
          </div>
        </div>
      </div>
      <div className="sign__loction__card__container">
        <div className="sign__loction__card">
          <div className="sign__loction__card__svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="117.861"
              height="62.623"
            >
              <path
                id="Path_22"
                data-name="Path 22"
                d="M211.611,85.383a2.534,2.534,0,0,1-2.437,1.151q-56.514-.029-113.027-.021a3.88,3.88,0,0,1-1.243-.128,1.582,1.582,0,0,1-1.143-1.779,1.6,1.6,0,0,1,1.459-1.529,1.277,1.277,0,0,1,.457-.028c2.063.431,3.21-.677,4.393-2.221,7.043-9.191,14.2-18.3,21.281-27.461,1.691-2.189,3.709-3.225,6.5-2.509a1.393,1.393,0,0,0,1.057-.53c3.193-3.878,6.353-7.784,9.52-11.684q5.074-6.253,10.155-12.5a5.385,5.385,0,0,1,8.352-.463q6.878,6.8,13.666,13.68c.649.658,1.157.854,1.954.325a15.654,15.654,0,0,1,1.839-.938,5.412,5.412,0,0,1,7.53,2.185q5.609,9.3,11.184,18.624,6.74,11.237,13.458,22.49a1.7,1.7,0,0,0,1.822,1.01c1.181-.111,2.375-.122,3.225.95Zm-8.557-2.347c-.3-.553-.485-.92-.7-1.273q-6.589-10.991-13.187-21.975-5-8.329-10-16.653c-1.053-1.753-1.741-1.86-3.586-1.113-2.076.841-3.673,1.956-3.833,4.4a.4.4,0,0,1-.028.111,1.794,1.794,0,0,1-2.155,1.258,1.763,1.763,0,0,1-1.207-2.18,8.249,8.249,0,0,1,.5-1.762,1.431,1.431,0,0,0-.463-1.8q-6.7-6.644-13.358-13.337c-1.781-1.781-2.652-1.726-4.265.258q-7.438,9.152-14.874,18.306c-1.39,1.713-2.772,3.43-4.224,5.228,1.79.777,3.447,1.461,5.068,2.217a1.309,1.309,0,0,0,1.625-.261c2.242-1.92,4.523-3.8,6.8-5.681a5.4,5.4,0,0,1,7.592.058c1.4,1.2,2.774,2.422,4.164,3.628,2.456,2.133,4.914,4.263,7.5,6.507.585-2,1.115-3.87,1.674-5.728.389-1.292,1.254-1.869,2.259-1.553,1.061.333,1.465,1.213,1.1,2.494-.624,2.208-1.3,4.4-1.884,6.622a1.354,1.354,0,0,0,.305,1.143q11.82,10.344,23.7,20.621a1.737,1.737,0,0,0,1,.448C196,83.048,199.415,83.036,203.054,83.036ZM140.127,57.522a2.753,2.753,0,0,0,.1.354q5.7,12.23,11.383,24.467c.32.69.788.7,1.38.7q16.286-.01,32.57-.009c.284,0,.568-.051,1.04-.1-.416-.384-.681-.645-.963-.891Q173.743,71.7,161.846,61.353q-5.686-4.946-11.385-9.879a1.939,1.939,0,0,0-2.791-.218C145.146,53.311,142.658,55.414,140.127,57.522ZM116.933,82.969h31.051c-.126-.333-.2-.583-.31-.818q-5.353-11.5-10.733-22.981a2.37,2.37,0,0,0-1.1-1.051c-2.832-1.258-5.687-2.46-8.542-3.665-1.412-.6-2.018-.421-2.971.8Q113.952,68.6,103.573,81.94c-.224.288-.416.6-.72,1.042.5.023.826.053,1.157.053,2.608,0,5.215-.032,7.823.021a1.551,1.551,0,0,0,1.6-.961c2.554-4.668,5.153-9.311,7.737-13.962.891-1.6,1.783-2.065,2.845-1.469,1.029.579,1.085,1.574.177,3.212q-2.089,3.767-4.181,7.532C119.009,79.211,118.014,81.015,116.933,82.969Z"
                transform="translate(-93.75 -23.91)"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="sign__loction__card__contant__heading">Patriata </div>
          <div className="sign__loction__card__contant__sub__heading">
            Murree
          </div>
        </div>
        <div className="sign__loction__card">
          <div className="sign__loction__card__svg">
            <svg
              id="Group_32"
              data-name="Group 32"
              xmlns="http://www.w3.org/2000/svg"
              width="78.937"
              height="82.812"
              fill="currentColor"
            >
              <path
                id="Path_625"
                data-name="Path 625"
                d="M194.176,235.613c-.573-.388-1-.867-.735-1.612s.887-.82,1.584-.817q7.8.02,15.606-.009a1.3,1.3,0,0,0,.951-.375,56.388,56.388,0,0,0,8.581-18.219c.245-.99.4-2,.556-3.012.153-.964.678-1.533,1.406-1.447.8.094,1.174.756,1.032,1.764-.978,6.955-3.883,13.158-7.458,19.1-.415.69-.85,1.368-1.431,2.3a38.252,38.252,0,0,0,4.906-.366,2.923,2.923,0,0,0,1.635-1.534,54.983,54.983,0,0,0,5.839-19.426c.468-5.349-.153-10.539-2.869-15.312a24.547,24.547,0,0,0-9.792-9.259c-3.388-1.887-7.1-2.92-10.726-4.18a42.521,42.521,0,0,1-11.355-5.511,17.346,17.346,0,0,1-1.846-1.567c-2.3-2.226-3.471-4.825-2.584-8.088a6.21,6.21,0,0,0-.474,6.45,12.508,12.508,0,0,0,4.173,4.423,49.176,49.176,0,0,0,12.49,5.937,37.94,37.94,0,0,1,11.715,6.187,20.989,20.989,0,0,1,7.863,13.74,6.314,6.314,0,0,1,.055.805,1.2,1.2,0,0,1-1.124,1.32,1.305,1.305,0,0,1-1.309-1.17,37.589,37.589,0,0,0-1.239-4.989c-1.644-4.366-4.836-7.437-8.716-9.868a49.6,49.6,0,0,0-9.636-4.281c-4.465-1.615-8.826-3.472-12.57-6.474a17.2,17.2,0,0,1-2.88-2.926,8.618,8.618,0,0,1-.762-9.979,21.176,21.176,0,0,1,6.6-7.105c2.158-1.554,4.459-2.912,6.7-4.354.215-.138.438-.261.788-.469a13.46,13.46,0,0,0-7.263,1.171,95.815,95.815,0,0,0-17.071,10.7A27.515,27.515,0,0,0,168.6,173.9c-2.857,4.665-2.278,9.016,1.8,12.682,1.333,1.2,2.895,2.142,4.321,3.241a61.513,61.513,0,0,1,5.74,4.561c5.077,4.978,6.094,11.076,3.115,17.526a36.935,36.935,0,0,1-8.046,10.738,87.033,87.033,0,0,1-12.369,9.862c-.258.174-.511.353-.979.678h1.089c8.437,0,16.873.016,25.311-.022,1.021,0,1.746.64,1.513,1.47-.1.368-.5.652-.768.975H152.283a6.753,6.753,0,0,1-1.024-.622,2.772,2.772,0,0,1,.48-4.462c3.369-2.226,6.795-4.374,10.081-6.715A51.348,51.348,0,0,0,173.574,212.8a17.345,17.345,0,0,0,2.8-5.334A9.169,9.169,0,0,0,174.047,198a31.841,31.841,0,0,0-4.962-4.095,28.3,28.3,0,0,1-6.58-5.544,10.5,10.5,0,0,1-1.176-12.013,25.942,25.942,0,0,1,6.87-8.062,65.171,65.171,0,0,1,9.64-6.628q6.687-3.827,13.414-7.588a10.2,10.2,0,0,1,5.271-1.264c2.721.045,5.445.009,8.167.014a1.756,1.756,0,0,1,1.959,1.419,1.852,1.852,0,0,1-1.092,2.182c-3.171,1.818-6.378,3.582-9.486,5.5a18.211,18.211,0,0,0-4.936,4.5c-2.092,2.755-1.952,5.349.481,7.81a20.225,20.225,0,0,0,6.972,4.443c3.763,1.509,7.612,2.8,11.41,4.222,5.755,2.16,10.824,5.3,14.5,10.365a24.922,24.922,0,0,1,4.606,12.489c.674,6.91-.779,13.492-3.162,19.909-.852,2.29-1.881,4.515-2.869,6.751a6,6,0,0,1-3.831,3.205Zm-28.891-61.007c-.583.9-1.085,1.593-1.5,2.332-2.1,3.778-1.758,7.149,1.053,10.432a28.177,28.177,0,0,0,5.458,4.39,41.274,41.274,0,0,1,5.154,4.125A11.849,11.849,0,0,1,179.265,205a14.7,14.7,0,0,1-2.107,6.79,38.946,38.946,0,0,1-8.94,10.128,121.164,121.164,0,0,1-14.758,10.438c-.255.159-.482.361-.719.541.1.138.13.217.162.217q2.338.032,4.674.041c.095,0,.192-.091.283-.149,6.3-3.931,12.357-8.176,17.524-13.564a29.515,29.515,0,0,0,6.046-8.616c2.352-5.43,1.432-10.284-2.585-14.587a27.91,27.91,0,0,0-5.817-4.593,24.33,24.33,0,0,1-5.506-4.461c-2.338-2.638-3.669-5.632-3.084-9.235C164.609,176.9,164.957,175.884,165.285,174.606Z"
                transform="translate(-150.338 -152.802)"
              />
              <path
                id="Path_626"
                data-name="Path 626"
                d="M168.726,170.743a1.211,1.211,0,0,1-2.352.144,10.838,10.838,0,0,1-.25-2.388,1.144,1.144,0,0,1,1.229-1.128,1.161,1.161,0,0,1,1.188,1.088c.014.078.016.159.022.24C168.61,169.287,168.657,169.876,168.726,170.743Z"
                transform="translate(-142.446 -145.518)"
              />
              <path
                id="Path_627"
                data-name="Path 627"
                d="M184.794,189.233c0-.35-.027-.7.006-1.047A1.23,1.23,0,0,1,186,187a1.138,1.138,0,0,1,1.214,1.065,11.707,11.707,0,0,1-.024,2.327,1.1,1.1,0,0,1-1.242,1.014,1.175,1.175,0,0,1-1.163-1.131,8.091,8.091,0,0,1-.008-1.045Z"
                transform="translate(-133.125 -135.701)"
              />
              <path
                id="Path_628"
                data-name="Path 628"
                d="M177.186,177.669c0,1.118-.829,1.726-1.621,1.4a14.241,14.241,0,0,1-2-1.049,1.207,1.207,0,0,1,1.146-2.115,12.441,12.441,0,0,1,1.845.988A2.861,2.861,0,0,1,177.186,177.669Z"
                transform="translate(-139.013 -141.318)"
              />
              <path
                id="Path_629"
                data-name="Path 629"
                d="M169.505,172.34a5.054,5.054,0,0,1,.916.462c.493.413.961.858,1.414,1.317a1.188,1.188,0,0,1,.1,1.726,1.216,1.216,0,0,1-1.734.07,8.192,8.192,0,0,1-1.5-1.452,1.649,1.649,0,0,1-.155-1.32C168.673,172.8,169.175,172.6,169.505,172.34Z"
                transform="translate(-141.268 -143.033)"
              />
              <path
                id="Path_630"
                data-name="Path 630"
                d="M183.411,198.316a3.716,3.716,0,0,1-.347.815,18.839,18.839,0,0,1-1.5,1.684,1.1,1.1,0,0,1-1.6.013,1.114,1.114,0,0,1-.184-1.6,8.161,8.161,0,0,1,1.512-1.663,1.6,1.6,0,0,1,1.306-.167C182.941,197.521,183.159,198.015,183.411,198.316Z"
                transform="translate(-135.747 -130.538)"
              />
              <path
                id="Path_631"
                data-name="Path 631"
                d="M180.957,182.009a26.207,26.207,0,0,1-2.677-1.906,1.326,1.326,0,0,1,.1-1.283,1.508,1.508,0,0,1,1.326-.384,6.824,6.824,0,0,1,2.107,1.293,1.464,1.464,0,0,1,.249,1.289C181.943,181.382,181.428,181.613,180.957,182.009Z"
                transform="translate(-136.429 -140.006)"
              />
              <path
                id="Path_632"
                data-name="Path 632"
                d="M186.526,193.683a22.018,22.018,0,0,1-1.683,2.712,1.414,1.414,0,0,1-1.357,0,1.46,1.46,0,0,1-.438-1.291,6.21,6.21,0,0,1,1.108-2.119,1.522,1.522,0,0,1,1.316-.366C185.855,192.724,186.124,193.254,186.526,193.683Z"
                transform="translate(-133.998 -132.908)"
              />
              <path
                id="Path_633"
                data-name="Path 633"
                d="M171.439,163.352a4.871,4.871,0,0,1-.383.888c-.4.539-.821,1.065-1.271,1.561a1.206,1.206,0,0,1-1.9-1.476,8.371,8.371,0,0,1,1.386-1.665,1.576,1.576,0,0,1,1.3-.26C170.93,162.521,171.166,163.036,171.439,163.352Z"
                transform="translate(-141.685 -148.027)"
              />
              <path
                id="Path_634"
                data-name="Path 634"
                d="M184.965,185.845c-.956-.006-2.629-2.27-2.34-3.163a1.209,1.209,0,0,1,2.025-.45,10.6,10.6,0,0,1,1.353,1.8A1.175,1.175,0,0,1,184.965,185.845Z"
                transform="translate(-134.212 -138.277)"
              />
              <path
                id="Path_635"
                data-name="Path 635"
                d="M173.9,159.118a1.22,1.22,0,0,1,1.181,1.278,2.5,2.5,0,0,1-2.03,1.687,1.278,1.278,0,0,1-1.237-1.243C171.825,160.143,173.092,159.1,173.9,159.118Z"
                transform="translate(-139.599 -149.644)"
              />
              <path
                id="Path_636"
                data-name="Path 636"
                d="M179.009,202.535a2.381,2.381,0,0,1-2.016,1.776,1.259,1.259,0,0,1-1.179-1.206,2.482,2.482,0,0,1,2.007-1.818A1.181,1.181,0,0,1,179.009,202.535Z"
                transform="translate(-137.601 -128.56)"
              />
            </svg>
          </div>
          <div className="sign__loction__card__contant__heading">Patriata </div>
          <div className="sign__loction__card__contant__sub__heading">
            Murree
          </div>
        </div>
        <div className="sign__loction__card">
          <div className="sign__loction__card__svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="90.284"
              height="73.851"
            >
              <path
                id="Path_639"
                data-name="Path 639"
                d="M132.26,108.6q.17-1.9.342-3.792a32.031,32.031,0,0,1,11.251-21.69,35.8,35.8,0,0,1,19.676-8.7,33.665,33.665,0,0,1,9.945.176l-.4,2.36c-12.752-1.37-23.158,2.616-31.163,12.07.4-.3.793-.594,1.191-.89a25.808,25.808,0,0,1,40.825,15.6,1.289,1.289,0,0,0,.689.808,5.734,5.734,0,0,0,6.265-1.618c.793-.952.357-1.995.189-2.956-.8-4.584-3.359-8.259-6.873-11.4-.7-.628-1.45-1.206-2.224-1.847l1.616-1.965c5.757,4.319,9.716,9.547,10.4,16.6a5.149,5.149,0,0,0,4.413-4.653c.136-3.235-1.318-5.917-3.4-8.324-4.052-4.687-9.38-7.627-15.311-9.688-1.312-.457-2.668-.8-4.086-1.223L176.242,75c1.86.584,3.661,1.069,5.4,1.707a37.185,37.185,0,0,1,14.893,9.463,16.972,16.972,0,0,1,4.428,8.266c.936,4.741-2.035,8.759-7.082,9.55a1.623,1.623,0,0,0-.861.479,8.5,8.5,0,0,1-9.439,2.443,1.12,1.12,0,0,0-.853.078c-3.969,2.954-7.956,2.591-11.606-.069-.808-.589-1.554-1.255-2.445-1.981-.149.95-.351,1.829-.413,2.716a23.725,23.725,0,0,0,.778,8.638c1.662,5.509,7.7,8.043,13.141,5.475.759-.358,1.478-.792,2.205-1.208a14.335,14.335,0,0,1,15.2.012,13.321,13.321,0,0,0,5.221,2.071,12.12,12.12,0,0,0,7.46-1.326,36.526,36.526,0,0,1,4.762-2.292,12.9,12.9,0,0,1,5.474-.548v1.016q0,13.752,0,27.5c0,.333.025.664.04.995H132.26V118.408l.736-.039c-.138-1.176-.279-2.244-.387-3.315-.13-1.319-.234-2.639-.349-3.958Zm58.411,20.854c-.432.068-.717.116-1,.158a14.088,14.088,0,0,0-4.985,2.194,13.885,13.885,0,0,1-10.743,1.5,24.126,24.126,0,0,1-4.983-2.2,13.232,13.232,0,0,0-4.492-1.582,12.954,12.954,0,0,0-8.5,2c-5.087,3.066-10.264,3.009-15.42.046a23.307,23.307,0,0,0-2.855-1.463,21.1,21.1,0,0,0-2.674-.687v4.443c0,1.452,0,1.477,1.463,1.739a15.909,15.909,0,0,1,5.583,2.356,11.658,11.658,0,0,0,6.055,1.74,12.492,12.492,0,0,0,7.069-2.18,13.946,13.946,0,0,1,7.284-2.155,15.283,15.283,0,0,1,8.525,2.443,11.576,11.576,0,0,0,12.662.11,19.748,19.748,0,0,1,2.919-1.525,14.381,14.381,0,0,1,13.258,1.242,11.8,11.8,0,0,0,13.268.112,14.207,14.207,0,0,1,6.167-2.271c.187-.016.5-.278.5-.429.036-1.819.023-3.637.023-5.47a3.724,3.724,0,0,0-.447-.03c-.176.014-.347.05-.521.077a15.457,15.457,0,0,0-4.988,2.189,14.247,14.247,0,0,1-14.448.036c-1.958-1.066-3.827-2.271-6.265-2.365l.236-2.454c.187,0,.3-.007.415,0a13.494,13.494,0,0,1,6.182,2.212,11.92,11.92,0,0,0,13.136.091,35.724,35.724,0,0,1,4.675-2.062c.621-.249,1.6-.133,1.911-.532.344-.434.115-1.274.119-1.936.008-1.237,0-2.472,0-3.771-.4.053-.661.087-.919.125a13.57,13.57,0,0,0-4.917,2.132,13.866,13.866,0,0,1-6.1,1.945,15.25,15.25,0,0,1-9.42-2.354,11.679,11.679,0,0,0-12.9-.043,19.124,19.124,0,0,1-3.672,1.758c-3.468,1.137-7.028.763-10.532.164-1.947-.333-3.827-1.007-5.746-1.5-1.667-.429-3.376-.731-5.009-1.246-5.372-1.692-9.96-4.449-13.139-8.993a22.431,22.431,0,0,1-3.9-13.971c.042-1.361.181-2.721.283-4.162-.34.176-.627.306-.9.464a13.3,13.3,0,0,0-5.2,5.716,26.16,26.16,0,0,0-2.507,12.93c.062,1.534.34,3.061.519,4.584a14.888,14.888,0,0,1,6.193,2.381,11.19,11.19,0,0,0,4.8,1.73c.487.048.976.071,1.469.107v2.441a12.8,12.8,0,0,1-6.71-1.6c-.965-.525-1.881-1.15-2.889-1.584-1.093-.472-2.268-.772-3.591-1.208v4.584c0,1.432-.008,1.47,1.484,1.724a16.377,16.377,0,0,1,5.732,2.44,11.517,11.517,0,0,0,5.821,1.637,12.526,12.526,0,0,0,7.154-2.183,14.415,14.415,0,0,1,10.87-1.812,17.87,17.87,0,0,1,5.309,2.342,11.549,11.549,0,0,0,11.991.039c1.037-.573,2.056-1.185,3.14-1.671a8.97,8.97,0,0,1,3.924-.886Zm-55.61,16h84.678v-7.413a2.645,2.645,0,0,0-.385-.032c-.2.018-.406.052-.608.085a13.611,13.611,0,0,0-4.824,2.13,13.859,13.859,0,0,1-10.815,1.545,22.23,22.23,0,0,1-5.2-2.338,12.316,12.316,0,0,0-8.472-1.3,14.3,14.3,0,0,0-4.73,2.126,13.879,13.879,0,0,1-10.738,1.514,20.269,20.269,0,0,1-5.051-2.251,11.683,11.683,0,0,0-8.955-1.287,19.229,19.229,0,0,0-4.322,1.979,14.5,14.5,0,0,1-14.918-.082,27.244,27.244,0,0,0-2.921-1.521,21.955,21.955,0,0,0-2.736-.744Zm33.635-23.913a33.259,33.259,0,0,1-2.02-4.036,23.843,23.843,0,0,1-.472-13.6,2.462,2.462,0,0,0-.7-2.578,28.958,28.958,0,0,0-6.412-5.274,35.541,35.541,0,0,0-1.114,11.026l-2.653.2a38.81,38.81,0,0,1,1.267-12.407,15.47,15.47,0,0,0-9.038-1.16.894.894,0,0,0-.857.833,27.523,27.523,0,0,0-.351,7.853,18.6,18.6,0,0,0,6.17,12.408A23,23,0,0,0,160,119.121a18.437,18.437,0,0,1-4.314-9.257l2.6-.4C159.419,115.406,162.647,119.628,168.695,121.543Zm-27.068-28.5a18.64,18.64,0,0,1,8.094-2.055,20.164,20.164,0,0,1,11.045,3.084,32.044,32.044,0,0,1,7.943,6.993,17.766,17.766,0,0,0,5.481,4.737,6.122,6.122,0,0,0,6.584-.577,1.058,1.058,0,0,0,.483-1.208,23.846,23.846,0,0,0-2.957-7.5,23.264,23.264,0,0,0-29.115-9.024A21.552,21.552,0,0,0,141.627,93.043Z"
                transform="translate(-132.26 -74.139)"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="sign__loction__card__contant__heading">Patriata </div>
          <div className="sign__loction__card__contant__sub__heading">
            Murree
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
