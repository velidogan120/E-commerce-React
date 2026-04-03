import { useMutation, useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router";
import { toast } from "react-toastify";
import { login, roles, signup } from "../lib/services/authService";
import { logout, setCredentials } from "../lib/store/slices/authSlice";

export const useSignUp = () => {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      const redirect = searchParams.get("redirect");

      if (redirect) {
        navigate(decodeURIComponent(redirect));
      } else {
        navigate("/");
      }

      toast.success(
        "Hesabınızı etkinleştirmek için e-postadaki bağlantıya tıklamanız gerekiyor!",
      );

      dispatch(setCredentials(data));
    },
    onError: () => {
      toast.error("Kayıt başarısız! Lütfen bilgilerinizi kontrol edin.", {
        autoClose: 10000,
      });
    },
  });
};

export const useLogin = () => {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (payload) => {
      const loginData = { ...payload };
      delete loginData.rememberMe;
      return login(loginData);
    },
    onSuccess: (data, variables) => {
      const redirect = searchParams.get("redirect");

      if (redirect) {
        navigate(decodeURIComponent(redirect));
      } else {
        navigate("/");
      }
      toast.success("Giriş başarılı!");
      dispatch(
        setCredentials({
          ...data,
          rememberMe: Boolean(variables?.rememberMe),
        }),
      );
    },
    onError: () => {
      toast.error("Giriş başarısız! Lütfen bilgilerinizi kontrol edin.", {
        autoClose: 10000,
      });
    },
  });
};

export const useLogout = () => {
  const dispatch = useDispatch();
  return () => dispatch(logout());
};

export const useRoles = () => {
  return useQuery({
    queryKey: ["roles"],
    queryFn: roles,
  });
};
