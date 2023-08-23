export const exerciseOptions = {

        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'c32cf95d39mshfa541998dac6556p118ed6jsnaa54140987ac',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
}

export const fetchData = async (url, options) => {

    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}