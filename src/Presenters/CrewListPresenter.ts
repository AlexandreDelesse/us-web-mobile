import { AxiosError } from "axios";
import { CrewModel, ICrew } from "../Models/CrewModel";
import { NavigateFunction } from "react-router-dom";

export interface ICrewListView {
  updateCrewList: (crew: ICrew[]) => any;
  showError: (error: Error | AxiosError | null) => any;
  setLoading: (loading: boolean) => any;
}

export class CrewListPresenter {
  private model = CrewModel.getInstance();
  private view;

  constructor(view: ICrewListView) {
    this.view = view;
  }

  async init() {
    try {
      this.view.setLoading(true);
      const crews = await this.model.loadCrews();
      this.updateView(crews);
    } catch (error) {
      if (error instanceof AxiosError || error instanceof Error)
        this.view.showError(error);
      else this.view.showError(new Error("Unknown error occured"));
    } finally {
      this.view.setLoading(false);
    }
  }

  updateView(crews: ICrew[]) {
    this.view.updateCrewList(this.parseDates(crews));
  }

  limit(crews: ICrew[], nb: number) {
    return crews.slice(0, nb);
  }

  searchCrew(filter: string) {
    console.log(!!filter);
    if (!filter) this.updateView(this.model.getCrews());
    const crewsFiltered = this.model.searchCrew(filter);
    return this.updateView(crewsFiltered);
  }

  parseDates(crews: ICrew[]) {
    return crews.map((crew) => ({
      ...crew,
      start: crew.start ? new Date(crew.start).toLocaleString() : null,
      end: crew.end ? new Date(crew.end).toLocaleString() : null,
    }));
  }

  navigate(
    crewId: number,
    memberName: string | null,
    navigate: NavigateFunction
  ) {
    //Navigate logic here
    if (!memberName) return;
    return navigate(`/login/${crewId}/${memberName}`);
  }
}
