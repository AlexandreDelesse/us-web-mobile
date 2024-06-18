import { Crew } from "../Domain/Crew";

const LOCAL_CREW_KEY = "CREW";

const setCrew = (crew: Crew) => {
  const jsonCrew = JSON.stringify(crew);
  window.localStorage.setItem(LOCAL_CREW_KEY, jsonCrew);
};

const getCrew = (): Crew | null => {
  const localCrew = window.localStorage.getItem(LOCAL_CREW_KEY);
  if (!localCrew) return null;
  return JSON.parse(localCrew);
};
export { setCrew, getCrew };
