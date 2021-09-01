import axios from 'axios';

const bookkeeperService = {
  getAll: async () => {
    let res = await axios.get(`/api/bookkeeper`);
    return res.data || [];
  }
};
export default bookkeeperService;