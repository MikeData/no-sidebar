import {
  Box,
  Button,
  Stack,
  Typography,
  useTheme,
  Paper,
  Container,
} from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import ChatFeature from "../../components/ChatFeature";
import CanalDeTexto from "./CanalDeTexto";

const Chats = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Header
          title="CHATS"
          subtitle="Arrastra las ventanas de chat a tu gusto!"
        />
        <Box justifyItems="right">
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
            }}
          >
            {" "}
            BOTON MUY ESPECIAL{" "}
          </Button>
        </Box>
      </Box>
      {/* LAYOUT GRID */}
      <Box
        sx={{
          width: "100%",
          height: "85vh",
          borderRadius: "15px",
          border: "0",
        }}
      >
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="140px"
          gap="20px"
        >
          <Box
            gridColumn="span 2"
            backgroundColor={colors.primary[400]}
            display="flex"
            height="90vh"
            borderRadius="15px"
            boxShadow="10"
          >
            {/** Mensajes Recientes */}
            <Box sx={{ width: "100%" }}>
              <Stack
                direction="column"
                spacing={"10px"}
                paddingTop="10px"
                alignItems="center"
              >
                <Box>
                  <Typography variant="h5" color={colors.greenAccent[400]}>
                    MENSAJES DIRECTOS
                  </Typography>
                </Box>
                <ChatFeature 
                    avatar="1" nombre="Mike" estado="Conectado" 
                />
                <ChatFeature 
                    avatar="2" nombre="Aitor" estado="Conectado" 
                />
                <ChatFeature 
                    avatar="3" nombre="Laia" estado="Desconectado" 
                />
                <ChatFeature 
                    avatar="4" nombre="Yuka" estado="Desconectado" 
                />
                <ChatFeature 
                    avatar="5" nombre="Olga" estado="Desconectado" 
                />
                <ChatFeature 
                    avatar="6" nombre="Sheveck" estado="Desconectado" 
                />
                <ChatFeature 
                    avatar="7" nombre="Roy" estado="Ausente" 
                />
              </Stack>
            </Box>
          </Box>
          <Box
            gridColumn="span 10"
            //backgroundColor={colors.primary[400]}
            display="flex"
            height="90vh"
            borderRadius="15px"
          >
            
            <Stack direction="column" width="100%" spacing={"15px"}>
            {/** CHAT BOX */}  
            <Box
                gridColumn="span 10"
                //backgroundColor="red"
                backgroundColor={colors.primary[400]}
                height="83vh"
                borderRadius="15px"
                boxShadow="10"
            >
            <CanalDeTexto />
            </Box>
            {/** USER INPUT */}
            <Box
                gridColumn="span 10"
                //backgroundColor="blue"
                backgroundColor={colors.primary[400]}
                borderRadius="15px"
                height="7vh"
                boxShadow="10"
              ></Box>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Chats;
