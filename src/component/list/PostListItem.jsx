import React from "react";
import styled from "styled-components";
import backgroundImage from '../../imgs/IMG_1447.jpeg';

const Wrapper = styled.div`
    width: 200px;
    height: 200px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    background: url(${backgroundImage}) no-repeat center center;
    background-size: cover;
    :hover {
        background: url(${backgroundImage}) no-repeat center center;
        background-size: cover;
        filter: brightness(0.8); 
    }
`;

const TitleText = styled.p`
    font-size: 20px;
    font-weight: 500;
    color: black;
    max-width: 200px;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-height: 90px;
`;

function PostListItem(props) {
    const { post, onClick } = props;
    return (
        <Wrapper onClick={onClick}>
            <TitleText>{post}</TitleText>
        </Wrapper>
    );
}

export default PostListItem;
