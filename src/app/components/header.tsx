export default function Header() {
  return (
    <nav className="flex justify-between items-center p-4">
      <div className="">
      </div>

      <div className="space-x-4">
      <a href="" className="relative inline-block">
          Home
          <span className="absolute left-0 bottom-0 w-full h-1 bg-white origin-left scale-x-0 transition-transform duration-300 ease-in-out hover:scale-x-100"></span>
        </a>

        <a href="">Blog</a>
        <a href="">Contacts</a>
      </div>
    </nav>
  );
}
