import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { dataUpdate } from '../../redux/modules/boardReducer';
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

function PostEditPage(props) {
    const { postId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { selectRowData } = useSelector(state => state.boardReducer);
    const [title, setTitle] = useState(selectRowData.title);
    const [content, setContent] = useState(selectRowData.content);

    const onSave = () => {
        const _inputData = {
            id: selectRowData.id,
            title: title,
            content: content
        }
        console.log('clickSave :: ', _inputData)
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
                />
                <TextInput
                    height={380}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <Button
                    title='저장'
                    onClick={onSave}
                />
            </Container>
        </Wrapper>
    );
}

export default PostEditPage;
