import React from "react";
import { useState } from "react";
import img1 from "../img/—Pngtree—football midfielder player_6991446.png";
import { Link } from "react-router-dom";

const Bloc1 = () => {
  const [nav, nav1] = useState(true);
  var a = window;
  a.addEventListener("scroll", scroll);
  function scroll() {
    if (a.scrollY > 150) {
      nav1(false);
    } else {
      nav1(true);
    }
  }

  return (
    <div>
      <div class="bloc1" id="home">
        <div class={nav ? "navbar" : "navbar navbar2"}>
          <div class="sm-navbar">
            <h1 class="logo">
              Gozo`n.<span>uz</span>
            </h1>
            <div class="text">
              <span class="span">
                <a href="#home">HOME</a>
              </span>
              <span class="span">
                <a href="#reserve">RESERVE</a>
              </span>
              <span class="span">
                <a href="#contact">CONTACT</a>
              </span>
              <Link to="/signup">
                <button class="btn">
                  <svg
                    width="180px"
                    height="60px"
                    viewBox="0 0 180 60"
                    class="border"
                  >
                    <polyline
                      points="179,1 179,59 1,59 1,1 179,1"
                      class="bg-line"
                    />
                    <polyline
                      points="179,1 179,59 1,59 1,1 179,1"
                      class="hl-line"
                    />
                  </svg>
                  <span>Sign up</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div class="sm-bloc1">
          <div class="text2">
            <h1>Welcome my friend</h1>
            <span class="span1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              ipsam eligendi cumque commodi similique facere nam dicta nulla
              aliquid error eum alias architecto voluptatum, eos odit, impedit
              in quas obcaecati? Unde, reiciendis! Distinctio laboriosam quod
              ullam repellat illo ipsa laborum. Ad vitae modi ducimus delectus
              quis magnam ullam impedit explicabo eligendi et. In magni animi
              eum dolor minima eaque facilis.
            </p>
            <Link to="/signin">
              <button class="btn">
                <svg
                  width="180px"
                  height="60px"
                  viewBox="0 0 180 60"
                  class="border"
                >
                  <polyline
                    points="179,1 179,59 1,59 1,1 179,1"
                    class="bg-line"
                  />
                  <polyline
                    points="179,1 179,59 1,59 1,1 179,1"
                    class="hl-line"
                  />
                </svg>
                <span>Sign up</span>
              </button>
            </Link>
          </div>
          <img src={img1} alt="" width="600" />
        </div>
      </div>
    </div>
  );
};

export default Bloc1;
