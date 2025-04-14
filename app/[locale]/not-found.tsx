import Link from "next/link";
import { locales } from "../../lib/i18n";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold">Page Not Found</h2>
      <p className="my-4">The requested page doesn`t exist</p>
      <div className="flex gap-4">
        {locales.map((locale) => (
          <Link
            key={locale}
            href={`/${locale}`}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Go to {locale.toUpperCase()} Home
          </Link>
        ))}
      </div>
    </div>
  );
}
