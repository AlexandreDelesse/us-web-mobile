import axios from "axios";
import { Analyse } from "../Components/LogManagement/Analyse";
import { api, apiWithoutBase } from "./api.service";

import { Log } from "../Components/LogManagement/Log";

const getAnalyseById = async (id: string | null): Promise<Analyse | Log> => {
  try {
    if (!id) throw new Error("l'ID n'existe pas.");
    const req = await apiWithoutBase.get(`analyze/${id}`);
    return req.data;
  } catch (error) {
    throw error;
  }
};

const postAnalyse = async (analyse: Analyse) => {
  try {
    const req = await apiWithoutBase.post(`analyze`, analyse);
    return req.data;
  } catch (error) {
    throw error;
  }
};

const putAnalyze = async (analyse: Analyse) => {
  try {
    const req = await apiWithoutBase.put(`analyze`, analyse);
    return req.data;
  } catch (error) {
    throw error;
  }
};

export { getAnalyseById, postAnalyse, putAnalyze };
