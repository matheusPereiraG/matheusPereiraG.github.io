import DownloadIcon from "./download-icon";

type DownloadCvBtn = {
  className?: string;
};

export default function DownloadCvBtn({ className }: DownloadCvBtn) {
  return (
    <>
      <a href="/cv.pdf" download="cv.pdf">
        <div
          className={`${className} rounded-full bg-slate-500/50 p-2 flex space-x-2 items-center`}
        >
          <DownloadIcon className="fill-slate-300" />
          <p className="font-medium text-slate-300">Download CV</p>
        </div>
      </a>
    </>
  );
}
