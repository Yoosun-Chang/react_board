import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { dataSave } from '../../redux/modules/boardReducer';
import styled from 'styled-components';
import TextInput from '../ui/TextInput';
import Button from '../ui/Button';

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center; 
    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

function PostWritePage(props) {
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const dispatch = useDispatch();

    const onSave = () => {
        const _inputData = {
            title: title,
            content: content
        };
        dispatch(dataSave(_inputData));
        setTitle('');
        setContent('');
        navigate('/');
    };

    const handleTitle = (e) => {
        setTitle(e.target.value);
    };

    const handleContent = (e) => {
        setContent(e.target.value);
    };

    return (
        <Wrapper>
            <Container>
                <TextInput
                    height={20}
                    value={title}
                    onChange={handleTitle}
                />

                <TextInput
                    height={380}
                    value={content}
                    onChange={handleContent}
                />
                <Button
                    title='글 작성하기'
                    onClick={onSave}
                />
            </Container>
        </Wrapper>
    );
}

export default PostWritePage;
