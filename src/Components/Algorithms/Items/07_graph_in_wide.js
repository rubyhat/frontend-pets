// 1.Проверить, существует ли путь из точки А в точку G.
// 2.Найти кратчайший путь.

// Каждое поле объекта graph это вершины, и в каждом поле хранится
// массив вершин,к которым есть путь

const wideGraph = () => {
  const graph = {};
  graph.a = ["b", "c"];
  graph.b = ["f"];
  graph.c = ["d", "e"];
  graph.d = ["f"];
  graph.e = ["f"];
  graph.f = ["g"];
  graph.n = ["s", "y"];

  const track = (graph, start, end) => {
    let queue = [];
    queue.push(start);

    while (queue.length > 0) {
      const current = queue.shift();

      if (!graph[current]) {
        graph[current] = [];
      }

      if (graph[current].includes(end)) {
        return true;
      } else {
        queue = [...queue, ...graph[current]];
      }
    }
    return false;
  };

  console.log("grap track form a to g: ", track(graph, "a", "g"));
};

export default wideGraph;
