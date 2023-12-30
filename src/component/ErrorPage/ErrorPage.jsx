import { Box, Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { errorPage } from '../../utils/image';
import { useNavigate } from 'react-router-dom';

export default function Error() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    // Navigate to the previous page
    navigate(-1);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Typography variant="h1">
              404
            </Typography>
            <Typography variant="h6">
              The page you’re looking for doesn’t exist.
            </Typography>
            <Button variant="contained" onClick={handleGoBack}>
              Go Back
            </Button>
          </Grid>
          <Grid xs={6}>
            <img
              src={errorPage}
              alt=""
              width={500} height={250}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
