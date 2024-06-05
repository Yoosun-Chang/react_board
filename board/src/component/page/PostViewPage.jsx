// PostViewPage.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../ui/Button';
import { useSelector, useDispatch } from 'react-redux';
import { selectRow, dataUpdate, dataDelete } from '../../redux/modules/boardReducer';

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

const PostContainer = styled.div`
    padding: 8px 16px;
    border: 1px solid grey;
    border-radius: 8px;
`;

const TitleText = styled.p`
    font-size: 28px;
    font-weight: 500;
`;

const ContentText = styled.p`
    font-size: 20px;
    line-height: 32px;
    white-space: pre-wrap;
`;

function PostViewPage(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { selectRowData } = useSelector(state => state.boardReducer);

    const handleEdit = () => {
        // 수정 페이지로 이동 및 선택된 데이터의 ID 전달
        navigate(`/post-edit/${selectRowData.id}`);
    };

    const handleDelete = () => {
        // 선택된 데이터의 ID를 전달하여 삭제 액션 디스패치
        dispatch(dataDelete(selectRowData.id));
        // 삭제 후 메인 페이지로 이동
        navigate('/');
    };

    return (
        <Wrapper>
            <Container>
                <Button
                    title='뒤로 가기'
                    onClick={() => {
                        navigate('/');
                    }}
                />
                <Button
                    title='수정하기'
                    onClick={handleEdit}
                />
                <Button
                    title='삭제하기'
                    onClick={handleDelete}
                />
                <PostContainer>
                    <TitleText>{selectRowData.title}</TitleText>
                    <ContentText>{selectRowData.content}</ContentText>
                </PostContainer>
            </Container>
        </Wrapper>
    );
}

export default PostViewPage;
