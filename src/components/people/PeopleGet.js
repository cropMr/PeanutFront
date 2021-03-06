import React from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Swal from 'sweetalert2'
import './PeopleGet.css'

const People = styled.div`

    margin-left: 10%;
    margin-right: 10%;
    text-align : center;
    @import url(//fonts.googleapis.com/earlyaccess/hanna.css);
     font-family: 'Hanna', fantasy;
	
a{
    cursor : pointer;
}
.container{
    justify-content: center;
    text-align: center;
}


.text1{
    font-size: 50px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 900;
}

hr{
    border: 1px solid grey; 
    width: 80%;
    margin-left : 10%;
    margin-bottom: 80px;
}

.text2{
    margin-top: 80px;
    font-size: 36px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 900;
}

.recruit_lists{
    padding-left: 0;
    list-style: none;
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
}

.recruit_lists a{
    text-decoration: none;
    margin: 8px;
    font-size: 20px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
}
.recruit_role{
    
    margin-top: 100px;
    font-size: 50px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 900;
    
}
.recruit_lists li :hover{
    color : ${palette.gray[3]};
}
li{

    padding-left: 0;
    list-style: none;
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
    text-decoration: none;
    padding: 8px 12px;
    margin: 8px 12px;
}
li .none{
    color : red;
}

`;

const PeopleGet = ({front, back, bot, illust}) => {
    let history = useHistory();
    const handleBot = () => {
        history.push({
            pathname: "/Bot",
        })
    }
    
    const handleFront = () => {
        history.push({
            pathname: "/FrontEnd",
        })
    }
    const handleBack = () => {
        history.push({
            pathname: "/BackEnd",
        })
    }
    const handleIllust = () => {
        history.push({
            pathname: "/Illust",
        })
    }
    const nope = () => {
        Swal.fire({
            icon: 'error',
            title: '죄송합니다',
            text: '현재 해당 역할을 모집을 받지 않습니다',
            footer : '팀 땅콩 드림'
        })
    }
    return(
        <div>
            <img className = "hire-background" alt = ""/>
            <People class="container">
                <h1 class="recruit_role">팀 땅콩은 이런 사람을 원합니다</h1>
                <hr />
                <p>4번과 5번은 조건을 갖추지 않아도 됨(있으면 우대)</p>
                <ul class="recruit_lists">
                    <li onClick={() => Swal.fire('인성이 바른 사람', '팀 땅콩은 인성이 바른 사람을 원합니다', 'question')}><a>인성이 바른 사람</a></li>
                    <li onClick={() => Swal.fire('소통 잘할 수 있는 사람', '팀 땅콩은 서로 회의를 하는 경우가 많습니다 그렇기에 소통을 잘할 수 있는 사람을 원합니다', 'question')}><a>소통 잘할 수 있는 사람</a></li>
                    <li onClick={() => Swal.fire('새 기술을 배울 열정 있는 사람', '팀 땅콩에서 일하면서 새로운 기술을 배워야 하는 경우도 있습니다', 'question')}><a>새로운 것을 배우려는 열정이 있는 사람</a></li>
                    <li onClick={() => Swal.fire('땅콩 알러지가 있는 사람', '왜인지는 모르겠지만 저희 팀 전부다 땅콩 알러지에 걸렸어요', 'question')}><a>땅콩 알레르기가 있는 사람</a></li>
                    <li onClick={() => Swal.fire('모솔', '솔로천국!, 커플지옥!', 'question')}><a>모솔인 사람</a></li>
                </ul>
                
                <h1 class="recruit_role">혜택</h1>
                <hr />
                <div><li onClick={() => Swal.fire('유료기능', '봇이 개발중이라서 미정', 'question')}><a>팀 땅콩봇 유료기능 사용 가능</a></li></div>
                <div><li onClick={() =>Swal.fire({
                    title: '디스코드 니트로',
                    text: '기여도가 제일 높은 사람에게 니트로 줌(ㅆㄱㄴ)',
                    imageUrl: 'https://imgur.com/T00GHu9.jpg',
                    imageWidth: 300,
                    imageHeight: 300,
                    imageAlt: 'ㅆㄱㄴ ㅆㄱㄴ ㅆㄱㄴ',
                })}><a>매월 기여도가 높은 사람에게 디스코드 Nitro증정</a></li></div>
                
                
                <h1 class="recruit_role">모집분야</h1>
                <hr />
                <ul class="recruit_lists">
                    {bot === "true" ? (<li onClick={() => handleBot()}><a>Bot Developer</a></li>) : (<li onClick={() => nope() }className = "none"><a>Bot Developer</a></li>)}
                    {front === "true" ? (<li onClick={() => handleFront()}><a>FrontEnd Developer</a></li>) : (<li onClick={() => nope() }className = "none"><a>FrontEnd Developer</a></li>)}
                    {back === "true" ? (<li onClick={() => handleBack()}><a>BackEnd Developer</a></li>) : (<li onClick={() => nope() } className = "none"><a>BackEnd Developer</a></li>)}
                    {illust === "true" ? (<li onClick={() => handleIllust()}><a>Designer</a></li>) : (<li onClick={() => nope() }className = "none"><a>Designer</a></li>)}
                </ul>
                <p>가 족같고 자유로운 분위기를 추구하는 팀 땅콩, 어서 지원하세요!!!</p>
            </People>
        </div>
    )
}


export default PeopleGet;

/*

1. 작업물 준비(Github 링크, 포트폴리오 파일 등)
2. 땅콩#1283 에게 디스코드 친구추가 
3. 간단한 면접 후 결과 통보
4. 합격시 정식 개발자(혹은 디자이너) 임명
*/