const url = 'https://api.api-ninjas.com/v1/facts?limit=5';
const options = {
  method: 'GET',
  headers: {
    'X-Api-Key': '5XeMLlzJxJ/vp4349SnG8Q==0tS43MGK2rmdVvny'
  },
  contentType: 'application/json',
};

export default async function getFacts() {

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    const _fact = [result[0].fact, result[1].fact, result[2].fact, result[3].fact, result[4].fact];
    // console.log(_fact);
    return _fact;
  } catch (error) {
    console.error(error);
  }

}

// getFact();

// const fact = _fact;

// export default fact;
