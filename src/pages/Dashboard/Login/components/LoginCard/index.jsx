export default function LoginCard() {
  return (
    <div className="bg-white px-6 py-8 rounded-lg shadow-md w-80">
      <form >
        <div className="flex flex-col gap-y-1">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            className="border outline-none px-3 py-1 rounded-lg"
            placeholder="Digite seu email"
          />
        </div>
        <div className="flex flex-col gap-y-1 mt-10">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            className="border outline-none px-3 py-1 rounded-lg"
            placeholder="Digite sua senha"
          />
        </div>
        <button
          type="submit"
          className="mt-7 bg-blue-300 w-full py-2 rounded-lg text-white"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
