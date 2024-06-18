import LoginUseCase from "../../../UseCase/LoginUseCase/LoginUseCase";

export default function HomeViewModel() {
  const loginUseCase = LoginUseCase();

  const onClick = () =>
    loginUseCase.execute({ id: 206702, employee: "HERAUD" });

  return { onClick };
}
