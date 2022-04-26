import { Link } from "react-router-dom";

const Home = () => {
  const links = [
    {
      id: 1,
      title: "Snake Game",
      text: 'Игра "Змейка", реализованная при помощи React.',
      link: "/snake-game",
    },
    {
      id: 2,
      title: "GitHub Search User",
      text: "Поиск юзера на GitHub",
      link: "/github-find-user",
    },
    {
      id: 3,
      title: "Drag & Drop like Trello",
      text: "Drag & Drop используя React",
      link: "/drag-and-drop",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-3 mb-3">
        <div className="bg-blue-100 p-3 rounded">
          <p className="text-base text-zinc-700">
            Сборник небольших <strong>React Pet Projects</strong>, реализованных
            в целях изучения и тестирования.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {links.map((link) => (
          <Link
            key={link.id}
            className="text-zinc-700 transition hover:bg-rose-300 hover:text-white border-2 border-rose-300 rounded p-2"
            to={link.link}
          >
            <h6 className="title font-bold">{link.title}</h6>
            <p className="text">{link.text}</p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
