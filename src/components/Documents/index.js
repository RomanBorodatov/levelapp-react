import React, { Component } from "react";
import all from '../../assets/all.zip';
import test from '../../assets/LevelApp_One_Pager.pdf';
import test2 from '../../assets/LevelApp_WhitePaper.pdf';
import test3 from '../../assets/LevelApp_SEC_Howey_Test.pdf';

class Documents extends Component {
  render() {
    const { messages: title } = this.props;
    return (
      <section id="docs-sect" class="docs">
        <div class="section-holder">
          <div class="docs__title-block">
            <h2 class="docs__title" v-html="$t('pages.app.titles.4')" >
              {title}
            </h2>
            <a
              class="docs__load-all"
              href={all}
              target="_blank" rel="noopener noreferrer"
              download
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <g fill="none" fill-rule="evenodd">
                  <path
                    fill-rule="nonzero"
                    stroke="#FFB000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2 15.473v3.448h15.84v-3.448"
                  />
                  <path
                    stroke="#FFB000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15.033 8l-5.068 4.862L4.967 8"
                  />
                  <path
                    fill="#FFB000"
                    fill-rule="nonzero"
                    d="M8.967 0h2v13h-2z"
                  />
                </g>
              </svg>
              Download all
            </a>
          </div>
          <ul class="docs__list">
            <li class="docs__doc">
              <i class="icon-file" />
              <span class="docs__doc-name">LightPaper</span>
              <a target="_blank" rel="noopener noreferrer" href={test} class="docs__file" download>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path
                      fill-rule="nonzero"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2 15.473v3.448h15.84v-3.448"
                    />
                    <path
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15.033 8l-5.068 4.862L4.967 8"
                    />
                    <path
                      fill="#fff"
                      fill-rule="nonzero"
                      d="M8.967 0h2v13h-2z"
                    />
                  </g>
                </svg>
              </a>
            </li>
            <li class="docs__doc">
              <i class="icon-file" />
              <span class="docs__doc-name">WhitePaper</span>
              <a target="_blank" rel="noopener noreferrer" href={test2} class="docs__file" download>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path
                      fill-rule="nonzero"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2 15.473v3.448h15.84v-3.448"
                    />
                    <path
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15.033 8l-5.068 4.862L4.967 8"
                    />
                    <path
                      fill="#fff"
                      fill-rule="nonzero"
                      d="M8.967 0h2v13h-2z"
                    />
                  </g>
                </svg>
              </a>
            </li>
            <li class="docs__doc">
              <i class="icon-file" />
              <span class="docs__doc-name">SEC Howey test</span>
              <a target="_blank" rel="noopener noreferrer" href={test3} class="docs__file" download>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path
                      fill-rule="nonzero"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2 15.473v3.448h15.84v-3.448"
                    />
                    <path
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15.033 8l-5.068 4.862L4.967 8"
                    />
                    <path
                      fill="#fff"
                      fill-rule="nonzero"
                      d="M8.967 0h2v13h-2z"
                    />
                  </g>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Documents;
