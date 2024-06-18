import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import GetDriverUseCase from "../../../../UseCase/GetDriverUseCase/GetDriverUseCase";
import { Driver } from "../../../../Domain/Driver";
import UpdateDriverUseCase from "../../../../UseCase/UpdateDriverUseCase/UpdateDriverUseCase";

export default function DriverSwapViewModel() {
  const queryClient = useQueryClient();

  const useCase = GetDriverUseCase();
  const updateUsecase = UpdateDriverUseCase();

  const [driverCollection, setDriverCollection] = useState<Driver[]>([]);
  const [selectedDriver, setSelectedDriver] = useState<Driver | null>();

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["driverSwap"],
    queryFn: useCase.execute,
  });

  const {
    isPending,
    mutate,
    error: updateError,
    isError: isUpdateError,
  } = useMutation({
    mutationFn: updateUsecase.execute,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["driverSwap"] });
    },
  });

  useEffect(() => {
    if (!data) return;
    else {
      setSelectedDriver(data.selectedDriver);
      setDriverCollection(data.driversCollection);
    }
  }, [data]);

  const updateDriver = () => {
    if (!driverCollection || driverCollection.length < 1) return;
    if (!selectedDriver) return;

    const currentDriverIndex = driverCollection
      .map((driver) => driver.driverId)
      .indexOf(selectedDriver.driverId);

    const nextDriver = getNextDriver(currentDriverIndex);
    if (!nextDriver) return;
    else mutate(nextDriver.driverId);
  };

  const getNextDriver = (driverIndex: number) => {
    const nextDriverIndex = getNextDriverIndex(driverIndex);
    return driverCollection.find((driver, index) => index == nextDriverIndex);
  };

  const getNextDriverIndex = (currentIndex: number) => {
    if (currentIndex < driverCollection.length - 1) return currentIndex + 1;
    else return 0;
  };

  return {
    selectedDriver,
    isLoading,
    error,
    isError,
    updateDriver,
    isPending,
    updateError,
    isUpdateError,
  };
}
