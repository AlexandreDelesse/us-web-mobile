export interface CrewQuery {
  crewId: number;
  token: string;
  label: string;
  member1: string;
  member2: string;
  immat: string;
  start: string;
  end: string | null;
}
