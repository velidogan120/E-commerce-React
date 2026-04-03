import { useForm, useWatch } from "react-hook-form";
import { useRoles, useSignUp } from "../hooks/useAuth";
import { useNavigate } from "react-router";
import { PacmanLoader } from "react-spinners";
import { useEffect } from "react";
import "../styles/sign-up.css";
import { setRoles } from "../lib/store/slices/authSlice";
const SignUp = () => {
  const navigate = useNavigate();
  const { mutate, isPending, error } = useSignUp();
  const { data: roles = [] } = useRoles();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    trigger,
    control,
  } = useForm();
  const passwordValidation = useWatch({ control, name: "password" });

  useEffect(() => {
    if (passwordValidation) {
      trigger("passwordValidation");
    }
    if (roles.length === 0) {
      setRoles(roles);
    }
  }, [passwordValidation, trigger, roles]);

  const onSubmit = (data) => {
    const payload = {
      name: data.name,
      email: data.email,
      password: data.password,
      role_id: data.role_id,
    };

    if (String(data.role_id) === "1") {
      payload.store = {
        name: data.store_name,
        phone: data.phone,
        tax_no: data.tax_no,
        bank_account: data.bank_account,
      };
    }

    mutate(payload, {
      onSuccess: () => navigate("/"),
    });
  };

  return (
    <>
      <h1 className="form-header">SIGN UP</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form-signup">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            className="form-input"
            type="text"
            placeholder="Name"
            {...register("name", {
              required: { value: true, message: "İsim zorunlu" },
              minLength: { value: 3, message: "İsim en az 3 karakter olmalı" },
            })}
          />
          {errors.name && <p className="form-error">{errors.name.message}</p>}
        </div>
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
              minLength: { value: 8, message: "Şifre en az 8 karakter olmalı" },
              pattern: {
                value:
                  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                message:
                  "Şifre en az bir büyük harf, bir küçük harf, özel karakter ve bir rakam içermelidir",
              },
            })}
          />
          {errors.password && (
            <p className="form-error">{errors.password.message}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="passwordValidation" className="form-label">
            Password Validation
          </label>
          <input
            type="password"
            className="form-input"
            placeholder="Password Validation"
            {...register("passwordValidation", {
              required: { value: true, message: "Şifre zorunludur" },
              validate: (value) =>
                value === getValues("password") || "Şifreler aynı olmalıdır",
            })}
          />
          {errors.passwordValidation && (
            <p className="form-error">{errors.passwordValidation.message}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="role_id" className="form-label">
            Role
          </label>

          <select {...register("role_id")} className="form-select">
            <option value="0">Bir rol seçiniz</option>
            {Object.keys(roles).map((key) => (
              <option key={key} value={key} defaultValue={key === "2"}>
                {roles[key].name}
              </option>
            ))}
          </select>
          {errors.role_id && (
            <p className="form-error">{errors.role_id.message}</p>
          )}
        </div>

        {getValues("role_id") === "1" && (
          <>
            <div className="form-group">
              <label htmlFor="store_name" className="form-label">
                Store Name
              </label>
              <input
                className="form-input"
                type="text"
                placeholder="Store Name"
                {...register("store_name", {
                  required: { value: true, message: "Mağaza adı zorunludur" },
                  minLength: {
                    value: 3,
                    message: "Mağaza adı en az 3 karakter olmalıdır",
                  },
                })}
              />
              {errors.store_name && (
                <p className="form-error">{errors.store_name.message}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                className="form-input"
                type="tel"
                placeholder="Phone"
                {...register("phone", {
                  required: {
                    value: true,
                    message: "Telefon numarası zorunludur",
                  },
                  pattern: {
                    value: /^(\+90|0)?(5[0-9][0-9]{9}|[1-9][0-9]{9})$/,
                    message:
                      "Lütfen Türkiye'de geçerli bir telefon numarası girin",
                  },
                })}
              />
              {errors.phone && (
                <p className="form-error">{errors.phone.message}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="tax_no" className="form-label">
                Tax ID
              </label>
              <input
                className="form-input"
                type="text"
                placeholder="Tax ID"
                {...register("tax_no", {
                  required: {
                    value: true,
                    message: "Vergi numarası zorunludur",
                  },
                  pattern: {
                    value: /^T\d{5}V\d{5}XXXXXX$/i,
                    message: "Lütfen geçerli bir vergi numarası girin",
                  },
                })}
              />
              {errors.tax_no && (
                <p className="form-error">{errors.tax_no.message}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="bank_account" className="form-label">
                Bank Account
              </label>
              <input
                className="form-input"
                type="text"
                placeholder="Bank Account"
                {...register("bank_account", {
                  required: {
                    value: true,
                    message: "Hesap numarası zorunludur",
                  },
                  pattern: {
                    value: /^TR\d{2}\d{4}\d{4}\d{4}\d{4}\d{2}$/,
                    message: "Lütfen geçerli bir IBAN adresi girin",
                  },
                })}
              />
              {errors.bank_account && (
                <p className="form-error">{errors.bank_account.message}</p>
              )}
            </div>
          </>
        )}
        <div className="form-btn">
          <button type="submit" className="btn">
            {isPending ? <PacmanLoader /> : "Sign Up"}
          </button>
        </div>

        {error && <p className="form-error">Kayıt başarısız</p>}
      </form>
    </>
  );
};

export default SignUp;
