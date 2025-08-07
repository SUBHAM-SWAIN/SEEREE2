import React from "react";

function Conditional(props) {
  console.log(props);
  return (
    <div>
      <table width={"100%"} border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Discount</th>
          </tr>
        </thead>

        <tbody>
          {props.Element.map((item, i) => {
            return (
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.discount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Conditional;
