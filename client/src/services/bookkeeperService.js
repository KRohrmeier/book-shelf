import axios from 'axios';

const bookkeeperService = {
  getAll: async () => {
    let res = await axios.get('/bookkeeper');
    return res.data || [];
  }
};
export default bookkeeperService;