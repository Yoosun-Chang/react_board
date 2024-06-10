import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../ui/Button';
import { useSelector, useDispatch } from 'react-redux';
import { dataDelete } from '../../redux/modules/boardReducer';

const Wrapper = styled.div`
    padding: 16px;
    height: 100vh;
    width: 110wh;
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start
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
    border: 3px solid pink;
    background-color: white;
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
                    title='HOME'
                    onClick={() => {
                        navigate('/');
                    }}
                />
                <Button
                    title='EDIT'
                    onClick={handleEdit}
                />
                <Button
                    title='DELETE'
                    onClick={handleDelete}
                />
                </BtnContainer>
            </Container>
        </Wrapper>
    );
}

export default PostViewPage;
