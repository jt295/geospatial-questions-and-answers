const fs = require("fs/promises");

const getProductsList = async () => {
  const sitemap = await fs
    .readFile("./sitemap.txt")
    .then((res: Buffer) => JSON.parse(res.toString()));

  const removeList = ["search-for-os-products", "product-support"];

  const products: string[] = await sitemap.products.childUrls.filter(
    (item: string) => !removeList.includes(item)
  );

  return products;
};

const requestPage = async (path: string) => {
  const node = await fetch(
    `https://cms-ordnancesurvey.cloud.contensis.com/api/delivery/projects/osweb/nodes/products/${path}`,
    {
      headers: {
        "Accept-Encoding": "gzip, deflate, br",
        Accesstoken: process.env.CONTENSIS_API_KEY!,
      },
    }
  ).then((res) => res.json());

  const entry = await fetch(
    `https://cms-ordnancesurvey.cloud.contensis.com/api/delivery/projects/osweb/entries/${node.entry.sys.id}`,
    {
      headers: {
        "Accept-Encoding": "gzip, deflate, br",
        Accesstoken: process.env.CONTENSIS_API_KEY!,
      },
    }
  ).then((res) => res.json());

  const information = `
    Title: ${entry.title}\n
    Price: ${JSON.stringify(entry.price)}\n

    Description: \n
    ${entry.description}\n

    Sample data: ${JSON.stringify(entry.sampleData)} \n

    Use cases: ${entry.useCases}\n
  `;

  await fs.writeFile(`src/data/${path}.txt`, information);
};

const writeDataFiles = async () => {
  const products = await getProductsList();

  products.forEach((product) => {
    console.log("Product attempted: ", product);
    requestPage(product);
  });
};

const combineAllDataFiles = async () => {
  const products = await getProductsList();

  let combinedContent = "";

  for (let i = 0; i < products.length; i++) {
    const file: string = await fs
      .readFile(`src/data/${products[i]}.txt`)
      .then((res: Buffer) => res.toString());

    console.log("file: ", file);
    combinedContent = combinedContent + file + "\n\n\n\n";
  }

  await fs.writeFile(`src/data/training-data.txt`, combinedContent);
};

writeDataFiles();
// combineAllDataFiles();
