import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const MovieSkeleton = ({ cards }) => {
  return (
    <Stack spacing={1} style={{ marginLeft: 40, marginTop: -170, marginBottom: 200 }}>
      <Typography variant='h2'>
        <Skeleton
          sx={{ bgcolor: 'grey.900' }}
          width={190}
          style={{ marginLeft: -10 }}
        />
      </Typography>
      <Grid container wrap="nowrap">
        {Array(cards).fill(0).map((_, i) => (
          <Skeleton
            key={i}
            sx={{ bgcolor: 'grey.900' }}
            variant="rectangular"
            width={180}
            height={285}
            animation="wave"
            style={{ marginRight: 20 }}
          />
        ))}

      </Grid>
    </Stack>
  );
};

export default MovieSkeleton;
