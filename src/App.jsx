import "./App.css";

function App() {
  return (
    <>
      <main className="snap-feature overflow-x-hidden">
        {/* <!-- header section  --> */}

        <header className="relative">
          {/* <!-- main navigation section  --> */}

          <nav className="nav-bar">
            {/* <!-- logo section  --> */}

            <div className="logo">
              <a href="">
                <svg
                  className="h-5 text-white transition-delay duration-2000 scroll-smooth"
                  viewBox="0 0 342 35"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7M308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7"
                  ></path>
                </svg>
              </a>
            </div>

            {/* <!-- nav items section  --> */}

            <div className="hidden lg:block md:block xl:block max-lg:w-[380px]">
              <a href="#modelS" className="nav-items">
                Model S
              </a>
              <a href="#model3" className="nav-items">
                Model 3
              </a>
              <a href="#modelX" className="nav-items">
                Model X
              </a>
              <a href="#modelY" className="nav-items">
                Model Y
              </a>
              <a href="#solarRoof" className="nav-items">
                Solar Roof
              </a>
              <a href="#solarPanel" className="nav-items">
                Solar Panel
              </a>
            </div>

            {/* <!--  external nav items section  --> */}

            <div className="links">
              <a href="#shop" className="nav-items">
                Shop
              </a>
              <a href="#account" className="nav-items">
                Account
              </a>
              <a href="#menu" className="nav-items">
                Menu
              </a>
            </div>
            {/* <!-- //. --> */}
            {/* <!-- //. --> */}
            {/* <!-- menu icon open (its for only responsive) From colum number 297--> */}
            <a
              href="#"
              className="hidden open-menu text-lg font-semibold text-white"
            >
              Menu
            </a>
          </nav>
        </header>

        {/* <!-- hero section  --> */}

        {/* <!-- 1-Model S --> */}

        <section id="modelS" className="car-section">
          <img
            className="car-img"
            src="/public/assets/Model-S.jpeg"
            alt="model S"
          />

          <div className="car-details">
            <h2 className="car-name">Model S</h2>
            <p className="car-tagline">
              Order Online For{" "}
              <span className="underline">Touchless Delivery</span>
            </p>
          </div>

          <div className="car-button">
            <a href="#" className="btn">
              Custom Order
            </a>
            <a href="#" className="btn inventory">
              Existing Inventory
            </a>
          </div>

          <div className="down-arrow">
            <a href="#model3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-10 animate-bounce"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </a>
          </div>
        </section>

        {/* <!-- 2-Model 3 --> */}

        <section id="model3" className="car-section">
          <img
            className="car-img"
            src="/public/assets/Model-3.jpeg"
            alt="model 3"
          />

          <div className="car-details">
            <h2 className="car-name">Model 3</h2>
            <p className="car-tagline">
              Order Online For{" "}
              <span className="underline">Touchless Delivery</span>
            </p>
          </div>

          <div className="car-button">
            <a href="#" className="btn">
              Custom Order
            </a>
            <a href="#" className="btn inventory">
              Existing Inventory
            </a>
          </div>

          <div className="down-arrow">
            <a href="#modelX">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-10 animate-bounce"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </a>
          </div>
        </section>

        {/* <!-- 3-Model X --> */}

        <section id="modelX" className="car-section">
          <img
            className="car-img"
            src="/public/assets/Model-X.jpeg"
            alt="model X"
          />

          <div className="car-details">
            <h2 className="car-name">Model X</h2>
            <p className="car-tagline">
              Order Online For{" "}
              <span className="underline">Touchless Delivery</span>
            </p>
          </div>

          <div className="car-button">
            <a href="#" className="btn">
              Custom Order
            </a>
            <a href="#" className="btn inventory">
              Existing Inventory
            </a>
          </div>

          <div className="down-arrow">
            <a href="#modelY">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-10 animate-bounce"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </a>
          </div>
        </section>

        {/* <!-- 4-Model Y --> */}

        <section id="modelY" className="car-section">
          <img
            className="car-img"
            src="/public/assets/Model-Y.jpeg"
            alt="model Y"
          />

          <div className="car-details">
            <h2 className="car-name">Model Y</h2>
            <p className="car-tagline">
              Order Online For{" "}
              <span className="underline">Touchless Delivery</span>
            </p>
          </div>

          <div className="car-button">
            <a href="#" className="btn">
              Custom Order
            </a>
            <a href="#" className="btn inventory">
              Existing Inventory
            </a>
          </div>

          <div className="down-arrow">
            <a href="#solarRoof">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-10 animate-bounce"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </a>
          </div>
        </section>

        {/* <!-- 5-Model Solar Roof --> */}

        <section id="solarRoof" className="car-section">
          <img
            className="car-img"
            src="/public/assets/Solar Roof.jpeg"
            alt="Solar Roof"
          />

          <div className="car-details">
            <h2 className="car-name">Solar Roof</h2>
            <p className="car-tagline">
              Order Online For{" "}
              <span className="underline">Touchless Delivery</span>
            </p>
          </div>

          <div className="car-button">
            <a href="#" className="btn">
              Custom Order
            </a>
            <a href="#" className="btn inventory">
              Existing Inventory
            </a>
          </div>

          <div className="down-arrow">
            <a href="#solarPanel">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-10 animate-bounce"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </a>
          </div>
        </section>

        {/* <!-- 6-Model Solar Panel --> */}

        <section id="solarPanel" className="car-section">
          <img
            className="car-img"
            src="/public/assets/Solar Panel.jpeg"
            alt="Solar Panel"
          />

          <div className="car-details">
            <h2 className="car-name">Solar Panel</h2>
            <p className="car-tagline">
              Order Online For{" "}
              <span className="underline">Touchless Delivery</span>
            </p>
          </div>

          <div className="car-button">
            <a href="#" className="btn">
              Custom Order
            </a>
            <a href="#" className="btn inventory">
              Existing Inventory
            </a>
          </div>

          <div className="down-arrow">
            <a href="#modelS">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-10 animate-bounce"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </a>
          </div>
        </section>

        {/* <!-- ///... -->
      <!-- ///... -->
      <!-- ///... -->
      <!-- ///... -->
      <!-- ///... -->
      <!-- ///... -->
      <!-- ///... -->
      <!-- ///... -->
      <!-- ///... --> */}

        {/* <!-- mobile navigation menu  --> */}

        <div className="mobile-menu hidden relative" id="mobile-menu">
          {/* <!-- close-menu icon  --> */}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="close-menu-icon close"
          >
            <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
          </svg>

          {/* <!-- mobile navigation logo  --> */}

          <div className="logos">
            <a href="">
              <svg
                className="h-5 text-black mb-18 logos"
                viewBox="0 0 342 35"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7M308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7"
                ></path>
              </svg>
            </a>
          </div>

          {/* <!-- mobile navigation item  --> */}

          <nav className="mobile-nav flex flex-col text-black font-semibold justify-between gap-3 text-xl mb-14">
            <a href="#modelS" className="mobile-navigation">
              Model S
            </a>
            <a href="#model3" className="mobile-navigation">
              Model 3
            </a>
            <a href="#modelX" className="mobile-navigation">
              Model X
            </a>
            <a href="#modelY" className="mobile-navigation">
              Model Y
            </a>
            <a href="#solarRoof" className="mobile-navigation">
              Solar Roof
            </a>
            <a href="#solarPanel" className="mobile-navigation">
              Solar Panel
            </a>
          </nav>

          {/* <!-- mobile nav social icon item  --> */}

          <div className="social-icon flex gap-2">
            <a href="https://www.facebook.com" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="social-icons"
              >
                <path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z"></path>
              </svg>
            </a>

            <a href="https://www.instagram.com" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="social-icons text-[#f32d78]"
              >
                <path d="M13.0281 2.00073C14.1535 2.00259 14.7238 2.00855 15.2166 2.02322L15.4107 2.02956C15.6349 2.03753 15.8561 2.04753 16.1228 2.06003C17.1869 2.1092 17.9128 2.27753 18.5503 2.52503C19.2094 2.7792 19.7661 3.12253 20.3219 3.67837C20.8769 4.2342 21.2203 4.79253 21.4753 5.45003C21.7219 6.0867 21.8903 6.81337 21.9403 7.87753C21.9522 8.1442 21.9618 8.3654 21.9697 8.58964L21.976 8.78373C21.9906 9.27647 21.9973 9.84686 21.9994 10.9723L22.0002 11.7179C22.0003 11.809 22.0003 11.903 22.0003 12L22.0002 12.2821L21.9996 13.0278C21.9977 14.1532 21.9918 14.7236 21.9771 15.2163L21.9707 15.4104C21.9628 15.6347 21.9528 15.8559 21.9403 16.1225C21.8911 17.1867 21.7219 17.9125 21.4753 18.55C21.2211 19.2092 20.8769 19.7659 20.3219 20.3217C19.7661 20.8767 19.2069 21.22 18.5503 21.475C17.9128 21.7217 17.1869 21.89 16.1228 21.94C15.8561 21.9519 15.6349 21.9616 15.4107 21.9694L15.2166 21.9757C14.7238 21.9904 14.1535 21.997 13.0281 21.9992L12.2824 22C12.1913 22 12.0973 22 12.0003 22L11.7182 22L10.9725 21.9993C9.8471 21.9975 9.27672 21.9915 8.78397 21.9768L8.58989 21.9705C8.36564 21.9625 8.14444 21.9525 7.87778 21.94C6.81361 21.8909 6.08861 21.7217 5.45028 21.475C4.79194 21.2209 4.23444 20.8767 3.67861 20.3217C3.12278 19.7659 2.78028 19.2067 2.52528 18.55C2.27778 17.9125 2.11028 17.1867 2.06028 16.1225C2.0484 15.8559 2.03871 15.6347 2.03086 15.4104L2.02457 15.2163C2.00994 14.7236 2.00327 14.1532 2.00111 13.0278L2.00098 10.9723C2.00284 9.84686 2.00879 9.27647 2.02346 8.78373L2.02981 8.58964C2.03778 8.3654 2.04778 8.1442 2.06028 7.87753C2.10944 6.81253 2.27778 6.08753 2.52528 5.45003C2.77944 4.7917 3.12278 4.2342 3.67861 3.67837C4.23444 3.12253 4.79278 2.78003 5.45028 2.52503C6.08778 2.27753 6.81278 2.11003 7.87778 2.06003C8.14444 2.04816 8.36564 2.03847 8.58989 2.03062L8.78397 2.02433C9.27672 2.00969 9.8471 2.00302 10.9725 2.00086L13.0281 2.00073ZM12.0003 7.00003C9.23738 7.00003 7.00028 9.23956 7.00028 12C7.00028 14.7629 9.23981 17 12.0003 17C14.7632 17 17.0003 14.7605 17.0003 12C17.0003 9.23713 14.7607 7.00003 12.0003 7.00003ZM12.0003 9.00003C13.6572 9.00003 15.0003 10.3427 15.0003 12C15.0003 13.6569 13.6576 15 12.0003 15C10.3434 15 9.00028 13.6574 9.00028 12C9.00028 10.3431 10.3429 9.00003 12.0003 9.00003ZM17.2503 5.50003C16.561 5.50003 16.0003 6.05994 16.0003 6.74918C16.0003 7.43843 16.5602 7.9992 17.2503 7.9992C17.9395 7.9992 18.5003 7.4393 18.5003 6.74918C18.5003 6.05994 17.9386 5.49917 17.2503 5.50003Z"></path>
              </svg>
            </a>

            <a href="https://www.pinterest.com" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="social-icons text-[#e8001b]"
              >
                <path d="M13.3717 2.09442C8.42512 1.41268 3.73383 4.48505 2.38064 9.29256C1.02745 14.1001 3.42711 19.1692 8.00271 21.1689C7.94264 20.4008 7.99735 19.628 8.16502 18.8761C8.34964 18.0374 9.46121 13.4132 9.46121 13.4132C9.23971 12.9173 9.12893 12.379 9.13659 11.8359C9.13659 10.3509 9.99353 9.24295 11.0597 9.24295C11.4472 9.23718 11.8181 9.40028 12.0758 9.68981C12.3335 9.97934 12.4526 10.3667 12.402 10.751C12.402 11.6512 11.8236 13.0131 11.5228 14.2903C11.4014 14.7656 11.5131 15.2703 11.8237 15.65C12.1343 16.0296 12.6069 16.2389 13.0967 16.2139C14.9944 16.2139 16.2675 13.7825 16.2675 10.9126C16.2675 8.71205 14.8098 7.0655 12.1243 7.0655C10.826 7.01531 9.56388 7.4996 8.63223 8.40543C7.70057 9.31126 7.18084 10.5595 7.19423 11.859C7.16563 12.5722 7.39566 13.2717 7.84194 13.8287C8.01361 13.9564 8.07985 14.1825 8.00425 14.3827C7.9581 14.5673 7.84194 15.0059 7.79578 15.1675C7.77632 15.278 7.70559 15.3728 7.60516 15.4228C7.50473 15.4729 7.38651 15.4724 7.28654 15.4214C5.9019 14.8674 5.24957 13.3439 5.24957 11.6051C5.24957 8.75822 7.63424 5.3497 12.4036 5.3497C16.1998 5.3497 18.723 8.1273 18.723 11.0972C18.723 15.0059 16.5468 17.9451 13.3298 17.9451C12.3526 17.9761 11.4273 17.5061 10.8759 16.6986C10.8759 16.6986 10.2974 19.0146 10.1835 19.4531C9.95101 20.2099 9.60779 20.9281 9.16505 21.5844C10.0877 21.8643 11.0471 22.0044 12.0113 22C14.6636 22.0017 17.2078 20.9484 19.0829 19.072C20.958 17.1957 22.0099 14.6504 22.0069 11.9975C22.004 7.00306 18.3183 2.77616 13.3717 2.09442Z"></path>
              </svg>
            </a>

            <a href="https://www.linkedin.com" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="social-icons"
              >
                <path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path>
              </svg>
            </a>
          </div>

          {/* <!-- its overlay section  (for whole body opacity) --> */}
        </div>
      </main>
      <div className="overlay"></div>
    </>
  );
}

export default App;
