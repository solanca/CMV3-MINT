import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Meme from "../../assets/meme.png";

type Props = {};

const MintCard = (_props: Props) => {
  return (
    <Card>
      <CardMedia component={"img"} src={Meme} height={300} />
      <CardContent>
        <Grid container alignItems={"center"} justifyContent={"space-between"}>
          <Typography>Supply: 3333</Typography>
          <Typography>Price: 0.1sol</Typography>
        </Grid>
      </CardContent>
      <CardActions>
        <Grid container justifyContent={"center"}></Grid>
        <Button variant="contained" color="warning">
          Mint
        </Button>
      </CardActions>
    </Card>
  );
};

export default MintCard;
