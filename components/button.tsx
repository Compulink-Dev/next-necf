import React from "react";

interface Button {
  name: String;
  link: any;
}
function Button({ name, link }: Button) {
  return (
    <button
      onClick={link}
      className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg text-center "
    >
      {name}
    </button>
  );
}

export default Button;
