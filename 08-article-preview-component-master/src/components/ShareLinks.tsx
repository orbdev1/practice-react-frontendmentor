export default function ShareLinks() {
  return (
    <div className="flex gap-4">
      <span className="text-grayis-blue tracking-[4px]">SHARE</span>
      <div className="flex gap-4 pointer-events-auto">
        <a href="https://github.com/orbdev1" target="_blank">
          <img
            className="h-5 w-5"
            src="/icon-facebook.svg"
            alt="Logo Facebook"
          />
        </a>
        <a href="https://github.com/orbdev1" target="_blank">
          <img className="h-5 w-5" src="/icon-twitter.svg" alt="Logo Twitter" />
        </a>
        <a href="https://github.com/orbdev1" target="_blank">
          <img
            className="h-5 w-5"
            src="/icon-pinterest.svg"
            alt="Logo Pinterest"
          />
        </a>
      </div>
    </div>
  );
}
