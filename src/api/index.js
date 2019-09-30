
import axios from 'axios';

const dividirPdf = (fileBase64) => {
  axios({
    method: 'post',
    url: 'http://localhost:3000/dividirPdf',
    data: { fileBase64 },
    headers: {
    },
  });
};

const unirPdf = (fileBase64) => {
  axios({
    method: 'post',
    url: 'http://ocalhost:3000/dividirPdf',
    data: {
      fileBase64,
    },
    headers: {
    },
  });
};

export default {
  dividirPdf,
  unirPdf,
};
