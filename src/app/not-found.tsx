import { unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

type Props = {
  params: { locale?: string };
};

export default function NotFound({ params }: Props) {
  const locale = params?.locale;
  if (!locale) return notFound();

  unstable_setRequestLocale(locale);

  return (
    <div style={{ textAlign: "center", padding: "4rem" }}>
      <h1 style={{ fontSize: "2rem" }}>Oops! Page not found.</h1>
      <p>The page you’re looking for does not exist.</p>
    </div>
  );
}
