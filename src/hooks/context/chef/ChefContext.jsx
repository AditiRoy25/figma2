import { useReducer, createContext } from "react";
import chef1 from "../../../assets/chef/chef1.png";
import chef2 from "../../../assets/chef/chef2.png";
import chef3 from "../../../assets/chef/chef3.png";
import chef4 from "../../../assets/chef/chef4.png";
import chef5 from "../../../assets/chef/chef5.png";
import chef6 from "../../../assets/chef/chef6.png";
import chef7 from "../../../assets/chef/chef7.png";
import chef8 from "../../../assets/chef/chef8.png";
import chef9 from "../../../assets/chef/chef9.png";
import chef10 from "../../../assets/chef/chef10.png";
import chef11 from "../../../assets/chef/chef11.png";
import chef12 from "../../../assets/chef/chef12.png";

const ChefContext = createContext();

const initialState = {
  chefData: [
    { id: 1, name: "Jame Radley", position:"Master Chef",image:chef1,socialLinks:{facebook:'https://www.facebook.com/',x:'https://x.com/?lang=en',instagram:'https://www.instagram.com/',linkedin:'https://in.linkedin.com/'} },
    { id: 2, name: "Manisha Agarwal", position:"Senior Chef",image:chef2,socialLinks:{facebook:'https://www.facebook.com/',x:'https://x.com/?lang=en',instagram:'https://www.instagram.com/',linkedin:'https://in.linkedin.com/'} },
    { id: 3, name: "Muhibbur Rashid", position:"Master Chef",image:chef3,socialLinks:{facebook:'https://www.facebook.com/',x:'https://x.com/?lang=en',instagram:'https://www.instagram.com/',linkedin:'https://in.linkedin.com/'} },
    { id: 4, name: "Rashed Kabir", position:"Master Chef",image:chef4,socialLinks:{facebook:'https://www.facebook.com/',x:'https://x.com/?lang=en',instagram:'https://www.instagram.com/',linkedin:'https://in.linkedin.com/'} },
    { id: 5, name: "Masum Rana", position:"Master Chef",image:chef5,socialLinks:{facebook:'https://www.facebook.com/',x:'https://x.com/?lang=en',instagram:'https://www.instagram.com/',linkedin:'https://in.linkedin.com/'} },
    { id: 6, name: "Garima Arora" , position:"Senior Chef",image:chef6,socialLinks:{facebook:'https://www.facebook.com/',x:'https://x.com/?lang=en',instagram:'https://www.instagram.com/',linkedin:'https://in.linkedin.com/'}},
    { id: 7, name: "Romy Gill", position:"Senior Chef",image:chef7,socialLinks:{facebook:'https://www.facebook.com/',x:'https://x.com/?lang=en',instagram:'https://www.instagram.com/',linkedin:'https://in.linkedin.com/'} },
    { id: 8, name: "Keneth Conroy" , position:"Assiestant Chef",image:chef8,socialLinks:{facebook:'https://www.facebook.com/',x:'https://x.com/?lang=en',instagram:'https://www.instagram.com/',linkedin:'https://in.linkedin.com/'}},
    { id: 9, name: "Esther Howard", position:"Master Chef",image:chef9,socialLinks:{facebook:'https://www.facebook.com/',x:'https://x.com/?lang=en',instagram:'https://www.instagram.com/',linkedin:'https://in.linkedin.com/'} },
    { id: 10, name: "Robert Fox", position:"Senior Chef",image:chef10,socialLinks:{facebook:'https://www.facebook.com/',x:'https://x.com/?lang=en',instagram:'https://www.instagram.com/',linkedin:'https://in.linkedin.com/'} },
    { id: 11, name: "Dipna Anand", position:"Master Chef",image:chef11,socialLinks:{facebook:'https://www.facebook.com/',x:'https://x.com/?lang=en',instagram:'https://www.instagram.com/',linkedin:'https://in.linkedin.com/'} },
    { id: 12, name: "Asma Khan", position:"Senior Chef",image:chef12,socialLinks:{facebook:'https://www.facebook.com/',x:'https://x.com/?lang=en',instagram:'https://www.instagram.com/',linkedin:'https://in.linkedin.com/'} },
  ],
  chefPosition:[
    {id:1,name:"Master Chef"},
    {id:2,name:"Senior Chef"},
    {id:3,name:"Assiestant Chef"},
  ]
};

function reducer(state, action) {
  return state;
}

export const ChefProvider = ({ children }) => {
  const [state] = useReducer(reducer, initialState);

  return (
    <ChefContext.Provider value={{ ...state }}>
      {children}
    </ChefContext.Provider>
  );
};

export default ChefContext;
