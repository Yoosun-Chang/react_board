import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PostList from '../list/PostList';
import Button from '../ui/Button';
import data from '../../data.json';
import { useDispatch } from 'react-redux';
import { selectRow } from '../../redux/modules/boardReducer'

const Wrapper = styled.div`
    padding: 16px;
    width: 100wh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: aliceblue;
    height: 100vh;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

function MainPage(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
 
    const handleClickItem = (rowData) => {
        dispatch(selectRow(rowData.id));
        navigate(`/post/${rowData.id}`);
    }

    return (
        <Wrapper>
            <Container>
                <Button
                    title='Post MEMO'
                    onClick={() => {
                        navigate('/post-write');
                    }}
                />

                <PostList
                    posts={data}
                    onClickItem={handleClickItem}
                />
            </Container>
        </Wrapper>
    );
}

export default MainPage;
