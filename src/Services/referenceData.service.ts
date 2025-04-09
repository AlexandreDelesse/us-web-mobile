import { api, apiWithoutBase } from "./api.service";

export interface RequestAction {
  id: number;
  value: string;
}

export interface RequestActionWithDate extends RequestAction {
  requiresDate: boolean;
}

export interface RequestConstraint {
  id: number;
  label: string;
  requiresDate: boolean;
}

const getReferenceActions = async () => {
  try {
    const req = await apiWithoutBase.get("/reference/actions");
    return req.data as RequestAction[];
  } catch (error) {
    throw error;
  }
};

const getReferenceActors = async () => {
  try {
    const req = await apiWithoutBase.get("/reference/actors");
    return req.data as RequestAction[];
  } catch (error) {
    throw error;
  }
};

const getReferenceNature = async () => {
  try {
    const req = await apiWithoutBase.get("/reference/nature");
    return req.data as RequestAction[];
  } catch (error) {
    throw error;
  }
};

const getReferenceConcerning = async () => {
  try {
    const req = await apiWithoutBase.get("/reference/concerning");
    return req.data as RequestAction[];
  } catch (error) {
    throw error;
  }
};

// Pas le plus propre mais permet de réutiliser des composants
const getReferenceConstraint = async () => {
  try {
    const req = await apiWithoutBase.get("/reference/constraints");

    return req.data.map((el: RequestConstraint) => ({
      ...el,
      value: el.label,
    })) as RequestActionWithDate[];
  } catch (error) {
    throw error;
  }
};

export {
  getReferenceActions,
  getReferenceActors,
  getReferenceNature,
  getReferenceConcerning,
  getReferenceConstraint,
};
