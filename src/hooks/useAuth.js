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

const AUTH_ROUTES = new Set(["/signup"]);

const getSafeRedirectPath = (searchParams) => {
  const redirect = searchParams.get("redirect");

  if (!redirect) {
    return "/";
  }

  let decodedRedirect = redirect;
  try {
    decodedRedirect = decodeURIComponent(redirect);
  } catch {
    return "/";
  }

  if (!decodedRedirect.startsWith("/")) {
    return "/";
  }

  const [pathOnly] = decodedRedirect.split("?");

  if (AUTH_ROUTES.has(pathOnly)) {
    return "/";
  }

  return decodedRedirect;
};

export const useSignUp = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: signup,
    onSuccess: () => {
      navigate(getSafeRedirectPath(searchParams));

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
      toast.success("Giriş başarılı!");
      dispatch(
        setUser({
          ...data,
          rememberMe: Boolean(variables?.rememberMe),
        }),
      );

      navigate(getSafeRedirectPath(searchParams));
    },
    onError: () => {
      toast.error("Giriş başarısız! Lütfen bilgilerinizi kontrol edin.", {
        autoClose: 10000,
      });
    },
  });
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
      dispatch(setUser({ ...data, rememberMe: true }));
    },
    onError: () => {
      dispatch(logout());
    },
  });
};
