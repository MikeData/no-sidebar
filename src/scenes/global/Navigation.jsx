import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";


const Navigation = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <Box display="flex" justifyContent="center" height={"150px"} p={2} backgroundColor="black" alignItems="center">
            <Box 
                margin="10px" 
                display="flex"
                borderRadius="5px"
                borderColor="yellow"
            >
            CHAT
            </Box>
            <Box 
                display="flex"
                margin="10px" >
            ENCUESTAS 
            </Box>
            <Box 
                display="flex"
                margin="10px" >
            EVENTOS   
            </Box>
        </Box>
    );
};

export default Topbar;