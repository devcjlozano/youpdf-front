
import axios from 'axios';

const dividirPdf = formData => axios({
  method: 'post',
  url: 'http://localhost:3000/dividirPdf',
  data: formData,
  responseType: 'arraybuffer',
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});


const unirPdf = formData => axios({
  method: 'post',
  url: 'http://localhost:3000/dividirPdf',
  data: formData,
  responseType: 'arraybuffer',
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

export default {
  dividirPdf,
  unirPdf,
};
