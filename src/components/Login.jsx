import { useForm } from "react-hook-form";
import { useLogin } from "../hooks/useAuth";
import "../styles/login.css";
import { PacmanLoader } from "react-spinners";
const Login = () => {
  const { mutate, isPending } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <>
      <h1 className="form-header">LOGIN</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form-login">
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>

          <input
            className="form-input"
            type="email"
            placeholder="Email"
            {...register("email", {
              required: { value: true, message: "Email zorunlu" },
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Geçerli bir email adresi girin",
              },
            })}
          />
          {errors.email && <p className="form-error">{errors.email.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-input"
            placeholder="Password"
            {...register("password", {
              required: { value: true, message: "Şifre zorunlu" },
            })}
          />
          {errors.password && (
            <p className="form-error">{errors.password.message}</p>
          )}
        </div>
        <div className="form-group-checkbox">
          <input
            id="rememberMe"
            type="checkbox"
            {...register("rememberMe")}
            className="form-input"
          />
          <label htmlFor="rememberMe" className="form-label">
            Beni hatirla
          </label>
        </div>
        <div className="form-btn">
          <button type="submit" className="btn">
            {isPending ? <PacmanLoader /> : "Login"}
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
