import React, { Component } from "react";

export class App extends Component {
  render() {
    return (
      <>
        <header className="site-header is-sticky">
          <div className="navbar navbar-expand-lg is-transparent" id="mainnav">
            <nav className="container">
              <div className="navbar-brand">
                <a href="#">
                  <img
                    className="logo"
                    src="img/ellaswapicon.png"
                    alt="Ellaswap"
                  />
                  <img
                    className="logo-2"
                    src="img/ellaswapicon.png"
                    alt="Ellaswap"
                  />
                </a>
              </div>
              <button className="navbar-toggler" type="button">
                <span className="navbar-toggler-icon">
                  <span className="ti ti-align-justify"></span>
                </span>
              </button>
              <div className="navbar-collapse justify-content-end">
                <ul id="menu-onepage-menu" className="navbar-nav menu-top">
                  <li
                    id="menu-item-150"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-150"
                  >
                    <a href="#" className="nav-link">
                      What is Ellawap
                    </a>
                  </li>
                  <li
                    id="menu-item-241"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-241"
                  >
                    <a href="https://app.bounce.finance/fixed-swap/5008"
                    target="_blank"
                    className="nav-link">
                      Pre Sale
                    </a>
                  </li>
                  <li
                    id="menu-item-242"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-242"
                  >
                    <a href="#" className="nav-link">
                      Roadmap
                    </a>
                  </li>
                  <li
                    id="menu-item-243"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-243"
                  >
                    <a href="#" className="nav-link">
                      Team
                    </a>
                  </li>
                  <li
                    id="menu-item-244"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-244"
                  >
                    <a href="#" className="nav-link">
                      Partners
                    </a>
                  </li>
                  <li
                    id="menu-item-245"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-245"
                  >
                    <a href="#" className="nav-link">
                      More
                    </a>
                    <ul
                      className="sub-menu"
                      style={{ display: "none", opacity: 1 }}
                    >
                      <li
                        id="menu-item-246"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-246"
                      >
                        <a href="#" className="nav-link">
                          Media Partners
                        </a>
                      </li>
                      <li
                        id="menu-item-357"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-357"
                      >
                        <a href="#" className="nav-link">
                          Blog
                        </a>
                      </li>
                      <li
                        id="menu-item-247"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-247"
                      >
                        <a href="#" className="nav-link">
                          FAQs
                        </a>
                      </li>
                    </ul>
                    <span>
                      <i className="fa fa-angle-down"></i>
                    </span>
                  </li>
                  <li
                    id="menu-item-248"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-248"
                  >
                    <a href="#" className="nav-link">
                      Contact
                    </a>
                  </li>
                </ul>
                <ul className="navbar-nav navbar-btns">
                  <li className="nav-item">
                    <a
                      className="nav-link btn btn-sm btn-outline menu-link"
                      href="https://app.ellaswap.com/"
                      target="_blank"
                    >
                      Ellaswap Dex
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link btn btn-sm btn-outline menu-link"
                      href="https://docs.ella.finance/"
                      target="_blank"
                    >
                      Whitepapper
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
        <section className="vc_row wpb_row vc_row-fluid tab-center mobile-center banner-curb banner-full vc_row-o-equal-height vc_row-o-content-middle vc_row-flex banner banner-full d-flex align-items-center">
          <div
            id="particles-js"
            className="particles-container particles-js"
          ></div>
          <div className="container">
            <div className="banner-content">
              <div className="row">
                <div
                  data-animate="fadeInUp"
                  data-delay="0.65"
                  className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-6 vc_col-md-6"
                >
                  <div className="vc_column-inner ">
                    <div className="wpb_wrapper">
                      <div className="wpb_text_column wpb_content_element  wpb_animate_when_almost_visible wpb_bounceInLeft bounceInLeft vc_custom_1607254173917 wpb_start_animation animated">
                        <div className="wpb_wrapper">
                          <h2 className="future">
                            <span className="text-ella typewriter">Trade</span>
                            &nbsp;Trade/Issue your crypto assets with the most
                            powerful Automated Liquidity platform for crypto
                            assets
                          </h2>
                          <p className="lead color-secondary">
                            <span data-slate-fragment="JTdCJTIyb2JqZWN0JTIyJTNBJTIyZG9jdW1lbnQlMjIlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTJDJTIybm9kZXMlMjIlM0ElNUIlN0IlMjJvYmplY3QlMjIlM0ElMjJibG9jayUyMiUyQyUyMnR5cGUlMjIlM0ElMjJwYXJhZ3JhcGglMjIlMkMlMjJpc1ZvaWQlMjIlM0FmYWxzZSUyQyUyMmRhdGElMjIlM0ElN0IlN0QlMkMlMjJub2RlcyUyMiUzQSU1QiU3QiUyMm9iamVjdCUyMiUzQSUyMnRleHQlMjIlMkMlMjJsZWF2ZXMlMjIlM0ElNUIlN0IlMjJvYmplY3QlMjIlM0ElMjJsZWFmJTIyJTJDJTIydGV4dCUyMiUzQSUyMkVMTEElMjBpcyUyMGElMjBuZXh0LWdlbmVyYXRpb24lMjBvbi1jaGFpbiUyMGxpcXVpZGl0eSUyMHByb3ZpZGVyJTIyJTJDJTIybWFya3MlMjIlM0ElNUIlNUQlN0QlNUQlN0QlNUQlN0QlNUQlN0Q=">
                              ELLA is a next-generation on-chain liquidity
                              provider, which leverages on chain link
                              decentralized price oracle to provide pure
                              on-chain liquidity for everyone at zero slippage.
                            </span>
                          </p>
                          <ul className="btns">
                            <li>
                              <a
                                className="btn"
                                href="https://app.bounce.finance/fixed-swap/5008"
                                target="_blank"
                              >
                                &nbsp;Join Presale
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <ul className="social ">
                        <li>
                          <a
                            href="http://facebook.com/ellafinance2"
                            target="_blank"
                          >
                            <em className="fab fa-facebook-f"></em>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://twitter.com/ellafinance"
                            target="_blank"
                          >
                            <em className="fab fa-twitter"></em>
                          </a>
                        </li>
                        {/* <li>
                          <a href="#">
                            <em className="fab fa-youtube"></em>
                          </a>
                        </li> */}
                        <li>
                          <a
                            href="https://github.com/Ella-Finance"
                            target="_blank"
                          >
                            <em className="fab fa-github"></em>
                          </a>
                        </li>
                        {/* <li>
                          <a href="#">
                            <em className="fab fa-bitcoin"></em>
                          </a>
                        </li> */}
                        <li>
                          <a href="https://t.me/ella_finance" target="_blank">
                            <em className="fas fa-paper-plane"></em>
                          </a>
                        </li>
                        <li>
                          <a href="http://t.me/ellafinance" target="_blank">
                            <em className="fas fa-paper-plane"></em>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  data-animate="fadeInRight"
                  data-delay=".9"
                  className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-6 vc_col-md-6"
                >
                  <div className="vc_column-inner ">
                    <div className="wpb_wrapper">
                      <div className="countdown-box text-center  countdown-header">
                        <span className="extra-line"></span>
                        <ul
                          className="token-countdown d-flex align-content-stretch"
                          data-zone="0"
                          data-date="2021/01/15"
                          data-days="Days"
                          data-hours="Hours"
                          data-mins="Minutes"
                          data-secs="Seconds"
                          data-day="Days"
                          data-hour="Hours"
                          data-min="Minute"
                          data-sec="Second"
                        >
                          <li className="col">
                            <span className="countdown-time days">38</span>
                            <span className="countdown-text days_text">
                              Days
                            </span>
                          </li>
                          <li className="col">
                            <span className="countdown-time hours">01</span>
                            <span className="countdown-text hours_text">
                              Hours
                            </span>
                          </li>
                          <li className="col">
                            <span className="countdown-time minutes">19</span>
                            <span className="countdown-text minutes_text">
                              Minutes
                            </span>
                          </li>
                          <li className="col">
                            <span className="countdown-time seconds countdown-time-last">
                              07
                            </span>
                            <span className="countdown-text seconds_text">
                              Seconds
                            </span>
                          </li>
                        </ul>
                        <a
                          className="btn btn-alt btn-sm"
                          href="https://app.bounce.finance/fixed-swap/5008"
                          target="_self"
                        >
                          Join &amp; BUY TOKEN NOW
                        </a>
                        {/* <ul className="icon-list">
                          <li>
                            <em className="fab fa-bitcoin"></em>
                          </li>
                          <li>
                            <em className="fab fa-ethereum"></em>
                          </li>
                        </ul> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix"></div>
        </section>
        <section
          id="intro"
          className="vc_row wpb_row vc_row-fluid section section-pad section-bg-blend nopb vc_row-o-equal-height vc_row-o-content-middle vc_row-flex"
        >
          <div className="container">
            <div className="row">
              <div
                data-animate="fadeInUp"
                data-delay="0"
                className="res-m-btm wpb_column vc_column_container vc_col-sm-5 vc_col-sm-offset-1 vc_col-xs-12"
              >
                <div className="vc_column-inner ">
                  <div className="wpb_wrapper">
                    <div className="wpb_single_image wpb_content_element vc_align_center">
                      <figure className="wpb_wrapper vc_figure">
                        <div className="vc_single_image-wrapper   vc_box_border_grey">
                          <img
                            width="675"
                            height="653"
                            src="img/graph-dark-a.png"
                            className="vc_single_image-img attachment-full"
                            alt=""
                            loading="lazy"
                            srcSet="img/graph-dark-a.png 675w, img/graph-dark-a-300x290.png 300w"
                            sizes="(max-width: 675px) 100vw, 675px"
                          />
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-animate="fadeInUp"
                data-delay="0.5"
                className="order-md-first order-last wpb_column vc_column_container vc_col-sm-6"
              >
                <div className="vc_column-inner ">
                  <div className="wpb_wrapper">
                    <div className="wpb_text_column wpb_content_element  vc_custom_1607230720912">
                      <div className="wpb_wrapper">
                        <h2>
                          <strong>What is ELLA</strong>
                        </h2>
                        <p
                          className="blockParagraph-544a408c"
                          data-key="4b9d84b1a84043f683b46e10271980b6"
                        >
                          <strong>
                            <span className="text-4505230f--TextH400-3033861f--textContentFamily-49a318e1">
                              ELLA is a next-generation on-chain liquidity
                              provider, which leverages on chain link
                              decentralized price oracle to provide pure
                              on-chain liquidity for everyone at zero slippage.
                            </span>
                          </strong>
                        </p>
                        <div className="blockHeadingContent-756c9114">
                          <span className="text-4505230f--HeadingH600-23f228db--textContentFamily-49a318e1">
                            <span data-key="69a0da596f1140578f04e1ba97e5e8ce">
                              How does ELLA work
                            </span>
                          </span>
                        </div>
                        <p
                          className="blockParagraph-544a408c"
                          data-key="4bb4f8bca8c9423386154785681a1cc1"
                        >
                          <span className="text-4505230f--TextH400-3033861f--textContentFamily-49a318e1">
                            <span data-key="b25b39fd55ba49769e5be29739195848">
                              Liquidity providers deposits assets on Ella
                              protocol. It gathers funds at market prices to
                              provide sufficient liquidity. To minimize
                              counterparty risks for Liquidity providers, ELLA
                              dynamically adjusts market prices to encourage
                              arbitrageurs to step in and stabilize Liquidity
                              Provider”s portfolios.
                            </span>
                          </span>
                        </p>
                        <p
                          className="blockParagraph-544a408c"
                          data-key="14bc28209cfa48f7a0ac3056b9c2d0a3"
                        >
                          <span className="text-4505230f--TextH400-3033861f--textContentFamily-49a318e1">
                            <span data-key="62b78736872c41fc83bbff6477affbe6">
                              <strong
                                className="bold-3c254bd9"
                                data-slate-leaf="true"
                              >
                                Why ELLA
                              </strong>
                            </span>
                          </span>
                        </p>
                        <ul
                          className="list-20526648"
                          data-key="10526025852d46ac8c8ae7ae66bd98ae"
                          data-slate-fragment="JTdCJTIyb2JqZWN0JTIyJTNBJTIyZG9jdW1lbnQlMjIlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTJDJTIybm9kZXMlMjIlM0ElNUIlN0IlMjJvYmplY3QlMjIlM0ElMjJibG9jayUyMiUyQyUyMnR5cGUlMjIlM0ElMjJwYXJhZ3JhcGglMjIlMkMlMjJpc1ZvaWQlMjIlM0FmYWxzZSUyQyUyMmRhdGElMjIlM0ElN0IlN0QlMkMlMjJub2RlcyUyMiUzQSU1QiU3QiUyMm9iamVjdCUyMiUzQSUyMnRleHQlMjIlMkMlMjJsZWF2ZXMlMjIlM0ElNUIlN0IlMjJvYmplY3QlMjIlM0ElMjJsZWFmJTIyJTJDJTIydGV4dCUyMiUzQSUyMkVMTEElMjBpcyUyMGElMjBuZXh0LWdlbmVyYXRpb24lMjBvbi1jaGFpbiUyMGxpcXVpZGl0eSUyMHByb3ZpZGVyJTJDJTIwd2hpY2glMjBsZXZlcmFnZXMlMjBvbiUyMGNoYWluJTIwbGluayUyMGRlY2VudHJhbGl6ZWQlMjBwcmljZSUyMG9yYWNsZSUyMHRvJTIwcHJvdmlkZSUyMHB1cmUlMjBvbi1jaGFpbiUyMGxpcXVpZGl0eSUyMGZvciUyMGV2ZXJ5b25lJTIwYXQlMjAlMjIlMkMlMjJtYXJrcyUyMiUzQSU1QiU1RCU3RCUyQyU3QiUyMm9iamVjdCUyMiUzQSUyMmxlYWYlMjIlMkMlMjJ0ZXh0JTIyJTNBJTIyemVybyUyMHNsaXBwYWdlJTIyJTJDJTIybWFya3MlMjIlM0ElNUIlN0IlMjJvYmplY3QlMjIlM0ElMjJtYXJrJTIyJTJDJTIydHlwZSUyMiUzQSUyMmJvbGQlMjIlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTVEJTdEJTJDJTdCJTIyb2JqZWN0JTIyJTNBJTIybGVhZiUyMiUyQyUyMnRleHQlMjIlM0ElMjIuJTIyJTJDJTIybWFya3MlMjIlM0ElNUIlNUQlN0QlNUQlN0QlNUQlN0QlMkMlN0IlMjJvYmplY3QlMjIlM0ElMjJibG9jayUyMiUyQyUyMnR5cGUlMjIlM0ElMjJoZWFkaW5nLTIlMjIlMkMlMjJpc1ZvaWQlMjIlM0FmYWxzZSUyQyUyMmRhdGElMjIlM0ElN0IlN0QlMkMlMjJub2RlcyUyMiUzQSU1QiU3QiUyMm9iamVjdCUyMiUzQSUyMnRleHQlMjIlMkMlMjJsZWF2ZXMlMjIlM0ElNUIlN0IlMjJvYmplY3QlMjIlM0ElMjJsZWFmJTIyJTJDJTIydGV4dCUyMiUzQSUyMkhvdyUyMGRvZXMlMjBFTExBJTIwd29yayUyMiUyQyUyMm1hcmtzJTIyJTNBJTVCJTVEJTdEJTVEJTdEJTVEJTdEJTJDJTdCJTIyb2JqZWN0JTIyJTNBJTIyYmxvY2slMjIlMkMlMjJ0eXBlJTIyJTNBJTIycGFyYWdyYXBoJTIyJTJDJTIyaXNWb2lkJTIyJTNBZmFsc2UlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTJDJTIybm9kZXMlMjIlM0ElNUIlN0IlMjJvYmplY3QlMjIlM0ElMjJ0ZXh0JTIyJTJDJTIybGVhdmVzJTIyJTNBJTVCJTdCJTIyb2JqZWN0JTIyJTNBJTIybGVhZiUyMiUyQyUyMnRleHQlMjIlM0ElMjIlMjBMaXF1aWRpdHklMjBwcm92aWRlcnMlMjBkZXBvc2l0cyUyMGFzc2V0cyUyMG9uJTIwRWxsYSUyMHByb3RvY29sLiUyMEl0JTIwZ2F0aGVycyUyMGZ1bmRzJTIwYXQlMjBtYXJrZXQlMjBwcmljZXMlMjB0byUyMHByb3ZpZGUlMjBzdWZmaWNpZW50JTIwbGlxdWlkaXR5LiUyMEluJTIwb3JkZXIlMjB0byUyMG1pbmltaXplJTIwY291bnRlciUyMHBhcnR5JTIwcmlza3MlMjBmb3IlMjBMaXF1aWRpdHklMjBwcm92aWRlcnMlMkMlMjBFTExBJTIwZHluYW1pY2FsbHklMjBhZGp1c3RzJTIwbWFya2V0JTIwcHJpY2VzJTIwdG8lMjBlbmNvdXJhZ2UlMjBhcmJpdHJhZ2V1cnMlMjB0byUyMHN0ZXAlMjBpbiUyMGFuZCUyMHN0YWJpbGl6ZSUyMExpcXVpZGl0eSUyMFByb3ZpZGVyJTVDJTIycyUyMHBvcnRmb2xpb3MuJTIyJTJDJTIybWFya3MlMjIlM0ElNUIlNUQlN0QlNUQlN0QlNUQlN0QlMkMlN0IlMjJvYmplY3QlMjIlM0ElMjJibG9jayUyMiUyQyUyMnR5cGUlMjIlM0ElMjJwYXJhZ3JhcGglMjIlMkMlMjJpc1ZvaWQlMjIlM0FmYWxzZSUyQyUyMmRhdGElMjIlM0ElN0IlN0QlMkMlMjJub2RlcyUyMiUzQSU1QiU3QiUyMm9iamVjdCUyMiUzQSUyMnRleHQlMjIlMkMlMjJsZWF2ZXMlMjIlM0ElNUIlN0IlMjJvYmplY3QlMjIlM0ElMjJsZWFmJTIyJTJDJTIydGV4dCUyMiUzQSUyMldoeSUyMEVMTEElMjIlMkMlMjJtYXJrcyUyMiUzQSU1QiU3QiUyMm9iamVjdCUyMiUzQSUyMm1hcmslMjIlMkMlMjJ0eXBlJTIyJTNBJTIyYm9sZCUyMiUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlNUQlN0QlNUQlN0QlNUQlN0QlMkMlN0IlMjJvYmplY3QlMjIlM0ElMjJibG9jayUyMiUyQyUyMnR5cGUlMjIlM0ElMjJsaXN0LXVub3JkZXJlZCUyMiUyQyUyMmlzVm9pZCUyMiUzQWZhbHNlJTJDJTIyZGF0YSUyMiUzQSU3QiU3RCUyQyUyMm5vZGVzJTIyJTNBJTVCJTdCJTIyb2JqZWN0JTIyJTNBJTIyYmxvY2slMjIlMkMlMjJ0eXBlJTIyJTNBJTIybGlzdC1pdGVtJTIyJTJDJTIyaXNWb2lkJTIyJTNBZmFsc2UlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTJDJTIybm9kZXMlMjIlM0ElNUIlN0IlMjJvYmplY3QlMjIlM0ElMjJibG9jayUyMiUyQyUyMnR5cGUlMjIlM0ElMjJwYXJhZ3JhcGglMjIlMkMlMjJpc1ZvaWQlMjIlM0FmYWxzZSUyQyUyMmRhdGElMjIlM0ElN0IlN0QlMkMlMjJub2RlcyUyMiUzQSU1QiU3QiUyMm9iamVjdCUyMiUzQSUyMnRleHQlMjIlMkMlMjJsZWF2ZXMlMjIlM0ElNUIlN0IlMjJvYmplY3QlMjIlM0ElMjJsZWFmJTIyJTJDJTIydGV4dCUyMiUzQSUyMlplcm8lMjBzbGlwcGFnZSUyMiUyQyUyMm1hcmtzJTIyJTNBJTVCJTVEJTdEJTVEJTdEJTVEJTdEJTVEJTdEJTJDJTdCJTIyb2JqZWN0JTIyJTNBJTIyYmxvY2slMjIlMkMlMjJ0eXBlJTIyJTNBJTIybGlzdC1pdGVtJTIyJTJDJTIyaXNWb2lkJTIyJTNBZmFsc2UlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTJDJTIybm9kZXMlMjIlM0ElNUIlN0IlMjJvYmplY3QlMjIlM0ElMjJibG9jayUyMiUyQyUyMnR5cGUlMjIlM0ElMjJwYXJhZ3JhcGglMjIlMkMlMjJpc1ZvaWQlMjIlM0FmYWxzZSUyQyUyMmRhdGElMjIlM0ElN0IlN0QlMkMlMjJub2RlcyUyMiUzQSU1QiU3QiUyMm9iamVjdCUyMiUzQSUyMnRleHQlMjIlMkMlMjJsZWF2ZXMlMjIlM0ElNUIlN0IlMjJvYmplY3QlMjIlM0ElMjJsZWFmJTIyJTJDJTIydGV4dCUyMiUzQSUyMlNpbmdsZSUyMHJpc2slMjBleHBvc3VyZSUyMiUyQyUyMm1hcmtzJTIyJTNBJTVCJTVEJTdEJTVEJTdEJTVEJTdEJTVEJTdEJTJDJTdCJTIyb2JqZWN0JTIyJTNBJTIyYmxvY2slMjIlMkMlMjJ0eXBlJTIyJTNBJTIybGlzdC1pdGVtJTIyJTJDJTIyaXNWb2lkJTIyJTNBZmFsc2UlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTJDJTIybm9kZXMlMjIlM0ElNUIlN0IlMjJvYmplY3QlMjIlM0ElMjJibG9jayUyMiUyQyUyMnR5cGUlMjIlM0ElMjJwYXJhZ3JhcGglMjIlMkMlMjJpc1ZvaWQlMjIlM0FmYWxzZSUyQyUyMmRhdGElMjIlM0ElN0IlN0QlMkMlMjJub2RlcyUyMiUzQSU1QiU3QiUyMm9iamVjdCUyMiUzQSUyMnRleHQlMjIlMkMlMjJsZWF2ZXMlMjIlM0ElNUIlN0IlMjJvYmplY3QlMjIlM0ElMjJsZWFmJTIyJTJDJTIydGV4dCUyMiUzQSUyMk5vJTIwaW1wZXJtYW5lbnQlMjBsb3NzJTIyJTJDJTIybWFya3MlMjIlM0ElNUIlNUQlN0QlNUQlN0QlNUQlN0QlNUQlN0QlNUQlN0QlNUQlN0Q="
                        >
                          <li className="">
                            <div
                              className="reset-3c756112--listItemContent-756c9114"
                              data-key="e2b73ec02c2b4f388cc42081c347c033"
                            >
                              <p
                                className="blockParagraph-544a408c--noMargin-acdf7afa"
                                data-key="b3f080418a7148aa90022007fb92f28b"
                              >
                                <span className="text-4505230f--TextH400-3033861f--textContentFamily-49a318e1">
                                  <span data-key="0412298ce627452f9c71854e32ccb1b3">
                                    Zero slippage
                                  </span>
                                </span>
                              </p>
                            </div>
                          </li>
                          <li className="">
                            <div
                              className="reset-3c756112--listItemContent-756c9114"
                              data-key="c56c545342324815aa326288b0878f7e"
                            >
                              <p
                                className="blockParagraph-544a408c--noMargin-acdf7afa"
                                data-key="110d3fe4488546e1a4c1cd4ca216cdfb"
                              >
                                <span className="text-4505230f--TextH400-3033861f--textContentFamily-49a318e1">
                                  <span data-key="c0a045a1ae5443df9e56d084e35028c7">
                                    Single risk exposure
                                  </span>
                                </span>
                              </p>
                            </div>
                          </li>
                          <li className="">
                            <div
                              className="reset-3c756112--listItemContent-756c9114"
                              data-key="4da367fadf9e47c88a58994c537a32e2"
                            >
                              <p
                                className="blockParagraph-544a408c--noMargin-acdf7afa"
                                data-key="acbffc5f90b14f039bdc182f013193d3"
                              >
                                <span className="text-4505230f--TextH400-3033861f--textContentFamily-49a318e1">
                                  <span data-key="8e0f95c474b047e5be36686ea7c2cc87">
                                    No impermanent loss
                                  </span>
                                </span>
                              </p>
                            </div>
                          </li>
                        </ul>
                        <p>&nbsp;</p>
                      </div>
                    </div>
                    {/* <a
                      href="https://www.youtube.com/watch?v=e4Brw_zJfsk&amp;ab_channel=EllaSwap"
                      className="play-btn video-play"
                    >
                      <em className="play">
                        <span></span>
                      </em>
                      <span>Watch Video</span> <span>Ella and How it work</span>
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix"></div>
        </section>
        <section className="vc_row wpb_row vc_row-fluid section-pad no-pb section-bg-alt vc_row-o-equal-height vc_row-o-content-middle vc_row-flex">
          <div className="container">
            <div className="row">
              <div
                data-animate="fadeInUp"
                data-delay="0"
                className="res-m-btm wpb_column vc_column_container vc_col-sm-5"
              >
                <div className="vc_column-inner ">
                  <div className="wpb_wrapper">
                    <div className="wpb_single_image wpb_content_element vc_align_center">
                      <figure className="wpb_wrapper vc_figure">
                        <div className="vc_single_image-wrapper   vc_box_border_grey">
                          <img
                            width="561"
                            height="523"
                            src="img/crypto-phone-5.png"
                            className="vc_single_image-img attachment-full"
                            alt=""
                            loading="lazy"
                            srcSet="img/crypto-phone-5.png 561w, img/crypto-phone-5-300x280.png 300w"
                            sizes="(max-width: 561px) 100vw, 561px"
                          />
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-animate="fadeInUp"
                data-delay="0.5"
                className="wpb_column vc_column_container vc_col-sm-6 vc_col-sm-offset-1"
              >
                <div className="vc_column-inner ">
                  <div className="wpb_wrapper">
                    <div className="wpb_text_column wpb_content_element  text-block">
                      <div className="wpb_wrapper">
                        <h4>
                          <span data-slate-fragment="JTdCJTIyb2JqZWN0JTIyJTNBJTIyZG9jdW1lbnQlMjIlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTJDJTIybm9kZXMlMjIlM0ElNUIlN0IlMjJvYmplY3QlMjIlM0ElMjJibG9jayUyMiUyQyUyMnR5cGUlMjIlM0ElMjJoZWFkaW5nLTIlMjIlMkMlMjJpc1ZvaWQlMjIlM0FmYWxzZSUyQyUyMmRhdGElMjIlM0ElN0IlN0QlMkMlMjJub2RlcyUyMiUzQSU1QiU3QiUyMm9iamVjdCUyMiUzQSUyMnRleHQlMjIlMkMlMjJsZWF2ZXMlMjIlM0ElNUIlN0IlMjJvYmplY3QlMjIlM0ElMjJsZWFmJTIyJTJDJTIydGV4dCUyMiUzQSUyMldoYXQlMjBjYW4lMjBJJTIwZG8lMjB3aXRoJTIwRUxMQSUyMiUyQyUyMm1hcmtzJTIyJTNBJTVCJTVEJTdEJTVEJTdEJTVEJTdEJTVEJTdE">
                            What Can I do with the Ella?
                          </span>
                        </h4>
                        <div className="blockHeadingContent-756c9114">
                          <span className="text-4505230f--HeadingH400-686c0942--textContentFamily-49a318e1">
                            <span data-key="24da41d6a5ea48c496e7a7ca5df4a863">
                              As a trader
                            </span>
                          </span>
                        </div>
                        <ul
                          className="list-20526648"
                          data-key="3559eab4726a4f5db6ee592f4338c7d0"
                        >
                          <li className="">
                            <div
                              className="reset-3c756112--listItemContent-756c9114"
                              data-key="259a3da92bdd4d6995f213600c86e319"
                            >
                              <p
                                className="blockParagraph-544a408c--noMargin-acdf7afa"
                                data-key="b3b836ea6343473f8a82da2d05b3f2e8"
                              >
                                <span className="text-4505230f--TextH400-3033861f--textContentFamily-49a318e1">
                                  <span data-key="e0a59243730f439b8d7afab002ab7696">
                                    Every trader enjoys sufficient liquidity
                                    similar to that of centralized exchanges
                                  </span>
                                </span>
                              </p>
                            </div>
                          </li>
                          <li className="">
                            <div
                              className="reset-3c756112--listItemContent-756c9114"
                              data-key="7c73d48406c24eb2b15b995a051ef1d5"
                            >
                              <p
                                className="blockParagraph-544a408c--noMargin-acdf7afa"
                                data-key="5250e79c8d304a229a18cbdb0a9b153b"
                              >
                                <span className="text-4505230f--TextH400-3033861f--textContentFamily-49a318e1">
                                  <span data-key="65ab252a6fc34585bc792319169a9389">
                                    Arbitrageurs can profit from selling large
                                    quantity on crypto-assets at market price
                                    with zero spillage unlike most dex
                                  </span>
                                </span>
                              </p>
                            </div>
                          </li>
                          <li className="">
                            <div
                              className="reset-3c756112--listItemContent-756c9114"
                              data-key="847f875d87574f10a358c2acbfdc7ff7"
                            >
                              <p
                                className="blockParagraph-544a408c--noMargin-acdf7afa"
                                data-key="0362563bda1544a38c46d5cdb7b887fb"
                              >
                                <span className="text-4505230f--TextH400-3033861f--textContentFamily-49a318e1">
                                  <span data-key="d6cf1622e7ad4b0d9c585cc9f289e2d4">
                                    Smart contracts can natively use ELLA
                                    liquidity to complete on-chain transactions.
                                  </span>
                                </span>
                              </p>
                            </div>
                          </li>
                        </ul>
                        <p
                          className="blockParagraph-544a408c"
                          data-key="e2e3c73ab9de416088843c60301f75d5"
                        >
                          <span className="text-4505230f--TextH400-3033861f--textContentFamily-49a318e1">
                            <span data-key="9109d19c1e2e431d94c3b3644ef35d41">
                              <strong
                                className="bold-3c254bd9"
                                data-slate-leaf="true"
                              >
                                As a Liquidity Provider
                              </strong>
                            </span>
                          </span>
                        </p>
                        <ul
                          className="list-20526648"
                          data-key="a1cf54b7085f4b3487ca5d366b7a9de0"
                        >
                          <li className="">
                            <div
                              className="reset-3c756112--listItemContent-756c9114"
                              data-key="2eb95258fca840d6a82b356ab27a6735"
                            >
                              <p
                                className="blockParagraph-544a408c--noMargin-acdf7afa"
                                data-key="7bb8370a58994cc490b631273d5a3757"
                              >
                                <span className="text-4505230f--TextH400-3033861f--textContentFamily-49a318e1">
                                  <span data-key="e0864b9606c640dc84ddbcf3943d2013">
                                    There are no minimum deposit requirements
                                    and restrictions on asset types
                                  </span>
                                </span>
                              </p>
                            </div>
                          </li>
                          <li className="">
                            <div
                              className="reset-3c756112--listItemContent-756c9114"
                              data-key="f788727d9f764512b7a0e9cd49e06fbf"
                            >
                              <p
                                className="blockParagraph-544a408c--noMargin-acdf7afa"
                                data-key="15b6a4048a434d6ba88e55d694c527bd"
                              >
                                <span className="text-4505230f--TextH400-3033861f--textContentFamily-49a318e1">
                                  <span data-key="48994296d2bc4c3aa403252a6436d8c7">
                                    ELLA charges a fee for each transaction and
                                    eventually distributes it to LPs as rewards
                                  </span>
                                </span>
                              </p>
                            </div>
                          </li>
                          <li className="">
                            <div
                              className="reset-3c756112--listItemContent-756c9114"
                              data-key="df295bed8d6c48629da56ee0e1b1a8e3"
                            >
                              <p
                                className="blockParagraph-544a408c--noMargin-acdf7afa"
                                data-key="16dfc1bb39dd496a984a584c5ea108ad"
                              >
                                <span className="text-4505230f--TextH400-3033861f--textContentFamily-49a318e1">
                                  <span data-key="fe02a1f0475948d29e9ac26ef57c18fa">
                                    LPs can create trading pairs with their
                                    tokens
                                  </span>
                                </span>
                              </p>
                            </div>
                          </li>
                          <li className="">
                            <div
                              className="reset-3c756112--listItemContent-756c9114"
                              data-key="131fee9092ac43f8b383fde5d587619b"
                            >
                              <p
                                className="blockParagraph-544a408c--noMargin-acdf7afa"
                                data-key="66562e339f534f5f8b6e56b9d4cc1cb4"
                              >
                                <span className="text-4505230f--TextH400-3033861f--textContentFamily-49a318e1">
                                  <span data-key="0431bab8f8254b23a839418a997299a4">
                                    LPs can obtain liquidity by depositing the
                                    tokens they already own, without taking on
                                    price risk
                                  </span>
                                </span>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix"></div>
        </section>
        <section
          id="application"
          className="vc_row wpb_row vc_row-fluid section section-pad section-bg-btoa"
        >
          <div className="container">
            <div className="row">
              <div className="wpb_column vc_column_container vc_col-sm-12">
                <div className="vc_column-inner ">
                  <div className="wpb_wrapper">
                    <div className="vc_row wpb_row vc_inner vc_row-fluid vc_custom_1520830144361">
                      <div
                        data-animate="fadeInUp"
                        data-delay="0"
                        className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-offset-3 vc_col-lg-6 vc_col-md-offset-2 vc_col-md-8"
                      >
                        <div className="vc_column-inner ">
                          <div className="wpb_wrapper">
                            <div className="section-head text-center">
                              <div className="heading-animation">
                                <span className="line-1"></span>
                                <span className="line-2"></span>
                                <span className="line-3"></span>
                                <span className="line-4"></span>
                                <span className="line-5"></span>
                                <span className="line-6"></span>
                                <span className="line-7"></span>
                                <span className="line-8"></span>
                              </div>
                              <h2
                                className="section-title"
                                data-animate="fadeInUp"
                                data-delay=".1"
                              >
                                Ella Overview <span>ELLA</span>
                              </h2>
                            </div>
                            <div className="wpb_text_column wpb_content_element  vc_custom_1607233127862 text-center">
                              <div className="wpb_wrapper">
                                <p>
                                  Ella is Powered by Chain Link Decentralized
                                  Price Oracle. Chain link Price Oracles
                                  retrieve the accurate Market price of the
                                  Network through the Network of the Node. Ella
                                  Aims to provide an accurate market price for
                                  every Crypto Assets so traders will buy/sell
                                  without any impact on the price of Crypto-
                                  assets. The result is that traders can
                                  sell/buy all market price with Zero slippage.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="vc_row wpb_row vc_inner vc_row-fluid vc_row-o-equal-height vc_row-o-content-middle vc_row-flex">
                      <div
                        data-animate="fadeInUp"
                        data-delay="0"
                        className="res-m-btm wpb_column vc_column_container vc_col-sm-6"
                      >
                        <div className="vc_column-inner ">
                          <div className="wpb_wrapper">
                            <div className="wpb_single_image wpb_content_element vc_align_center">
                              <figure className="wpb_wrapper vc_figure">
                                <div className="vc_single_image-wrapper   vc_box_border_grey">
                                  <img
                                    width="521"
                                    height="493"
                                    src="img/crypto-phone-11.png"
                                    className="vc_single_image-img attachment-full"
                                    alt=""
                                    loading="lazy"
                                    srcSet="img/crypto-phone-11.png 521w, img/crypto-phone-11-300x284.png 300w"
                                    sizes="(max-width: 521px) 100vw, 521px"
                                  />
                                </div>
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-animate="fadeInUp"
                        data-delay="0.5"
                        className="wpb_column vc_column_container vc_col-sm-5 vc_col-sm-offset-1"
                      >
                        <div className="vc_column-inner ">
                          <div className="wpb_wrapper">
                            <div className="wpb_text_column wpb_content_element  text-block">
                              <div className="wpb_wrapper">
                                <h6>Why EllaSwap</h6>
                                <ul>
                                  {/* <li>Fund Utilization</li>
                                  <li>Single Risk Exposure</li>
                                  <li>No Impermanent Loss</li> */}
                                  <li>
                                    <h6>Fund Utilization</h6>
                                    <p>
                                      As seen in the above graphs, ChainLink,
                                      like AMMs, provides liquidity in the price
                                      range of zero to positive infinity, but
                                      the LINK price curve is stable at the
                                      market price. That is, most of the funds
                                      are gathered at the market price, which
                                      allows for frequent trading of the fund at
                                      zero slippage utilization.
                                    </p>
                                  </li>
                                  <li>
                                    <h6>Single Risk Exposure</h6>
                                    <p>
                                      In the price curves above, each price
                                      curve consists of two parts: the bidding
                                      side to the left and the asking side to
                                      the right. These two parts may have a
                                      different depth, or liquidity, resulting
                                      in what is known as the bid-ask spread.
                                    </p>
                                  </li>
                                  {/* <li>
                                    <h6>Initial Ella Offering</h6>
                                    <p>
                                      Instead of paying exorbitant listing fees
                                      to get listed on CEXs or other DEXs, it is
                                      literally free to offer assets on ELLA.
                                    </p>
                                  </li> */}
                                </ul>
                                <ul className="btns">
                                  <li>
                                    <a
                                      className="btn btn-sm"
                                      href="https://docs.ella.finance/protocol/untitled"
                                    >
                                      LEARN MORE
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix"></div>
        </section>
        <section
          id="tokensale"
          className="vc_row wpb_row vc_row-fluid section-pad section-bg-alt"
        >
          <div className="container">
            <div className="row">
              <div className="wpb_column vc_column_container vc_col-sm-12">
                <div className="vc_column-inner ">
                  <div className="wpb_wrapper">
                    <div className="vc_row wpb_row vc_inner vc_row-fluid vc_custom_1520830144361">
                      <div
                        data-animate="fadeInUp"
                        data-delay="0"
                        className="wpb_column vc_column_container vc_col-sm-8 vc_col-md-offset-3 vc_col-md-6 vc_col-sm-offset-2"
                      >
                        <div className="vc_column-inner ">
                          <div className="wpb_wrapper">
                            <div className="section-head text-center">
                              <h2
                                className="section-title"
                                data-animate="fadeInUp"
                                data-delay=".1"
                              >
                                ELLA PRE SALE <span>ELLA</span>
                              </h2>
                            </div>
                            <div className="wpb_text_column wpb_content_element  wpb_animate_when_almost_visible wpb_bounceInDown bounceInDown vc_custom_1607234202002 text-center wpb_start_animation animated">
                              <div className="wpb_wrapper">
                                <h4 data-v-074c60b6="">Tokenization</h4>
                                <p data-v-074c60b6="">
                                  EllaSwap has a native token with the ticker
                                  being (ELLA) which is built on the Ethereum
                                  blockchain. ELLA is the governance token that
                                  powers EllaSwap.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="vc_row wpb_row vc_inner vc_row-fluid vc_row-o-equal-height vc_row-o-content-middle vc_row-flex">
                      <div
                        data-animate="fadeInUp"
                        data-delay="0"
                        className="event-info wpb_column vc_column_container vc_col-sm-12 vc_col-md-6"
                      >
                        <div className="vc_column-inner ">
                          <div className="wpb_wrapper">
                            <div className="row">
                              <div className="col-sm-6">
                                <div
                                  className="event-single-info"
                                  data-animate="fadeInUp"
                                  data-delay="0"
                                >
                                  <h6>Start</h6>
                                  <p>NOV 24th 15:00 UTC</p>
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div
                                  className="event-single-info"
                                  data-animate="fadeInUp"
                                  data-delay="0"
                                >
                                  <h6>Number of tokens for sale</h6>
                                  <p>1,069,318 ELLA</p>
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div
                                  className="event-single-info"
                                  data-animate="fadeInUp"
                                  data-delay="0"
                                >
                                  <h6>End</h6>
                                  <p>Dec 2nd  16:00 UTC</p>
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div
                                  className="event-single-info"
                                  data-animate="fadeInUp"
                                  data-delay="0"
                                >
                                  <h6>Presale Price</h6>
                                  <p>
                                  0.3 USD Per Ella
                                  </p>
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div
                                  className="event-single-info"
                                  data-animate="fadeInUp"
                                  data-delay="0"
                                >
                                  <h6>Acceptable currencies</h6>
                                  <p>ETH</p>
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div
                                  className="event-single-info"
                                  data-animate="fadeInUp"
                                  data-delay="0"
                                >
                                  <h6>Listing Price</h6>
                                  <p>0.38 USD</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-animate="fadeInUp"
                        data-delay="0.5"
                        className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-offset-1 vc_col-lg-5 vc_col-md-6"
                      >
                        <div className="vc_column-inner ">
                          <div className="wpb_wrapper">
                            <div className="countdown-box text-center persale ">
                              <h6>ELLA Presale</h6>
                              <ul
                                className="token-countdown d-flex align-content-stretch"
                                data-zone="0"
                                data-date="2020/12/15"
                                data-days="Days"
                                data-hours="Hours"
                                data-mins="Minutes"
                                data-secs="Seconds"
                                data-day="Days"
                                data-hour="Hours"
                                data-min="Minute"
                                data-sec="Second"
                              >
                                <li className="col">
                                  <span className="countdown-time days">
                                    07
                                  </span>
                                  <span className="countdown-text days_text">
                                    Days
                                  </span>
                                </li>
                                <li className="col">
                                  <span className="countdown-time hours">
                                    01
                                  </span>
                                  <span className="countdown-text hours_text">
                                    Hours
                                  </span>
                                </li>
                                <li className="col">
                                  <span className="countdown-time minutes">
                                    19
                                  </span>
                                  <span className="countdown-text minutes_text">
                                    Minutes
                                  </span>
                                </li>
                                <li className="col">
                                  <span className="countdown-time seconds countdown-time-last">
                                    07
                                  </span>
                                  <span className="countdown-text seconds_text">
                                    Seconds
                                  </span>
                                </li>
                              </ul>
                              <a
                                className="btn btn-alt btn-sm"
                                href="https://app.bounce.finance/fixed-swap/5008"
                                target="_blank"
                              >
                                Join &amp; BUY TOKEN NOW
                              </a>
                              {/* <ul className="icon-list">
                                <li>
                                  <em className="fab fa-bitcoin"></em>
                                </li>
                                <li>
                                  <em className="fab fa-ethereum"></em>
                                </li>
                              </ul> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="vc_row wpb_row vc_inner vc_row-fluid">
                      <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner ">
                          <div className="wpb_wrapper">
                            <div className="wpb_text_column wpb_content_element ">
                              <div className="wpb_wrapper">
                                <div className="gaps size-3x"></div>
                                <div className="gaps size-3x d-none d-md-block"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-animate="fadeInUp"
                        data-delay="0"
                        className="single-chart res-m-btm wpb_column vc_column_container vc_col-sm-6"
                      >
                        <div className="vc_column-inner ">
                          <div className="wpb_wrapper">
                            <h3
                              style={{ textAlign: "center" }}
                              className="vc_custom_heading sub-heading"
                            >
                              Distribution
                              <br />
                              of tokens
                            </h3>
                            <div className="wpb_single_image wpb_content_element vc_align_center">
                              <figure className="wpb_wrapper vc_figure">
                                <div className="vc_single_image-wrapper   vc_box_border_grey">
                                  <img
                                    width="810"
                                    height="660"
                                    src="img/chart-light-a.png"
                                    className="vc_single_image-img attachment-full"
                                    alt=""
                                    loading="lazy"
                                    srcSet="img/chart-light-a.png 810w, img/chart-light-a-300x244.png 300w, img/chart-light-a-768x626.png 768w"
                                    sizes="(max-width: 810px) 100vw, 810px"
                                  />
                                </div>
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-animate="fadeInUp"
                        data-delay="0.5"
                        className="single-chart res-m-btm wpb_column vc_column_container vc_col-sm-6"
                      >
                        <div className="vc_column-inner ">
                          <div className="wpb_wrapper">
                            <h3
                              style={{ textAlign: "center" }}
                              className="vc_custom_heading sub-heading"
                            >
                              Use
                              <br />
                              of proceeds
                            </h3>
                            <div className="wpb_single_image wpb_content_element vc_align_center">
                              <figure className="wpb_wrapper vc_figure">
                                <div className="vc_single_image-wrapper   vc_box_border_grey">
                                  <img
                                    width="810"
                                    height="660"
                                    src="img/chart-light-b.png"
                                    className="vc_single_image-img attachment-full"
                                    alt=""
                                    loading="lazy"
                                    srcSet="img/chart-light-b.png 810w, img/chart-light-b-300x244.png 300w, img/chart-light-b-768x626.png 768w"
                                    sizes="(max-width: 810px) 100vw, 810px"
                                  />
                                </div>
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix"></div>
        </section>
        <section
          id="roadmap"
          className="vc_row wpb_row vc_row-fluid section-pad section-bg section-connect"
        >
          <div className="container">
            <div className="row">
              <div className="wpb_column vc_column_container vc_col-sm-12">
                <div className="vc_column-inner ">
                  <div className="wpb_wrapper">
                    <div className="vc_row wpb_row vc_inner vc_row-fluid vc_custom_1520830144361">
                      <div
                        data-animate="fadeInUp"
                        data-delay="0"
                        className="wpb_column vc_column_container vc_col-sm-12"
                      >
                        <div className="vc_column-inner ">
                          <div className="wpb_wrapper">
                            <div className="section-head text-center">
                              <h2
                                className="section-title"
                                data-animate="fadeInUp"
                                data-delay=".1"
                              >
                                OUR ROADMAP. <span>ELLA ROADMAP</span>
                              </h2>
                            </div>
                            <div
                              className="vc_empty_space"
                              style={{ height: "50px" }}
                            >
                              <span className="vc_empty_space_inner"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="vc_row wpb_row vc_inner vc_row-fluid">
                      <div
                        data-animate="fadeInUp"
                        data-delay="0"
                        className="wpb_column vc_column_container vc_col-sm-12"
                      >
                        <div className="vc_column-inner ">
                          <div className="wpb_wrapper">
                            <div className="row roadmap-list align-items-end">
                              <div className="col-lg ">
                                <div className="single-roadmap roadmap-sm roadmap-done">
                                  <h6>March 2020</h6>
                                  <p>
                                    Started project planning and resourcing
                                    <br />
                                    Launch of ELLA concept documentation
                                    <br />
                                    Building smart contract for ELLA ERC-20
                                    token
                                  </p>
                                </div>
                              </div>
                              <div className="col-lg width-0">
                                <div className="single-roadmap roadmap-sm roadmap-done roadmap-down">
                                  <h6>April 2020</h6>
                                  <p>
                                    Launch of product design <br />
                                    Documentation review
                                  </p>
                                </div>
                              </div>
                              <div className="col-lg ">
                                <div className="single-roadmap roadmap-lg ">
                                  <h6>Oct 2020</h6>
                                  <p>
                                    Launch of exchange (Beta version) <br />
                                    Review and development
                                  </p>
                                </div>
                              </div>
                              <div className="col-lg width-0">
                                <div className="single-roadmap roadmap-sm  roadmap-down">
                                  <h6>Nov 2020</h6>
                                  <p>
                                    Air drop
                                    <br />
                                    Community development <br />
                                    Partnerships and marketing <br />
                                  </p>
                                </div>
                              </div>
                              <div className="col-lg ">
                                <div className="single-roadmap roadmap-sm ">
                                  <h6>Dec 2020</h6>
                                  <p>
                                    Launch Website and app platform <br />
                                    Crowdsale launch <br />
                                    Uniswap listing and liquidity lock <br />
                                  </p>
                                </div>
                              </div>
                              <div className="col-lg width-0">
                                <div className="single-roadmap roadmap-sm  roadmap-down">
                                  <h6>Jan 2021</h6>
                                  <p>
                                    SMC Security audit <br />
                                    Launch of ELLA Governance <br />
                                    Launch Apps Development <br />
                                  </p>
                                </div>
                              </div>
                              {/* <div className="col-lg width-0">
                                <div className="single-roadmap roadmap-sm">
                                  <h6>April 2021</h6>
                                  <p>Launch of erc721 Liquidity Platform</p>
                                </div>
                              </div> */}
                              {/* <div className="col-lg ">
                                <div className="single-roadmap roadmap-sm ">
                                  <h6>June 2022</h6>
                                  <p>Start Token Sale Round (2)</p>
                                </div>
                              </div>
                              <div className="col-lg width-0">
                                <div className="single-roadmap roadmap-sm  roadmap-down">
                                  <h6>Octorber 2022</h6>
                                  <p>
                                    Blockchain usage announcement for global
                                    Network
                                  </p>
                                </div>
                              </div>
                              <div className="col-lg ">
                                <div className="single-roadmap roadmap-lg ">
                                  <h6>December 2022</h6>
                                  <p>Operational Launch Global.</p>
                                </div>
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix"></div>
        </section>
        <section
          id="team"
          className="vc_row wpb_row vc_row-fluid section-pad no-pb section-bg-alt section-fix"
        >
          <div className="container">
            <div className="row">
              <div className="wpb_column vc_column_container vc_col-sm-12">
                <div className="vc_column-inner ">
                  <div className="wpb_wrapper">
                    <div className="vc_row wpb_row vc_inner vc_row-fluid">
                      <div
                        data-animate="fadeInUp"
                        data-delay="0"
                        className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-offset-3 vc_col-lg-6 vc_col-md-offset-2 vc_col-md-8"
                      >
                        <div className="vc_column-inner ">
                          <div className="wpb_wrapper">
                            <div className="section-head text-center">
                              <h2
                                className="section-title"
                                data-animate="fadeInUp"
                                data-delay=".1"
                              >
                                Powered by a Team <span>TEAM</span>
                              </h2>
                            </div>
                            <div className="wpb_text_column wpb_content_element  vc_custom_1520850810932 text-center">
                              <div className="wpb_wrapper">
                                <p>
                                  The ICO Crypto Team combines a passion for
                                  esports, industry experise &amp; proven record
                                  in finance, development, marketing &amp;
                                  licensing.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="vc_row wpb_row vc_inner vc_row-fluid">
                      <div
                        data-animate="fadeInUp"
                        data-delay="0.2"
                        className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-3"
                      >
                        <div className="vc_column-inner ">
                          <div className="wpb_wrapper">
                            <div className="team-member">
                              <div className="team-photo">
                                <img src="img/team_a.jpeg" alt="" />
                                <span className="expand-trigger content-popup"></span>
                              </div>
                              <div className="team-info">
                                <h5 className="team-name">
                                  SAI KIRAN REDDY MAYREDDY
                                </h5>
                                <span className="team-title">
                                  CEO &amp; Lead Blockchain
                                </span>
                                <ul className="team-social">
                                  <li>
                                    <a target="_blank" href="#">
                                      <em className="fab fa-facebook-f"></em>
                                    </a>
                                  </li>
                                  <li>
                                    <a target="_blank" href="#">
                                      <em className="fab fa-linkedin-in"></em>
                                    </a>
                                  </li>
                                  <li>
                                    <a target="_blank" href="#">
                                      <em className="fab fa-twitter"></em>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-animate="fadeInUp"
                        data-delay="0.3"
                        className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-3"
                      >
                        <div className="vc_column-inner ">
                          <div className="wpb_wrapper">
                            <div className="team-member">
                              <div className="team-photo">
                                <img src="img/team_b.jpeg" alt="" />
                                <span className="expand-trigger content-popup"></span>
                              </div>
                              <div className="team-info">
                                <h5 className="team-name">
                                  Izunna Isdore Ozuo
                                </h5>
                                <span className="team-title">
                                  Legal Counsel
                                </span>
                                <ul className="team-social">
                                  <li>
                                    <a target="_blank" href="#">
                                      <em className="fab fa-facebook-f"></em>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      target="_blank"
                                      href="https://www.linkedin.com/in/izunna-isdore-ozuo-8ab21980/"
                                    >
                                      <em className="fab fa-linkedin-in"></em>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      target="_blank"
                                      href="http://www.twitter.com/"
                                    >
                                      <em className="fab fa-twitter"></em>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-animate="fadeInUp"
                        data-delay="0.4"
                        className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-3"
                      >
                        <div className="vc_column-inner ">
                          <div className="wpb_wrapper">
                            <div className="team-member">
                              <div className="team-photo">
                                <img src="img/team_c.jpeg" alt="" />
                                <span className="expand-trigger content-popup"></span>
                              </div>
                              <div className="team-info">
                                <h5 className="team-name">Ugoji Harry</h5>
                                <span className="team-title">
                                  Digital Strategy Manager
                                </span>
                                <ul className="team-social">
                                  <li>
                                    <a target="_blank" href="#">
                                      <em className="fab fa-facebook"></em>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      target="_blank"
                                      href="https://www.linkedin.com/in/harryugojiofficial/"
                                    >
                                      <em className="fab fa-linkedin-in"></em>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      target="_blank"
                                      href="http://www.twitter.com/"
                                    >
                                      <em className="fab fa-twitter"></em>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-animate="fadeInUp"
                        data-delay="0.5"
                        className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-3"
                      >
                        <div className="vc_column-inner ">
                          <div className="wpb_wrapper">
                            <div className="team-member">
                              <div className="team-photo">
                                <img src="img/team_d.jpeg" alt="" />
                                <span className="expand-trigger content-popup"></span>
                              </div>
                              <div className="team-info">
                                <h5 className="team-name">Laicka Rodeo</h5>
                                <span className="team-title">
                                  Community Management
                                </span>
                                <ul className="team-social">
                                  <li>
                                    <a target="_blank" href="#">
                                      <em className="fab fa-facebook-f"></em>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      target="_blank"
                                      href="https://www.linkedin.com/in/laicka-rodeo-82306815a/"
                                    >
                                      <em className="fab fa-linkedin-in"></em>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      target="_blank"
                                      href="http://www.twitter.com/"
                                    >
                                      <em className="fab fa-twitter"></em>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-md-offset-1 vc_col-md-10">
                <div className="vc_column-inner ">
                  <div className="wpb_wrapper">
                    <div className="vc_row wpb_row vc_inner vc_row-fluid">
                      <div
                        data-animate="fadeInUp"
                        data-delay="0"
                        className="wpb_column vc_column_container vc_col-sm-12"
                      >
                        <div className="vc_column-inner ">
                          <div className="wpb_wrapper">
                            <div className="wpb_text_column wpb_content_element  wpb_animate_when_almost_visible wpb_bounceIn bounceIn text-center wpb_start_animation animated">
                              <div className="wpb_wrapper">
                                <div className="gaps size-2x"></div>
                                <h3 className="sub-heading ucap">Advisors</h3>
                                <div className="gaps size-2x"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-animate="fadeInUp"
                        data-delay="0.1"
                        className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-4"
                      >
                        <div className="vc_column-inner ">
                          <div className="wpb_wrapper">
                            <div className="team-member">
                              <div className="team-photo">
                                <img src="img/ikard-1.jpg" alt="" />
                                <span
                                  data-mfp-src="http://159.89.95.143/team/dylan-finch/"
                                  className="expand-trigger content-popup"
                                ></span>
                              </div>
                              <div className="team-info">
                                <h5 className="team-name">
                                  SAI KIRAN REDDY MAYREDDY
                                </h5>
                                <span className="team-title">
                                  Board Advisor
                                </span>
                                <ul className="team-social">
                                  <li>
                                    <a target="_blank" href="#">
                                      <em className="fab fa-facebook-f"></em>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      target="_blank"
                                      href="https://www.linkedin.com/in/harryugojiofficial/"
                                    >
                                      <em className="fab fa-linkedin"></em>
                                    </a>
                                  </li>
                                  <li>
                                    <a target="_blank" href="#">
                                      <em className="fab fa-twitter"></em>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-animate="fadeInUp"
                        data-delay="0.2"
                        className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-4"
                      >
                        <div className="vc_column-inner ">
                          <div className="wpb_wrapper">
                            <div className="team-member">
                              <div className="team-photo">
                                <img src="img/team1.png" alt="" />
                                <span
                                  data-mfp-src="http://159.89.95.143/team/julian-paten/"
                                  className="expand-trigger content-popup"
                                ></span>
                              </div>
                              <div className="team-info">
                                <h5 className="team-name">Ugoji Harry</h5>
                                <span className="team-title">
                                  Board Advisor
                                </span>
                                <ul className="team-social">
                                  <li>
                                    <a target="_blank" href="#">
                                      <em className="fab fa-facebook-f"></em>
                                    </a>
                                  </li>
                                  <li>
                                    <a target="_blank" href="#">
                                      <em className="fab fa-linkedin-in"></em>
                                    </a>
                                  </li>
                                  <li>
                                    <a target="_blank" href="#">
                                      <em className="fab fa-twitter"></em>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-animate="fadeInUp"
                        data-delay="0.3"
                        className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-offset-0 vc_col-md-4 vc_col-sm-offset-3"
                      >
                        <div className="vc_column-inner ">
                          <div className="wpb_wrapper">
                            <div className="team-member">
                              <div className="team-photo">
                                <img src="img/team130.jpeg" alt="" />
                                <span
                                  data-mfp-src="http://159.89.95.143/team/jaxon-kilburn/"
                                  className="expand-trigger content-popup"
                                ></span>
                              </div>
                              <div className="team-info">
                                <h5 className="team-name">
                                  Izunna Isdore Ozuo
                                </h5>
                                <span className="team-title">
                                  Board Advisor
                                </span>
                                <ul className="team-social">
                                  <li>
                                    <a target="_blank" href="#">
                                      <em className="fab fa-facebook-f"></em>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      target="_blank"
                                      href="https://www.linkedin.com/in/izunna-isdore-ozuo-8ab21980/"
                                    >
                                      <em className="fab fa-linkedin-in"></em>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      target="_blank"
                                      href="https://twitter.com/ellafinance"
                                    >
                                      <em className="fab fa-twitter"></em>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="clearfix"></div>
        </section>
        {/* <section
          id="partners"
          className="vc_row wpb_row vc_row-fluid section-pad section-bg-alt"
        >
          <div className="container">
            <div className="row">
              <div className="wpb_column vc_column_container vc_col-sm-12">
                <div className="vc_column-inner ">
                  <div className="wpb_wrapper">
                    <div className="vc_row wpb_row vc_inner vc_row-fluid">
                      <div
                        data-animate="fadeInUp"
                        data-delay="0"
                        className="wpb_column vc_column_container vc_col-sm-12"
                      >
                        <div className="vc_column-inner ">
                          <div className="wpb_wrapper">
                            <div className="section-head text-center">
                              <h2
                                className="section-title"
                                data-animate="fadeInUp"
                                data-delay=".1"
                              >
                                Ella PARTNERS <span>PARTNERS</span>
                              </h2>
                            </div>
                            <div
                              className="vc_empty_space"
                              style={{ height: "50px" }}
                            >
                              <span className="vc_empty_space_inner"></span>
                            </div>
                            <div
                              className="vc_empty_space  vc_hidden-sm vc_hidden-xs"
                              style={{ height: "60px" }}
                            >
                              <span className="vc_empty_space_inner"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="vc_row wpb_row vc_inner vc_row-fluid">
                      <div
                        data-animate="fadeInUp"
                        data-delay="0.1"
                        className="wpb_column vc_column_container vc_col-sm-4"
                      >
                        <div className="vc_column-inner ">
                          <div className="wpb_wrapper">
                            <div className="wpb_single_image wpb_content_element vc_align_center  wpb_animate_when_almost_visible wpb_bounceInDown bounceInDown  single-partner wpb_start_animation animated">
                              <figure className="wpb_wrapper vc_figure">
                                <div className="vc_single_image-wrapper   vc_box_border_grey">
                                  <img
                                    width="300"
                                    height="128"
                                    src="img/logo_yahoofinance.png"
                                    className="vc_single_image-img attachment-full"
                                    alt=""
                                    loading="lazy"
                                  />
                                </div>
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-animate="fadeInUp"
                        data-delay="0.2"
                        className="wpb_column vc_column_container vc_col-sm-4"
                      >
                        <div className="vc_column-inner ">
                          <div className="wpb_wrapper">
                            <div className="wpb_single_image wpb_content_element vc_align_center  wpb_animate_when_almost_visible wpb_bounceInLeft bounceInLeft  single-partner wpb_start_animation animated">
                              <figure className="wpb_wrapper vc_figure">
                                <div className="vc_single_image-wrapper   vc_box_border_grey">
                                  <img
                                    width="831"
                                    height="161"
                                    src="img/logo_coindesk.png"
                                    className="vc_single_image-img attachment-full"
                                    alt=""
                                    loading="lazy"
                                    srcSet="http://159.89.95.143/chamsuph/2020/12/logo_coindesk.png 831w, http://159.89.95.143/chamsuph/2020/12/logo_coindesk-300x58.png 300w, http://159.89.95.143/chamsuph/2020/12/logo_coindesk-768x149.png 768w"
                                    sizes="(max-width: 831px) 100vw, 831px"
                                  />
                                </div>
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-animate="fadeInUp"
                        data-delay="0.3"
                        className="wpb_column vc_column_container vc_col-sm-4"
                      >
                        <div className="vc_column-inner ">
                          <div className="wpb_wrapper">
                            <div className="wpb_single_image wpb_content_element vc_align_center   single-partner">
                              <figure className="wpb_wrapper vc_figure">
                                <div className="vc_single_image-wrapper   vc_box_border_grey">
                                  <img
                                    width="830"
                                    height="191"
                                    src="img/logo_cryptonews.png"
                                    className="vc_single_image-img attachment-full"
                                    alt=""
                                    loading="lazy"
                                    srcSet="http://159.89.95.143/chamsuph/2020/12/logo_cryptonews.png 830w, http://159.89.95.143/chamsuph/2020/12/logo_cryptonews-300x69.png 300w, http://159.89.95.143/chamsuph/2020/12/logo_cryptonews-768x177.png 768w"
                                    sizes="(max-width: 830px) 100vw, 830px"
                                  />
                                </div>
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="vc_row wpb_row vc_inner vc_row-fluid">
                      <div
                        data-animate="fadeInUp"
                        data-delay="0.4"
                        className="wpb_column vc_column_container vc_col-sm-4 vc_col-md-offset-2 vc_col-md-4 vc_col-sm-offset-2"
                      >
                        <div className="vc_column-inner ">
                          <div className="wpb_wrapper">
                            <div className="wpb_single_image wpb_content_element vc_align_center  wpb_animate_when_almost_visible wpb_bounceInDown bounceInDown wpb_start_animation animated">
                              <figure className="wpb_wrapper vc_figure">
                                <div className="vc_single_image-wrapper   vc_box_border_grey">
                                  <img
                                    width="380"
                                    height="120"
                                    src="img/logo_decrypt.png"
                                    className="vc_single_image-img attachment-full"
                                    alt=""
                                    loading="lazy"
                                    srcSet="http://159.89.95.143/chamsuph/2020/12/logo_decrypt.png 380w, http://159.89.95.143/chamsuph/2020/12/logo_decrypt-300x95.png 300w"
                                    sizes="(max-width: 380px) 100vw, 380px"
                                  />
                                </div>
                              </figure>
                            </div>
                            <div
                              className="vc_empty_space  vc_hidden-lg vc_hidden-md vc_hidden-sm"
                              style={{ height: "30px" }}
                            >
                              <span className="vc_empty_space_inner"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-animate="fadeInUp"
                        data-delay="0.5"
                        className="wpb_column vc_column_container vc_col-sm-4"
                      >
                        <div className="vc_column-inner ">
                          <div className="wpb_wrapper">
                            <div className="wpb_single_image wpb_content_element vc_align_center">
                              <figure className="wpb_wrapper vc_figure">
                                <div className="vc_single_image-wrapper   vc_box_border_grey">
                                  <img
                                    width="143"
                                    height="78"
                                    src="img/logo_e27.png"
                                    className="vc_single_image-img attachment-full"
                                    alt=""
                                    loading="lazy"
                                  />
                                </div>
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix"></div>
        </section> */}
        <section
          id="media"
          className="vc_row wpb_row vc_row-fluid section-pad section-bg section-connect"
        >
          <div className="container">
            <div className="row">
              <div
                data-animate="fadeInUp"
                data-delay="0"
                className="wpb_column vc_column_container vc_col-sm-12"
              >
                <div className="vc_column-inner ">
                  <div className="wpb_wrapper">
                    <h6
                      style={{ textAlign: "center" }}
                      className="vc_custom_heading section-title-sm vc_custom_1520917253885"
                    >
                      As seen in
                    </h6>
                  </div>
                </div>
              </div>
              <div className="wpb_column vc_column_container vc_col-sm-12">
                <div className="vc_column-inner ">
                  <div className="wpb_wrapper">
                    <div className="vc_row vc_row-flex wpb_row vc_inner vc_row-o-content-middle vc_row-fluid align-items-center" style={{ justifyContent: "center" }}>
                      <div
                        data-animate="fadeInUp"
                        data-delay="0.1"
                        className="wpb_column vc_column_container vc_col-sm-2 vc_col-xs-6"
                      >
                        <div className="vc_column-inner ">
                          <div className="wpb_wrapper">
                            <div className="wpb_single_image wpb_content_element vc_align_center   single-partner">
                              <figure className="wpb_wrapper vc_figure">
                                <div className="vc_single_image-wrapper   vc_box_border_grey">
                                  <img
                                    width="160"
                                    height="60"
                                    src="img/Cointelegraph_logo.png"
                                    className="vc_single_image-img attachment-full"
                                    alt=""
                                    loading="lazy"
                                  />
                                </div>
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-animate="fadeInUp"
                        data-delay="0.2"
                        className="wpb_column vc_column_container vc_col-sm-2 vc_col-xs-6"
                      >
                        <div className="vc_column-inner ">
                          <div className="wpb_wrapper">
                            <div className="wpb_single_image wpb_content_element vc_align_center   single-partner">
                              <figure className="wpb_wrapper vc_figure">
                                <div className="vc_single_image-wrapper   vc_box_border_grey">
                                  <img
                                    width="642"
                                    height="182"
                                    src="img/News_BTC-3869328509.png"
                                    className="vc_single_image-img attachment-full"
                                    alt=""
                                    loading="lazy"
                                    srcSet="img/News_BTC-3869328509.png"
                                    sizes="(max-width: 642px) 100vw, 642px"
                                  />
                                </div>
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div
                        data-animate="fadeInUp"
                        data-delay="0.3"
                        className="wpb_column vc_column_container vc_col-sm-2 vc_col-xs-6"
                      >
                        <div className="vc_column-inner ">
                          <div className="wpb_wrapper">
                            <div className="wpb_single_image wpb_content_element vc_align_center   single-partner">
                              <figure className="wpb_wrapper vc_figure">
                                <div className="vc_single_image-wrapper   vc_box_border_grey">
                                  <img
                                    width="831"
                                    height="161"
                                    src="img/logo_coindesk.png"
                                    className="vc_single_image-img attachment-full"
                                    alt=""
                                    loading="lazy"
                                    srcSet="http://159.89.95.143/chamsuph/2020/12/logo_coindesk.png 831w, http://159.89.95.143/chamsuph/2020/12/logo_coindesk-300x58.png 300w, http://159.89.95.143/chamsuph/2020/12/logo_coindesk-768x149.png 768w"
                                    sizes="(max-width: 831px) 100vw, 831px"
                                  />
                                </div>
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      {/* <div
                        data-animate="fadeInUp"
                        data-delay="0.4"
                        className="wpb_column vc_column_container vc_col-sm-2 vc_col-xs-6"
                      >
                        <div className="vc_column-inner ">
                          <div className="wpb_wrapper">
                            <div className="wpb_single_image wpb_content_element vc_align_center   single-partner">
                              <figure className="wpb_wrapper vc_figure">
                                <div className="vc_single_image-wrapper   vc_box_border_grey">
                                  <img
                                    width="160"
                                    height="60"
                                    src="img/partner-xs-d.png"
                                    className="vc_single_image-img attachment-full"
                                    alt=""
                                    loading="lazy"
                                  />
                                </div>
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      {/* <div
                        data-animate="fadeInUp"
                        data-delay="0.5"
                        className="wpb_column vc_column_container vc_col-sm-2 vc_col-xs-6"
                      >
                        <div className="vc_column-inner ">
                          <div className="wpb_wrapper">
                            <div className="wpb_single_image wpb_content_element vc_align_center   single-partner">
                              <figure className="wpb_wrapper vc_figure">
                                <div className="vc_single_image-wrapper   vc_box_border_grey">
                                  <img
                                    width="160"
                                    height="60"
                                    src="img/partner-xs-e.png"
                                    className="vc_single_image-img attachment-full"
                                    alt=""
                                    loading="lazy"
                                  />
                                </div>
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      {/* <div
                        data-animate="fadeInUp"
                        data-delay="0.6"
                        className="wpb_column vc_column_container vc_col-sm-2 vc_col-xs-6"
                      >
                        <div className="vc_column-inner ">
                          <div className="wpb_wrapper">
                            <div className="wpb_single_image wpb_content_element vc_align_center   single-partner">
                              <figure className="wpb_wrapper vc_figure">
                                <div className="vc_single_image-wrapper   vc_box_border_grey">
                                  <img
                                    width="160"
                                    height="60"
                                    src="img/partner-xs-f.png"
                                    className="vc_single_image-img attachment-full"
                                    alt=""
                                    loading="lazy"
                                  />
                                </div>
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-sm-offset-1">
                <div className="vc_column-inner ">
                  <div className="wpb_wrapper">
                    <div className="vc_row wpb_row vc_inner vc_row-fluid">
                      <div
                        data-animate="fadeInUp"
                        data-delay="0.7"
                        className="wpb_column vc_column_container vc_col-sm-3 vc_col-xs-6"
                      >
                        <div className="vc_column-inner ">
                          <div className="wpb_wrapper">
                            <div className="wpb_single_image wpb_content_element vc_align_center">
                              <figure className="wpb_wrapper vc_figure">
                                <div className="vc_single_image-wrapper   vc_box_border_grey">
                                  <img
                                    width="143"
                                    height="78"
                                    src="img/logo_e27.png"
                                    className="vc_single_image-img attachment-full"
                                    alt=""
                                    loading="lazy"
                                  />
                                </div>
                              </figure>
                            </div>
                            <div
                              className="vc_empty_space  vc_hidden-lg vc_hidden-md vc_hidden-sm"
                              style={{ height: "30px" }}
                            >
                              <span className="vc_empty_space_inner"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-animate="fadeInUp"
                        data-delay="0.8"
                        className="wpb_column vc_column_container vc_col-sm-3 vc_col-xs-6"
                      >
                        <div className="vc_column-inner ">
                          <div className="wpb_wrapper">
                            <div className="wpb_single_image wpb_content_element vc_align_center">
                              <figure className="wpb_wrapper vc_figure">
                                <div className="vc_single_image-wrapper   vc_box_border_grey">
                                  <img
                                    width="190"
                                    height="60"
                                    src="img/partner-sm-b.png"
                                    className="vc_single_image-img attachment-full"
                                    alt=""
                                    loading="lazy"
                                  />
                                </div>
                              </figure>
                            </div>
                            <div
                              className="vc_empty_space  vc_hidden-lg vc_hidden-md vc_hidden-sm"
                              style={{ height: "30px" }}
                            >
                              <span className="vc_empty_space_inner"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-animate="fadeInUp"
                        data-delay="0.9"
                        className="wpb_column vc_column_container vc_col-sm-3 vc_col-xs-6"
                      >
                        <div className="vc_column-inner ">
                          <div className="wpb_wrapper">
                            <div className="wpb_single_image wpb_content_element vc_align_center">
                              <figure className="wpb_wrapper vc_figure">
                                <div className="vc_single_image-wrapper   vc_box_border_grey">
                                  <img
                                    width="300"
                                    height="128"
                                    src="img/logo_yahoofinance.png"
                                    className="vc_single_image-img attachment-full"
                                    alt=""
                                    loading="lazy"
                                  />
                                </div>
                              </figure>
                            </div>
                            <div
                              className="vc_empty_space  vc_hidden-lg vc_hidden-md vc_hidden-sm"
                              style={{ height: "30px" }}
                            >
                              <span className="vc_empty_space_inner"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-animate="fadeInUp"
                        data-delay="1"
                        className="wpb_column vc_column_container vc_col-sm-3 vc_col-xs-6"
                      >
                        <div className="vc_column-inner ">
                          <div className="wpb_wrapper">
                            <div className="wpb_single_image wpb_content_element vc_align_center">
                              <figure className="wpb_wrapper vc_figure">
                                <div className="vc_single_image-wrapper   vc_box_border_grey">
                                  <img
                                    width="190"
                                    height="60"
                                    src="img/partner-sm-d.png"
                                    className="vc_single_image-img attachment-full"
                                    alt=""
                                    loading="lazy"
                                  />
                                </div>
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="clearfix"></div>
        </section>
        <section
          id="latestblog"
          className="vc_row wpb_row vc_row-fluid section-pad section-bg-dark"
        >
          <div className="container">
            <div className="row">
              <div
                data-animate="fadeInUp"
                data-delay="0.25"
                className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-offset-3 vc_col-lg-6 vc_col-md-offset-2 vc_col-md-8"
              >
                <div className="vc_column-inner ">
                  <div className="wpb_wrapper">
                    <div className="section-head text-center">
                      <h2
                        className="section-title"
                        data-animate="fadeInUp"
                        data-delay=".1"
                      >
                        More About Ella Swap <span>Ella swap</span>
                      </h2>
                    </div>
                    <div className="vc_empty_space" style={{ height: "50px" }}>
                      <span className="vc_empty_space_inner"></span>
                    </div>
                    <div
                      className="vc_empty_space  vc_hidden-sm vc_hidden-xs"
                      style={{ height: "60px" }}
                    >
                      <span className="vc_empty_space_inner"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-animate="fadeInUp"
                data-delay="0.25"
                className="wpb_column vc_column_container vc_col-sm-12"
              >
                <div className="vc_column-inner ">
                  <div className="wpb_wrapper">
                    <div className="blog-list">
                      <div className="row">
                        <div className="col-lg-4 offset-lg-0 col-sm-8 offset-sm-2">
                          <div className="blog-item">
                            <div className="blog-texts">
                              <ul className="blog-meta">
                                <li>December 5, 2020</li>
                                <li>
                                  <a
                                    href="http://159.89.95.143/category/uncategorized/"
                                    rel="category tag"
                                  >
                                    Uncategorized
                                  </a>
                                </li>
                              </ul>
                              <h5 className="blog-title">
                                <a href="http://159.89.95.143/hello-world/">
                                  What is ella ?
                                </a>
                              </h5>
                              <p>
                                ELLA is a next-generation on-chain liquidity
                                provider, which leverages on chain link
                                decentralized price oracle...
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 offset-lg-0 col-sm-8 offset-sm-2">
                          <div className="blog-item">
                            <div className="blog-photo">
                              <a href="http://159.89.95.143/swapbase/">
                                <img src="img/header-image-dark.png" alt="" />
                              </a>
                            </div>
                            <div className="blog-texts">
                              <ul className="blog-meta">
                                <li>December 3, 2020</li>
                                <li>
                                  <a
                                    href="http://159.89.95.143/category/uncategorized/"
                                    rel="category tag"
                                  >
                                    Uncategorized
                                  </a>
                                </li>
                              </ul>
                              <h5 className="blog-title">
                                <a href="http://159.89.95.143/swapbase/">
                                  SwapBase
                                </a>
                              </h5>
                              <p>
                                The swapBase function sends an application
                                request into the protocol, this application
                                request consists of...
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 offset-lg-0 col-sm-8 offset-sm-2">
                          <div className="blog-item">
                            <div className="blog-texts">
                              <ul className="blog-meta">
                                <li>December 3, 2020</li>
                                <li>
                                  <a
                                    href="http://159.89.95.143/category/uncategorized/"
                                    rel="category tag"
                                  >
                                    Uncategorized
                                  </a>
                                </li>
                              </ul>
                              <h5 className="blog-title">
                                <a href="http://159.89.95.143/add-liquidity/">
                                  Add Liquidity
                                </a>
                              </h5>
                              <p>
                                The Save function sends an application request
                                into the protocol, this application request
                                consists of...
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row text-center">
                      <div className="col-md-12">
                        <a
                          className="btn btn-more"
                          href="http://wpdemo.oceanthemes.net/icos/blog/"
                          target="_self"
                        >
                          READ ALL NEWS <em className="ti ti-angle-right"></em>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix"></div>
        </section>
        <section
          id="faqs"
          className="vc_row wpb_row vc_row-fluid section-pad no-pb section-bg-alt"
        >
          <div className="container">
            <div className="row">
              <div
                data-animate="fadeInUp"
                data-delay="0"
                className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-offset-3 vc_col-lg-6 vc_col-md-offset-2 vc_col-md-8 "
              >
                <div className="vc_column-inner ">
                  <div className="wpb_wrapper">
                    <div className="section-head text-center">
                      <h2
                        className="section-title"
                        data-animate="fadeInUp"
                        data-delay=".1"
                      >
                        Frequently asked questions <span>Ella FAQS</span>
                      </h2>
                    </div>
                    <div className="wpb_text_column wpb_content_element  vc_custom_1607245966711 text-center">
                      <div className="wpb_wrapper">
                        <p>
                          If you have any other questions, please get in touch
                          using the contact form below.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix"></div>
        </section>
        <section className="vc_row wpb_row vc_row-fluid section-bg-alt">
          <div className="container">
            <div className="row">
              <div
                data-animate="fadeInUp"
                data-delay="0.5"
                className="wpb_column vc_column_container vc_col-sm-12 vc_col-md-offset-2 vc_col-md-8"
              >
                <div className="vc_column-inner ">
                  <div className="wpb_wrapper">
                    <div className="vc_tta-container" data-vc-action="collapse">
                      <div className="vc_general vc_tta vc_tta-tabs vc_tta-color-grey vc_tta-style-classic vc_tta-shape-rounded vc_tta-spacing-1  ot-tabs vc_tta-tabs-position-top vc_tta-controls-align-left">
                        <div className="vc_tta-tabs-container">
                          <ul className="vc_tta-tabs-list">
                            <li className="vc_tta-tab vc_active" data-vc-tab="">
                              <a
                                href="http://159.89.95.143/#1520927186706-24e6240e-867e"
                                data-vc-tabs=""
                                data-vc-container=".vc_tta"
                              >
                                <span className="vc_tta-title-text">
                                  General
                                </span>
                              </a>
                            </li>
                            <li className="vc_tta-tab" data-vc-tab="">
                              <a
                                href="http://159.89.95.143/#1520937009638-39a59121-c4f6"
                                data-vc-tabs=""
                                data-vc-container=".vc_tta"
                              >
                                <span className="vc_tta-title-text">
                                  Pre-ICO &amp; ICO
                                </span>
                              </a>
                            </li>
                            <li className="vc_tta-tab" data-vc-tab="">
                              <a
                                href="http://159.89.95.143/#1520927144944-4e219566-c71a"
                                data-vc-tabs=""
                                data-vc-container=".vc_tta"
                              >
                                <span className="vc_tta-title-text">
                                  Tokens
                                </span>
                              </a>
                            </li>
                            <li className="vc_tta-tab" data-vc-tab="">
                              <a
                                href="http://159.89.95.143/#1520927153053-165c0f84-efe6"
                                data-vc-tabs=""
                                data-vc-container=".vc_tta"
                              >
                                <span className="vc_tta-title-text">
                                  Client
                                </span>
                              </a>
                            </li>
                            <li className="vc_tta-tab" data-vc-tab="">
                              <a
                                href="http://159.89.95.143/#1520927169441-fbd46c2d-7973"
                                data-vc-tabs=""
                                data-vc-container=".vc_tta"
                              >
                                <span className="vc_tta-title-text">Legal</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="vc_tta-panels-container">
                          <div className="vc_tta-panels">
                            <div
                              className="vc_tta-panel vc_active"
                              id="1520927186706-24e6240e-867e"
                              data-vc-content=".vc_tta-panel-body"
                            >
                              <div className="vc_tta-panel-heading">
                                <h4 className="vc_tta-panel-title">
                                  <a
                                    href="http://159.89.95.143/#1520927186706-24e6240e-867e"
                                    data-vc-accordion=""
                                    data-vc-container=".vc_tta-container"
                                  >
                                    <span className="vc_tta-title-text">
                                      General
                                    </span>
                                  </a>
                                </h4>
                              </div>
                              <div className="vc_tta-panel-body">
                                <div className="accordion" id="accordion-13">
                                  <div className="card">
                                    <div className="card-header">
                                      <h5>
                                        <a
                                          className=""
                                          data-toggle="collapse"
                                          data-target="#collapse-855"
                                        >
                                          What is ELLASWAP?
                                          <span className="plus-minus">
                                            <span className="ti ti-angle-up"></span>
                                          </span>
                                        </a>
                                      </h5>
                                    </div>
                                    <div
                                      id="collapse-855"
                                      className="collapse show"
                                      data-parent="#accordion-13"
                                    >
                                      <div className="card-body">
                                        <p>
                                          ELLA is a next-generation on-chain
                                          liquidity provider, which leverages on
                                          chain link decentralized price oracle
                                          to provide pure on-chain liquidity for
                                          everyone at zero slippage.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="card">
                                    <div className="card-header">
                                      <h5>
                                        <a
                                          className="collapsed"
                                          data-toggle="collapse"
                                          data-target="#collapse-856"
                                        >
                                          How does ELLA work?
                                          <span className="plus-minus">
                                            <span className="ti ti-angle-up"></span>
                                          </span>
                                        </a>
                                      </h5>
                                    </div>
                                    <div
                                      id="collapse-856"
                                      className="collapse "
                                      data-parent="#accordion-13"
                                    >
                                      <div className="card-body">
                                        <p>
                                          Liquidity providers deposits assets on
                                          Ella protocol. It gathers funds at
                                          market prices to provide sufficient
                                          liquidity. In order to minimize
                                          counter party risks for Liquidity
                                          providers, ELLA dynamically adjusts
                                          market prices to encourage
                                          arbitrageurs to step in and stabilize
                                          Liquidity Provider"s portfolios.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="card">
                                    <div className="card-header">
                                      <h5>
                                        <a
                                          className="collapsed"
                                          data-toggle="collapse"
                                          data-target="#collapse-857"
                                        >
                                          Why ELLA?
                                          <span className="plus-minus">
                                            <span className="ti ti-angle-up"></span>
                                          </span>
                                        </a>
                                      </h5>
                                    </div>
                                    <div
                                      id="collapse-857"
                                      className="collapse "
                                      data-parent="#accordion-13"
                                    >
                                      <div className="card-body">
                                        <p>
                                          Zero slippage Single risk exposure No
                                          impermanent loss
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="card">
                                    <div className="card-header">
                                      <h5>
                                        <a
                                          className="collapsed"
                                          data-toggle="collapse"
                                          data-target="#collapse-858"
                                        >
                                          What can I do with ELLA?
                                          <span className="plus-minus">
                                            <span className="ti ti-angle-up"></span>
                                          </span>
                                        </a>
                                      </h5>
                                    </div>
                                    <div
                                      id="collapse-858"
                                      className="collapse "
                                      data-parent="#accordion-13"
                                    >
                                      <div className="card-body">
                                        <p>
                                          As a trader Each and every trader
                                          enjoys sufficient liquidity similar to
                                          that of centralized
                                          exchangesArbitrageurs can profit from
                                          selling large quantity on
                                          crypto-assets at market price with
                                          zero spillage unlike most dexSmart
                                          contracts can natively use ELLA
                                          liquidity to complete on-chain
                                          transactions.As a Liquidity
                                          ProviderThere are no minimal deposit
                                          requirements and restrictions on asset
                                          typesELLA charges a fee for each
                                          transaction and eventually distributes
                                          it to LPs as rewardsLPs can create
                                          trading pairs with their own tokensLPs
                                          can obtain liquidity by depositing
                                          their tokens they already own, without
                                          taking on price risk​​Next - The
                                          Protocol ELLA AdvantageLast updated 2
                                          weeks ago WAS THIS PAGE HELPFUL?
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="vc_tta-panel"
                              id="1520937009638-39a59121-c4f6"
                              data-vc-content=".vc_tta-panel-body"
                            >
                              <div className="vc_tta-panel-heading">
                                <h4 className="vc_tta-panel-title">
                                  <a
                                    href="http://159.89.95.143/#1520937009638-39a59121-c4f6"
                                    data-vc-accordion=""
                                    data-vc-container=".vc_tta-container"
                                  >
                                    <span className="vc_tta-title-text">
                                      Pre-ICO &amp; ICO
                                    </span>
                                  </a>
                                </h4>
                              </div>
                              <div className="vc_tta-panel-body">
                                <div className="accordion" id="accordion-928">
                                  <div className="card">
                                    <div className="card-header">
                                      <h5>
                                        <a
                                          className=""
                                          data-toggle="collapse"
                                          data-target="#collapse-903"
                                        >
                                          Tokenization
                                          <span className="plus-minus">
                                            <span className="ti ti-angle-up"></span>
                                          </span>
                                        </a>
                                      </h5>
                                    </div>
                                    <div
                                      id="collapse-903"
                                      className="collapse show"
                                      data-parent="#accordion-928"
                                    >
                                      <div className="card-body">
                                        <p>
                                          EllaSwap has a native token with the
                                          ticker being (ELLA) which is built on
                                          the Ethereum blockchain. ELLA is the
                                          governance token that powers EllaSwap.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="card">
                                    <div className="card-header">
                                      <h5>
                                        <a
                                          className="collapsed"
                                          data-toggle="collapse"
                                          data-target="#collapse-904"
                                        >
                                          NAME?
                                          <span className="plus-minus">
                                            <span className="ti ti-angle-up"></span>
                                          </span>
                                        </a>
                                      </h5>
                                    </div>
                                    <div
                                      id="collapse-904"
                                      className="collapse "
                                      data-parent="#accordion-928"
                                    >
                                      <div className="card-body">
                                        <p>Ella</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="card">
                                    <div className="card-header">
                                      <h5>
                                        <a
                                          className="collapsed"
                                          data-toggle="collapse"
                                          data-target="#collapse-905"
                                        >
                                          MAXIMUM SUPPLY?
                                          <span className="plus-minus">
                                            <span className="ti ti-angle-up"></span>
                                          </span>
                                        </a>
                                      </h5>
                                    </div>
                                    <div
                                      id="collapse-905"
                                      className="collapse "
                                      data-parent="#accordion-928"
                                    >
                                      <div className="card-body">
                                        <p>10M ELLA</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="card">
                                    <div className="card-header">
                                      <h5>
                                        <a
                                          className="collapsed"
                                          data-toggle="collapse"
                                          data-target="#collapse-906"
                                        >
                                          LISTING PRICE?
                                          <span className="plus-minus">
                                            <span className="ti ti-angle-up"></span>
                                          </span>
                                        </a>
                                      </h5>
                                    </div>
                                    <div
                                      id="collapse-906"
                                      className="collapse "
                                      data-parent="#accordion-928"
                                    >
                                      <div className="card-body">
                                        <p>1 ELLA = $0.6</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="vc_tta-panel"
                              id="1520927144944-4e219566-c71a"
                              data-vc-content=".vc_tta-panel-body"
                            >
                              <div className="vc_tta-panel-heading">
                                <h4 className="vc_tta-panel-title">
                                  <a
                                    href="http://159.89.95.143/#1520927144944-4e219566-c71a"
                                    data-vc-accordion=""
                                    data-vc-container=".vc_tta-container"
                                  >
                                    <span className="vc_tta-title-text">
                                      Tokens
                                    </span>
                                  </a>
                                </h4>
                              </div>
                              <div className="vc_tta-panel-body">
                                <div className="accordion" id="accordion-523">
                                  <div className="card">
                                    <div className="card-header">
                                      <h5>
                                        <a
                                          className=""
                                          data-toggle="collapse"
                                          data-target="#collapse-467"
                                        >
                                          Tokenization
                                          <span className="plus-minus">
                                            <span className="ti ti-angle-up"></span>
                                          </span>
                                        </a>
                                      </h5>
                                    </div>
                                    <div
                                      id="collapse-467"
                                      className="collapse show"
                                      data-parent="#accordion-523"
                                    >
                                      <div className="card-body">
                                        <p>
                                          EllaSwap has a native token with the
                                          ticker being (ELLA) which is built on
                                          the Ethereum blockchain. ELLA is the
                                          governance token that powers EllaSwap.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="card">
                                    <div className="card-header">
                                      <h5>
                                        <a
                                          className="collapsed"
                                          data-toggle="collapse"
                                          data-target="#collapse-468"
                                        >
                                          NAME
                                          <span className="plus-minus">
                                            <span className="ti ti-angle-up"></span>
                                          </span>
                                        </a>
                                      </h5>
                                    </div>
                                    <div
                                      id="collapse-468"
                                      className="collapse "
                                      data-parent="#accordion-523"
                                    >
                                      <div className="card-body">
                                        <p>ELLA (ELLA)</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="card">
                                    <div className="card-header">
                                      <h5>
                                        <a
                                          className="collapsed"
                                          data-toggle="collapse"
                                          data-target="#collapse-469"
                                        >
                                          MAXIMUM SUPPLY
                                          <span className="plus-minus">
                                            <span className="ti ti-angle-up"></span>
                                          </span>
                                        </a>
                                      </h5>
                                    </div>
                                    <div
                                      id="collapse-469"
                                      className="collapse "
                                      data-parent="#accordion-523"
                                    >
                                      <div className="card-body">
                                        <p>10M ELLA</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="card">
                                    <div className="card-header">
                                      <h5>
                                        <a
                                          className="collapsed"
                                          data-toggle="collapse"
                                          data-target="#collapse-470"
                                        >
                                          LISTING PRICE
                                          <span className="plus-minus">
                                            <span className="ti ti-angle-up"></span>
                                          </span>
                                        </a>
                                      </h5>
                                    </div>
                                    <div
                                      id="collapse-470"
                                      className="collapse "
                                      data-parent="#accordion-523"
                                    >
                                      <div className="card-body">
                                        <p>1 ELLA = $0.6</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="vc_tta-panel"
                              id="1520927153053-165c0f84-efe6"
                              data-vc-content=".vc_tta-panel-body"
                            >
                              <div className="vc_tta-panel-heading">
                                <h4 className="vc_tta-panel-title">
                                  <a
                                    href="http://159.89.95.143/#1520927153053-165c0f84-efe6"
                                    data-vc-accordion=""
                                    data-vc-container=".vc_tta-container"
                                  >
                                    <span className="vc_tta-title-text">
                                      Client
                                    </span>
                                  </a>
                                </h4>
                              </div>
                              <div className="vc_tta-panel-body">
                                <div className="accordion" id="accordion-958">
                                  <div className="card">
                                    <div className="card-header">
                                      <h5>
                                        <a
                                          className=""
                                          data-toggle="collapse"
                                          data-target="#collapse-705"
                                        >
                                          What is a ChainLink Price Oracle?
                                          <span className="plus-minus">
                                            <span className="ti ti-angle-up"></span>
                                          </span>
                                        </a>
                                      </h5>
                                    </div>
                                    <div
                                      id="collapse-705"
                                      className="collapse show"
                                      data-parent="#accordion-958"
                                    >
                                      <div className="card-body">
                                        <p>
                                          Chainlink is a tokenized oracle
                                          network that provides price and events
                                          data collected from on-chain and
                                          real-world sources.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="card">
                                    <div className="card-header">
                                      <h5>
                                        <a
                                          className="collapsed"
                                          data-toggle="collapse"
                                          data-target="#collapse-706"
                                        >
                                          Any impermanent loss?
                                          <span className="plus-minus">
                                            <span className="ti ti-angle-up"></span>
                                          </span>
                                        </a>
                                      </h5>
                                    </div>
                                    <div
                                      id="collapse-706"
                                      className="collapse "
                                      data-parent="#accordion-958"
                                    >
                                      <div className="card-body">
                                        <p>
                                          No. EllaSwap offers arbitrage trading
                                          opportunities to arbitrageurs to
                                          reward their role in helping to
                                          stabilize liquidity providers'
                                          portfolios.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="card">
                                    <div className="card-header">
                                      <h5>
                                        <a
                                          className="collapsed"
                                          data-toggle="collapse"
                                          data-target="#collapse-707"
                                        >
                                          Do I have to deposit pair tokens?
                                          <span className="plus-minus">
                                            <span className="ti ti-angle-up"></span>
                                          </span>
                                        </a>
                                      </h5>
                                    </div>
                                    <div
                                      id="collapse-707"
                                      className="collapse "
                                      data-parent="#accordion-958"
                                    >
                                      <div className="card-body">
                                        <p>
                                          No. EllaSwap allows liquidity
                                          providers to deposit any amount of
                                          base or quote tokens. You deposit what
                                          you have, nothing more.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="card">
                                    <div className="card-header">
                                      <h5>
                                        <a
                                          className="collapsed"
                                          data-toggle="collapse"
                                          data-target="#collapse-708"
                                        >
                                          Do I have to deposit pair tokens?
                                          <span className="plus-minus">
                                            <span className="ti ti-angle-up"></span>
                                          </span>
                                        </a>
                                      </h5>
                                    </div>
                                    <div
                                      id="collapse-708"
                                      className="collapse "
                                      data-parent="#accordion-958"
                                    >
                                      <div className="card-body">
                                        <p>
                                          No. EllaSwap allows liquidity
                                          providers to deposit any amount of
                                          base or quote tokens. You deposit what
                                          you have, nothing more.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="vc_tta-panel"
                              id="1520927169441-fbd46c2d-7973"
                              data-vc-content=".vc_tta-panel-body"
                            >
                              <div className="vc_tta-panel-heading">
                                <h4 className="vc_tta-panel-title">
                                  <a
                                    href="http://159.89.95.143/#1520927169441-fbd46c2d-7973"
                                    data-vc-accordion=""
                                    data-vc-container=".vc_tta-container"
                                  >
                                    <span className="vc_tta-title-text">
                                      Legal
                                    </span>
                                  </a>
                                </h4>
                              </div>
                              <div className="vc_tta-panel-body">
                                <div className="accordion" id="accordion-334">
                                  <div className="card">
                                    <div className="card-header">
                                      <h5>
                                        <a
                                          className=""
                                          data-toggle="collapse"
                                          data-target="#collapse-942"
                                        >
                                          What is a ChainLink Price Oracle?
                                          <span className="plus-minus">
                                            <span className="ti ti-angle-up"></span>
                                          </span>
                                        </a>
                                      </h5>
                                    </div>
                                    <div
                                      id="collapse-942"
                                      className="collapse show"
                                      data-parent="#accordion-334"
                                    >
                                      <div className="card-body">
                                        <p>
                                          Chainlink is a tokenized oracle
                                          network that provides price and events
                                          data collected from on-chain and
                                          real-world sources.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="card">
                                    <div className="card-header">
                                      <h5>
                                        <a
                                          className="collapsed"
                                          data-toggle="collapse"
                                          data-target="#collapse-943"
                                        >
                                          Any impermanent loss?
                                          <span className="plus-minus">
                                            <span className="ti ti-angle-up"></span>
                                          </span>
                                        </a>
                                      </h5>
                                    </div>
                                    <div
                                      id="collapse-943"
                                      className="collapse "
                                      data-parent="#accordion-334"
                                    >
                                      <div className="card-body">
                                        <p>
                                          No. EllaSwap offers arbitrage trading
                                          opportunities to arbitrageurs to
                                          reward their role in helping to
                                          stabilize liquidity providers'
                                          portfolios.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="card">
                                    <div className="card-header">
                                      <h5>
                                        <a
                                          className="collapsed"
                                          data-toggle="collapse"
                                          data-target="#collapse-944"
                                        >
                                          Do I have to deposit pair tokens?
                                          <span className="plus-minus">
                                            <span className="ti ti-angle-up"></span>
                                          </span>
                                        </a>
                                      </h5>
                                    </div>
                                    <div
                                      id="collapse-944"
                                      className="collapse "
                                      data-parent="#accordion-334"
                                    >
                                      <div className="card-body">
                                        <p>
                                          No. EllaSwap allows liquidity
                                          providers to deposit any amount of
                                          base or quote tokens. You deposit what
                                          you have, nothing more.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="card">
                                    <div className="card-header">
                                      <h5>
                                        <a
                                          className="collapsed"
                                          data-toggle="collapse"
                                          data-target="#collapse-945"
                                        >
                                          Do I have to deposit pair tokens?
                                          <span className="plus-minus">
                                            <span className="ti ti-angle-up"></span>
                                          </span>
                                        </a>
                                      </h5>
                                    </div>
                                    <div
                                      id="collapse-945"
                                      className="collapse "
                                      data-parent="#accordion-334"
                                    >
                                      <div className="card-body">
                                        <p>
                                          No. EllaSwap allows liquidity
                                          providers to deposit any amount of
                                          base or quote tokens. You deposit what
                                          you have, nothing more.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix"></div>
        </section>
        <section
          id="contact"
          className="vc_row wpb_row vc_row-fluid section-pad section-bg-alt"
        >
          <div className="container">
            <div className="row">
              <div className="wpb_column vc_column_container vc_col-sm-12">
                <div className="vc_column-inner ">
                  <div className="wpb_wrapper">
                    <div className="vc_row wpb_row vc_inner vc_row-fluid">
                      <div
                        data-animate="fadeInUp"
                        data-delay="0"
                        className="wpb_column vc_column_container vc_col-sm-12"
                      >
                        <div className="vc_column-inner ">
                          <div className="wpb_wrapper">
                            <div className="section-head text-center">
                              <h2
                                className="section-title "
                                data-animate="fadeInUp"
                                data-delay=".1"
                              >
                                Contact Ella.Finance <span>CONTACT</span>
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="wpb_text_column wpb_content_element  vc_custom_1520932193361 text-center">
                      <div className="wpb_wrapper">
                        <p>
                          Any question? Reach out to us and we’ll get back to
                          you shortly.
                        </p>
                      </div>
                    </div>
                    <div className="vc_row wpb_row vc_inner vc_row-fluid">
                      <div
                        data-animate="fadeInUp"
                        data-delay="0.5"
                        className="wpb_column vc_column_container vc_col-sm-12 vc_col-md-offset-2 vc_col-md-8"
                      >
                        <div className="vc_column-inner ">
                          <div className="wpb_wrapper">
                            <div className="wpb_text_column wpb_content_element  vc_custom_1607246737884">
                              <div className="wpb_wrapper">
                                <ul className="contact-info">
                                  <li>
                                    <em className="fa fa-phone">phone</em>+44
                                    0123 4567
                                  </li>
                                  <li>
                                    <em className="fa fa-envelope">email</em>
                                    info@Ellaswap.com
                                  </li>
                                  <li>
                                    <a href="https://t.me/ella_finance">
                                      <em className="fa fa-paper-plane">
                                        tele
                                      </em>
                                      Join&nbsp;
                                    </a>
                                    us on Telegram
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div
                              role="form"
                              className="wpcf7"
                              id="wpcf7-f387-p300-o1"
                              lang="en-US"
                              dir="ltr"
                            >
                              <div className="screen-reader-response">
                                <p
                                  role="status"
                                  aria-live="polite"
                                  aria-atomic="true"
                                ></p>
                                <ul></ul>
                              </div>
                              <form
                                action="http://159.89.95.143/#wpcf7-f387-p300-o1"
                                method="post"
                                className="wpcf7-form init"
                                noValidate="novalidate"
                                data-status="init"
                              >
                                <div style={{ display: "none" }}>
                                  <input
                                    type="hidden"
                                    name="_wpcf7"
                                    value="387"
                                  />
                                  <input
                                    type="hidden"
                                    name="_wpcf7_version"
                                    value="5.3.1"
                                  />
                                  <input
                                    type="hidden"
                                    name="_wpcf7_locale"
                                    value="en_US"
                                  />
                                  <input
                                    type="hidden"
                                    name="_wpcf7_unit_tag"
                                    value="wpcf7-f387-p300-o1"
                                  />
                                  <input
                                    type="hidden"
                                    name="_wpcf7_container_post"
                                    value="300"
                                  />
                                  <input
                                    type="hidden"
                                    name="_wpcf7_posted_data_hash"
                                    value=""
                                  />
                                </div>
                                <div className="comment-form text-center">
                                  <div className="form-results"></div>
                                  <div className="input-field">
                                    <span className="wpcf7-form-control-wrap your-name">
                                      <input
                                        type="text"
                                        name="your-name"
                                        value=""
                                        size="40"
                                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required input-line"
                                        aria-required="true"
                                        aria-invalid="false"
                                      />
                                    </span>
                                    <label className="input-title">
                                      Your Name
                                    </label>
                                  </div>
                                  <div className="input-field">
                                    <span className="wpcf7-form-control-wrap your-email">
                                      <input
                                        type="email"
                                        name="your-email"
                                        value=""
                                        size="40"
                                        className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email input-line"
                                        aria-required="true"
                                        aria-invalid="false"
                                      />
                                    </span>
                                    <label className="input-title">
                                      Your Email
                                    </label>
                                  </div>
                                  <div className="input-field">
                                    <span className="wpcf7-form-control-wrap your-message">
                                      <textarea
                                        name="your-message"
                                        cols="40"
                                        rows="10"
                                        className="wpcf7-form-control wpcf7-textarea input-line txtarea"
                                        aria-invalid="false"
                                      ></textarea>
                                    </span>
                                    <label className="input-title">
                                      Your Message
                                    </label>
                                  </div>
                                  <div className="input-field">
                                    <button type="submit" className="btn">
                                      Submit
                                    </button>
                                  </div>
                                </div>
                                <div
                                  className="wpcf7-response-output"
                                  aria-hidden="true"
                                ></div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix"></div>
        </section>
        <div className="section subscribe-section section-pad-md section-bg">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-6 offset-md-3">
                <h4 className="section-title-md">
                  Don't miss out, Stay updated with Ella swap
                </h4>
              </div>
            </div>
          </div>
        </div>
        <footer className="section footer-section section-pad-sm section-bg ">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12">
                <ul className="social">
                  <li>
                    <a target="_blank" href="#">
                      <em className="fa fa-facebook"></em>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://twitter.com/ellafinance">
                      <em className="fa fa-twitter"></em>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://t.me/ellafinance">
                      <em className="fa fa-youtube-play"></em>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://github.com/Ella-Finance">
                      <em className="fa fa-github"></em>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://github.com/Ella-Finance">
                      <em className="fa fa-bitcoin"></em>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://t.me/ellafinance">
                      <em className="fa fa-telegram"></em>
                    </a>
                  </li>
                </ul>
                <span className="copyright-text">
                  Copyright © 2020, Ella Finance Made By
                  <a href="http://wa.me/8755832604/" target="_blank">
                    &nbsp; Rakesh
                  </a>
                  .
                  <span>
                    All trademarks and copyrights belong to their respective
                    owners.
                  </span>
                </span>
              </div>
            </div>
          </div>
        </footer>
        <div class="modal" tabindex="-1" role="dialog" id="introModal">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title"></h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p>Dear Community,</p>

                <p>
                  We are all set with a new plan and will announce the new date
                  of pre-sale event soon. This time, we are offering private
                  sale prior to the actual Crowd fund event. Here is the notice
                  from our lawyer.
                </p>

                <p>Legal Notice</p>

                <p>
                  The ELLA official presale date will be announced soon. Please
                  note that persons from the following countries are not able to
                  participate in the ELLA Private sale : Afghanistan, Albania,
                  Belarus, Bosnia & Herzegovina, Burundi, Central African
                  Republic, Cote d’Ivoire, Cuba, Democratic Republic of Congo,
                  Ethiopia, Guniea, Guinea-Bissau, Iran, Iraq, Lebanon, Liberia,
                  Libya, Mainland China, Myanmar (Burma), Nigeria, North Korea,
                  Republic of Macedonia, Serbia, Somalia, South Sudan, Sri
                  Lanka, Sudan, Syria, Thailand, Trinidad & Tobago, Tunisia,
                  Uganda, Ukraine, United State of America (USA), United States
                  minor outlying Islands, Vanuatu, Venezuela, Yemen and
                  Zimbabwe.
                </p>

                <p>
                  Please note further that politically exposed persons or users
                  under the age of 18 years are ineligible to participate in the
                  private sale.
                </p>
              </div>
            </div>
          </div>
        </div>
        <a href="#" id="back-to-top"></a>
      </>
    );
  }
}

export default App;
