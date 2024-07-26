import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const FeaturedMovieSkeleton = () => {
  return (
    <Stack spacing={1} style={{ marginLeft: 30, height: '100vh', paddingTop: 150 }}>
      <Typography variant='h1'>
        <Skeleton
          sx={{ bgcolor: 'grey.900' }}
          width={500}
          style={{ marginBottom: -10 }}
        />
      </Typography>

      <Grid container wrap="nowrap">
        <Typography variant='h3'>
          <Skeleton
            sx={{ bgcolor: 'grey.900' }}
            width={100}
          />
        </Typography>
        <Typography variant='h3'>
          <Skeleton
            sx={{ bgcolor: 'grey.900' }}
            width={55}
            style={{ marginLeft: 10 }}
          />
        </Typography>
        <Typography variant='h3'>
          <Skeleton
            sx={{ bgcolor: 'grey.900' }}
            width={110}
            style={{ marginLeft: 10 }}
          />
        </Typography>
      </Grid>

      <Typography variant='h2'>
        <Skeleton
          sx={{ bgcolor: 'grey.900' }}
          width={600}
          height={120}
          style={{ marginTop: -30 }}
        />
      </Typography>

      <Grid container wrap="nowrap">
        <Skeleton
          sx={{ bgcolor: 'grey.900' }}
          variant="rectangular"
          width={140}
          height={55}
          animation="wave"
          style={{ marginRight: 20, marginTop:-10, borderRadius: 5 }}
        />
        <Skeleton
          sx={{ bgcolor: 'grey.900' }}
          variant="rectangular"
          width={160}
          height={55}
          animation="wave"
          style={{ marginRight: 20, marginTop:-10, borderRadius: 5 }}
        />
      </Grid>

      <Typography variant='h3'>
          <Skeleton
            sx={{ bgcolor: 'grey.900' }}
            width={250}
            style={{ marginTop: -5 }}
          />
        </Typography>
    </Stack>
  );
};

export default FeaturedMovieSkeleton;
