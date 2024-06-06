import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../ui/Button';
import { useSelector, useDispatch } from 'react-redux';
import { dataDelete } from '../../redux/modules/boardReducer';

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

const BtnContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    max-width: 300px; 
    margin-top: 16px; 
`;

function PostViewPage(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { selectRowData } = useSelector(state => state.boardReducer);

    const handleEdit = () => {
        navigate(`/post-edit/${selectRowData.id}`);
    };

    const handleDelete = () => {
        dispatch(dataDelete(selectRowData.id));
        navigate('/');
    };

    return (
        <Wrapper>
            <Container>
                <PostContainer>
                    <TitleText>{selectRowData.title}</TitleText>
                    <ContentText>{selectRowData.content}</ContentText>
                </PostContainer>
                
                <BtnContainer>
                <Button
                    title='목록보기'
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
                </BtnContainer>
            </Container>
        </Wrapper>
    );
}

export default PostViewPage;
