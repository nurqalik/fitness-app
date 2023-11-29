import axios from "axios";

const baseUrl = 'https://exercisedb.p.rapidapi.com'

const apiCall = async (url: any) => {
  try{
    const options = {
      method: 'GET',
      url,
      params: {limit: '10'},
      headers: {
        'X-RapidAPI-Key': 'fb2904671bmsh6e603b63d6e62f5p1538cfjsnc69ad47b857f',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };
    const response = await axios.request(options)
    return response.data

  }catch(err: any){
    console.log('error: ', err.message)
  }
}

export const fetchExercisesByBodypart = async(bodyPart: string | string[]) => {
  let data = await apiCall(baseUrl+`/exercises/bodyPart/${bodyPart}`);
  return data
}