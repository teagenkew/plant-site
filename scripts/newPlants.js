class PlantsAPI {
  constructor(queries, numberOfImages) {
    this.queries = queries;
    this.baseURL = "https://api.pexels.com/v1/";
    this.key = "XUl9BIrBrvjsZlAVi5XJYCLybZNFBw1JQN8okUjapUhd1ZWFGH6gxecK";
    this.numberOfImages = numberOfImages;
  }

  async getPlants() {
    try {
      const url = `${this.baseURL}/search?query=${this.queries}&per_page=${this.numberOfImages}`;
      const response = await axios.get(url, {
        headers: {
          Authorization: this.key,
        },
      });
      const plantImages = response.data.photos;
      return plantImages;
    } catch (error) {
      console.log(error);
    }
  }
}

export { PlantsAPI };
