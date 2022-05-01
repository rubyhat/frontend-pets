import { Link } from "react-router-dom";

const Home = () => {
  const links = [
    {
      id: 1,
      title: "Snake Game",
      text: 'Игра "Змейка", реализованная при помощи React.',
      link: "/snake-game",
      order: 3,
    },
    {
      id: 2,
      title: "GitHub Search User",
      text: "Поиск юзера на GitHub",
      link: "/github-find-user",
      order: 4,
    },
    {
      id: 3,
      title: "Drag & Drop",
      text: "Drag & Drop используя React",
      link: "/drag-and-drop",
      order: 5,
    },
    {
      id: 4,
      title: "Hello, Algorithms!",
      text: "Что я знаю об алгоритмах",
      link: "/algorithms",
      order: 1,
    },
    {
      id: 4,
      title: "Hello, JavaScript!",
      text: "Что я знаю о native JavaScript",
      link: "/javascript",
      order: 2,
    },
  ];
  return (
    <>
      <div className="grid grid-cols-2 mb-3">
        <div className="bg-blue-100 p-3 rounded">
          <p className="text-base text-zinc-700">
            Сборник небольших <strong>React Pet Projects</strong>, реализованных
            в целях изучения и тестирования, а также учебные конспекты.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {links
          .sort((a, b) => a.order - b.order)
          .map((link) => (
            <Link
              key={link.id}
              className="text-zinc-700 transition hover:bg-rose-700 hover:text-white border-2 border-rose-700 rounded p-2"
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
