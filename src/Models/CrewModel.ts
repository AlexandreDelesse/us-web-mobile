import { api } from "../Services/api.service";

export interface ICrew {
  crewId: number;
  token: string | null;
  label: string;
  member1: string | null;
  member2: string | null;
  immat: string;
  start: string | null;
  end: string | null;
}

export class CrewModel {
  private static instance: CrewModel;
  private crews: ICrew[] = [];

  public static getInstance() {
    if (!this.instance) this.instance = new CrewModel();
    return this.instance;
  }

  async loadCrews() {
    try {
      this.crews = (await api.get("Login")).data;
      return this.crews;
    } catch (error) {
      throw error;
    }
  }

  getCrews() {
    return this.crews;
  }

  searchCrew(filter: string) {
    return this.crews.filter(
      (crew) =>
        this.compare(crew.immat, filter) ||
        this.compare(crew.label, filter) ||
        this.compare(crew.member1, filter) ||
        this.compare(crew.member2, filter)
    );
  }

  compare(attr: string | null, value: string) {
    if (!attr) return false;
    return attr.toLowerCase().includes(value.toLowerCase());
  }
}
