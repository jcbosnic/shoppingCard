import Buttons from "../../../components/Buttons";
import Inputs from "../../../components/Inputs";

const Login = () => {
  return (
    <section className=" flex ml-auto absolute right-0 top-16 w-16 ">
      <div className=" bg-white shadow-md p-5 rounded-md">
        <form className="flex flex-col gap-y-4 text-xs " action="">
          <Inputs
            inputTypes="text"
            inputClass=" bg-white text-black rounded-lg border rounded px-5 py-3"
            inputHolder="correo"
          />

          <Inputs
            inputTypes="password"
            inputClass=" bg-white text-black rounded-lg border rounded px-5 py-3"
            inputHolder="password"
          />

          <Buttons
            buttonStyles=" bg-black text-white px-10 py-3 rounded-xl mt-auto"
            buttonName="Ingresar"
          />
        </form>
        <p className=" text-sm pt-2">¿Olvidaste tu contraseña?</p>
      </div>
    </section>
  );
};

export default Login;
