import React from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import Button from '../ui/Button';
import { useSelector } from 'react-redux'

const Wrapper = styled.div `
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div `
    width: 100%;
    max-width: 720px;

    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

const PostContainer = styled.div `
    padding: 8px 16px;
    border: 1px solid grey;
    border-radius: 8px;
`;

const TitleText = styled.p `
    font-size: 28px;
    font-weight: 500;
`;

const ContentText = styled.p `
    font-size: 20px;
    line-height: 32px;
    white-space: pre-wrap;
`;

function PostViewPage(props) {
    const navigate = useNavigate();

    const { selectRowData } = useSelector(state => state.boardReducer)
    console.log(selectRowData)
    return (
        <Wrapper>
            <Container>
                <Button
                    title='뒤로 가기'
                    onClick={() => {
                        navigate('/');
                    }}/>
                <PostContainer>
                    <TitleText>{selectRowData.title}</TitleText>
                    <ContentText>{selectRowData.content}</ContentText>
                </PostContainer>

            </Container>
        </Wrapper>
    );
}

export default PostViewPage;