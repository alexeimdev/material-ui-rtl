import React, { useState } from 'react';
import './App.css';
import withTheme from './withTheme';

import AppBar from './components/AppBar';
import TemporaryDrawer from './components/TemporaryDrawer';
import ShiftSelector from './components/ShiftSelector';
import TextEditor from './components/TextEditor';
import {
    Container,
    Box,
    Checkbox,
    TextField,
    Radio,
    CircularProgress,
    Switch
} from '@material-ui/core';


function App() {
    const [openDrawer, setOpenDrawer] = useState(false);
    const [showShifts, setShowShifts] = useState(false);
    const [showTextEditor, setShowTextEditor] = useState(false);

    function toggleDrawer() {
        setOpenDrawer(!openDrawer);
    }

    return (
        <>
            <AppBar onMenuClick={toggleDrawer} />
            <TemporaryDrawer openDrawer={openDrawer} toggleDrawer={toggleDrawer} />
            <Container fixed>
                <Box display="flex" p={2}>
                    <Box display="inline-block" pl={2}>
                        <TextField label="שם" color={"secondary"} />
                    </Box>
                    <Box display="inline-block" pl={2}>
                        <TextField label="פירוט" color={"secondary"} />
                    </Box>
                </Box>

            </Container>

            <ShiftSelector open={showShifts} onConfirm={setShowShifts} value="ערב" />

            <TextEditor open={showTextEditor} />
        </>
    );
}


export default withTheme(App);