import { useQuery } from "@tanstack/react-query";
import React from "react";
import GetCrewListUsecase from "../../../UseCase/GetCrewListUsecase/GetCrewListUseCase";
import ErrorHandler from "../../components/ErrorHandler/ErrorHandler";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Grid,
  ListItem,
  Skeleton,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CrewList() {
  const usecase = GetCrewListUsecase();
  const navigate = useNavigate();

  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["crewlist"],
    queryFn: usecase.execute,
  });

  const goToLogin = (crewId: number, memberName: string) => {
    navigate(`/login/${crewId}/${memberName}`);
  };

  if (isLoading)
    return (
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} lg={4}>
          <Skeleton
            sx={{ marginY: 1 }}
            variant="rectangular"
            width={450}
            height={225}
          />
          <Skeleton
            sx={{ marginY: 1 }}
            variant="rectangular"
            width={450}
            height={225}
          />
          <Skeleton
            sx={{ marginY: 1 }}
            variant="rectangular"
            width={450}
            height={225}
          />
        </Grid>
      </Grid>
    );

  if (isError) return <ErrorHandler error={error} />;

  if (data)
    return (
      <Grid container spacing={1}>
        {data.map((el) => (
          <Grid key={el.crewId} item xs={12} sm={6} lg={4}>
            <Card elevation={0} sx={{ backgroundColor: "whitesmoke" }}>
              <CardHeader
                title={el.immat}
                subheader={el.label}
                action={<Typography color="steelblue">{el.crewId}</Typography>}
              />
              <CardContent>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography variant="caption">Membre 1</Typography>
                    <Typography
                      onClick={() => goToLogin(el.crewId, el.member1)}
                      color="steelblue"
                    >
                      {el.member1}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="caption">Membre 2</Typography>
                    <Typography
                      onClick={() => goToLogin(el.crewId, el.member2)}
                      color="steelblue"
                    >
                      {el.member2}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography variant="caption">Début</Typography>
                    <Typography>
                      {new Date(el.start || "").toLocaleString()}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="caption">Fin</Typography>
                    <Typography>
                      {new Date(el.end || "").toLocaleString()}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );

  return <>Something wrong appends</>;
}
