import stock from "../data/data.json";

export const askData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(stock);
    }, 2000);
  });
};

export const getItemById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const item = stock.find((el) => el.id === id);

      if (item) {
        resolve(item);
      } else {
        reject({
          error: "no se encontró ese producto",
        });
      }
    }, 500);
  });
};
