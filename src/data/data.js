import artbox from '../components/Projects/Video/artbox1.mp4'
import triplus from '../components/Projects/Video/triplus1.mp4'
import restinhome from '../components/Projects/Video/restinhome1.mp4'
import portfolio from '../components/Projects/Video/portfolio1.mp4'

const datas = [
    {
        title: 'Artbox Website',
        image : '../images/mouseimg.png',
        skill: ['HTML', 'CSS', 'JAVASCRIPT'],
        description: '아트박스 웹사이트를 새로운 디자인으로 제작하였습니다.',
        github: 'https://github.com/hyunleeji/artbox-websites',
        link: 'https://artboxweb.netlify.app/',
        video: artbox,
        review: 'HTML, CSS, JS 기본적인 기술을 기반으로 작업했습니다. 메인슬라이드는 순수 자바스크립트로 만들었고, 세가지 스킬의 기본기를 다지는 시간을 가졌습니다.'
    },
    {
        title: 'Triplus Website',
        image : '../images/mouseimg.png',
        skill: ['React', 'CSS', 'JAVASCRIPT', 'Redux', 'Nodejs', 'Mongodb'],
        description: '프런트 React와 서버 Nodejs 기반으로 여행추천 사이트인 Triplus website 작업물입니다.',
        github: 'https://github.com/hyunleeji/triplus-website',
        link: 'https://www.youtube.com/watch?v=XpCX61Dtak8',
        video: triplus,
        review: '가장 오랜시간 만들었고, 쉽지 않았던 작업이었습니다. 그렇지만 백엔드에 대해서도 알게되고, 백엔드에 흥미도 가지게 되는 뜻깊은 성장의 시간이었던 것 같습니다. 많은 에러로 힘들기도 했지만, 만들고 난 후의 뿌듯함은 가장 컸던 작업물입니다. '
    },
    {
        title: 'Rest in home Website',
        image : '../images/mouseimg.png',
        skill: ['HTML', 'CSS', 'JAVASCRIPT'],
        description: '제이쿼리로 만든 가전,가구 사이트 Rest in home 입니다.',
        github: 'https://github.com/hyunleeji/Rest-in-home-website',
        link: 'https://restinhome.netlify.app/',
        video: restinhome,
        review: '제이쿼리로 만드는 작업을 하고 싶었고, 최대한 많이 쓰이는 기술들을 구현했습니다.'
    },
    {
        title: 'My-portfolio Website',
        image : '../images/mouseimg.png',
        skill: ['React', 'CSS', 'JAVASCRIPT'],
        description: '저만의 개성이 뭍어난 포트폴리오 사이트입니다. 프런트에 집중한 작업입니다.',
        github: 'https://github.com/hyunleeji/react-my-portfolio',
        link: 'https://jhportfoilo.netlify.app/',
        video: portfolio,
        review: '개성있는 저의 포트폴리오 사이트를 늘 만들고 싶었고, 프런트엔드로써의 역량을 나타내고자 노력했던 작업이었습니다.'
    }
]

export default datas;