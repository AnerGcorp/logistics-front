import axios from "axios";
import config from "./config";

// interface InfoPanel {
//   id: number;
//   phone_number: string;
//   address: string;
// }

const data = () => axios.get(config.api.aboutUsURL).then((res) => res.data);

console.log(data);
