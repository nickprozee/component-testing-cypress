import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";

type Props = {
  title: string;
  content: string;
  onClick: () => any;
};

export function DemoCard(props: Props) {
  return (
    <Card className='demo-card' cypress-id="card-root" elevation={7} sx={{ maxWidth: "unset" }}>
      <img
        cypress-id="card-image"
        alt="logo"
        style={{ height: 150, padding: 24 }}
        src="https://nljug.org/wp-content/uploads/2018/08/codestar_logo_light_tagline_5bwidth3d5125d402x.png"
      />

      <Divider />

      <CardContent sx={{ textAlign: "center", pt: 6 }}>
        <Typography cypress-id="card-title" gutterBottom variant="h5" component="div" sx={{fontWeight: 'bold'}}>
          {props.title}
        </Typography>
        <Typography cypress-id="card-content" variant="h5" color="text.secondary">
          {props.content}
        </Typography>
      </CardContent>

      <CardActions>
        <Button cypress-id="card-button" size="large" onClick={props.onClick}>Generate</Button>
      </CardActions>
    </Card>
  );
}
