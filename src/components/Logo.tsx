type LogoProps = {
  className?: string;
};

/**
 * لوگوی مومیلا از فایل public/images/logo.png خوانده می‌شود.
 * برای تغییر لوگو کافی است همان فایل را با تصویر دلخواه (ترجیحاً مربعی)
 * جایگزین کنید؛ گردی گوشه‌ها و سایه‌ها به‌صورت خودکار اعمال می‌شود.
 */
export default function Logo({ className = "h-10 w-10" }: LogoProps) {
  return (
    <img
      src="/images/logo.png"
      alt="لوگوی مومیلا"
      className={`${className} rounded-[30%] object-cover`}
    />
  );
}
