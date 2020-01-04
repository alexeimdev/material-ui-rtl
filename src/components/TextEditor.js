import React from 'react';
import Button from '@material-ui/core/Button';

import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '@ckeditor/ckeditor5-build-classic/build/translations/he';


export default function TextEditor(props) {
    const { onClose, value: valueProp, show, onConfirm, ...other } = props;
    const [value, setValue] = React.useState(valueProp);
    const radioGroupRef = React.useRef(null);

    React.useEffect(() => {
        if (!show) {
            setValue(valueProp);
        }
    }, [valueProp, show, onConfirm]);

    const handleEntering = () => {
        if (radioGroupRef.current != null) {
            radioGroupRef.current.focus();
        }
    };

    const handleCancel = () => {
        onClose();
    };

    const handleOk = () => {
        //onClose(value);
        onConfirm(false);
    };

    const handleChange = event => {
        setValue(event.target.value);
    };

    return (
        <Dialog
            disableBackdropClick
            disableEscapeKeyDown
            fullWidth
            onEntering={handleEntering}
            aria-labelledby="confirmation-dialog-title"
            open={show}
            {...other}
        >
            {/* <DialogTitle id="confirmation-dialog-title"></DialogTitle> */}
            <DialogContent dividers>
                <CKEditor
                    editor={ClassicEditor}
                    config={{
                        language: 'he',
                        alignment: ['left', 'right']
                    }}
                    data=""
                    onInit={editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({ event, editor, data });
                    }}
                    onBlur={(event, editor) => {
                        console.log('Blur.', editor);
                    }}
                    onFocus={(event, editor) => {
                        console.log('Focus.', editor);
                    }}
                />
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleCancel} color="primary">
                    בטל
                </Button>
                <Button onClick={handleOk} color="primary">
                    שמור
                </Button>
            </DialogActions>
        </Dialog>
    );
}