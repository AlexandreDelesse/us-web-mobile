import React from "react";
import { ICrew } from "../../Models/CrewModel";
import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";

interface CrewListViewProps {
  crews: ICrew[];
  onMemberClick: (member: string | null, crewId: number) => void;
}
export default function CrewListView(props: CrewListViewProps) {
  const { crews, onMemberClick } = props;

  return (
    <>
      <Typography sx={{ marginLeft: 2, marginBottom: 1 }}>
        {crews.length} Equipage(s)
      </Typography>
      <Grid container spacing={1}>
        {crews.map((crew) => (
          <Grid key={crew.crewId} item xs={12} sm={6} lg={3}>
            <Card elevation={0} sx={{ backgroundColor: "whitesmoke" }}>
              <CardHeader
                title={crew.immat}
                subheader={crew.label}
                action={
                  <Typography color="steelblue">{crew.crewId}</Typography>
                }
              />
              <CardContent>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography variant="caption">Membre 1</Typography>
                    <Typography
                      // onClick={() => goToLogin(crew.crewId, crew.member1)}
                      onClick={() => onMemberClick(crew.member1, crew.crewId)}
                      color="steelblue"
                    >
                      {crew.member1}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="caption">Membre 2</Typography>
                    <Typography
                      onClick={() => onMemberClick(crew.member2, crew.crewId)}
                      color="steelblue"
                    >
                      {crew.member2}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography variant="caption">Début</Typography>
                    <Typography>{crew.start || "Pas de d'infos"}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="caption">Fin</Typography>
                    <Typography>{crew.end || "Pas d'infos"}</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
