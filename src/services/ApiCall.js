import axios from 'axios';

export const ApiCall = async () => {
  const result = await axios.get(
    'https://publicworkapi.moh.gov.ge/Test/api/Vacancy/List',
    {
      header: {
        accept: 'text/plain',
        LoginToken: 'd7202369-93eb-11ec-80f3-005056b4f1d1',
      },
    }
  );
  console.log(result.data);
};


