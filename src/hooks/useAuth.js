import { useMutation, useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router";
import { toast } from "react-toastify";
import {
  login,
  roles,
  signup,
  verifyTokenApi,
} from "../lib/services/clientService";
import { logout, setUser } from "../lib/store/slices/clientSlice";

export const useSignUp = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: signup,
    onSuccess: () => {
      const redirect = searchParams.get("redirect");

      if (redirect) {
        navigate(decodeURIComponent(redirect));
      } else {
        navigate("/");
      }

      toast.success(
        "Hesabınızı etkinleştirmek için e-postadaki bağlantıya tıklamanız gerekiyor!",
      );
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
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (payload) => {
      const loginData = { ...payload };
      delete loginData.rememberMe;
      return login(loginData);
    },
    onSuccess: (data, variables) => {
      const redirect = searchParams.get("redirect");
      toast.success("Giriş başarılı!");
      dispatch(
        setUser({
          ...data,
          rememberMe: Boolean(variables?.rememberMe),
        }),
      );
      if (redirect) {
        navigate(decodeURIComponent(redirect));
      } else {
        navigate("/");
      }
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

export const useVerifyToken = () => {
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: () => verifyTokenApi(),
    onSuccess: (data) => {
      dispatch(setUser(data));
    },
  });
};
