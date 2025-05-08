import axios from "axios";
import { api, apiWithoutBase } from "./api.service";

import { Log } from "../Components/LogManagement/Log";
import { IAnalyse } from "../Components/Analyse/IAnalyse";

const getAnalyseById = async (id: string | null): Promise<IAnalyse | Log> => {
  try {
    if (!id) throw new Error("l'ID n'existe pas.");
    const req = await apiWithoutBase.get(`analyze/${id}`);
    return req.data;
  } catch (error) {
    throw error;
  }
};

const postAnalyse = async (analyse: IAnalyse) => {
  try {
    const req = await apiWithoutBase.post(`analyze`, analyse);
    return req.data;
  } catch (error) {
    throw error;
  }
};

const putAnalyze = async (analyse: IAnalyse) => {
  try {
    const req = await apiWithoutBase.put(`analyze`, analyse);
    return req.data;
  } catch (error) {
    throw error;
  }
};

export { getAnalyseById, postAnalyse, putAnalyze };
