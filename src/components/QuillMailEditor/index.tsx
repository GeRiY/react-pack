import React, { useRef, useState } from 'react';
import classes from './QuillMailEditor.module.scss';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Flex from '../Flex';
import ImportHtmlDialog from "../ImportHtmlDialog";

const QuillMailEditor = () => {
    const quillRef = useRef<ReactQuill>(null);
    const [content, setContent] = useState('');
    const [show, setShow] = useState<boolean>(false);

    const insertVariable = () => {
        const variable = prompt('Mi az azonosító neve?');
        if (quillRef && quillRef.current) {
            const editor = quillRef.current.getEditor();
            const range = editor.getSelection();
            const insertText = `{{${variable}}}`;
            if (range) {
                editor.insertText(range.index, insertText);
                editor.setSelection(range.index + insertText.length, 0);
            }
        }
    };

    const modules = {
        toolbar: {
            container: [
                [{ header: [1, 2, false] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{ align: [] }],
                ['link', 'image'],
                ['clean']
            ],
            handlers: {

            }
        }
    };

    const formats = [
        'header',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'link',
        'image',
        'align'
    ];

    const getInHtml = () => {
        if (!content.length) return;
        const html = '<meta charset="utf-8"><div>' + content + '</div>';

        const aTag = document.createElement('a');
        aTag.href = URL.createObjectURL(new Blob([html], { type: 'text/html' }));
        aTag.target = '_blank';
        aTag.click();
    };

    const onImport = (value: any) => {
        setContent(value);
        onClose();
    }

    const onClose = () => {
        setShow(false);
    }

    return (
        <Flex flex-direction={'column'} flex-basic={'100%'} height={'1000px'}>
            <div className={classes.actions}>
                <div
                    style={{
                        marginTop: 10,
                        marginBottom: 10,
                        padding: 10,
                        width: 100,
                        borderRadius: 10,
                        textAlign: 'center',
                        fontWeight: 'bolder',
                        color: 'green',
                        background: 'lightgreen',
                        cursor: 'pointer',
                    }}
                    onClick={getInHtml}
                >
                    Get HTML
                </div>
                <div
                    style={{
                        marginTop: 10,
                        marginBottom: 10,
                        padding: 10,
                        width: 120,
                        borderRadius: 10,
                        textAlign: 'center',
                        fontWeight: 'bolder',
                        color: 'blue',
                        background: 'lightblue',
                        cursor: 'pointer',
                    }}
                    onClick={setShow.bind(null, true)}
                >
                    Import HTML
                </div>
            </div>
            <ReactQuill
                ref={quillRef}
                value={content}
                onChange={setContent}
                modules={modules}
                formats={formats}
                style={{ borderTop: '1px dotted #ccc', width: '100%', height: '50%' }}
            />
            <ImportHtmlDialog show={show}
                              onImport={onImport}
                              onClose={onClose}
            />
        </Flex>
    );
};

export default QuillMailEditor;
