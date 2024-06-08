import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { dataUpdate } from '../../redux/modules/boardReducer';
import styled from 'styled-components';
import TextInput from '../ui/TextInput';
import Button from '../ui/Button';

const Wrapper = styled.div`
    padding: 16px;
    width: 110wh;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: aliceblue;
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

function PostEditPage(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const { selectRowData } = useSelector(state => state.boardReducer);
    const [title, setTitle] = useState(selectRowData.title);
    const [content, setContent] = useState(selectRowData.content);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    
    useEffect(() => {
        setIsButtonDisabled(title === '' || content === '');
    }, [title, content]);
    
    const onSave = () => {
        if ( title.length <10 ) {
            alert('제목은 10글자 이상이어야 합니다.');
            return;
        }

        const _inputData = {
            id: selectRowData.id,
            title: title,
            content: content
        }
        dispatch(dataUpdate(_inputData))
        setTitle('')
        setContent('')
        navigate('/');
    };

    return (
        <Wrapper>
            <Container>
                <TextInput
                    height={20}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="제목"
                />
                <TextInput
                    height={380}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="내용"
                />
                <Button
                    title='EDIT'
                    onClick={onSave}
                    disabled={isButtonDisabled}
                />
            </Container>
        </Wrapper>
    );
}

export default PostEditPage;
