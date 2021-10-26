import axios from "axios";

export async function getGuestReq(guest) {
  return await axios.get(`http://vikkiandphil.eu-west-2.elasticbeanstalk.com/api/${guest}`);
}

export async function confirmGuestReq(guest, confirmation) {
  return await axios.put(`http://vikkiandphil.eu-west-2.elasticbeanstalk.com/api/${guest}`, confirmation);
}
