import axios from "axios";
import { Analyse } from "../Components/LogManagement/Analyse";
import { api } from "./api.service";

import { Log } from "../Components/LogManagement/Log";

const getAnalyseById = async (id: string | null): Promise<Analyse | Log> => {
  try {
    if (!id) throw new Error("l'ID n'existe pas.");
    const req = await api.get(`analyse/${id}`);
    return req.data;
  } catch (error) {
    throw error;
  }
};

const postAnalyse = async (analyse: Analyse) => {
  try {
    const req = await api.post(`analyse/`);
    return req.data;
  } catch (error) {
    throw error;
  }
};

export { getAnalyseById, postAnalyse };
