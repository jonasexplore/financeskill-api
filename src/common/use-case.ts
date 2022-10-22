interface IUseCase<Payload = unknown, Response = void> {
  execute: (payload: Payload) => Promise<Response>;
}

export { IUseCase };
