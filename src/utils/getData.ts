const fs = require("fs/promises");

type ProductDelivery = {
  title: string;
  description: string;
  useCases: string;
  price?: {
    entryTitle: string;
  };
  sampleData?: {
    formPage: {
      sys: {
        uri: string;
      };
    };
  };
  sys: {
    uri: string;
  };
};

type ProductMapped = {
  title: string;
  description: string;
  useCases: string;
  link: string;
  price: string | undefined;
  sampleDataFormLink: string | undefined;
};

/**
 * Fetch some information from each product listed on the corporate site cms
 * https://www.contensis.com/help-and-docs/apis/delivery-http/content/entry/list-entries-by-content-type
 *
 * @returns An array of products from the cms
 */
const getProductsInfo = async (): Promise<ProductMapped[] | undefined> => {
  const response = await fetch(
    `https://cms-ordnancesurvey.cloud.contensis.com/api/delivery/projects/osweb/contenttypes/product/entries?pageSize=100`,
    {
      headers: {
        "Accept-Encoding": "gzip, deflate, br",
        Accesstoken: process.env.CONTENSIS_API_KEY!,
      },
    }
  ).then((res) => res.json());

  if (!response) return;

  const products: ProductDelivery[] = response.items;
  return products.map((product) => {
    return {
      title: product.title,
      description: product.description,
      useCases: product.useCases,
      link: product.sys.uri,
      price: product.price?.entryTitle,
      sampleDataFormLink: product.sampleData?.formPage?.sys.uri,
    };
  });
};

/**
 * Writes product data to a file
 * @param product
 * @returns the content of the file written
 */
const writeProductToFile = async (product: ProductMapped) => {
  const information = `
    Title: ${product.title}\n
    Link to product: https://www.ordnancesurvey.co.uk${product.link}\n
    ${product.price ? `Price: ${product.price}\n` : ""}

    Description: \n
    ${product.description}\n

    ${
      product.sampleDataFormLink
        ? `Link to form to get sample data: https://www.ordnancesurvey.co.uk${product.sampleDataFormLink} \n`
        : ""
    }

    ${product.useCases ? `Use cases: ${product.useCases}\n` : ""}
  `;

  await fs.writeFile(
    `src/data/${product.title.split(" ").join("-")}.txt`,
    information
  );
  return information;
};

const main = async () => {
  // Fetch all products
  const allProductsInfo = await getProductsInfo();

  if (!allProductsInfo) return;
  let promises: Promise<string>[] = [];

  // For each product, save to file
  for (const product of allProductsInfo) {
    promises.push(writeProductToFile(product));
  }

  // and store info to information string
  const information = (await Promise.all(promises)).join("\n\n");

  // Save combined information into training data file for ai
  await fs.writeFile(`src/data/training-data.txt`, information);
};

main();
