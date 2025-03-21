export default function ShareLinks() {
  return (
    <div className="flex gap-4">
      <span className="text-grayis-blue tracking-[4px]">SHARE</span>
      <img
        className="h-auto w-5"
        src="/icon-facebook.svg"
        alt="Logo Facebook"
      />
      <img className="h-auto w-5" src="/icon-twitter.svg" alt="Logo Twitter" />
      <img
        className="h-auto w-5"
        src="/icon-pinterest.svg"
        alt="Logo Pinterest"
      />
    </div>
  );
}
