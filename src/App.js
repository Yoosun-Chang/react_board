import React from "react";
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import styled from "styled-components";
import MainPage from './component/page/MainPage';
import PostWritePage from './component/page/PostWritePage';
import PostViewPage from './component/page/PostViewPage';
import PostEditPage from './component/page/PostEditPage';
import titleImage1 from '../src/imgs/IMG_1234.png';
import titleImage2 from '../src/imgs/IMG_1445.png';

const TextContainer = styled.div `
    background-color: aliceblue;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 110px;
    width: 100wh;
`;

const MainTitleText = styled.div `
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    z-index: 100;
`;

const TitleImage = styled.img `
    height: 50px; 
    width: auto; 
    margin: 0px 5px 20px;
    z-index: 100;
`;

function App(props) {
    return (
        <BrowserRouter>
            <TextContainer>
                <div class="wave -one"></div>
                <div class="wave -two"></div>
                <div class="wave -three"></div>
                <TitleImage src={titleImage1} alt="Title"/>
                <MainTitleText>MEMO BOARD</MainTitleText>
                <TitleImage src={titleImage2} alt="Title"/>
            </TextContainer>
            <Routes>
                <Route index="index" element={<MainPage />}/>   
                <Route path="post-write" element={<PostWritePage />}/>
                <Route path="post/:postId" element={<PostViewPage />}/>
                <Route path="post-edit/:postId" element={<PostEditPage />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
