import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./dd.module.scss";

const DD = () => {
  const cx = classNames.bind(styles);
  const [boards, setBoards] = useState([
    {
      id: 1,
      title: "Нужно сделать",
      items: [
        { id: 1, title: "Почитать книгу" },
        { id: 2, title: "Посмотреть урок" },
      ],
    },
    { id: 2, title: "В работе", items: [{ id: 1, title: "Пойти в офис" }] },
    { id: 3, title: "Сделано", items: [{ id: 1, title: "Пойти в магазин" }] },
  ]);
  const [currentBoard, setCurrentBoard] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);

  const dragOverHandler = (e) => {
    e.preventDefault();

    if (e.target.className === cx("item")) {
      e.target.style.backgroundColor = "tomato";
    }
  };
  const dragLeaveHandler = (e) => {
    e.target.style.backgroundColor = "transparent";
  };

  const dragStartHandler = (e, board, item) => {
    setCurrentBoard(board);
    setCurrentItem(item);
  };
  const dragEndHandler = (e) => {
    e.target.style.backgroundColor = "transparent";
  };
  const dropHandler = (e, board, item) => {
    e.preventDefault();
    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);
    const dropIndex = board.items.indexOf(item);
    board.items.splice(dropIndex + 1, 0, currentItem);

    setBoards(
      boards.map((prevBoard) => {
        if (prevBoard.id === board.id) {
          return board;
        }
        if (prevBoard.id === currentBoard.id) {
          return currentBoard;
        }
        return prevBoard;
      })
    );
  };

  const dropBoardHandler = (e, board) => {
    board.items.push(currentItem);

    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);
    setBoards(
      boards.map((prevBoard) => {
        if (prevBoard.id === board.id) {
          return board;
        }
        if (prevBoard.id === currentBoard.id) {
          return currentBoard;
        }
        return prevBoard;
      })
    );
  };

  return (
    <div className={cx("trello")}>
      <div className={cx("boards")}>
        {boards.map((board) => (
          <div
            className={cx("board")}
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropBoardHandler(e, board)}
            key={board.title}
          >
            <h3 className={cx("board__title")}>{board.title}</h3>
            {board.items.map((item) => (
              <div
                onDragOver={(e) => dragOverHandler(e)}
                onDragLeave={(e) => dragLeaveHandler(e)}
                onDragStart={(e) => dragStartHandler(e, board, item)}
                onDragEnd={(e) => dragEndHandler(e)}
                onDrop={(e) => dropHandler(e, board, item)}
                draggable={true}
                className={cx("item")}
                key={item.title}
              >
                <h5 className={cx("item__title")}>{item.title}</h5>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DD;
