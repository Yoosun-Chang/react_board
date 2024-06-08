import React from 'react';
import styled from 'styled-components';
import PostListItem from './PostListItem';
import { useSelector } from 'react-redux';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-evenly;
    flex-wrap: wrap;
    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

const Message = styled.p`
    font-size: 18px;
    color: grey;
`;

function PostList({ onClickItem }) {
    const inputData = useSelector(state => {
        return state.boardReducer.inputData;
    });

    return (
        <Wrapper>
            {inputData.length === 0 ? (
                <Message>작성된 목록이 없습니다.</Message>
            ) : (
                inputData.map((rowData) => (
                    <PostListItem
                        key={rowData.id}
                        post={rowData.title}
                        onClick={() => onClickItem(rowData)}
                    />
                ))
            )}
        </Wrapper>
    );
}

export default PostList;
