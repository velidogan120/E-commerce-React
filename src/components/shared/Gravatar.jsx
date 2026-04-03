import md5 from "crypto-js/md5";

export default function Gravatar({ email, size = 30 }) {
  const hash = md5(email.trim().toLowerCase()).toString();

  const url = `https://www.gravatar.com/avatar/${hash}?s=${size}&d=identicon`;

  return (
    <img
      src={url}
      alt="avatar"
      width={size}
      height={size}
      style={{ borderRadius: "50%" }}
    />
  );
}
