import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:6000/api',
});

export const getHoneyList = () => api.get('/honey');
export const createHoney = async (newHoney) => {
  try {
    const response = await api.post('/honey', newHoney);
    return response.data;
  } catch (error) {
    console.error('Đã xảy ra lỗi khi tạo mới mật ong:', error.message);
    throw error; // Ném lại lỗi để xử lý ở phía gọi hàm.
  }
};
export const deleteHoney = (id) => api.delete(`/honey/${id}`);
