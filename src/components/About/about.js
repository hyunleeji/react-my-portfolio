import React, { useState, useEffect } from 'react'
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiMongodb, SiNodeDotJs, SiGithub } from 'react-icons/si';
import { BsPhone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

function About() {

    return (
        <section>
          <div className="aboutme">
            <a className="aboutsvg" href="/">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-x"
            >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg><br/>
            <span>Home</span>
            </a>
            <div className="aboutcontent">
              <h3>Always online! Hwang ji hyun</h3>
              <p className="subcontent" style={{ lineHeight:'2rem'}}>안녕하세요. <strong style={{ fontSize: '1.1rem'}}>저는 프론트엔드 개발자 황지현입니다.</strong><br />
              저는 시각디자인과를 졸업하고, 패션계열 웹디자이너로 4년간 일을 했었습니다.<br/>
              디자이너로써의 역량을 넓히고 싶은 즈음에, 많은 디자이너가 코딩을 배우고 있다는 것을 접했습니다. 
              그러다 예전에 액션스크립트를 즐겁게 했었던 제가 떠올랐고, 자연스럽게 관심을 가지게 되었습니다.<br/>
              <br/>
              코딩을 배우기 시작할때 굉장히 기대되고 설레는 마음이었습니다. 힘들때도 있었지만 대부분 긍정적으로 즐겁게
              생각했던것 같습니다.<br/> 그렇게 계속 코딩을 하면서 동적으로 만들어나가는 과정과 문제를 해결했을때의 뿌듯함이 
              어느때 보다 컸고, 정말 너무 기뻤습니다.<br/>
              그러면서 점차 개발에 대해 더 알고싶어지고, 그것을 넘어 전문가가 되고 싶다는 생각이 굳혀졌습니다.<br/>      
              <br/>
              저는 비전공자 개발자이고 지금까지 독학으로 준비했습니다. 다른 쪽보다 정보가 잘 구축되어있는 개발분야를 보면서,
              먼저 주변에서 얻을수 있는 지식은 다 얻어보자 라는 마음으로 시작했습니다.<br/>
              온라인 강의를 듣고, 오픈소스 코드들을 둘러보며, 국내외 사이트들의 코드를 보면서 하나하나 익혀 갔습니다. <br/>  
              <br/>
              <strong>-
              코딩을 하면서 게임을 하는것 같다고 느낄때가 많습니다. 그만큼 희노애락을 극적으로 느낄수 있다고 생각합니다.<br/>
              무궁무진한 이 개발세계에서 실력있는 개발자가 되기위해 계속 전진하겠습니다.</strong>

              </p>
              <h3>Skill</h3>
              <div className="skill">
              <div className="skillicons">
              <SiHtml5 size="60" size="60" color="#e44d26"/>
              <span>HTML</span>
              </div>
              <div className="skillicons">
              <SiCss3 size="60" color="#1572b6"/>
              <span>CSS</span>
              </div>
              <div className="skillicons">
              <SiJavascript size="60" color="#f0db4f"/>
              <span>JAVASCRIPT</span>
              </div>
              <div className="skillicons">
              <SiReact size="60" color="#61dafb"/>
              <span>REACT</span>
              </div>
              <div className="skillicons">
              <SiMongodb size="60" color="#439934"/>
              <span>MONGODB</span>
              </div>
              <div className="skillicons">
              <SiNodeDotJs size="60" color="#83cd29"/>
              <span>NODEJS</span>
              </div>
              <div className="skillicons">
              <SiGithub size="60" color="#172b4d"/>
              <span>GITHUB</span>
              </div>
              </div>
              <div className="contactme">
              <h3>Contact</h3>
              <span># phone : 010-5671-8808</span><br/>
              <span># e-mail : looluu@naver.com</span><br/>
              <span># github : https://github.com/hyunleeji</span><br/>
              {/* <SiGithub/> */}
              </div>
            </div>
          </div>
        </section>
    )
}

export default About
